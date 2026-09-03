# Blog agent log

One dated entry per run, newest at the top. Never edit a past entry — append only.

---

## Run 1 — 2026-09-03 05:59–06:09 UTC

Run manually triggered locally (not the cloud routine) so Raunak could watch the
loop execute directly before trusting the scheduled version. First real run —
bootstrap entry below confirms no prior run happened; `gh pr list --head "blog-agent/*"`
confirmed no open PR either.

### Competitor scan — all 7 checked, in parallel via subagent research

- **DM2Buy** — dormant. Free + ₹999/mo Pro tiers, unchanged. App last updated Play
  Store Oct 2025 (~10 months stale). No new features, no Reddit sentiment either
  direction, no page targeting oBizee. 2026-08-25 finding still holds unchanged.
- **Shopify** — no India-specific plan or pricing exists; standard global tiers
  (₹1,994–₹30,164+/mo) billed in INR + 18% GST. Shopify Payments still unavailable
  in India (third-party gateways required); GST invoicing is bolt-on via App Store
  extensions, not native. Confirmed structural facts; could not verify fresh
  Reddit/X virality (tool limitation, flagged honestly by the research pass rather
  than guessed at).
- **Instamojo** — payments-first framing is now outdated: RBI rejected their
  Payment Aggregator license (Sept 2023), they confirmed in Feb 2024 they would
  not reapply, and have pivoted hard to "D2C Tech" / storefront software with
  third-party payment partners. Current live pricing: Lite (free), Starter
  (₹6,999/yr), Growth (₹14,999/yr), Do-It-For-Me (custom). Payout-delay
  complaints are **still current** — Trustpilot 1.6/5, recent 2026 reviews
  repeat the same "can't get our own money out" pattern. No page targeting
  oBizee.
- **WooCommerce** — no structural change. TCO still runs $1,800–$15,000+/yr once
  hosting, extensions and payment processing are counted. 2026 product direction
  is AI-agent commerce (WooCommerce 10.9) and PayPal/Google Shopping
  partnerships, nothing India-specific. No India-no-code-competitor content from
  Automattic. Confirmed gap: nobody (not Shopify, not Zoho Commerce, not the
  Indian directory sites) has planted a flag on "India-native, no-code,
  GST-native" with real depth — open lane for oBizee.
