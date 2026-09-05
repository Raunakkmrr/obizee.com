"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  AlertTriangle,
  Ban,
  Check,
  Clock,
  Loader2,
  Mail,
  RotateCw,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import CodeCells, { CODE_LENGTH, type CellTone } from "@/components/import/CodeCells";
import HandleChip from "@/components/import/HandleChip";
import { GoogleMark } from "@/components/import/marks";
import OutcomeBand from "@/components/import/OutcomeBand";
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import {
  RESEND_COOLDOWN_SECONDS,
  requestEmailCode,
  verifyEmailCode,
} from "@/lib/import/identity";
import { useSettle } from "@/lib/import/useSettle";
import { cn } from "@/lib/utils";

/**
 * SCREEN A′ — THE CODE STEP. design-brief.md §2.5, regions O1–O5.
 *
 * Replaces G3–G5 in place; G0, the carried handle, stays on screen. She is one screen
 * from her catalogue and holding a six-digit number she did not choose, so every state
 * below exists to remove a specific doubt rather than to report a status.
 *
 * PROVENANCE
 *   IMPORTED   `npx shadcn@latest add input-otp`      → components/ui/input-otp.tsx
 *              (engine npm `input-otp` 1.5.0 — the exact engine design-brief.md §3.3
 *              names behind the 21st.dev component it shortlisted. `API_KEY_21ST` has
 *              no value here, so the 21st.dev registry is unreachable and the same
 *              engine is reached through shadcn's keyless registry. Declared, not
 *              substituted silently.)
 *   IMPORTED   `npx shadcn@latest add field alert`    → already present from UI-006.
 *              `FieldSet` + `FieldLegend` give AC-7's real <fieldset>/<legend>.
 *   DERIVED    layout, slab/card split, short-viewport rules and the two-tone headline
 *              from `components/import/GateScreen.tsx` (880e1d9) — this screen is that
 *              screen's sub-state and must not look like a different product.
 *   DERIVED    copy and error discipline from the named in-repo public reference
 *              `app/my-orders/page.tsx:435-505`, the shipped customer-OTP step
 *              (design-brief.md §3.4). DIFF: that screen calls `setOtp("")` on every
 *              failure — the exact behaviour this ticket exists to prevent — and its
 *              messages are the server's raw strings. Here the value survives a wrong
 *              code and every sentence is merchant language.
 *
 * THE SIX STATES ARE READ FROM THE SERVER, NOT DESIGNED AGAINST A GUESS.
 * `OM-backend/controllers/ImportAuthController.js` (46d01cd) is the authority:
 * `classifyAttempt` returns 422 `otp_expired` / 422 `otp_used` /
 * 429 `otp_attempts_exhausted` / 422 `otp_incorrect` in that order, and exhaustion is
 * checked BEFORE the comparison so a late correct answer cannot walk past the cap.
 *
 * TWO COPY RULINGS, made because the ticket's own words contradicted the server, and
 * the ticket tells this screen to make the copy and the behaviour agree:
 *   1. EXHAUSTED. The ticket's copy is "Too many tries. We've sent a fresh code."
 *      `ImportAuthController` sends NOTHING on `otp_attempts_exhausted` — it answers
 *      "Ask for a new code." So the copy here is "Too many tries. Ask for a fresh
 *      code." and the resend becomes the primary action. Auto-sending instead was
 *      considered and rejected: it spends one of her five sends per ten minutes
 *      (`SEND_MAX_PER_WINDOW`) without her asking, and inside the 60s cooldown it would
 *      immediately 429 — i.e. the copy would be false in the common case.
 *   2. EXPIRED. The ticket's copy is "That code has expired. We'll send a new one." but
 *      its own AC-2 requires the resend button to be FOCUSED AND PRIMARY, which is only
 *      observable if we do not auto-send. Copy corrected to "That code has expired.
 *      Send yourself a new one." Same length, and it now describes what happens.
 * Both are the same class of defect, fixed in the same pass (R16).
 */

/** The number the whole screen is about. `ImportAuthController.MAX_VERIFY_ATTEMPTS`. */
const MAX_ATTEMPTS = 5;

/** After this many resends she is told to look in spam — design-brief.md §8.1. */
const SPAM_HINT_AFTER_RESENDS = 2;

