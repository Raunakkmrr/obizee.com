"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Pencil, X } from "lucide-react";

import { InstagramMark } from "@/components/import/marks";
import { HANDLE_ERROR_COPY, middleTruncate, parseHandle } from "@/lib/import/handle";

/**
 * G0 — THE CARRIED HANDLE. The seam, made visible (design-brief.md §2.6 S3).
 *
 * PROVENANCE — DERIVED from the shipped in-repo chip pattern at
 * `app/price-list/[token]/page.tsx` (rounded-pill row: mark, value, trailing action) and
 * from Instagram's own handle field, `https://www.instagram.com/accounts/emailsignup/`,
 * for the `@` prefix treatment. Named in design-brief.md §3.4.
 *
 * WHY IT IS THE FIRST THING ON THE SCREEN. She typed this handle on obizee.com and
 * landed on star.obizee.com — a different origin, a different Next major, a different
 * Tailwind major. Without her own handle in front of her, the gate reads as being handed
 * to a different company and asked to sign in. The chip is what makes an identity step
 * tolerable: it is proof she has not landed on a generic login.
 *
 * EDITABLE, because a typo caught here costs one tap instead of a back-navigation across
 * two origins. The WHOLE CHIP is the affordance (≥44 px, §8.3), not just the pencil.
 *
 * RENDERED FROM THE SERVER. `handle` arrives as a prop that `app/import/page.tsx`
 * resolved from `?h=` on the server, so `@izeljewels._` is in the first HTML — AC-1.
 * Nothing here fetches, and the component holds no state until she clicks edit.
 */
export default function HandleChip({
  handle,
  onChange,
}: {
  handle: string;
  /** Writes the corrected handle back into `?h=` via `router.replace` — AC-7. */
  onChange: (next: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(handle);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDraft(handle);
  }, [handle]);

  useEffect(() => {
    if (editing) inputRef.current?.select();
  }, [editing]);

  function commit() {
    // The same rule the server will run — `lib/import/handle.ts`, derived from
    // OM-backend's `normaliseHandle`. A looser client rule ships a handle the server
    // rejects; a tighter one refuses a real account.
    const parsed = parseHandle(draft);
    if (parsed.ok === false) {
      setError(HANDLE_ERROR_COPY[parsed.reason]);
      return;
    }
    setError(null);
    setEditing(false);
    if (parsed.handle !== handle) onChange(parsed.handle);
  }

  function cancel() {
    setDraft(handle);
    setError(null);
    setEditing(false);
  }

  if (editing) {
    return (
      <div className="w-full max-w-md">
        <label htmlFor="import-handle" className="sr-only">
          Your Instagram handle
        </label>
        <div className="flex items-center gap-2 rounded-[var(--radius-pill)] border border-[color:var(--slab-chip-border)] bg-[color:var(--slab-chip-ground)] py-1 pl-3 pr-1">
          <InstagramMark size={20} className="shrink-0" />
          <span aria-hidden className="text-[15px] font-semibold text-[color:var(--slab-text-muted)]">
            @
          </span>
          <input
            id="import-handle"
            ref={inputRef}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                commit();
              }
              // Escape does nothing destructive anywhere on this route (§8.3): it
              // restores the handle she arrived with, it never clears it.
              if (event.key === "Escape") cancel();
            }}
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            maxLength={30}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "import-handle-error" : undefined}
            className="h-10 min-w-0 flex-1 bg-transparent text-[15px] font-semibold text-white outline-none placeholder:text-[color:var(--text-placeholder)]"
            placeholder="yourshop"
          />
          <button
            type="button"
            onClick={commit}
            aria-label="Save handle"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[color:var(--obz-cta)] text-white transition-colors [transition-duration:var(--motion-fast)] hover:bg-[color:var(--obz-cta-hover)]"
          >
            <Check aria-hidden className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={cancel}
            aria-label="Cancel"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-[color:var(--slab-text-muted)] transition-colors [transition-duration:var(--motion-fast)] hover:bg-white/10 hover:text-white"
          >
            <X aria-hidden className="h-5 w-5" />
          </button>
        </div>
        {error ? (
          <p id="import-handle-error" role="alert" className="mt-2 text-[13px] font-medium text-[color:var(--brand-warm-on-dark)]">
            {error}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setEditing(true)}
      // The VISIBLE text is middle-truncated, so without this a screen reader would
      // announce "@izeljewels…ecklaces._x" — the ellipsis read aloud, and the handle
      // unverifiable by the one user who cannot check it against the chip. The accessible
      // name carries the WHOLE handle; `title` carries it for a mouse.
      aria-label={handle ? `Your Instagram handle, @${handle}. Edit it.` : "Add your Instagram handle"}
      className="group inline-flex min-h-11 max-w-full self-start items-center gap-2.5 rounded-[var(--radius-pill)] border border-[color:var(--slab-chip-border)] bg-[color:var(--slab-chip-ground)] py-2 pl-3 pr-3.5 transition-colors [transition-duration:var(--motion-fast)] [transition-timing-function:var(--motion-ease)] hover:border-[color:var(--obz-cta-on-dark)]"
    >
      <InstagramMark size={20} className="shrink-0" />
      {/* Middle truncation, not `text-overflow` — AC-6 and §8.1. The END of a handle is
          the part a seller recognises (`…jewels`, `…store`), so it is the part kept.
          The full value stays in the accessible name and in the tooltip. */}
      {/* An arrival with no `?h=` is real — someone typed /import directly — and "@" on
          its own is not a prompt. The empty chip ASKS, in her words, rather than showing
          a lone symbol. */}
      <span
        className="min-w-0 truncate text-[15px] font-semibold text-white"
        title={handle ? `@${handle}` : undefined}
      >
        {handle ? `@${middleTruncate(handle, 22)}` : "Add your Instagram handle"}
      </span>
      <Pencil
        aria-hidden
        className="h-4 w-4 shrink-0 text-[color:var(--slab-text-muted)] transition-colors [transition-duration:var(--motion-fast)] group-hover:text-[color:var(--brand-warm-on-dark)]"
      />
    </button>
  );
}
