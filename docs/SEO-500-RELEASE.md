# 500-page content release

Base: `f97ee527d50f49e0154ade32fb0157a05154f273` on `Raunakkmrr/obizee.com` main. Scope: marketing and learning site only. No merchant storefront, backend or DNS change.

Includes500 programme pages plus one attributed merchant-feedback page, crawlable library pagination, calculators, help search, canonical metadata, accurate structured data/breadcrumbs, deduplicated sitemap and restrained machine-context navigation. No count credit for pagination or integrated feature sections.

`src/pages` presentation files moved to `src/legacy-views` to prevent accidental public route aliases. App Router destinations retained; source implementation retained. Original untracked planning/design files are excluded.

## Release gate

Use the existing lockfile and build workflow. `npm run build` followed by `npm run test:content-release` verifies the exported artifact. Amplify configuration runs both before publishing out/. Public build must not set `SEO_EDITORIAL_PREVIEW=1`: the gate intentionally rejects noindex content. Private preview remains possible locally with that flag. No credentials or new dependencies required.

No made-up author/date/rating/merchant results are added. Help/product instructions retain explicit source/live-account limits. Technical pass is not proof of factual freshness, full visual acceptance, search indexing, analytics reception or AI citations. Public review route is not-found. Tests/dev source do not belong to out/.

## Deployment and rollback

This is a prepared local commit, not a push. Recheck remote main before publishing. If it has advanced, reconcile rather than overwrite. Never force push. Observe the existing deployment and verify www.obizee.com, robots/sitemaps, representative routes, private-review refusal and unrelated merchant hosts.

Rollback a deployed release by reverting this release commit in Git, then letting the existing deployment rebuild the reverted tree. If subsequent changes exist, inspect conflicts and preserve them. Do not reset main to the base or rewrite remote history. An available hosting previous-deployment restore may be used only after verifying the exact app and deployment; AWS/app identity was intentionally not inspected during preparation at the user's direction.

Live Search Console/analytics and responsive browser verification remain post-release checks; no index or conversion receipt is claimed from local exports.