type CodeState =
  | { kind: "sent" }
  | { kind: "verifying" }
  | { kind: "sending" }
  | { kind: "wrong" }
  | { kind: "expired" }
  | { kind: "used" }
  | { kind: "exhausted" }
  | { kind: "verified" }
  | { kind: "error"; message: string };

/** Which of the four cell tones each state paints. */
const TONE: Record<CodeState["kind"], CellTone> = {
  sent: "rest",
  verifying: "rest",
  sending: "rest",
  wrong: "danger",
  expired: "warning",
  used: "warning",
  exhausted: "warning",
  verified: "success",
  error: "rest",
};

/** `0:28`. Never `28s` — a clock is what the copy in §2.5 O4 promises. */
function formatCountdown(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function CodeStep({
  handle,
  email,
  onHandleChange,
  onJobStarted,
  onBlocked,
  onWrongEmail,
  onUseGoogle,
}: {
  handle: string;
  email: string;
  onHandleChange: (next: string) => void;
  onJobStarted: (jobId: string) => void;
  /**
   * UI-008 — D-5 / D-6 leave the gate. `POST /import/jobs` can refuse before any job
   * exists (the kill switch, or a spent create budget), and both refusals are a whole
   * designed screen rather than a band beside the form. See `useSettle`'s
   * `BLOCKING_CREATE_CODES`.
   */
  onBlocked?: (blocked: { code: string; retryAfterSeconds?: number | null }) => void;
  /** O2 — back to G5 with this address pre-filled, so a typo costs one tap. */
  onWrongEmail: (email: string) => void;
  /** O5 — back to G3. The two-way switch UI-006 started. */
  onUseGoogle: () => void;
}) {
  const fieldId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const resendRef = useRef<HTMLButtonElement>(null);

  const [code, setCode] = useState("");
  const [state, setState] = useState<CodeState>({ kind: "sent" });
  const [wrongCount, setWrongCount] = useState(0);
  const [resendCount, setResendCount] = useState(0);
  const [shake, setShake] = useState(0);
  const [resendNote, setResendNote] = useState<string | null>(null);

  const { outcome, settle } = useSettle({ handle, onJobStarted, onBlocked });

  // ── The resend window ────────────────────────────────────────────────────────
  // The code was sent by the gate immediately before this screen mounted, so the
  // server's 60s per-address cooldown (`ImportAuthController.RESEND_COOLDOWN_MS`,
  // measured from the OTP row's `createdAt`) starts now. This is an ESTIMATE of the
  // server's clock, and it is corrected by `Retry-After` the moment the two disagree —
  // see `resend` below. A padded client timer was the alternative and is exactly what
  // the ticket forbids.
  const [cooldownUntil, setCooldownUntil] = useState(
    () => Date.now() + RESEND_COOLDOWN_SECONDS * 1000,
  );
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    // 250ms, not 1000: at a 1s tick the displayed second can lag the real one by
    // almost a full second, so the button would still read "0:01" after it enables.
    const id = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(id);
  }, []);
  const secondsLeft = Math.max(0, Math.ceil((cooldownUntil - now) / 1000));

  const locked = state.kind === "verified" || state.kind === "exhausted";
  const busy = state.kind === "verifying" || state.kind === "sending";
  // AC-3 — a REAL `disabled`, not a style. A styled-disabled button still fires, still
  // spends one of her five sends per ten minutes, and still 429s.
  const resendDisabled = secondsLeft > 0 || busy || state.kind === "verified";

  // Focus the resend once it is actually pressable. AC-2 asks for it focused on
  // `otp_expired`; a disabled element cannot take focus, so the intent is recorded and
  // honoured the instant the window opens. On an expired code the cooldown is already
  // long past (10-minute TTL vs 60-second cooldown) so this is the same paint.
  const wantResendFocus = useRef(false);
  useEffect(() => {
    if (!wantResendFocus.current || resendDisabled) return;
    wantResendFocus.current = false;
    resendRef.current?.focus();
  }, [resendDisabled]);

  /**
   * AC-4 — a full code submits itself.
   *
   * Driven off the VALUE rather than `input-otp`'s `onComplete`, because after a wrong
   * code the value stays six digits long: `onComplete` has already fired and will not
   * fire again when she corrects one cell, which is the single most important keystroke
   * on this screen. `lastSubmitted` is what stops the same wrong code being re-sent in
   * a loop — and it means each of her five server-side attempts buys a DIFFERENT guess.
   */
  const lastSubmitted = useRef<string | null>(null);

  const verify = useCallback(
    async (value: string) => {
      lastSubmitted.current = value;
      setResendNote(null);
      setState({ kind: "verifying" });
      const result = await verifyEmailCode(email, value);

      if (result.ok === true) {
        setState({ kind: "verified" });
        // The SAME sequence as UI-006's Google-success path, called rather than copied
        // (`lib/import/useSettle.ts`): session already established by `toIdentity`,
        // then `POST /import/jobs`, then `?job=<id>` into the URL.
        await settle(result.identity, result.hasSession);
        return;
      }

      switch (result.code) {
        case "otp_incorrect":
          // AC-1. THE VALUE IS NOT TOUCHED. Cell 1 is re-selected below so one keystroke
          // fixes it — see the effect on `shake`.
          setWrongCount((n) => n + 1);
          setShake((n) => n + 1);
          setState({ kind: "wrong" });
          return;
        case "otp_expired":
          // AC-2 — a DIFFERENT visual answer from AC-1, so the two are never confused:
          // the digits go, the ground turns warning rather than danger, and the action
          // moves from the cells to the resend button.
          setCode("");
          lastSubmitted.current = null;
          wantResendFocus.current = true;
          setState({ kind: "expired" });
          return;
        case "otp_used":
          setCode("");
          lastSubmitted.current = null;
          wantResendFocus.current = true;
          setState({ kind: "used" });
          return;
        case "otp_attempts_exhausted":
          setCode("");
          lastSubmitted.current = null;
          wantResendFocus.current = true;
          // The cap and the cooldown are independent: the code can die on the fifth
          // wrong try 20 seconds after it was sent, and `cooldownRemainingSeconds` will
          // still refuse a resend for the remaining 40. Trusting the server's own
          // number here is why the countdown under "Send it again" stays true.
          if (result.retryAfterSeconds) {
            setCooldownUntil(Date.now() + result.retryAfterSeconds * 1000);
          }
          setState({ kind: "exhausted" });
          return;
        default:
          setState({ kind: "error", message: result.message });
      }
    },
    [email, settle],
  );

  /**
   * Every route into the field ends here, and the submit decision is made IN the event
   * rather than in an effect watching the value — an effect that calls `setState`
   * synchronously is a cascading render (and this repo's lint rules reject it), and the
   * three cases below are all genuinely user events, not synchronisation with anything.
   *
   * The three: typing the sixth digit; PASTING all six (`input-otp` fires one `change`
   * with the whole string — AC-4); and replacing one digit after a wrong code, which is
   * the keystroke AC-1 exists to make possible.
   */
  function handleChange(next: string) {
    setCode(next);
    setResendNote(null);
    // Editing after a failure returns the cells to rest immediately — leaving them red
    // while she retypes is the app arguing with her.
    if (state.kind === "wrong" || state.kind === "error") setState({ kind: "sent" });
    if (next.length !== CODE_LENGTH) return;
    // Never spend one of her five server-side attempts on a guess we already made.
    if (lastSubmitted.current === next || busy || locked) return;
    void verify(next);
  }

  // AC-1's second half — cell 1 re-selected, never cleared. `input-otp` derives its
  // active slot from the real input's selection, so a one-character range at 0 puts the
  // caret in cell 1 with her six digits intact; typing then REPLACES that digit and the
  // effect above resubmits. Deferred a frame because the tone re-render has to land
  // first or the browser restores its own selection over ours.
  useEffect(() => {
    if (state.kind !== "wrong") return;
    const id = window.requestAnimationFrame(() => {
      const input = inputRef.current;
      if (!input) return;
      input.focus();
      input.setSelectionRange(0, 1);
    });
    return () => window.cancelAnimationFrame(id);
  }, [state.kind, shake]);

  async function resend() {
    if (resendDisabled) return;
    // The old code is DEAD the moment this succeeds — `issueCode` does
    // `OTP.deleteMany` before it writes the new row — so leaving her digits on screen
    // would be showing her something that can no longer work. Cells clear and hide,
    // which is the "Sending…" state design-brief.md §2.5 specifies.
    setCode("");
    lastSubmitted.current = null;
    setResendNote(null);
    setState({ kind: "sending" });

    const result = await requestEmailCode(email);
    if (result.ok === true) {
      setCooldownUntil(Date.now() + RESEND_COOLDOWN_SECONDS * 1000);
      setResendCount((n) => n + 1);
      setWrongCount(0);
      setState({ kind: "sent" });
      window.requestAnimationFrame(() => inputRef.current?.focus());
      return;
    }
    // The server disagreed with our clock. Correct OUR number to ITS number rather than
    // padding the timer — the ticket's rule, and the only version that stays true.
    if (result.retryAfterSeconds) {
      setCooldownUntil(Date.now() + result.retryAfterSeconds * 1000);
    }
    if (result.code === "otp_cooldown") {
      setResendNote("Not just yet — your last code is still on its way.");
      setState({ kind: "sent" });
      return;
    }
    setState({ kind: "error", message: result.message });
  }

  const message = describe(state, wrongCount);
  const tone = TONE[state.kind];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] lg:gap-14 [@media(max-height:600px)]:gap-5">
      {/* ── The argument, on the slab ────────────────────────────────────────── */}
      <div className="flex flex-col gap-5 lg:gap-6 [@media(max-height:600px)]:gap-3">
        {/* The SAME eyebrow as the gate, deliberately. She has not gone anywhere —
            this is the same step, one beat further on. */}
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[color:var(--obz-cta-on-dark)] max-lg:[@media(max-height:600px)]:hidden">
          Bring your shop over
        </p>

        {/* G0 stays. It is still the only thing on screen that says this is HER import
            and not a generic login, and it is still editable. */}
        <HandleChip handle={handle} onChange={onHandleChange} />

        {/* O1 — two-tone (R8): the words carrying the argument take the brand colour,
            and both tones clear AA on the slab (§4.2). */}
        <h1 className="typo-h1-xl typo-gate-question max-w-[16ch] text-balance text-white">
          Check your{" "}
          <span className="text-[color:var(--obz-cta-on-dark)]">email.</span>
        </h1>

        {/* O2 — and the address is a BUTTON. "Wrong email?" is not a link she should
            have to hunt for; the thing that might be wrong is the thing she taps.
            AC-6: `break-all` + `min-h-11`, so a 40-character address wraps to two lines
            inside the flex row instead of pushing the layout wide. */}
        <p className="flex max-w-[42ch] flex-wrap items-center gap-x-2 gap-y-1 text-[15px] leading-6 text-[color:var(--slab-text-muted)]">
          <Mail aria-hidden className="h-5 w-5 shrink-0 text-[color:var(--brand-warm-on-dark)]" />
          <span>We sent a 6-digit code to</span>
          <button
            type="button"
            onClick={() => onWrongEmail(email)}
            className="inline-flex min-h-11 min-w-0 items-center rounded-[var(--radius-sm)] font-semibold break-all text-white underline decoration-[color:var(--obz-cta-on-dark)] decoration-2 underline-offset-4 transition-colors [transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)] hover:text-[color:var(--obz-cta-on-dark)]"
          >
            {email}
          </button>
        </p>

        <p className="hidden items-start gap-2.5 text-[14px] leading-5 text-[color:var(--slab-text-muted)] lg:flex">
          <ShieldCheck aria-hidden className="mt-px h-5 w-5 shrink-0 text-[color:var(--kept-green-on-dark)]" />
          <span>The code only proves it&apos;s you. It expires in ten minutes.</span>
        </p>
      </div>

      {/* ── The decision, on a white card ────────────────────────────────────── */}
      <div className="rounded-[var(--radius-xl)] border border-[color:var(--card-border)] bg-[color:var(--card-ground)] p-5 shadow-[var(--shadow-3)] sm:p-7 [@media(max-height:600px)]:p-4">
        <FieldGroup className="gap-5 [@media(max-height:600px)]:gap-4">
          {/* AC-7 — a real <fieldset> and a real <legend>, from the imported
              `components/ui/field.tsx`. The legend is visible: six unlabelled boxes are
              not self-describing to anyone arriving by keyboard or screen reader. */}
          <FieldSet className="gap-3">
            <FieldLegend
              variant="label"
              className="text-[13px] font-semibold text-[color:var(--text-primary)]"
            >
              Enter the 6-digit code
            </FieldLegend>

            {state.kind === "sending" ? (
              /* SENDING — cells not yet shown, per §2.5. They are hidden rather than
                 emptied-in-place because the code they were holding no longer exists.
                 Held at the cells' own height so the card does not jump. */
              <p className="flex h-14 items-center gap-2 text-[15px] font-semibold text-[color:var(--text-muted)]">
                <Loader2 aria-hidden className="h-5 w-5 animate-spin text-[color:var(--obz-cta)]" />
                Sending…
              </p>
            ) : (
              <CodeCells
                value={code}
                onChange={handleChange}
                tone={tone}
                // NOT disabled while a check is in flight, only when the code is dead.
                // `input-otp` renders one real input; disabling it blurs her, and the
                // wrong-code path would then have to steal focus back — a visible
                // flicker on exactly the beat that has to feel unbroken. Double
                // submission is prevented by the `busy` guard in `handleChange`.
                disabled={locked}
                shake={state.kind === "wrong" ? shake : 0}
                describedBy={`${fieldId}-msg`}
                inputRef={inputRef}
              />
            )}

            {/* The message region. `role="alert"` on the four failures (AC-7) so a
                screen reader announces them without polling; `role="status"` on the
                two non-failures, because "Checking…" must not interrupt anyone. */}
            <div
              id={`${fieldId}-msg`}
              role={message?.assertive ? "alert" : "status"}
              aria-live={message?.assertive ? "assertive" : "polite"}
              className="min-h-[24px]"
            >
              {state.kind === "verified" ? (
                /* AC-5 — a single Check in the brand colour and NOT ONE WORD MORE. The
                   transition is the message. */
                <Check
                  aria-label="Code accepted"
                  className="h-6 w-6 text-[color:var(--obz-cta)]"
                />
              ) : message ? (
                <p
                  className={cn(
                    "flex items-start gap-2 text-[13.5px] leading-5 font-medium",
                    message.tone === "danger" && "text-[color:var(--color-danger)]",
                    message.tone === "warning" && "text-[color:var(--color-warning)]",
                    message.tone === "muted" && "text-[color:var(--text-muted)]",
                  )}
                >
                  <message.Icon aria-hidden className="mt-px h-4 w-4 shrink-0" />
                  <span>{message.text}</span>
                </p>
              ) : null}
            </div>
          </FieldSet>

          {/* O4 — resend. The countdown is not decoration: it is the only thing that
              tells her the silence is expected rather than broken. */}
          <div className="flex flex-col gap-2">
            <button
              ref={resendRef}
              type="button"
              onClick={() => void resend()}
              disabled={resendDisabled}
              className={cn(
                "inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] px-4 text-[15px] font-semibold",
                "transition-[background-color,color,border-color,transform] [transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)]",
                "active:translate-y-px disabled:pointer-events-none",
                // WHILE THE COUNTDOWN RUNS this is never the primary treatment, and it
                // never dims. Measured 2026-09-05 on the production build: the first
                // draft used the standard `disabled:opacity-60`, which composited white
                // text on --obz-cta down to a measured 2.41:1 against the card — and the
                // string it was hiding is "Send it again in 0:24", i.e. the ONE thing on
                // the card she has to read while she waits. Expressing text colour as
                // opacity is banned outright for exactly this reason (D5), and a
                // disabled PRIMARY is a contradiction anyway: primary means "this is the
                // thing to do now", and right now it is not. The replacement pair,
                // --text-muted on --card-ground-2, measures 5.14:1 at full opacity.
                secondsLeft > 0
                  ? "border border-[color:var(--card-border-strong)] bg-[color:var(--card-ground-2)] text-[color:var(--text-muted)]"
                  : // AC-2 — PRIMARY the moment the code is the broken thing AND she can
                    // act. --obz-cta measures 5.01:1 under white; the repo's shipped
                    // primary is 3.14:1 and is never used as a fill under white text here.
                    state.kind === "expired" || state.kind === "used" || state.kind === "exhausted"
                    ? "bg-[color:var(--obz-cta)] text-white shadow-[var(--shadow-1)] hover:bg-[color:var(--obz-cta-hover)]"
                    : "border border-[color:var(--card-border-strong)] bg-[color:var(--card-ground-2)] text-[color:var(--text-primary)] hover:border-[color:var(--obz-cta)] hover:text-[color:var(--obz-cta)]",
                // Only the transient in-flight state dims, and it carries no text to read.
                busy && "opacity-60",
              )}
            >
              {state.kind === "sending" ? (
                <Loader2 aria-hidden className="h-[18px] w-[18px] animate-spin" />
              ) : secondsLeft > 0 ? (
                <Clock aria-hidden className="h-[18px] w-[18px]" />
              ) : (
                <RotateCw aria-hidden className="h-[18px] w-[18px]" />
              )}
              {secondsLeft > 0 ? `Send it again in ${formatCountdown(secondsLeft)}` : "Send it again"}
            </button>

            {resendNote ? (
              <p role="status" className="text-[13px] text-[color:var(--text-muted)]">
                {resendNote}
              </p>
            ) : null}

            {/* §8.1's hardest case: she never gets the email. After two resends the
                likeliest explanation is no longer ours. */}
            {resendCount >= SPAM_HINT_AFTER_RESENDS ? (
              <p className="flex items-start gap-2 text-[13px] leading-5 text-[color:var(--text-muted)]">
                <Mail aria-hidden className="mt-px h-4 w-4 shrink-0" />
                Check your spam folder — it arrives from oBizee.
              </p>
            ) : null}
          </div>

          {/* O5 — the switch, working in the second direction. */}
          <button
            type="button"
            onClick={onUseGoogle}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] text-[14px] font-semibold text-[color:var(--text-muted)] transition-colors [transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)] hover:text-[color:var(--text-primary)]"
          >
            <GoogleMark size={16} />
            Use Google instead
          </button>

          {/* The handoff. A MATCHED merchant gets no band at all — AC-5 says a verified
              code shows the Check and no further copy, and she has just proved this
              exact address, so "Signed in as <the address you just typed a code for>"
              is a sentence with no information in it. The other two outcomes DO need
              words: neither of them advances, so silence would strand her. */}
          {outcome.kind === "prospect" || outcome.kind === "error" ? (
            <OutcomeBand outcome={outcome} />
          ) : null}
        </FieldGroup>
      </div>

      <p className="flex items-start gap-2.5 text-[14px] leading-5 text-[color:var(--slab-text-muted)] lg:hidden [@media(max-height:600px)]:hidden">
        <ShieldCheck aria-hidden className="mt-px h-5 w-5 shrink-0 text-[color:var(--kept-green-on-dark)]" />
        <span>The code only proves it&apos;s you. It expires in ten minutes.</span>
      </p>
    </div>
  );
}

