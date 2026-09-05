"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import CodeStep from "@/components/import/CodeStep";
import GateScreen from "@/components/import/GateScreen";
import ImportOutcome from "@/components/import/ImportOutcome";
import ImportSlab from "@/components/import/ImportSlab";
import WorkingScreen from "@/components/import/WorkingScreen";
import { outcomeFor } from "@/components/import/importOutcomes";
import { useVerifiedEmail } from "@/lib/import/identity";
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
  googleClientId,
}: {
  state: ImportState;
  handle: string | null;
  job: string | null;
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
    const search = handle ? `?h=${encodeURIComponent(handle)}` : "";
    router.replace(`/import${search}`, { scroll: false });
  }, [handle, router]);

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
          onJobStarted={onJobStarted}
          onRestartGate={onRestartGate}
          email={email}
        />
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
