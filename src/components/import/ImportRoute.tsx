"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import CodeStep from "@/components/import/CodeStep";
import GateScreen from "@/components/import/GateScreen";
import ImportOutcome from "@/components/import/ImportOutcome";
import ImportSlab from "@/components/import/ImportSlab";
import WorkingScreen from "@/components/import/WorkingScreen";
import { outcomeFor } from "@/components/import/importOutcomes";
import { startImport, useVerifiedEmail } from "@/lib/import/identity";
import { BLOCKING_CREATE_CODES } from "@/lib/import/useSettle";
import { isMerchantSession } from "@/lib/merchantAuth";
import { SOURCE_UI, formatRef, type ImportSourceId } from "@/lib/import/source";
import type { ImportState } from "@/lib/import/state";

/**
 * The client half of `/import`.
 *
 * WHY IT IS SPLIT THIS WAY. UI-001 read `?h=` with `useSearchParams`, which opts the
 * whole route into client-side rendering: the handle only existed after hydration, and
 * AC-1 requires `@izeljewels._` to be present in the FIRST server-rendered HTML — that
 * is move S3 of the seam (§2.6), the single thing that stops the gate reading as a
 * generic login. So `app/import/page.tsx` now resolves the params on the SERVER and
 * hands them down as props. Nothing else about UI-001's routing decision changed:
 * `deriveImportState` is still the one pure function, still exported from the same file,
 * and every branch still renders inside `<ImportSlab>`.
 *
 * URL EDITS ARE `router.replace`, never `push`: correcting a typo in your own handle is
 * not a place in history you should be able to go Back to (AC-7). The same call writes
 * `?job=<id>` the moment `202` returns (D6 — *"Do I have to stay here? No."*).
 */
