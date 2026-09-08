# Project Context — obizee.com (Original-obizee-website)

The public marketing site and the `/import` flow. Next 14, App Router for `/import`,
Pages-style route components under `src/pages` for the marketing routes, Tailwind,
`output: export` (static) with `trailingSlash: true`.

Started 2026-09-08. Entries before that date are reconstructions from the code and are
tagged `[ASSUMED]` where they were not confirmed by Raunak.

---

## ENTITIES

### [FACT] MoveYourShop
- **Type:** Marketing section (the import hand-off)
- **Files:** `src/components/MoveYourShop.tsx`
- **Depends on:** `lib/import/handle.ts` (`parseHandle`), `lib/import/source.ts` (`parseSourceRef`), `PlaceholdersAndVanishInput`
- **Depended on by:** the home page; it is the ONLY entry point into `/import`
- **Carries:** `data-entry="import-handoff"` — the hook every render check in this repo scrolls to
- **Hands off to:** `/import/?h=<handle>` (Instagram) or `/import/?src=website&h=<host>`
- **If changed:** the slab rectangle (`rounded-3xl bg-gray-900 px-6 py-12 sm:px-12 sm:py-16` inside `max-w-7xl px-4 sm:px-6 lg:px-8`) is duplicated in `app/import/page.tsx` and `ImportSlab` so the panel does not jump across the hand-off. Change it in all three or none.

### [FACT] lib/import/source.ts
- **Type:** Module — the one place a source's rule and its words live
- **Files:** `src/lib/import/source.ts`
- **Exports:** `IMPORT_SOURCE_IDS`, `parseSourceId`, `parseSourceRef`, `normaliseWebsiteRef`, `SOURCE_UI`, `formatRef`, `WEBSITE_ERROR_COPY`
- **Depends on:** `lib/import/handle.ts` — Instagram's rule is imported, never copied
- **Depended on by:** `MoveYourShop`, `app/import/page.tsx`, `HandleChip`, `SourceMasthead`, and (types only) `ImportRoute`, `GateScreen`, `CodeStep`, `WorkingScreen`, `ReportScreen`, `useSettle`, `identity.ts`
- **Mirrors:** `OM-backend/import/registry.js` (the source set) and `ImportController.js:356` (unknown source ⇒ Instagram)
- **If changed:** adding a source means one row in `IMPORT_SOURCE_IDS` + `SOURCE_UI`, one branch in `parseSourceRef`, one entry in `MoveYourShop`'s `LIVE_SOURCES`, one mark in `HandleChip`'s `SOURCE_MARK`, AND a matching adapter + registry entry in OM-backend or the create call 422s.

### [FACT] lib/import/handle.ts
- **Type:** Module — the Instagram handle rule
- **Files:** `src/lib/import/handle.ts`
- **Derived from:** `OM-backend/import/adapters/instagram/client.js` (`normaliseHandle`, `HANDLE_PATTERN`)
- **Depended on by:** `lib/import/source.ts` only (since 2026-09-08; before that, four callers)
- **If changed:** it must not drift from the server's rule — a looser client rule ships a handle the server rejects, a tighter one refuses a real account.

### [FACT] app/import/page.tsx
- **Type:** Route (App Router, inside `<Suspense>`)
- **Depends on:** `parseSourceId`, `parseSourceRef`, `deriveImportState`, `ImportRoute`, `ImportChrome`
- **Reads:** `?h=` (ref), `?src=` (source, default instagram), `?job=` (job id)
- **Emits:** `data-state`, `data-handle`, `data-source` on its wrapper — the hooks render checks assert against
- **If changed:** `useSearchParams` forces this subtree client-side; a static export cannot know `?h=` at build time, so the chip lands on the first CLIENT render, not in the first byte of HTML.

### [FACT] ImportRoute
- **Type:** Client route controller
- **Files:** `src/components/import/ImportRoute.tsx`
- **Depends on:** `GateScreen`, `CodeStep`, `WorkingScreen`, `ImportOutcome`, `ImportSlab`
- **Owns:** `?h=` / `?job=` writes via `router.replace`, and `onRestartGate` which rebuilds the query keeping `src` alongside `h`
- **If changed:** every URL write goes through `setParam`/`onRestartGate`. A `push` instead of a `replace` puts a dead job in the Back history.

