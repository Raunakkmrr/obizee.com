# Business-management positioning release

2 October 2026. Owner: primary Codex under the user's direct research-and-implementation assignment. Baseline: `168cb6054e5cba7b6d8ccf78cb5f5bbe3e7d0838`. Marketing site only; no backend, database, DNS, merchant storefront or pricing change.

## Decision

Lead positively with what oBizee helps an operating business manage: orders, customers, employees, catalogue, stock and financial records. The user explicitly rejected a negative homepage pitch about not bringing customers. Expectation-setting belongs in the relevant FAQ, with practical general education for readers at different business stages.

Employee management is explicitly confirmed available in the merchant app by Raunak in this task. No payroll, attendance or permission feature is inferred. Google/Meta copy is bounded to a product feed and required account/eligibility/approval setup, not automatic approval, paid advertising or guaranteed visibility. Read-only source references: `star_by_obizee/app/feed.xml/route.ts`, `star_by_obizee/lib/ads/feed.ts`, `OM-backend/controllers/AdsEligibilityController.js`. These are source checks, not a new live account integration test.

## Changes

- Positive homepage/metadata/CTA/signup message, same fee figures and price page.
- One practical software-selection guide: `/guides/choose-order-management-software/`. It teaches problem diagnosis, tool categories, a labelled example, exception testing, costs and switching checks. Existing home, library and three commercial pages link to it; sitemap entry included.
- Existing order-workspace, stock-tracking and social-seller pages receive clearer buyer-intent titles and intros; routes, capability limitations and source-check disclosure retained.
- Existing signup form asks category, order volume and main priority; optional channel and name remain. Beginner guidance does not prevent an enquiry. A visible WhatsApp draft includes the priority. The existing backend lead payload is unchanged; the priority is not falsely claimed to be stored there.
- `business_fit_handoff` uses only fixed volume/need/segment buckets, with unknowns mapped to `unknown`. It is not a signup or paid conversion. Local previews do not emit it. Remote analytics ingestion and subsequent business outcomes require observation.
- Browser testing exposed a pre-existing prompt that remained over signup after client navigation. `usePathname` now rechecks suppression; production prerendering must remain intact. The WhatsApp control is one anchor rather than nested interactive elements.

## Verification and interpretation

Run `npm run build`, `npm run test:content-release`, `npm run test:visibility`, `npm run test:buyer-fit`, and `npx tsc --noEmit`. CI includes all three test commands. Browser-check home → signup, incomplete/complete state, beginner guidance, optional fields, keyboard handoff and guide links at 1440 and 390. Do not submit a real test enquiry or send a WhatsApp message.

The 500-page programme remains intact; the new guide is additional, not a claim of another article batch. Preserve private-preview exclusion and canonical/discovery checks. Release through existing main-branch deployment only after tests, then verify actual public output.

## Outcome measurement

Use seven complete post-release days, then 14 and 28 days, for the same route/query cohort. Keep unknown volume declarations separate. Existing-seller handoffs are self-reported qualification, not verified revenue. Compare actual enquiries, activation and paid retention only with their real records; do not infer them from a click event. No guaranteed ranking, indexing, AI citation or sales lift is claimed.

Rollback: forward-revert this release through normal CI/CD, preserving subsequent commits. Do not reset or force-push main. Full task evidence and current deployment status live in the workspace growth record of the same task ID.

## Owner correction — 2026-10-03

The owner did not authorise replacing the homepage hero. Restore `Hero.tsx` byte-for-byte from `168cb6054e5cba7b6d8ccf78cb5f5bbe3e7d0838`, including its original copy and both actions. Place the approved management message in a new, additive `BusinessManagement` section after `MoveYourShop`, without removing or reordering existing sections. Homepage replacements require explicit owner approval; general SEO authority is not permission to replace homepage content. This correction does not change other routes, pricing or backend behaviour.
