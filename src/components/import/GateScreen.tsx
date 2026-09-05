"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Loader2, Mail, ShieldCheck } from "lucide-react";

import GoogleButton from "@/components/import/GoogleButton";
import HandleChip from "@/components/import/HandleChip";
import OutcomeBand from "@/components/import/OutcomeBand";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  exchangeGoogleCode,
  requestEmailCode,
  useLastAuthMethod,
} from "@/lib/import/identity";
import { useSettle } from "@/lib/import/useSettle";
import { cn } from "@/lib/utils";

/**
 * SCREEN A — THE GATE. design-brief.md §2.5, regions G0-G6.
 *
 * The load-bearing beat of the journey (§2.2): *a stranger being asked to identify
 * herself before she has seen anything work.* Everything here exists to make that
 * tolerable — her own handle at the top, her question as the headline, and two identity
 * paths as PEERS rather than one buried under a "more options" disclosure.
 *
 * PROVENANCE — the card is DERIVED from shadcn's own `login-03` block,
 * https://ui.shadcn.com/blocks/login (`npx shadcn@latest view login-03`), whose
 * `login-form.tsx` is exactly this shape: a full-width SSO row, a `FieldSeparator`
 * rule, then the email row. The primitives it composes are IMPORTED, not rewritten —
 * `npx shadcn@latest add field input label alert card`.
 *
 * DIFF from `login-03`, and why:
 *   - the password Field and "Forgot your password?" are DELETED. There is no password
 *     anywhere in this flow, which is what G2 promises out loud.
 *   - the Apple button is DELETED (no Apple provider exists in this project) and the
 *     inline Google `<svg>` is replaced by the real published mark on Google Identity
 *     Services, because the block's is a single-colour path and 40 px is not a target.
 *   - the separator reads **"or"**, not "Or continue with": the email row is a peer, not
 *     a continuation of the Google row.
 *   - G7, the existing-merchant nudge, is NOT built. UI-005 ships no handle-lookup
 *     endpoint (§9 O-8) and a UI for a call that does not exist is a lie.
 *
 * G3's four states live in `GoogleButton`. The two OUTCOMES — matched merchant, and a
 * seller who has no oBizee account yet — live here, because both are good news and both
 * are painted on an info/success ground, never as an error.
 */

/** The same rule the server validates with — `ImportAuthController.EMAIL_PATTERN`. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* MOVED BY UI-007, not changed:
 *   `MATCHED_DWELL_MS`, the `settle` sequence  -> lib/import/useSettle.ts
 *   `Outcome`, `WHATSAPP_HREF`, `OutcomeBand`  -> components/import/OutcomeBand.tsx
 * Both are now shared with the code step (SCREEN A'), whose success path is the same
 * success path. Each file carries the reason at its head; nothing about the behaviour,
 * the timings or the markup differs from 880e1d9. */