### [FACT] HandleChip
- **Type:** Component — the carried ref, editable
- **Files:** `src/components/import/HandleChip.tsx`
- **Depends on:** `SOURCE_UI`, `formatRef`, `parseSourceRef`, `middleTruncate`, `InstagramMark` / `WebsiteMark`
- **If changed:** the prefix (`@`) is DECORATION beside the value, never stored in it — the server rejects a handle containing it.

### [FACT] startImport
- **Type:** API call — `POST /import/jobs`
- **Files:** `src/lib/import/identity.ts`
- **Posts:** `{ sourceType, ref, handle: ref }` — both keys, because `ImportController.js:370` reads `ref ?? handle` while the Instagram branch at `:367` reads `handle` only
- **Called by:** `lib/import/useSettle.ts` (the gate) and `WorkingScreen` (the retry) — BOTH must pass `sourceType`
- **If changed:** a 409 carrying a `jobId` is treated as SUCCESS, not failure — an import already running is the thing she asked for.

### [FACT] Cross-site session
- **Type:** SSO between obizee.com and dashboard.obizee.com
- **Files:** `src/lib/crossSiteSession.ts`, `src/lib/merchantAuth.ts`; consumer side in `obizee-dashboard/src/lib/auth/crossSiteSession.ts` and `src/proxy.ts`
- **Mechanism:** AES-encrypted cookie `obz_sso_v1` on `.obizee.com` + a host-only `obz_sso_seen` fingerprint so a stale shared session cannot override a newer local one
- **If changed:** see the DECLINED entry below — the token NEVER travels in a URL.

### [FACT] WEBSITE_API_URL
- **Type:** Runtime config
- **Files:** `src/lib/runtime-config.ts`
- **Values:** prod `https://prod.obizee.com`, local `http://localhost:8080` (OM-backend)

---

## DECISIONS

### [DECISION] 2026-09-08 — An unknown `?src=` resolves to Instagram, not an error
- **Chose:** `parseSourceId` defaults anything unknown/absent/malformed to `instagram`
- **Over:** refusing with a 4xx-style outcome screen
- **Why:** it is the same default `ImportController.js:356` applies to a body with no `sourceType`, so the two ends of the hand-off cannot disagree about what an unlabelled request means. A `?src=` this build does not know is a link from a newer deploy, not an attack.
- **Affects:** `app/import/page.tsx`, every `/import/` link already sent to a merchant

### [DECISION] 2026-09-08 — The selected source pill is a tint, not the solid brand fill
- **Chose:** `bg-orange-500/20` + `text-orange-200` + `border-orange-400/60` — measured 9.86:1
- **Over:** `bg-orange-500` + white text — measured 2.80:1, below WCAG AA
- **Why:** contrast, and hierarchy: a second solid-orange control sitting ~60px above the submit button fought it for the eye. The button should be the only solid orange on the slab.
- **Affects:** `MoveYourShop`

### [DECISION] 2026-09-08 — The route chrome and page title are source-neutral
- **Chose:** eyebrow `Shop import`, title `Import your shop — oBizee`
- **Over:** switching them per source
- **Why:** `ImportChrome` sits OUTSIDE the `<Suspense>` boundary that resolves `?src=`, and `output: export` builds the `<head>` once — neither can vary by query. A subtitle that renamed itself as she corrected her ref would also destroy the stable "you are on oBizee" signal the chrome exists for. The CHIP says which shop.
- **Affects:** `ImportChrome`, `app/import/layout.tsx`

### [DECISION] 2026-09-08 — `WebsiteMark` is a Lucide globe, deliberately generic
- **Chose:** Lucide `Globe`
- **Over:** a drawn mark, or Shopify's logo
- **Why:** the opposite call to `InstagramMark` (a fetched official brand SVG) for the opposite reason. "Her own website" is a CATEGORY with no published mark; drawing one invents a brand (R4/R12), and stamping Shopify on a field that accepts any storefront tells a seller on another platform this is not for her.
- **Affects:** `src/components/import/marks.tsx`, `HandleChip`

### [DECLINED] 2026-09-07 — Passing the merchant token through a URL
- **Why rejected:** Raunak, verbatim: *"under no condition, there will be token sharing via url"*
- **Instead:** an AES-encrypted cookie on `.obizee.com` under a name the storefront does not use, plus a host-only fingerprint cookie
- **Revisit if:** never, unless he says so