- **SitesPlaced — escalation, not routine.** Since the 2026-08-25 teardown they
  industrialized their comparison mechanic: **6 new `/vs/[competitor]` pages went
  live 2026-08-28** (dukaan, shopify, bikayi, instamojo, woocommerce, storemaker —
  a competitor not on our list). No `/vs/obizee` page exists yet — we are not
  their explicit target. Their older `sitesplaced-vs-dm2buy` post (3+ months
  indexed) **already ranks #2 for "dm2buy alternative"**, ahead of oBizee. The new
  batch has not ranked yet for "shopify alternative india" or "dukaan
  alternative" (expected lag for 6-day-old URLs) — **re-check these two queries
  in 2–3 weeks** to catch the inflection point before their pages mature in the
  index. Their `/vs/` template's spine now gives migration its own dedicated
  step-by-step section (ours still doesn't, on any page).
- **Bikayi — the big one. Their storefront product is discontinued.**
  bikayi.com 301-redirects to a founders' Notion memo; the Android app (8.2M+
  downloads at peak) was delisted from the Play Store in **Nov 2023**. Pivot
  brands bik.ai (WhatsApp CRM) and Manifest AI (AI shopping-assistant widget for
  *other* platforms' stores) are not storefront builders. Trustpilot: 0 reviews
  in 12 months. Every third-party comparison site (Dukaan's own included) is
  still comparing against 2022-era Bikayi pricing/features that no longer exist.
  **oBizee's own `obizee-vs-bikayi` page was making the same mistake** — see
  Fixed, below.
- **Dukaan** — pricing changed materially. Every tier, **including Free**, now
  carries a per-order "Dukaan Service Fee" on top of the subscription: 4.99%
  (Free) down to 0.99% (Infinity), capped ₹200/order — direct descendant of the
  Oct 2023 fee-backlash controversy, never removed, just tiered. Support-quality
  complaints continuing into Feb 2026 Trustpilot reviews (unresponsive tickets,
  payment issues). Their own alternative-facing blog posts have no FAQ section
  and no migration offer at all (verified via in-page search) — a real
  structural gap oBizee can beat, not just out-argue on price.

### Fixed this run

1. **`src/lib/productSchema.ts`** — the shared `OBIZEE_SOFTWARE_SCHEMA` JSON-LD
   (imported into 8 files: all 6 `Compare*.tsx` pages, `BestPlatforms2026.tsx`,
   `AlternativesListicle.tsx`) stated an exact fee in both its `offers.description`
   and `featureList`: *"1% platform fee per successful order capped at ₹10.
   Payment gateway from 1% per transaction (Paytm 1%, Razorpay 2%)..."* — a
   direct, live, site-wide violation of the 2026-08-31 R3 policy (never state
   the exact fee outside `/pricing`). This is the schema search engines and LLMs
   parse directly for "what does oBizee cost" per the file's own header comment,
   so this was likely actively feeding the wrong answer to AI Overview / ChatGPT
   / Perplexity. Replaced with the FREE/0-SUBSCRIPTION framing pointing to
   `/pricing`, matching `llms.txt`'s own (already-compliant) wording. **Did not**
   bump `dateModified` on the 8 importing pages — I only touched the shared
   schema file directly, not those page files; flagging this judgment call
   rather than silently deciding either way (see Open item below).
2. **`src/pages/CompareBikayi.tsx`** — full correction, not a patch. The page was
   telling readers Bikayi's "store builder is well made," recommending it for
   "WhatsApp Business API integration and AI-powered store building," and
   quoting live pricing at "₹999/month" — all now false. Rewrote hero, quick
   verdict, feature table (removed rows claiming Bikayi has live features it no
   longer has), the "why choose oBizee" cards, all three stage-narrative "rival"
   cells, and the FAQ block — added a new lead FAQ ("Is Bikayi still around in
   2026?") naming the discontinuation directly, per the R5 "FAQ names the worst
   objection" mechanic, since that's now the actual worst/most useful objection
   a searcher has. `dateModified` bumped to 2026-09-03 (real date, real edit —
   verified via `date`, not guessed) since this page's own file was directly
   edited. Verified in-browser (Next.js dev server): renders cleanly, no console
   errors, `tsc --noEmit` clean.

### Gap analysis — component/section spine, checked against `sitesplaced-teardown.md`

Read `CompareDM2buy.tsx` and spot-checked `CompareShopify/Dukaan/Bikayi/Woocommerce.tsx`
in full. All six compare pages have a comparison table and FAQ (good), and a
stage-based narrative that partially substitutes for an evaluation-criteria
section — but **all six are missing named customer proof and a dedicated
migration offer**, the two mechanics `sitesplaced-teardown.md` flagged as unused
back on 2026-08-25 and still unused today. The real numbers (887 products across
4 named merchants, 3,281 lifetime orders) remain available and unused. **Not
written this run** — adding named proof needs the four merchants'
permission first (per the teardown's own note), which is outside what this
agent can clear on its own; flagging as the top candidate for a future run once
that permission question is resolved. Also confirmed: **no `CompareSitesplaced.tsx`
exists** — SitesPlaced has no dedicated oBizee comparison page yet either, so
there's no urgency to reciprocate today, but this is now a tracked competitor
with zero owned content about it.

### Reddit scan (R9 — drafts only, appended to `reddit-drafts.md`)

Could not locate specific live Reddit threads via WebSearch for Bikayi-2026,
Dukaan-fee, or Instamojo-payout queries — same tool limitation the competitor
research hit repeatedly today (WebFetch blocked on reddit.com, search doesn't
surface thread-level Reddit content). Not fabricating thread URLs I can't
verify. Followed the file's own established pattern instead (its existing 4
drafts are also evergreen templates, not thread-specific) — added two new
evergreen drafts: **Draft 5** (what to say when someone recommends/asks about
Bikayi — the discontinuation is itself genuinely useful public-service info,
independent of any oBizee mention) and **Draft 6** (Dukaan's real per-order cost
once the Service Fee is counted). Both disclosed, lead with the answer, oBizee
mentioned last per the file's own rules. Not posted — Raunak or the team posts
by hand per R9.

### Ranking diagnosis (R8/step 8) — check #1, not yet at the 2-consecutive-day bar

- `obizee.com/compare/obizee-vs-dm2buy` — **indexed** (appears directly for its
  own `site:` query and for `site:obizee.com/compare`).
- `obizee.com/compare/obizee-vs-bikayi` — **not indexed** (absent from both its
  own `site:` query and the broader `/compare` one).
- `obizee.com/compare/obizee-vs-dukaan` — **not indexed** (same check, absent).
- Live competitive query **"bikayi alternative india"** — oBizee does not appear
  anywhere in results; FlexiCommerce, WSTORE, ShopUp and generic global platforms
  fill the space instead, despite Bikayi's own collapse being the single
  strongest opening this query space has had in years.
- This matches the bootstrap entry's own manual finding (most `/compare/*` pages
  never crawled despite weeks live) — **this is today's first automated check,
  not the second**, so the R8 escalation threshold (7+ days live, still
  unindexed after two consecutive daily checks → stop proposing on-page content,
  it's an off-page authority problem) has not formally fired yet. If tomorrow's
  run finds the same pages still unindexed, it fires then. Given today's
  evidence already points the same direction, this is very likely where it's
  headed — worth Raunak's attention now rather than waiting for the second
  formal check, especially since it undercuts the value of writing more
  Bikayi/Dukaan page content before the indexing problem itself is addressed.

### Open items for Raunak

1. **[NEEDS-INPUT] Footer.tsx site-wide fee disclosure.** The global site footer
   (rendered on every page, including all `/compare/*` pages) states "you pay 1%
   of it, capped at ₹10" next to the legal name/GSTIN block. This might be an
   intentional required disclosure sitting with the other legal info, or it
   might be the same kind of accidental R3 violation the schema file had — I
   can't tell which from this repo alone, and the blast radius (every page on
   the site) is much bigger than today's two fixes. Left untouched; your call.
2. **[NEEDS-INPUT] dateModified policy for schema-only changes.** When a shared
   file like `productSchema.ts` changes but the page `.tsx` files that import it
   don't get directly edited, should those 8 pages' `dateModified` still bump?
   I left them as-is this run (only touched the file I actually edited), but the
   rendered JSON-LD on all 8 did change today — flagging so this doesn't become
   a silent inconsistent precedent.
3. **Named-proof/migration-offer work is ready to start, blocked on one
   question**: do we have permission from crochetbypriya, shopvelnora,
   snazzystore and artbykhushh to name them publicly on comparison pages? This
   is the single highest-leverage content gap found today (and the one
   `sitesplaced-teardown.md` already flagged three weeks ago) — just needs that
   green light.
4. Indexing (see Ranking diagnosis above) is trending toward being the real
   bottleneck, not on-page content quality. Worth a deliberate look at G4/G8 in
   `GROWTH-CHECKLIST.md` (Reddit presence, backlinks, review-site listings)
   sooner rather than later.

Committed to `blog-agent/2026-09-03`, pushed, PR opened against `main` per R1.

### Addendum — 06:09–06:31 UTC, same run, interactive with Raunak

After the PR opened, Raunak directed two follow-ups directly:

**1. Closed the named-proof/migration-offer gap on the two flagship pages.** He set
`obizee-vs-dm2buy` and `obizee-vs-shopify` as the pages that get first/deepest attention
going forward (now codified as **R10** in `AGENT-RULES.md` — also mirrored into the
source-of-truth `SKILL.md`). Direct fetch of `sitesplaced.com/dm2buy-alternative` and
`sitesplaced.com/vs/shopify` (not memory/secondhand) confirmed the teardown's spine still
holds and added new specifics: their FAQ answers are fully present in `FAQPage` JSON-LD
even though visually accordion-collapsed, every H2 reads as the literal question a
searcher/AI would ask, and numbers are always concrete (827 products, 24 hours, 11/50
early-bird slots) rather than vague. R10 captures this as the content-directness bar.

Built and shipped, reusing already-approved assets instead of writing new content or
waiting on new permission:
- `src/components/Testimonials.tsx` (the homepage's approved seller-quote grid — 6
  sellers, all approved 2026-08-31) is now also rendered on both flagship pages.
- New `src/components/CompareMigrationOffer.tsx` — a compact 4-step + "what you keep"
  migration section, per-competitor personalized copy and WhatsApp message, linking to
  the full `/move-my-store` page for detail.
- New `src/data/migrationOffer.ts` — extracted the steps/keeps data out of
  `MoveMyStoreClient.tsx` into one shared source, so the full page and the new compact
  section can't drift apart. Also fixed a real bug found in the process: the migration
  page's own step-1 copy listed Dukaan/Shopify/Bikayi/Instamojo as source platforms but
  never DM2Buy — despite DM2Buy being one of the four highest-priority switch-from
  targets. Fixed.
- Both flagship pages' `dateModified` bumped to 2026-09-03 (real edit, real date).
- Verified: `tsc --noEmit` clean, both pages render with no console errors, migration CTA
  correctly personalizes per competitor (checked via the rendered WhatsApp link text on
  both pages, not assumed).

**2. Updated the rulebook itself** (`AGENT-RULES.md`, the mirrored `SKILL.md`, and
`CONTEXT.md`) so future scheduled runs inherit today's decisions rather than this being a
one-off. R5 now points first at `sellerQuotes.ts`/`move-my-store` (today's discovery)
before falling back to `sitesplaced-teardown.md`'s raw numbers. R10 is new. `CONTEXT.md`'s
settled-decisions section records both changes with the reasoning, per its own "why"
convention.

Not yet done, flagged for a future run rather than attempted today: extending the same
named-proof + migration-offer sections to the other 4 compare pages (Dukaan, Bikayi,
Instamojo, WooCommerce). Per R10 this is intentionally lower priority than the two
flagship pages, but should still happen — `CompareMigrationOffer` and `Testimonials` are
now both drop-in ready for any compare page, so this is fast follow-up work, not a
rebuild from scratch.

Committed as a second commit on the same `blog-agent/2026-09-03` branch, pushed, PR #1
updated (not a new PR).

---

## Bootstrap — 2026-09-03

Agent created and deployed today, seeded from the session that did the manual version
of this work by hand: fixed the Lovable favicon, the badge that undersold oBizee to
Google's AI Overview, ~30 missing dates/bylines, a backwards domain-mapping claim, an
incomplete llms.txt, and confirmed (via `curl` as Googlebot + `site:` search) that most
of the `/compare/*` pages were never crawled by Google at all despite being live for
weeks. No run has happened yet — this entry exists so the first real run has something
to read in step 1.