type Message = {
  text: string;
  tone: "danger" | "warning" | "muted";
  Icon: typeof AlertTriangle;
  /** `role="alert"` — reserved for the four states she has to act on. */
  assertive: boolean;
};

/**
 * One sentence per state, in merchant language. Every one of them is shorter than the
 * server string it replaces and none of them is the word "OTP".
 */
function describe(state: CodeState, wrongCount: number): Message | null {
  switch (state.kind) {
    case "verifying":
      return { text: "Checking…", tone: "muted", Icon: Loader2, assertive: false };
    case "wrong": {
      // Work she did not have to do (V4): the cap is real and five silent failures
      // ending in a locked field would be a surprise. Counted from OUR responses, so it
      // can only ever under-promise — and if it does, the exhausted state is designed.
      const left = MAX_ATTEMPTS - wrongCount;
      const suffix = left === 1 ? " One try left on this code." : left === 2 ? " Two tries left." : "";
      return {
        text: `That code is not right.${suffix}`,
        tone: "danger",
        Icon: AlertTriangle,
        assertive: true,
      };
    }
    case "expired":
      return {
        text: "That code has expired. Send yourself a new one.",
        tone: "warning",
        Icon: Clock,
        assertive: true,
      };
    case "used":
      return {
        text: "That code has already been used.",
        tone: "warning",
        Icon: Ban,
        assertive: true,
      };
    case "exhausted":
      return {
        text: "Too many tries. Ask for a fresh code.",
        tone: "warning",
        Icon: ShieldAlert,
        assertive: true,
      };
    case "error":
      return { text: state.message, tone: "danger", Icon: AlertTriangle, assertive: true };
    default:
      return null;
  }
}
