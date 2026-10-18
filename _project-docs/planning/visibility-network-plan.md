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
- [x] 1.5 LIVE on the wildcard host (mitraso verified) and on snazzystore.co.in + blushboxg.in
- [ ] 1.6 daresbold.com and cozoracreation.com still serve the OLD build (~5h after push, measured 20:50 IST) — their Vercel projects do not auto-build from main; needs a one-click Redeploy per project in Raunak's Vercel dashboard. Re-checked automatically by tomorrow's cron.

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
- [x] 3.4 published (1a84a44+d4e5a65) and live-verified 18:40 IST: /india-home-seller-report/ + footer link + llms.txt both copies + dated sitemap entry

## Explicitly out of scope this pass
Google Shopping feed flip (waits on dev agent's slug work) · WhatsApp Channel (needs
his account) · YouTube (needs his voice/face) · ONDC (product bet, separate decision).

## STILL OPEN — 2026-10-15 21:00 IST
- [~] 1.6 RESOLVED as two different root causes (2026-10-18 18:50 IST), neither a deploy problem:
      · daresbold.com — deploys were always fine (Vercel API: 986c9b2 then 20f27a6 READY); the bold template renders its OWN footer (template-bold-v1/ui.tsx:408) which my Footer.tsx edit never touched, and daresbold's poweredByText is empty so NO credit rendered at all. Fixed: anchor + "Powered by oBizee" fallback in bold's footer; shipping now.
      · cozoracreation.com — our build is correct (storefront-cozoracreation.vercel.app serves the link) but the merchant's www DNS CNAMEs to serve.shoopy.in / edge.clevup.in — a COMPETITOR (Shoopy) serves their public domain; apex points to 34.131.166.98. Our customDomainStatus=active is stale. RAUNAK: call the merchant — churn/DNS-flip signal, not fixable by deploy.
- [x] 3.5 GSC indexing request in — green confirmation 10:49 IST Oct 16
- [ ] 3.6 Report distribution — RAUNAK: seller WhatsApp groups, founder post, press pitch ("a third of the home-seller workday happens after midnight")
- [ ] customHttp.yml — cache headers in amplify.yml are proven inert; chip pending Raunak's click (task_826eb62e)
- [ ] GA4 baseline read before the new funnels move the number — needs Raunak's Google login (whatsapp_click · editorial_article, and now · merchant-storefront referrals)
- [x] Oct 19–20 GSC checkpoint — RUN EARLY 2026-10-18 14:20 IST, PASSED: 4 of 6 hubs INDEXED (choosing-and-designing-store 113 links, businesses 60, catalogue-and-stock 43, fulfilment-and-support 40 = 256 of 348 post links now behind indexed hubs). selling-online (94) + choose-order-management-software (2) still queued — both re-requested today. Report page also indexed (~27h from request). Domain indexed count 557 → 570 and climbing.
- [ ] Nudge velora + rrbvisioniq (dropped off the shop wall: <2 products or no image) — RAUNAK or the merchant funnel
- [ ] Merchant-store agent's crawl fixes (54 soft-404 category urls, &subdomain= duplicate param, crawled fonts) — handed to that agent 2026-10-12, landing unverified

## QUEUE (approved direction, not started)
- Google Shopping free listings — gated on the dev agent's product-slug work
- ₹50,000-club story pages (42 merchants, template exists at /stories/crochetbypriya/)
- WhatsApp Channel: one tip daily from the 348 posts — needs Raunak's account
- Hindi YouTube from the 10 guides — needs Raunak's voice/face
- Play Store ASO pass on com.obizeee
- Next Seller Report edition: re-run queries ~Jan 2027