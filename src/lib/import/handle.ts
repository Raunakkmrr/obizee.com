/**
 * The Instagram handle, on the client.
 *
 * PROVENANCE — DERIVED from the ONE canonical rule this project already owns:
 * `OM-backend/import/adapters/instagram/client.js:497` (`normaliseHandle`) and its
 * `HANDLE_PATTERN` at `:1`, `/^[A-Za-z0-9._]{1,30}$/`.
 *
 * DIFF: it throws, this returns a discriminated result — a form field wants a message,
 * not an exception. The pattern and the `@`-strip are copied character for character,
 * deliberately: the server re-validates every handle before it is interpolated into a
 * Graph field expression (where `encodeURIComponent` cannot protect the `(){},`
 * grammar), so a client rule that is LOOSER lets a merchant type something the server
 * will reject, and a client rule that is TIGHTER silently refuses a real account. The
 * only correct client rule is the same rule.
 */

/** Instagram's own grammar. Letters, digits, dot, underscore; 30 characters at most. */
const HANDLE_PATTERN = /^[A-Za-z0-9._]{1,30}$/;

export type HandleResult =
  | { ok: true; handle: string }
  | { ok: false; reason: "empty" | "too_long" | "bad_characters" };

/**
 * Strip a leading `@` and surrounding whitespace, then prove it is a real handle.
 *
 * The three reasons are separate because they are three different sentences to a
 * merchant: nothing typed, too long, or a character Instagram does not allow.
 */
export function parseHandle(raw: string | null | undefined): HandleResult {
  const cleaned = String(raw ?? "")
    .trim()
    .replace(/^@/, "");
  if (cleaned.length === 0) return { ok: false, reason: "empty" };
  if (cleaned.length > 30) return { ok: false, reason: "too_long" };
  if (!HANDLE_PATTERN.test(cleaned)) return { ok: false, reason: "bad_characters" };
  return { ok: true, handle: cleaned };
}

/** The merchant-facing sentence for each refusal. Word budget: ≤ 12 (D4). */
export const HANDLE_ERROR_COPY: Record<
  Exclude<HandleResult, { ok: true }>["reason"],
  string
> = {
  empty: "Type the name after the @ in your Instagram profile link.",
  too_long: "Instagram handles stop at 30 characters.",
  bad_characters: "Handles use letters, numbers, dots and underscores only.",
};

/**
 * Shorten a handle FROM THE MIDDLE — `izeljewels…necklaces`, never `izeljewel…`.
 *
 * design-brief.md §8.1: Instagram's maximum is 30 characters and the END is the part a
 * seller recognises, because that is where the shop word usually sits
 * (`…jewels`, `…store`, `…official`). Truncating from the end removes exactly the half
 * that makes the chip proof she is in the right place, which is the chip's whole job
 * (§2.6 S3). AC-6.
 *
 * CSS cannot do this: `text-overflow: ellipsis` only clips one end.
 *
 * @param handle without the leading `@`
 * @param max total characters to keep, ellipsis included
 */
export function middleTruncate(handle: string, max = 22): string {
  if (max < 5 || handle.length <= max) return handle;
  // The ellipsis costs one character; the tail is the half that identifies the shop, so
  // it gets the larger share whenever the budget is odd.
  const budget = max - 1;
  const head = Math.floor(budget / 2);
  const tail = budget - head;
  return `${handle.slice(0, head)}…${handle.slice(handle.length - tail)}`;
}
