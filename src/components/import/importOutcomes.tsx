"use client";

import { ArrowRightLeft, AtSign, Clock, Hourglass, MessageCircle, RotateCw, ShieldAlert } from "lucide-react";

import type { ImportOutcomeSpec } from "@/components/import/ImportOutcome";
import { WHATSAPP_HREF } from "@/components/import/OutcomeBand";

/**
 * EVERY ENDING THIS SCREEN CAN REACH, as data.
 *
 * PROVENANCE — DERIVED from `components/import/OutcomeBand.tsx` (commit d9c348a,
 * UI-007), this route's existing "one shape per server code" pattern: a discriminated
 * spec built from a code the SERVER can actually produce, never from a code a designer
 * imagined. DIFF: that file returns JSX per outcome; this one returns data, because
 * UI-009 reuses the same panel for two more endings and a second copy of the markup is
 * how two designed states drift apart three tickets later (R3).
 *
 * THE CODES ARE READ FROM THE SERVER, NOT ASSUMED.
 * `OM-backend/import/net/failureReasons.js` is the closed list of what may ever appear
 * in `ImportJob.statusReason`. UI-008 owns three of its members, plus the two HTTP-only
 * codes that are refused before a job exists:
 *
 *   not_a_business_account   D-1 AND D-2, merged  — see the note on that entry
 *   rate_limited             D-5
 *   source_not_enabled       D-6, and it is the state the public sees on day one
 *
 * DELIBERATELY NOT HERE, and each for a stated reason:
 *   no_products_found / timed_out  UI-009. Their next step is "see what we got", which
 *                                  renders report-like content; `WorkingScreen` routes
 *                                  both to the `report` state rather than ending here.
 *   unpriced_rows_remaining        a confirm-time refusal; no capture can end on it.
 *
 * THE REST OF THE LIST STILL HAS TO LAND SOMEWHERE. `instagram_unreachable`,
 * `instagram_token_expired`, `extraction_failed` and `killed_by_operator` are all
 * reachable from `classifyPublicCaptureError` today, and an unmapped code would render
 * an empty panel — the worst possible ending. `FALLBACK` catches them with copy that is
 * true of all four (something on OUR side stopped, nothing she did) and the same two
 * real next steps. It is not one of the ticket's four and is not counted as one.
 */

/** Instagram's own help page for switching to a professional account. Verified 200 on 2026-09-05. */
const INSTAGRAM_SWITCH_HELP = "https://help.instagram.com/502981923235522";

export type OutcomeHandlers = {
  /** Back to the gate with `?h=` intact and the chip editable — D-1/D-2's second action. */
  onTryAnotherHandle: () => void;
  /** Start the capture again from the same handle. D-5 and the fallback. */
  onRetry: () => void;
  /** Her verified address, if this browser still has it. Used as a FACT, never as a promise. */
  email: string | null;
  /** Seconds the server said to wait, from `Retry-After`. Null unless it sent one. */
  retryAfterSeconds?: number | null;
};

/** A real timeframe, or nothing. §2.7 D-5 bans "later" with no number behind it. */
function retryLine(seconds: number | null | undefined): string {
  if (typeof seconds !== "number" || !Number.isFinite(seconds) || seconds <= 0) {
    // The honest fallback. `X-Business-Use-Case-Usage` is not surfaced by UI-004 and
    // a job that failed on Meta's own limit carries no timeframe at all, so this is
    // the most precise true sentence available — and it is still a timeframe.
    return "Try again in a few minutes.";
  }
  if (seconds < 90) return "Try again in about a minute.";
  const minutes = Math.ceil(seconds / 60);
  return `Try again in about ${minutes} minutes.`;
}

/** The WhatsApp path `MoveYourShop` already ships. A real person, today, not a queue. */
const askAPerson = {
  label: "Move it with a person",
  icon: MessageCircle,
  href: WHATSAPP_HREF,
} as const;

