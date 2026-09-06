"use client";

import React, { useId, useRef, useState } from "react";
import Link from "next/link";
import { Check, Info, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Compare } from "@/components/ui/compare";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { parseHandle, HANDLE_ERROR_COPY } from "@/lib/import/handle";

/**
 * The migration offer — REBUILT as the import's entry point (UI-002 + UI-003).
 *
 * It exists because of a number from our own data: 43% of merchants who sign up never
 * add a product. The barrier is not price and it is not features — it is that moving a
 * shop is work.
 *
 * WHAT CHANGED AND WHY. The section used to promise *"Send us your link → A person
 * rebuilds it → not a bot, usually inside 24 hours"* and hand off to `/signup`, with the
 * lead going out over WhatsApp. That promise is now automated for the one source that
 * works today, so the section makes the same promise with a machine behind it and the
 * honest before/after in the middle. gate-a.md is binding on this: build INTO this
 * component, do not add a section beside it (R13 — improve what exists). The panel
 * geometry, the `keeps` list, the `ScrollReveal` wrapper and `/move-my-store` are
 * untouched.
 *
 * BINDING COLOUR RULING — do not "fix" the CTA. gate-a.md, 2026-09-05 02:40 IST: Raunak
 * chose to leave `orange-500` unfixed (2.80:1, a known AA failure, ×207 sitewide) even
 * while choosing Direction 1. design-brief.md §2.6 S4 recommends replacing it with
 * `--obz-cta`; that recommendation is OVERRULED for this round. Every orange class in
 * this file is the one that shipped. The seam to /import is carried by GEOMETRY — the
 * same `max-w-7xl` container and the same `rounded-3xl` slab at the same padding ramp —
 * not by hue, and the two sides will visibly differ in colour. That is accepted.
 *
 * Kept above the feature sections deliberately: a visitor who leaves after two screens
 * should have seen this and the seller proof, not a feature grid.
 */

/** E8. Steps 1 and 2 rewritten; 3 and 4 unchanged, because they are still true. */
const steps = [
  { n: "1", title: "You type your handle", body: "Nothing to send, nothing to attach." },
  { n: "2", title: "It reads every post", body: "About nine seconds for two hundred posts." },
  { n: "3", title: "You check it over", body: "Nothing goes live until you say so." },
  { n: "4", title: "Switch when ready", body: "Keep your products, domain, Razorpay and buyers." },
];

/** E9 — kept verbatim. Every item is still true; R16 says do not touch what is not broken. */
const keeps = [
  "Every product, photo and price",
  "Your own domain",
  "Your Razorpay account",
  "Your customers and their history",
  "Your Delhivery and DTDC setup",
  "Your brand and the look buyers know",
];

/**
 * E4's rotating placeholder. FOUR REAL HANDLES, and R12 is why they are these four:
 * every one is a live oBizee shop already on this same page, in `src/data/liveShops.ts`
 * and in `ShopsWall`'s marquee, with a real screenshot in `public/shops/`. Not one is
 * invented, and a visitor who scrolls up can find each of them.
 */
const PLACEHOLDER_HANDLES = [
  "crochetbypriya",
  "shopvelnora",
  "candleofmidnight",
  "oh.trinkets",
];

/**
 * Where a valid handle goes. A RELATIVE PATH WITH A TRAILING SLASH, and both halves
 * matter: `next.config.js:5` sets `trailingSlash: true` sitewide, so `/import?h=…`
 * without the slash is a real 404 risk on the static export, and the import flow now
 * lives in THIS app rather than on star.obizee.com — the whole point of the port — so
 * there is no origin to cross and no reason to use `window.location.assign`.
 */
const IMPORT_PATH = "/import/";

/**
 * Instagram's own help page for Business accounts (E7). Verified to resolve, 2026-09-06.
 * If Meta moves it, replace it with their current equivalent — never leave a dead link.
 */
const IG_BUSINESS_HELP = "https://help.instagram.com/502981923235522";

