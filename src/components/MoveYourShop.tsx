"use client";

import React, { useId, useRef, useState } from "react";
import Link from "next/link";
import { Check, Info, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Compare } from "@/components/ui/compare";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { parseHandle, HANDLE_ERROR_COPY } from "@/lib/import/handle";
import { parseSourceRef } from "@/lib/import/source";

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

/**
 * WHERE HER SHOP IS NOW. The seller picks; everything below the pills follows.
 *
 * Two live sources and the ones behind them named honestly. A pill that opens a
 * field and then cannot read the thing she typed is worse than a pill that says
 * "not yet", so `ready: false` is rendered as a disabled chip with the reason on
 * it rather than as an option.
 */
type LiveSource = {
  id: "instagram" | "website" | "shopexer" | "instamojo" | "linktree";
  label: string;
  fieldLabel: string;
  submitLabel: string;
  placeholders: string[];
  /**
   * The `?src=` the gate is handed, when it differs from the pill's own id.
   *
   * A Shopexer shop is read by the WEBSITE adapter — its storefronts publish a sitemap
   * and schema.org product markup, which is exactly the generic rung. The pill exists
   * for recognition, not because the plumbing differs: a seller on Shopexer looking for
   * her platform in the row should find it rather than having to know that "my website"
   * would have worked.
   */
  handoff?: "instagram" | "website" | "linktree";
};

/**
 * WHERE HER SHOP IS NOW. The seller picks; everything below the pills follows —
 * the field's label, its placeholder, the rule it is checked against and where
 * a valid value is sent.
 */
const LIVE_SOURCES: LiveSource[] = [
  {
    id: "instagram",
    label: "Instagram",
    fieldLabel: "Your Instagram",
    submitLabel: "Read my Instagram",
    placeholders: ["crochetbypriya", "shopvelnora", "candleofmidnight", "oh.trinkets"],
  },
  {
    id: "website",
    label: "My website",
    fieldLabel: "Your website",
    submitLabel: "Read my website",
    placeholders: ["phuljhadi.com", "yourshop.com", "yourshop.myshopify.com"],
  },
  {
    id: "shopexer",
    label: "Shopexer",
    fieldLabel: "Your Shopexer address",
    submitLabel: "Read my Shopexer shop",
    placeholders: ["dreamyjewels.shopexer.com", "yourshop.shopexer.com"],
    // Read by the website adapter's schema.org rung — verified against three live
    // Shopexer shops (52, 89 and 136 products, with their real categories).
    handoff: "website",
  },
  {
    id: "instamojo",
    label: "Instamojo",
    fieldLabel: "Your Instamojo store",
    submitLabel: "Read my Instamojo store",
    // Instamojo sellers get a custom domain — clearias reads as clearias.store — so the
    // placeholder shows one rather than an instamojo.com address she does not use.
    placeholders: ["clearias.store", "yourstore.com"],
    // Its own rung on the website adapter: their storefronts serve no feed and no
    // schema.org, but their category pages carry the catalogue. 64 products verified.
    handoff: "website",
  },
  {
    id: "linktree",
    label: "Link page",
    fieldLabel: "Your link page",
    submitLabel: "Find my shop",
    placeholders: ["linktr.ee/yourname", "beacons.ai/yourname"],
    // NOT a source, and it keeps its own `?src=` for exactly that reason: the gate has
    // to show her the link page she pasted, and the website rule would strip the
    // username off it. The SERVER resolves it to her real shop when she submits, so the
    // job that gets created is an ordinary Instagram or website one.
    handoff: "linktree",
  },
];

/**
 * Named, not hidden, and not selectable.
 *
 * A pill that opens a field and then cannot read what she typed is worse than
 * one that says "soon" — and leaving DM2Buy off the row entirely would tell a
 * DM2Buy seller this is not for her.
 */
const COMING_SOON = [{ id: "dm2buy", label: "DM2Buy", note: "Soon" }];

/**
 * E8, SLIMMED. Was four cards at `p-5` with a 28px badge and two-line bodies,
 * which read as four panels competing with the field above them. These are one
 * row of markers: the sequence is the content, and the words are down to a
 * ceiling of six per body so nothing wraps to three lines at 390px.
 */
