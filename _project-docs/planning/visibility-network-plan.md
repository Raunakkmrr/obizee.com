# Visibility Network Plan — merchants as distribution

Approved by Raunak 2026-10-15 ("i like the plan.. we can go ahead"). Three plays, in order.
Ground truth queried from production 2026-10-15 15:50 IST (read-only):
**238 merchants · 218 live storefronts (all on subdomains) · 6 custom domains ·
80 stores with 2+ products · 78 directory-ready (2+ products AND businessImage) ·
65 have taken an order · 3,175 products · 4,092 orders.**
The earlier "140 storefronts" figure was a stale dev-brief count — corrected here.

## Phase 1 — "Powered by oBizee" becomes a link (218 storefronts)
Finding: `star_by_obizee/components/layout/Footer.tsx` renders "Powered by oBizee"
as PLAIN TEXT in both footer variants (lines ~238, ~437). 218 domains Google
already crawls heavily pass zero signal to www.

- [x] 1.1 Wrap both render sites in an anchor to https://www.obizee.com/ with
      utm_source=merchant-storefront&utm_medium=powered-by (GA4 attribution; equity flows)
- [x] 1.2 Keep visual style identical per template variant; respect poweredByText override
- [x] 1.3 (build green on node 20+; anchor verified in chunk output) Lint + build star_by_obizee; verify anchor in output
- [x] 1.4 (star 986c9b2 pushed) Commit, push (auto-deploys: Amplify wildcard + 6 Vercel custom-domain projects)
- [x] 1.5 LIVE on mitraso.obizee.com (wildcard host); custom-domain check pending next Vercel build (active: cozoracreation.com, daresbold.com, snazzystore.co.in, blushboxg.in)

## Phase 2 — Merchant directory on www ("Real shops built on oBizee")
78 merchants qualify today. Buyers searching categories find real shops; shops
link back; www links out to the network it owns. No competitor can copy this page.

- [x] 2.1 /shops exists: filterable grid + ItemList JSON-LD off liveShops.ts (43 entries, Aug 27) Inspect existing `app/shops` route on www — extend, never duplicate
- [x] 2.2 78 qualifying merchants exported; 40 keep curated categories, 38 new classified, 2 stale dropped (velora, rrbvisioniq) Export directory dataset from prod (read-only): businessName, subDomain,
      businessImage, city/state, product count, dominant category (via productcategories join)
- [x] 2.3 (existing filterable grid refreshed 43→77 shops; 38 screenshots captured headless, 0 broken; categories with live counts) Build/extend the directory page: category sections (only categories with ≥2 shops),
      each shop = image + name + city + product count + outbound link; CTA per section → /for/ vertical
- [x] 2.4 /shops/ already in sitemap-core; suites green (594-page build) Sitemap entry + lastmod; run full release suites (page sits outside the 518 programme)
- [x] 2.5 rendered + image-integrity checked (77 cards, 0 broken); pushed 4908dc2; deploy watcher running Visual check desktop + 390px; deploy; verify live
- [ ] 2.6 GSC: request indexing (if rolling quota allows today)

## Phase 3 — India Home Seller Report (draft → Raunak approves numbers → publish)
- [x] 3.1 aggregates queried 2026-10-15 (read-only) — see session log Read-only aggregates: orders/month trend, AOV, COD vs prepaid split if derivable,
      time-to-first-order, category mix (names, not ids), festival-window comparison
- [x] 3.2 report page built: hero, 6 stat tiles, 2am section, 16-month table, economics/adoption, geography, Method-honestly box; Report JSON-LD; verified desktop+375 Draft report page with every number traceable to its query
- [x] 3.3 GATE passed — Raunak 2026-10-15: "yes numbers are correct, 2am is real sellers working late. publish it": present numbers to Raunak — nothing publishes without his yes
- [x] 3.4 published (1a84a44+d4e5a65): /india-home-seller-report/ + footer link + llms.txt both copies + dated sitemap entry; deploy watcher running; GSC request + distribution list = next session (rolling quota spent today)

## Explicitly out of scope this pass
Google Shopping feed flip (waits on dev agent's slug work) · WhatsApp Channel (needs
his account) · YouTube (needs his voice/face) · ONDC (product bet, separate decision).