export function outcomeFor(code: string | null, handlers: OutcomeHandlers): ImportOutcomeSpec {
  const { onTryAnotherHandle, onRetry, email, retryAfterSeconds } = handlers;

  const tryAnotherHandle = {
    label: "Try another handle",
    icon: AtSign,
    onClick: onTryAnotherHandle,
  } as const;

  switch (code) {
    /**
     * D-1 AND D-2, ONE PANEL — and the merge is a correctness decision, not a saving.
     *
     * design-brief.md §2.7 wrote two screens: D-1 "Instagram only allows this for
     * business accounts" and D-2 "We couldn't find @yourbrand on Instagram". The
     * shipped backend cannot tell them apart. `classifyPublicCaptureError` maps every
     * 4xx and every thin node to `not_a_business_account`, and its own header says why:
     * `business_discovery` does not distinguish a personal account from a handle that
     * does not exist, and `failureReasons.js` deliberately has no `handle_not_found`.
     *
     * So the heading MUST NOT ASSERT EITHER. "Instagram only allows this for business
     * accounts" told a woman with a typo to go change a setting that was already right;
     * "We couldn't find @yourbrand" told a woman on a personal account to check her
     * spelling. Both send her to fix the wrong thing. This says what we actually know —
     * we could not read it — and then offers both repairs, in the order they are likely.
     */
    case "not_a_business_account":
      return {
        id: "not_a_business_account",
        tone: "info",
        badge: ArrowRightLeft,
        badgeLabel: "A switch, not an error",
        heading: "We couldn't read that Instagram account.",
        body:
          "It may be a personal account — Instagram only allows this for Business or Creator accounts — or the handle may not be quite right.",
        // §2.7 names this as the fear, and says it must be answered BEFORE she is asked
        // to act. Switching account type is the scarier of the two repairs and this is
        // the sentence that makes it not scary.
        detail: "Switching is free, takes a minute, and your posts, followers and username all stay the same.",
        primary: { label: "How to switch to Business", icon: ArrowRightLeft, href: INSTAGRAM_SWITCH_HELP },
        secondary: tryAnotherHandle,
      };

    /**
     * D-5. A WAIT, so it takes the warning ground rather than the info one — the two
     * blue panels beside it are "do this instead", and this one is "do this later".
     */
    case "rate_limited":
      return {
        id: "rate_limited",
        tone: "warning",
        badge: Clock,
        badgeLabel: "Please wait",
        heading: "We've hit Instagram's limit for now.",
        body: retryLine(retryAfterSeconds),
        detail:
          "The limit is on oBizee's side, not yours — it's shared across everyone importing today, and it clears on its own.",
        primary: { label: "Try again", icon: RotateCw, onClick: onRetry },
        secondary: askAPerson,
      };

    /**
     * D-6 — the state the public actually sees on day one, until Meta's App Review
     * lands (gate-a.md: "~2-4 weeks", and it is the long pole).
     *
     * WHAT THIS PANEL DOES NOT DO, and it is deliberate. UI-008's ticket asks for a
     * one-tap "tell me when it's ready" against her already-known address. There is no
     * endpoint for it in either repo — no waitlist collection, no notify route, nothing
     * `POST`able — so that button would be a control that does nothing, which is what
     * R12 exists to prevent, and a "we'll email you" is a promise with no mechanism
     * behind it. Instead the address is stated as the FACT it is (she verified it thirty
     * seconds ago, and the OTP row holds it), and the actionable slot goes to the path
     * that genuinely gets her shop moved today. Open item in the dev report, with the
     * one-endpoint proposal.
     */
    case "source_not_enabled":
      return {
        id: "source_not_enabled",
        tone: "info",
        badge: Hourglass,
        badgeLabel: "Not open yet",
        heading: "Instagram import isn't open yet.",
        body: "We're waiting on Instagram's approval before we can read accounts automatically.",
        detail: email
          ? `You've already verified ${email}, so you won't be asked again.`
          : "Your shop can still move over in the meantime — a person does it by hand.",
        primary: askAPerson,
        secondary: tryAnotherHandle,
      };

    /**
     * The two-hour prospect credential ran out, or this browser is not the one that
     * started the job. `findOwnedJob` answers "not yours" and "does not exist"
     * identically on purpose, so this must not claim the import was deleted.
     */
    case "no_session":
    case "not_found":
      return {
        id: "session_expired",
        tone: "info",
        badge: ShieldAlert,
        badgeLabel: "Sign in again",
        heading: "We need your email once more.",
        body: "This browser can't open that import any more. Verifying again brings it straight back — nothing was lost.",
        primary: { label: "Start again", icon: RotateCw, onClick: onTryAnotherHandle },
        secondary: askAPerson,
      };

    /**
     * `instagram_unreachable` · `instagram_token_expired` · `extraction_failed` ·
     * `killed_by_operator`, plus anything a later backend adds. All four are OUR side
     * stopping, so one sentence is true of all of them and none of them is her fault.
     */
    default:
      return {
        id: code ?? "unknown",
        tone: "warning",
        badge: RotateCw,
        badgeLabel: "Stopped on our side",
        heading: "That import stopped before it finished.",
        body: "Nothing on your Instagram changed, and nothing you did caused this. Starting it again usually works.",
        primary: { label: "Try again", icon: RotateCw, onClick: onRetry },
        secondary: askAPerson,
      };
  }
}