export default function ImportRoute({
  state,
  handle,
  job,
  sourceType = "instagram",
  resumeRequested = false,
  googleClientId,
}: {
  state: ImportState;
  handle: string | null;
  job: string | null;
  /**
   * `?resume=1` — she came from a place that already knows who she is, so skip the gate
   * and start the capture on her existing session. See the `resume` state below.
   */
  resumeRequested?: boolean;
  /**
   * Which shop she is moving, resolved from `?src=` by `app/import/page.tsx`.
   * Instagram by default, because that is what every `/import/` link issued before the
   * picker existed means, and what the server assumes for a body with no `sourceType`.
   */
  sourceType?: ImportSourceId;
  googleClientId: string | undefined;
}) {
  const router = useRouter();
  const reduced = useReducedMotion();
  // Sub-state of `gate`, per §2.5 SCREEN A′. Held here rather than in the URL: a code
  // in flight is not a place, and a Back out of it would strand her mid-verification.
  const [otpEmail, setOtpEmail] = useState<string | null>(null);
  // UI-007. The address and the reason she came back, kept HERE rather than inside
  // `GateScreen`, because `AnimatePresence mode="wait"` unmounts that screen entirely
  // while the code step is up — state held there would not survive the round trip, and
  // re-typing either the handle or the email is the failure this ticket names.
  const [returned, setReturned] = useState<{
    email: string;
    target: "email" | "google";
  } | null>(null);

  // UI-008 — D-5 / D-6, refused by `POST /import/jobs` BEFORE any job exists. Held here
  // rather than in the URL for the same reason `otpEmail` is: a refusal is not a place,
  // and a Back out of it would strand her on a job id that was never issued (AC-5).
  const [blocked, setBlocked] = useState<{ code: string; retryAfterSeconds?: number | null } | null>(null);

  /**
   * A MERCHANT WHO IS ALREADY SIGNED IN IS NEVER ASKED TO SIGN IN AGAIN.
   *
   * The gate was written for a prospect — someone with no oBizee account, for whom
   * proving an address IS the first step. A merchant arriving from her own dashboard
   * has already done it, and showing her "Where should we put your catalogue?" asks her
   * to authenticate into the account she is currently inside. `POST /import/jobs` sits
   * behind `verifyToken` and scopes the job from `req.user`, so her existing token is
   * all the door needs; there was simply never a path that used it.
   *
   * THE INTENT COMES FROM THE URL (`?resume=1`), NOT FROM localStorage.
   *
   * Reading `isMerchantSession()` in a lazy initialiser was the obvious implementation
   * and it is wrong: the server pass has no localStorage, renders the gate, and the
   * client then renders something else on the very first tick — a hydration mismatch
   * that React reports and recovers from by throwing the subtree away. It was measured
   * doing exactly that, which is also why the auto-start never fell back.
   *
   * A query parameter is visible to both passes, so the two agree. It costs nothing
   * either, because the only place a signed-in merchant starts an import from is a link
   * we write ourselves — the dashboard entry point. `isMerchantSession()` still gates
   * the attempt, but as a CHECK inside the effect rather than as render input: a stale
   * `?resume=1` in a shared link must not start a capture for whoever opens it.
   */
  const [resume, setResume] = useState<"starting" | "gate">(resumeRequested ? "starting" : "gate");
  const started = useRef(false);
  const setParam = useCallback(
    (key: string, value: string) => {
      const next = new URLSearchParams(window.location.search);
      next.set(key, value);
      router.replace(`/import?${next.toString()}`, { scroll: false });
    },
    [router],
  );

  const onHandleChange = useCallback((next: string) => setParam("h", next), [setParam]);
  const onJobStarted = useCallback(
    (jobId: string) => {
      // A retry after a dead end must not leave the previous panel standing behind the
      // new job — the seller would see her import restart under an error she is still
      // reading.
      setBlocked(null);
      setParam("job", jobId);
    },
    [setParam],
  );

  useEffect(() => {
    if (resume !== "starting" || started.current) return;
    // React 18 mounts effects twice in development. Creating two jobs would collide on
    // `one_active_import_per_merchant` and answer 409 — survivable, but it would also
    // spend two entries of her create budget.
    started.current = true;

    if (!isMerchantSession()) {
      // `?resume=1` on a browser with no merchant session — a forwarded link, or a
      // signed-out tab. The gate is the correct answer, not an error.
      setResume("gate");
      return;
    }

    if (!handle) {
      // No ref to read. She typed /import directly, so the chip has to ask.
      setResume("gate");
      return;
    }

    // NO CLEANUP CANCELLATION, and the omission is load-bearing.
    //
    // The obvious pairing — a `started` ref plus a `cancelled` flag cleared on unmount —
    // deadlocks under React 18's development double-mount: the first effect fires the
    // request, the cleanup marks it cancelled, the second effect returns early on the
    // ref, and the one response that arrives is then dropped. Measured: the panel sat on
    // "Reading @izeljewels." forever instead of falling back to the gate.
    //
    // The ref alone is the correct guard. It already guarantees exactly one request per
    // mount, and a `setState` after unmount is a no-op in React 18, not a leak.
    startImport(handle, sourceType).then((outcome) => {
      if (outcome.ok === true) {
        onJobStarted(outcome.jobId);
        return;
      }
      if ((BLOCKING_CREATE_CODES as readonly string[]).includes(outcome.code)) {
        setBlocked({ code: outcome.code, retryAfterSeconds: outcome.retryAfterSeconds ?? null });
        return;
      }
      // `no_session` here means the token she was carrying is gone or expired. The gate
      // is the correct fallback, not an error: she can prove the address again.
      setResume("gate");
    });
    // `onJobStarted` is stable via useCallback; `handle` and `sourceType` are fixed for
    // the life of this mount in the only case that reaches here.
  }, [resume, handle, sourceType, onJobStarted]);

  /**
   * UI-008 — back to the gate, with the handle kept and the job dropped.
   *
   * `router.replace`, never `push`, and the whole query is REBUILT rather than having
   * `job` deleted from the current one: `?h=` is the seam and must survive, and
   * `?job=<id>` must not, because a Back into a dead job is a Back into the dead end
   * she just left.
   */
  const onRestartGate = useCallback(() => {
    setBlocked(null);
    // `src` SURVIVES ALONGSIDE `h`. Dropping it here would send a seller who came in
    // from the website pill back to a gate branded Instagram, holding a domain — the
    // exact mismatch this prop exists to prevent. Instagram is the default, so it is
    // omitted rather than written, and the URL of the flow that shipped is unchanged.
    const params = new URLSearchParams();
    if (handle) params.set("h", handle);
    if (sourceType !== "instagram") params.set("src", sourceType);
    const search = params.toString();
    router.replace(`/import${search ? `?${search}` : ""}`, { scroll: false });
  }, [handle, sourceType, router]);

  /**
   * Her verified address, for D-6's "you won't be asked again".
   *
   * Through `useSyncExternalStore`, exactly the way `useLastAuthMethod` already reads
   * this route's other localStorage value, and NOT through an effect: localStorage does
   * not exist on the server, this route's first paint is server-rendered HTML (UI-006's
   * AC-1 depends on it), and the server snapshot has to be `null` or the two disagree.
   */
  const email = useVerifiedEmail();

  // M7 — 200 ms cross-fade and an 8 px rise when the gate hands over to the code step.
  // It explains one state change: "we sent it; now type it". Under reduced motion it is
  // a 0 ms swap, which the route-level rule already forces; this makes it explicit.
  const transition = reduced
    ? { duration: 0 }
    : { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const };

  // AC-5 — D-6 (and D-5) render the moment the CREATE is refused. No stage rail and no
  // counter, because no job was ever created, and this branch sits ABOVE the `job`
  // check so a stale `?job=` cannot put a working screen in front of a refusal.
  if (blocked) {
    return (
      <ImportSlab>
        <ImportOutcome
          spec={outcomeFor(blocked.code, {
            onTryAnotherHandle: onRestartGate,
            onRetry: onRestartGate,
            email,
            retryAfterSeconds: blocked.retryAfterSeconds,
            sourceType,
          })}
        />
      </ImportSlab>
    );
  }

  // UI-008. `running` is where a job LANDS; the working screen then polls and decides
  // for itself whether this is still a capture, an ending, or a finished report — the
  // status that decides between the three needs a fetch, which `deriveImportState`
  // deliberately does not make (app/import/page.tsx).
  if (state === "running" && job) {
    return (
      <ImportSlab>
        <WorkingScreen
          jobId={job}
          handle={handle}
          sourceType={sourceType}
          onJobStarted={onJobStarted}
          onRestartGate={onRestartGate}
          email={email}
        />
      </ImportSlab>
    );
  }

  // The signed-in merchant's one screen between clicking and her capture. It is not a
  // spinner: it names the shop being read and who is reading it, so the half-second is
  // an answer rather than a wait. See the `resume` state above.
  if (resume === "starting") {
    return (
      <ImportSlab>
        <ResumingPanel handle={handle} sourceType={sourceType} />
      </ImportSlab>
    );
  }

  if (state !== "gate") {
    return (
      <ImportSlab>
        <StatePlaceholder state={state} job={job} />
      </ImportSlab>
    );
  }

  return (
    <ImportSlab>
      <AnimatePresence mode="wait" initial={false}>
        {otpEmail ? (
          <motion.div
            key="otp"
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <CodeStep
              handle={handle ?? ""}
              sourceType={sourceType}
              email={otpEmail}
              onHandleChange={onHandleChange}
              onJobStarted={onJobStarted}
              onBlocked={setBlocked}
              // O2 — the address is wrong. Back to G5 with it pre-filled.
              onWrongEmail={(email) => {
                setReturned({ email, target: "email" });
                setOtpEmail(null);
              }}
              // O5 — the two-way switch, completed.
              onUseGoogle={() => {
                setReturned({ email: otpEmail, target: "google" });
                setOtpEmail(null);
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="gate"
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <GateScreen
              // A missing `?h=` is a real arrival — someone typed /import directly. The
              // chip opens empty and editable rather than the screen refusing to render.
              handle={handle ?? ""}
              sourceType={sourceType}
              googleClientId={googleClientId}
              initialEmail={returned?.email}
              focusOnMount={returned?.target}
              onHandleChange={onHandleChange}
              onJobStarted={onJobStarted}
              onBlocked={setBlocked}
              onCodeSent={(email) => {
                setReturned(null);
                setOtpEmail(email);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ImportSlab>
  );
}

/**
 * The states UI-008 does not own: `report` (UI-009) and `dead-end` reached by some route
 * other than a create refusal (UI-010). `running` no longer lands here — see above.
 * Same marked-placeholder rule as UI-001 (R12).
 */
/**
 * SHOWN ONLY TO A MERCHANT WHO WAS ALREADY SIGNED IN, for as long as the job create
 * takes. She never sees the gate at all, so this is her first frame on the route.
 *
 * It carries the chip and the same eyebrow the gate uses, so the panel she lands on is
 * recognisably the one she was sent to — and it states what is happening in her terms
 * rather than showing a spinner over an empty rectangle.
 */
function ResumingPanel({ handle, sourceType }: { handle: string | null; sourceType: ImportSourceId }) {
  const copy = SOURCE_UI[sourceType];
  return (
    <div className="flex flex-col gap-5">
      <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[color:var(--obz-cta-on-dark)]">
        Bring your shop over
      </p>
      <h1 className="typo-h1-xl max-w-[16ch] text-balance text-white">
        Reading{" "}
        <span className="text-[color:var(--obz-cta-on-dark)]">
          {handle ? formatRef(sourceType, handle) : copy.editLabel.toLowerCase()}
        </span>
        .
      </h1>
      <p className="max-w-[42ch] text-[15px] leading-6 text-[color:var(--slab-text-muted)]">
        You are signed in already, so there is nothing to fill in. This takes a few seconds.
      </p>
    </div>
  );
}

function StatePlaceholder({ state, job }: { state: ImportState; job: string | null }) {
  const owner = state === "report" ? "UI-009" : "UI-010";
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[color:var(--obz-cta-on-dark)]">
        Bring your shop over
      </p>
      <h1 className="typo-h1-xl text-white">We read your Instagram for you.</h1>
      <p className="max-w-2xl font-mono text-sm text-[color:var(--slab-text-muted)]">
        [PLACEHOLDER — {state}. Built in {owner}.] job {job ?? "[none in URL]"}
      </p>
    </div>
  );
}
