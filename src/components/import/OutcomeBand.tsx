"use client";

import { Check, Info, Loader2 } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

/**
 * UI-007 CORRECTION, applied to all three bands at once (R16 — a class, not an
 * instance). shadcn's `AlertTitle` ships `line-clamp-1`, and `break-words` does not
 * cancel it: rendered on the production build with the hardest real address
 * (46 characters, design-brief.md 8.1) the band read **"We've verified…"** — the
 * ellipsis ate the entire point of the sentence. `line-clamp-none` restores the wrap
 * and `break-all` breaks a long address rather than blowing out the card, matching the
 * treatment O2 already gives the same string on the slab. This also repairs the same
 * latent defect on UI-006's gate, whose evidence happened to use a short address.
 *
 * What comes back once an identity is proven — the SAME three answers whether she came
 * through Google (G3) or through the six-digit code (O3), because
 * `ImportAuthController.sendIdentity` returns one shape for both paths.
 *
 * PROVENANCE — EXTRACTED VERBATIM from `components/import/GateScreen.tsx:330-403`
 * (commit 880e1d9, UI-006), which is where these three bands were written and reviewed.
 * Not a rewrite: the markup, the tokens, the roles and the copy are byte-identical, and
 * `GateScreen` now imports this file instead of holding its own copy.
 *
 * WHY IT MOVED, since UI-007's ticket did not ask for it. The code step's success path
 * is the same success path — a matched merchant is signed in, a first-time seller is
 * verified-with-no-account — so the alternative was a second copy of these three bands
 * in `CodeStep`. Two copies of a designed state is exactly how the wrong-code ground and
 * the expired ground end up drifting apart three tickets later (R3, one owner per
 * surface). Recorded as an out-of-ticket touch in the dev report.
 *
 * The three grounds are the TERTIARY stage of the colour system (design-brief.md 4.5),
 * and each carries an icon AND a word — never colour alone (WCAG 1.4.1, section 8.3).
 */

export type Outcome =
  | { kind: "none" }
  | { kind: "matched"; email: string }
  | { kind: "prospect"; email: string }
  | { kind: "error"; message: string };

/** A real, shipped next step: the WhatsApp path `MoveYourShop` already offers. */
export const WHATSAPP_HREF =
  "https://wa.me/918796971046?text=" +
  encodeURIComponent("Hi oBizee — I'd like to move my Instagram shop over.");

export default function OutcomeBand({ outcome }: { outcome: Exclude<Outcome, { kind: "none" }> }) {
  if (outcome.kind === "matched") {
    return (
      // `role="status"`, not `Alert`'s built-in `role="alert"`: a match is good news, and
      // an assertive live region interrupts a screen-reader user mid-sentence to announce
      // it. The prop spread runs after the variant classes, so this wins.
      <Alert
        role="status"
        className="rounded-[var(--radius-md)] border-[color:var(--color-success-border)] bg-[color:var(--color-success-bg)] p-3 [&>svg]:size-5"
      >
        <Check aria-hidden className="text-[color:var(--color-success)]" />
        {/* A merchant whose email we already know is a GOOD outcome. It must not read as
            a collision, so it gets the success ground and a sentence, not a code. */}
        <AlertTitle className="text-[13.5px] font-semibold break-all whitespace-normal line-clamp-none text-[color:var(--text-primary)]">
          Signed in as {outcome.email}.
        </AlertTitle>
        <AlertDescription className="text-[13px] text-[color:var(--text-muted)]">
          <p className="flex items-center gap-1.5">
            <Loader2 aria-hidden className="h-3.5 w-3.5 animate-spin" />
            Starting your import…
          </p>
        </AlertDescription>
      </Alert>
    );
  }

  if (outcome.kind === "prospect") {
    return (
      <Alert
        role="status"
        className="rounded-[var(--radius-md)] border-[color:var(--color-info-border)] bg-[color:var(--color-info-bg)] p-3 [&>svg]:size-5"
      >
        <Info aria-hidden className="text-[color:var(--color-info)]" />
        <AlertTitle className="text-[13.5px] font-semibold break-all whitespace-normal line-clamp-none text-[color:var(--text-primary)]">
          We&apos;ve verified {outcome.email}.
        </AlertTitle>
        <AlertDescription className="text-[13px] leading-5 text-[color:var(--text-muted)]">
          {/* TRUE as of this build, and stated as a mechanism rather than as a product
              claim: `POST /import/jobs` is inside `protectedRoutes` and a proven address
              with no `User` gets `token:null` (UI-005 AC-5), so there is no credential to
              present. api-contract.md's 17:20 ruling gives that gap an owner — UI-011's
              short-lived prospect token — and explicitly says UI-007 does not carry it.
              The next step offered here is REAL: the WhatsApp path `MoveYourShop` ships. */}
          <p>Instagram import needs an oBizee account. A person can move your shop over in the meantime.</p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex min-h-11 items-center rounded-[var(--radius-sm)] text-[13.5px] font-semibold text-[color:var(--obz-cta)] underline underline-offset-4"
          >
            Ask a person
          </a>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="rounded-[var(--radius-md)] border-[color:var(--color-danger)] bg-[color:var(--color-danger-bg)] p-3 [&>svg]:size-5">
      <Info aria-hidden className="text-[color:var(--color-danger)]" />
      {/* `break-words`, not `break-all`: this one carries a SENTENCE, and break-all
          would hyphenate ordinary words mid-syllable. The two above carry an email
          address, which is the only string that needs the harder rule. */}
      <AlertTitle className="text-[13.5px] font-semibold break-words whitespace-normal line-clamp-none text-[color:var(--text-primary)]">
        {outcome.message}
      </AlertTitle>
    </Alert>
  );
}
