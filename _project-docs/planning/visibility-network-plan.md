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
- [~] 1.5 deploy watcher running on mitraso.obizee.com Verify live on 2 storefronts (one subdomain, one custom domain)

## Phase 2 — Merchant directory on www ("Real shops built on oBizee")
78 merchants qualify today. Buyers searching categories find real shops; shops
link back; www links out to the network it owns. No competitor can copy this page.

- [x] 2.1 /shops exists: filterable grid + ItemList JSON-LD off liveShops.ts (43 entries, Aug 27) Inspect existing `app/shops` route on www — extend, never duplicate
- [x] 2.2 78 qualifying merchants exported; 40 keep curated categories, 38 new classified, 2 stale dropped (velora, rrbvisioniq) Export directory dataset from prod (read-only): businessName, subDomain,
      businessImage, city/state, product count, dominant category (via productcategories join)
- [ ] 2.3 Build/extend the directory page: category sections (only categories with ≥2 shops),
      each shop = image + name + city + product count + outbound link; CTA per section → /for/ vertical
- [ ] 2.4 Sitemap entry + lastmod; run full release suites (page sits outside the 518 programme)
- [ ] 2.5 Visual check desktop + 390px; deploy; verify live
- [ ] 2.6 GSC: request indexing (if rolling quota allows today)

## Phase 3 — India Home Seller Report (draft → Raunak approves numbers → publish)
- [ ] 3.1 Read-only aggregates: orders/month trend, AOV, COD vs prepaid split if derivable,
      time-to-first-order, category mix (names, not ids), festival-window comparison
- [ ] 3.2 Draft report page with every number traceable to its query
- [ ] 3.3 GATE: present numbers to Raunak — nothing publishes without his yes
- [ ] 3.4 On approval: publish, sitemap, GSC request, distribution list (communities/press)

## Explicitly out of scope this pass
Google Shopping feed flip (waits on dev agent's slug work) · WhatsApp Channel (needs
his account) · YouTube (needs his voice/face) · ONDC (product bet, separate decision).