export default function GateScreen({
  handle,
  googleClientId,
  initialEmail,
  focusOnMount,
  onHandleChange,
  onJobStarted,
  onBlocked,
  onCodeSent,
}: {
  handle: string;
  googleClientId: string | undefined;
  /**
   * ADDED BY UI-007. The code step's O2 sends her back here to fix a mis-typed
   * address; arriving at an empty field would make her type all of it again to change
   * one character, which the ticket calls out as a failure in its own right.
   */
  initialEmail?: string;
  /**
   * ADDED BY UI-007. Which control she came back FOR — O2 means the email, O5 ("Use
   * Google instead") means the Google row. Returning her to the top of a screen she has
   * already read, with the thing she came back for unfocused, is a small cruelty.
   */
  focusOnMount?: "email" | "google";
  onHandleChange: (next: string) => void;
  onJobStarted: (jobId: string) => void;
  /**
   * UI-008 — D-5 / D-6 leave the gate. `POST /import/jobs` can refuse before any job
   * exists (the kill switch, or a spent create budget), and both refusals are a whole
   * designed screen rather than a band beside the form. See `useSettle`'s
   * `BLOCKING_CREATE_CODES`.
   */
  onBlocked?: (blocked: { code: string; retryAfterSeconds?: number | null }) => void;
  /** Hands off to the `otp` sub-state — SCREEN A', UI-007. */
  onCodeSent: (email: string) => void;
}) {
  const emailId = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const googleWrapRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState(initialEmail ?? "");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const { outcome, setOutcome, settling: busy, settle } = useSettle({ handle, onJobStarted, onBlocked });

  // ADDED BY UI-007. `focusOnMount` is only ever set when she came BACK from the code
  // step, so this never steals focus on a first arrival — a page that grabs focus on
  // load is the pattern this deliberately is not.
  useEffect(() => {
    if (focusOnMount === "email") {
      emailRef.current?.focus();
      emailRef.current?.select();
    } else if (focusOnMount === "google") {
      googleWrapRef.current?.querySelector("button")?.focus();
    }
  }, [focusOnMount]);

  // The one wow this screen owns besides the carried handle: a returning seller does not
  // have to remember which of the two she used. `null` on the server and on the first
  // client paint, so the badge appears without ever disagreeing with the server HTML —
  // which is what AC-1 rests on.
  const lastUsed = useLastAuthMethod();

  const handleGoogleCode = useCallback(
    async (code: string) => {
      setOutcome({ kind: "none" });
      const result = await exchangeGoogleCode(code);
      if (result.ok === false) {
        setOutcome({ kind: "error", message: result.message });
        return;
      }
      await settle(result.identity, result.hasSession);
    },
    [setOutcome, settle],
  );

  async function submitEmail(event: React.FormEvent) {
    event.preventDefault();
    const value = email.trim();
    // AC-4: an address with no `@` never reaches the network. A request that cannot
    // succeed is a spent rate-limit unit and a second of her time.
    if (!EMAIL_PATTERN.test(value)) {
      setEmailError("Enter an email address we can send the code to.");
      emailRef.current?.focus();
      return;
    }
    setEmailError(null);
    setSending(true);
    const result = await requestEmailCode(value);
    setSending(false);
    if (result.ok === false) {
      setEmailError(result.message);
      return;
    }
    onCodeSent(value);
  }

  const focusEmail = useCallback(() => emailRef.current?.focus(), []);

  return (
    /* SHORT-VIEWPORT RULES, everywhere they appear below, are one decision:
       when an on-screen keyboard has taken the viewport under 600px, the DECISION is
       what she needs on screen and the ARGUMENT is not — she has already read it. What
       is dropped is only ever restatement (the eyebrow, the sub-line, the second copy of
       the reassurance). What NEVER drops at any height: the oBizee mark, her handle, the
       headline, and every one of the four controls. See the dev report on AC-5 for the
       arithmetic on what 400px can and cannot hold. */
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)] lg:gap-14 [@media(max-height:600px)]:gap-5">
      {/* ── The argument, on the slab ────────────────────────────────────────── */}
      <div className="flex flex-col gap-5 lg:gap-6 [@media(max-height:600px)]:gap-3">
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[color:var(--obz-cta-on-dark)] max-lg:[@media(max-height:600px)]:hidden">
          Bring your shop over
        </p>

        {/* G0 — rendered from the server-resolved `?h=`, so it is in the first HTML. */}
        <HandleChip handle={handle} onChange={onHandleChange} />

        {/* G1 — her question, not ours. Two-tone: the words carrying the argument take
            the brand colour (R8), and both tones clear AA on the slab (§4.2). */}
        <h1 className="typo-h1-xl typo-gate-question max-w-[16ch] text-balance text-white">
          Where should we put{" "}
          <span className="text-[color:var(--obz-cta-on-dark)]">your catalogue?</span>
        </h1>

        {/* G2 */}
        <p className="max-w-[42ch] text-[15px] leading-6 text-[color:var(--slab-text-muted)] max-lg:[@media(max-height:600px)]:hidden">
          Your oBizee account. One tap — we never ask for a password.
        </p>

        {/* G6 — the reassurance. On desktop it anchors the left column; on mobile it
            moves below the card, where it answers the question the email field just
            raised rather than one she has not asked yet. */}
        <p className="hidden items-start gap-2.5 text-[14px] leading-5 text-[color:var(--slab-text-muted)] lg:flex">
          <ShieldCheck aria-hidden className="mt-px h-5 w-5 shrink-0 text-[color:var(--kept-green-on-dark)]" />
          <span>We only use this to save your catalogue to your account.</span>
        </p>
      </div>

      {/* ── The decision, on a white card ────────────────────────────────────── */}
      <div className="rounded-[var(--radius-xl)] border border-[color:var(--card-border)] bg-[color:var(--card-ground)] p-5 shadow-[var(--shadow-3)] sm:p-7 [@media(max-height:600px)]:p-4">
        <FieldGroup className="gap-5 [@media(max-height:600px)]:gap-3">
          {/* G3 — the wrapper exists only so UI-007's `focusOnMount="google"` has a
              node to reach the button through; `GoogleButton` forwards no ref. */}
          <div ref={googleWrapRef}>
            <GoogleButton
              clientId={googleClientId}
              onCode={handleGoogleCode}
              onUseEmail={focusEmail}
              busy={busy}
              lastUsed={lastUsed === "google"}
            />
          </div>

          {/* G4 — one word. `FieldSeparator` is the imported primitive; it draws the
              rule and the inset label as one object, which is what makes the two paths
              read as peers rather than as a primary and an afterthought.
              THE RULE IS COLOURED HERE ON PURPOSE. `FieldSeparator` paints its line with
              `bg-border`, and this repo's Tailwind v4 theme declares no `--color-border`
              — so that utility does not exist and Tailwind DROPS it, leaving a
              transparent 1px line. Rendered and measured on 2026-09-05: the word "or"
              floated with no rule either side, i.e. the imported component was invisible
              (V3). The descendant selector reaches Radix's `Separator` root, which is the
              only node the wrapper's own className cannot touch. */}
          <FieldSeparator className="my-0 text-[13px] font-semibold tracking-[0.14em] [&_[data-orientation=horizontal]]:bg-[color:var(--card-border-strong)] *:data-[slot=field-separator-content]:bg-[color:var(--card-ground)] *:data-[slot=field-separator-content]:text-[color:var(--text-muted)]">
            or
          </FieldSeparator>

          {/* G5 — always visible. Never behind a disclosure: she may have no Google
              account, or her oBizee account may sit on a different address, and hiding
              this makes exactly that merchant hunt for it (§2.5 G5). */}
          <form onSubmit={submitEmail} noValidate>
            <FieldGroup className="gap-3">
              <Field data-invalid={emailError ? true : undefined}>
                <FieldLabel htmlFor={emailId} className="text-[color:var(--text-primary)]">
                  Email
                </FieldLabel>
                <div className="relative">
                  <Mail
                    aria-hidden
                    className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[color:var(--text-muted)]"
                  />
                  <Input
                    id={emailId}
                    ref={emailRef}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@yourshop.com"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (emailError) setEmailError(null);
                    }}
                    aria-invalid={emailError ? true : undefined}
                    aria-describedby={emailError ? `${emailId}-error` : `${emailId}-help`}
                    disabled={busy}
                    className={cn(
                      "h-12 rounded-[var(--radius-md)] border-[color:var(--card-border-strong)] bg-[color:var(--card-ground)] pl-10 text-[15px]",
                      "text-[color:var(--text-primary)] placeholder:text-[color:var(--text-placeholder)]",
                      emailError && "border-[color:var(--color-danger)]",
                    )}
                  />
                </div>
                {emailError ? (
                  <FieldError id={`${emailId}-error`} className="text-[color:var(--color-danger)]">
                    {emailError}
                  </FieldError>
                ) : (
                  <FieldDescription id={`${emailId}-help`} className="text-[color:var(--text-muted)]">
                    We send a 6-digit code. No password to remember.
                  </FieldDescription>
                )}
              </Field>

              <button
                type="submit"
                disabled={sending || busy}
                className={cn(
                  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)]",
                  // The PRIMARY stage (§4.5). `--obz-cta` measures 5.01:1 under white
                  // text; the repo's shipped primary fill measures 3.14:1 and is
                  // deliberately never used as a fill under white text on this route.
                  "bg-[color:var(--obz-cta)] px-6 text-[15px] font-semibold text-white shadow-[var(--shadow-1)]",
                  "transition-[background-color,transform] [transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)]",
                  "hover:bg-[color:var(--obz-cta-hover)] active:translate-y-px",
                  "disabled:pointer-events-none disabled:opacity-60",
                )}
              >
                {sending ? <Loader2 aria-hidden className="h-5 w-5 animate-spin" /> : null}
                {sending ? "Sending…" : "Email me a code"}
                {lastUsed === "email" && !sending ? (
                  <span className="rounded-[var(--radius-pill)] bg-[color:var(--obz-cta-hover)] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
                    Last time
                  </span>
                ) : null}
              </button>
            </FieldGroup>
          </form>

          {outcome.kind !== "none" ? <OutcomeBand outcome={outcome} /> : null}
        </FieldGroup>
      </div>

      {/* G6 at 390 px — see the note on the desktop copy above. */}
      <p className="flex items-start gap-2.5 text-[14px] leading-5 text-[color:var(--slab-text-muted)] lg:hidden [@media(max-height:600px)]:hidden">
        <ShieldCheck aria-hidden className="mt-px h-5 w-5 shrink-0 text-[color:var(--kept-green-on-dark)]" />
        <span>We only use this to save your catalogue to your account.</span>
      </p>
    </div>
  );
}