---

## SESSION LOG

### Session — 2026-09-08
- [DONE] Source pills on the marketing slab (Instagram / My website / DM2Buy Soon) + step cards slimmed — commit `d1ac474`
- [DONE] `/import` route made source-aware; `lib/import/source.ts` added — commit `90208e8`
- [DONE] Fixed two call sites starting an Instagram job whatever the source: `useSettle` and `WorkingScreen`'s retry
- [DONE] Verified both flows by rendering at 1440 and 390: pasted `HTTPS://Phuljhadi.com/collections/all?page=2` normalises to `phuljhadi.com`; Instagram path byte-unchanged
- [DONE] Pushed `654ef09..d1ac474` to main; Amplify rebuild triggered
- [DONE] obizee-dashboard deployed (`npx vercel --prod`, `dpl_4PsckHuXYYLtjJbjKYj8AoYeXHNo`); login page verified live at 1440 and 390
- [DONE] Reverted the unused `gsap` dependency from obizee-dashboard's package.json — nothing imported it
- [FACT] The website adapter reads phuljhadi.com: 2,277 products, 43 categories, ~31s, no model calls
- [FACT] A transient Shopify throttle is reported as a permanent, non-retryable 422 "this website is not one we can read yet" — reproduced; spawned as a separate task
- [FACT] DM2Buy's API (`api.dm2buy.com/v4|v5`) 502s from Azure App Gateway; their own storefront renders blank. Their product endpoint could not be discovered.
- [PREFERENCE] Under no condition may the Instagram extraction flow be touched or broken

### Session — 2026-09-08 (later)
- [DONE] Fixed the edit-loss bug: her prices and titles now live in `job.edits`, keyed to `posts[]`, and survive any re-group. 12 new tests, 332 pass. OM-backend `60aceb0`
- [DONE] `postAssembly` refuses a published job with 409 `import_already_published`; `GroupingChoice` now shows the refusal instead of silently rolling the dot back
- [DONE] "You can change this later" replaced — it was false. She cannot change it after publish
- [DONE] `?resume=1` skips the gate for a signed-in merchant — `478a508`
- [FACT] Reading `localStorage` in a lazy initialiser inside the `/import` Suspense boundary DOES hydration-mismatch. The boundary's `fallback={null}` does not mean "no server HTML" — measured, React threw the subtree away
- [FACT] A `started` ref plus a cleanup `cancelled` flag deadlocks under React 18's double-mount: the only in-flight request is cancelled and nothing retries
- [NEEDS-INPUT] Brief written for the remaining two: `_project-docs/planning/product-brief-second-import.md`

---

## OPEN ITEMS

- [NEEDS-INPUT] Add `https://dashboard.obizee.com` to the OAuth client's Authorised JavaScript origins (Google Cloud Console → project `obizee-507804`). Dashboard Google login returns `Error 400: origin_mismatch` until then. Google bounced the Save to a password wall, so this is Raunak's to do.
- [NEEDS-INPUT] The apex 404: `https://obizee.com/import/` and every path but `/` return 404. Runbook with the exact steps is at `_project-docs/runbook-apex-deep-paths.md` — AWS Console work, needs his login. `aws` CLI session on this machine is expired.
- [IN-PROGRESS] One real website import over HTTP, end to end. The capture layer and the request body are both verified; `POST /import/jobs` sits behind `verifyToken`, so creating a live job needs a merchant session Raunak has to establish.
- [IN-PROGRESS] The dashboard home rebuild and the SSO precedence fix are deployed but unverified in production — both sit behind auth.
- [NEEDS-INPUT] DM2Buy adapter — blocked on their API. Retry when `api.dm2buy.com` stops 502ing.
- [ASSUMED] No test anywhere covers `sourceType` or the website path at the HTTP layer, in this repo or OM-backend. Worth a ticket.
- [NEEDS-INPUT] Three questions in `product-brief-second-import.md` block the re-group-after-publish work: whether it should exist at all versus "just import again", deactivate vs delete for dropped products, and whether import jobs ever expire.
- [IN-PROGRESS] Nothing writes `?resume=1` yet. The gate short-circuit works but has no caller until the dashboard entry point ships (Part A of the brief).