const steps = [
  { n: "1", title: "You type your handle", body: "Nothing to send." },
  { n: "2", title: "It reads everything", body: "Seconds, not a day." },
  { n: "3", title: "You check it over", body: "Nothing goes live yet." },
  { n: "4", title: "Switch when ready", body: "Keep domain, Razorpay, buyers." },
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

type SourceId = LiveSource["id"];

export default function MoveYourShop() {
  const [sourceId, setSourceId] = useState<SourceId>("instagram");
  const source = LIVE_SOURCES.find((entry) => entry.id === sourceId) ?? LIVE_SOURCES[0];
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
    // EVERY SOURCE BUT INSTAGRAM IS AN ADDRESS. Written as "not Instagram" rather than
    // as a list, so adding another pill cannot silently drop it into the handle rule.
    // `parseSourceRef` branches again inside on `linktree`, whose ref keeps its path.
    if (source.id !== "instagram") {
      // A website is checked here only for SHAPE, by the SAME function the gate's chip
      // and `app/import/page.tsx` run — `parseSourceRef`, not a regex written twice.
      // Whether the domain is a store we can read is `WebsiteAdapter.validateRef`'s
      // question; asking it here would mean a network call on every keystroke.
      const parsedRef = parseSourceRef(source.id === "linktree" ? "linktree" : "website", raw);
      if (parsedRef.ok === false) {
        setError(parsedRef.message);
        inputRef.current?.focus();
        return false;
      }
      setError(null);
      window.location.assign(
        `${IMPORT_PATH}?src=${source.handoff ?? source.id}&h=${encodeURIComponent(parsedRef.ref)}`,
      );
      return true;
    }

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
      className="bg-white py-12 sm:py-16"
      aria-labelledby="move-shop-heading"
      data-entry="import-handoff"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* THE SEAM. `rounded-3xl bg-gray-900 px-5 py-8 sm:px-10 sm:py-12` inside
            `max-w-7xl px-4 sm:px-6 lg:px-8` is the exact rectangle `app/import/page.tsx`
            and `ImportSlab` reproduce on the other side of the hand-off — 1216px wide at
            1440. Change this only by changing both files, or the panel she was looking at
            is not the panel she lands on. */}
        <div className="rounded-3xl bg-gray-900 px-5 py-8 sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center lg:gap-12">
            {/* --- the argument column: E0, E1, E2, E4, E5, E6, E7 --- */}
            <ScrollReveal className="max-w-2xl">
              {/* E0 — unchanged. orange-400 on the slab = 7.84:1. */}
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-400">
                Already selling somewhere
              </p>

              {/* E1 — two-tone (R8). The argument word takes the brand: the objection was
                  never price, it was time, and this section's own step 2 admits it. */}
              <h2
                id="move-shop-heading"
                className="mb-3 text-[26px] font-bold leading-[1.1] text-white sm:text-[38px]"
              >
                We move your shop for you.{" "}
                {/* `whitespace-nowrap` so the two words that carry the argument break as
                    a unit. At 38px in this column the line otherwise ends "…for you. In"
                    and orphans the preposition onto the head of the next line, which is
                    the one place on the slab where the type is big enough for that to
                    read as a mistake. The space is OUTSIDE the span, or nowrap would
                    glue "In" to "you." and undo the break entirely. */}
                <span className="whitespace-nowrap text-orange-400">In seconds.</span>
              </h2>

              {/* E2 — one word changed from "So we do the work." */}
              <p className="text-[15px] leading-6 text-[color:var(--slab-text-muted)]">
                Most sellers stall because moving is work. So a machine does it.
              </p>

              {/* E3 at mobile sits BELOW the field, so it is rendered once, after this
                  column, and moved by the grid at lg. See the comparison block below. */}

              {/* E4 + E5 — the field and the action. */}
              <div className="mt-5">
                {/* THE PICKER. Above the field because it changes what the field
                    IS — its label, its placeholder, its rule and where it sends
                    her. A control that reframes the one below it belongs first
                    in the reading order, not beside it. */}
                <div
                  role="radiogroup"
                  aria-label="Where your shop is now"
                  className="mb-3 flex flex-wrap gap-2"
                >
                  {LIVE_SOURCES.map((entry) => {
                    const selected = entry.id === sourceId;
                    return (
                      <button
                        key={entry.id}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => {
                          setSourceId(entry.id);
                          // Her Instagram handle is not a website address. Clearing
                          // is kinder than validating what she typed for the other one.
                          setHandle("");
                          setError(null);
                        }}
                        // Selected is an orange TINT, not the solid brand fill.
                        // White on orange-500 measures 2.80:1 — below AA — and a
                        // second solid-orange control sitting a few pixels above
                        // the submit button also fights it for the eye. The tint
                        // reads as chosen at 9.3:1 and leaves the button the only
                        // solid orange thing in the slab.
                        className={
                          selected
                            ? "rounded-full border border-orange-400/60 bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-200"
                            : "rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        }
                      >
                        {entry.label}
                      </button>
                    );
                  })}
                  {COMING_SOON.map((entry) => (
                    <span
                      key={entry.id}
                      className="cursor-not-allowed rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/50"
                    >
                      {entry.label}
                      <span className="ml-1.5 text-[11px] font-bold uppercase tracking-wider text-white/50">
                        {entry.note}
                      </span>
                    </span>
                  ))}
                </div>

                <label
                  htmlFor={fieldId}
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--slab-text-muted)]"
                >
                  {source.fieldLabel}
                </label>
                <PlaceholdersAndVanishInput
                  // Remounted per source so the vanish animation and the rotating
                  // placeholder both restart rather than finishing the last one's.
                  key={source.id}
                  id={fieldId}
                  name={source.id === "instagram" ? "instagram_handle" : "website_url"}
                  placeholders={source.placeholders}
                  // "@" belongs to a handle. On a website field it reads as a
                  // typo she has to work around.
                  prefix={source.id === "instagram" ? "@" : ""}
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
                    if (!handle || source.id !== "instagram") return;
                    const parsed = parseHandle(handle);
                    setError(parsed.ok === false ? HANDLE_ERROR_COPY[parsed.reason] : null);
                  }}
                  onSubmit={validateAndGo}
                  submitLabel={source.submitLabel}
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
                <p className="mt-3 flex items-start gap-2 text-[13.5px] text-[color:var(--slab-text-muted)]">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--kept-green-on-dark)]"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    {source.id === "instagram"
                      ? "No Instagram password. No permissions. We read what is already public."
                      : source.id === "linktree"
                        ? "No login. We read the links you already show everyone."
                        : "No login. No plugin. We read what your shop already shows buyers."}
                  </span>
                </p>

                {/* E7 — state the gate BEFORE she is turned away by it. */}
                <p className="mt-1.5 flex items-start gap-2 text-[13.5px] text-[color:var(--slab-text-muted)]">
                  <Info
                    className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--info-on-dark)]"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    {source.id === "linktree" ? (
                      <>We follow your links and read whichever shop they point at.</>
                    ) : source.id === "instamojo" ? (
                      <>Works with Instamojo stores, on your own domain or theirs.</>
                    ) : source.id === "shopexer" ? (
                      // Verified against three live Shopexer shops. Naming the platform
                      // she is on is worth more than "most websites", which is a claim
                      // we could not keep.
                      <>Works with Shopexer shops. Nothing to install, nothing to export.</>
                    ) : source.id === "website" ? (
                      // Shopify by its feed, everything else by its sitemap and product
                      // markup. Both are real; neither is "most websites".
                      <>Works with Shopify, and most shops that Google can already find.</>
                    ) : (
                      <>
                        Works with Instagram Business accounts.{" "}
                        <a
                          href={IG_BUSINESS_HELP}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
                        >
                          Not sure?
                        </a>
                      </>
                    )}
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
                    "h-[200px] w-full rounded-2xl border border-[color:var(--slab-chip-border)] sm:h-[270px] lg:h-[250px]"
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

          {/* E8 — FOUR MARKERS, NOT FOUR CARDS.
              Slimmed twice. First from `p-5` panels with stacked badges; then the
              box itself came off — border, fill, padding and hover. A bordered,
              filled rectangle says "this is a separate object you can act on", and
              these are four words about a sequence that has already happened by the
              time she reads them. Spending a card on each made them argue with the
              field above, which IS the thing to act on.
              An `<ol>`, because the order is the content (R: structure is
              information). Title and body run on ONE line so a step is one glance. */}
          {/* ONE COLUMN AT 390, not two. Two columns give each step a ~165px track,
              which wraps "You type your handle. Nothing to send." onto three ragged
              lines — measured 155px for the row. Stacked, each step is one line and
              the whole row is ~116px. Narrower is not always shorter. */}
          <ol className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7">
            {steps.map(({ n, title, body }) => (
              <li key={n} className="flex items-baseline gap-2">
                <span
                  aria-hidden
                  className="inline-flex size-[18px] shrink-0 translate-y-[2px] items-center justify-center rounded bg-orange-500 text-[10.5px] font-bold text-white"
                >
                  {n}
                </span>
                <p className="min-w-0 text-[13px] leading-snug">
                  <span className="font-bold text-white">{title}.</span>{" "}
                  <span className="text-[color:var(--slab-text-muted)]">{body}</span>
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="mb-3 text-[15px] font-bold text-white">You lose nothing by moving</p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {keeps.map((k) => (
                <li
                  key={k}
                  className="flex items-start gap-2 text-[13.5px] text-[color:var(--slab-text-muted)]"
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
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/move-my-store"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/25 px-6 text-[15px] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
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