export default function MoveYourShop() {
  const [handle, setHandle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const fieldId = useId();
  const errorId = `${fieldId}-error`;
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * AC-3 / AC-4. The SAME rule the server runs before a handle ever reaches Instagram's
   * Graph field expression — `parseHandle` is imported, not re-derived, so a client rule
   * that is looser or tighter than the server's cannot drift into existence here.
   *
   * Returning `false` keeps the text, keeps focus, and does not navigate; the vanish
   * animation is what a `true` buys.
   */
  const validateAndGo = (raw: string): boolean => {
    const parsed = parseHandle(raw);
    if (parsed.ok === false) {
      setError(HANDLE_ERROR_COPY[parsed.reason]);
      inputRef.current?.focus();
      return false;
    }
    setError(null);
    // Assigned rather than pushed through `next/link`: this is a deliberate hand-off with
    // a query string the destination reads on its first client render, and the field has
    // just spent its own value on the vanish.
    window.location.assign(`${IMPORT_PATH}?h=${encodeURIComponent(parsed.handle)}`);
    return true;
  };

  return (
    <section
      className="bg-white py-16 sm:py-24"
      aria-labelledby="move-shop-heading"
      data-entry="import-handoff"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* THE SEAM. `rounded-3xl bg-gray-900 px-6 py-12 sm:px-12 sm:py-16` inside
            `max-w-7xl px-4 sm:px-6 lg:px-8` is the exact rectangle `app/import/page.tsx`
            and `ImportSlab` reproduce on the other side of the hand-off — 1216px wide at
            1440. Change this only by changing both files, or the panel she was looking at
            is not the panel she lands on. */}
        <div className="rounded-3xl bg-gray-900 px-6 py-12 sm:px-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center lg:gap-14">
            {/* --- the argument column: E0, E1, E2, E4, E5, E6, E7 --- */}
            <ScrollReveal className="max-w-2xl">
              {/* E0 — unchanged. orange-400 on the slab = 7.84:1. */}
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-400">
                Already selling somewhere
              </p>

              {/* E1 — two-tone (R8). The argument word takes the brand: the objection was
                  never price, it was time, and this section's own step 2 admits it. */}
              <h2
                id="move-shop-heading"
                className="mb-5 text-3xl font-bold text-white sm:text-5xl"
              >
                We move your shop for you.
                <span className="text-orange-400"> In seconds.</span>
              </h2>

              {/* E2 — one word changed from "So we do the work." */}
              <p className="text-lg text-[color:var(--slab-text-muted)]">
                Most sellers stall because moving is work. So a machine does it.
              </p>

              {/* E3 at mobile sits BELOW the field, so it is rendered once, after this
                  column, and moved by the grid at lg. See the comparison block below. */}

              {/* E4 + E5 — the field and the action. */}
              <div className="mt-8">
                <label
                  htmlFor={fieldId}
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--slab-text-muted)]"
                >
                  Your Instagram
                </label>
                <PlaceholdersAndVanishInput
                  id={fieldId}
                  name="instagram_handle"
                  placeholders={PLACEHOLDER_HANDLES}
                  value={handle}
                  inputRef={inputRef}
                  onValueChange={(next) => {
                    setHandle(next);
                    // Clear as she corrects it. An error that outlives the mistake reads
                    // as a field that is still wrong.
                    if (error) setError(null);
                  }}
                  // AC-3 runs on blur as well as on submit, but an empty field she has
                  // merely tabbed through is not a mistake she has made yet.
                  onBlur={() => {
                    if (!handle) return;
                    const parsed = parseHandle(handle);
                    setError(parsed.ok === false ? HANDLE_ERROR_COPY[parsed.reason] : null);
                  }}
                  onSubmit={validateAndGo}
                  submitLabel="Read my Instagram"
                  ariaDescribedBy={error ? errorId : undefined}
                  ariaInvalid={Boolean(error)}
                />

                {/* AC-3 — inline, under the field, tied by `aria-describedby`. Never a
                    toast: a toast leaves the screen before she has read it, and it is not
                    attached to the thing that is wrong. */}
                {error ? (
                  <p
                    id={errorId}
                    role="alert"
                    className="mt-2 text-sm font-medium text-[color:var(--danger-on-dark)]"
                  >
                    {error}
                  </p>
                ) : null}

                {/* E6 — kill the password fear before it is asked. Green is this system's
                    "nothing bad happens" hue and it is paired with a word and an icon,
                    never used alone (SC 1.4.1). */}
                <p className="mt-4 flex items-start gap-2 text-sm text-[color:var(--slab-text-muted)]">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--kept-green-on-dark)]"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    No Instagram password. No permissions. We read what is already public.
                  </span>
                </p>

                {/* E7 — state the gate BEFORE she is turned away by it. */}
                <p className="mt-2 flex items-start gap-2 text-sm text-[color:var(--slab-text-muted)]">
                  <Info
                    className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--info-on-dark)]"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    Works with Instagram Business accounts.{" "}
                    <a
                      href={IG_BUSINESS_HELP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
                    >
                      Not sure?
                    </a>
                  </span>
                </p>
              </div>
            </ScrollReveal>

            {/* --- E3 · the before/after ---
                ORDER. At lg the grid puts this beside the argument, to the right of the
                field. Below lg it is the SECOND grid child and therefore falls BELOW the
                field, which is design-brief.md §8.2's "Entry" row: on a phone the ask
                comes before the proof, because the proof pane is the heavier object and
                burying the field under it is how a visitor leaves without acting. */}
            <ScrollReveal delay={0.1} className="w-full">
              <figure className="m-0">
                <Compare
                  firstImage="/import/instagram-grid-illustration.svg"
                  firstImageAlt="An illustration of a generic Instagram shop grid: a profile row and nine blank post tiles."
                  secondImage="/shops/crochetbypriya.jpg"
                  secondImageAlt="The CrochetByPriya storefront on oBizee, with its products laid out and priced."
                  // 55%, not 50%: both halves have to read without any interaction at all,
                  // and the "after" pane is the one carrying the argument.
                  initialSliderPercentage={55}
                  // Published default. UI-003 is explicit that this must not become
                  // drag-only — a marketing visitor will not read a drag instruction.
                  slideMode="hover"
                  sliderLabel="Compare the Instagram grid with the oBizee storefront"
                  className={
                    // 390x220 at mobile, per the ticket; it grows with the column above it.
                    "h-[220px] w-full rounded-2xl border border-[color:var(--slab-chip-border)] sm:h-[300px] lg:h-[280px]"
                  }
                  // `object-top`, not a plain `object-cover`, and this was decided by
                  // looking at the render. Both panes are wider than they are tall in
                  // this box, so a centred cover crop threw away the top of each — on
                  // the right that is the shop's own header, search and cart, which is
                  // the single strongest signal that the "after" is a real storefront
                  // rather than a product photo. Cropping to the argument (D3).
                  firstImageClassName="object-cover object-top"
                  secondImageClassname="object-cover object-top"
                />
                <figcaption className="mt-3 space-y-1">
                  <p className="text-sm font-medium text-white">
                    A person did this in 24 hours. Now: about 9 seconds.
                  </p>
                  {/* R12 / R4 — the left pane is marked as an illustration, in visible
                      text, not `sr-only`. No merchant's real Instagram has been captured:
                      design-brief.md §9 O-13 records that no consent for that exists yet.
                      Do not drop this line to make the pane look cleaner. */}
                  <p className="text-[11px] leading-relaxed text-[color:var(--slab-text-muted)]">
                    Left is an illustration — not @crochetbypriya&apos;s actual Instagram.
                    Right is her live oBizee shop.
                  </p>
                </figcaption>
              </figure>
            </ScrollReveal>
          </div>

          {/* E8 — the four steps. Unchanged as a grid; steps 1 and 2 rewritten. */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ n, title, body }) => (
              <div
                key={n}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
              >
                <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white">
                  {n}
                </span>
                <h3 className="mb-2 font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-[color:var(--slab-text-muted)]">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* E9 — unchanged. */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="mb-4 font-semibold text-white">You lose nothing by moving</p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {keeps.map((k) => (
                <li
                  key={k}
                  className="flex items-start gap-2.5 text-sm text-[color:var(--slab-text-muted)]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-orange-400"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">{k}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* E10 — the human is still there, relabelled. A merchant on a personal
              account, on Shopify, or on a DM2Buy link cannot use the import TODAY, and
              this is the only path those merchants have. Removing it would silently
              delete it. `/move-my-store` is unchanged and still a valid page. */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/move-my-store"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              How the move works
            </Link>
            <WhatsAppCTA
              source="move_your_shop"
              label="Or ask a person"
              variant="light"
              message="Hi oBizee, I already sell online and I'd like you to move my shop across. Here's my link:"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
