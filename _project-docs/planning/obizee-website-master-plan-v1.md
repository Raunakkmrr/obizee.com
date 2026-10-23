# oBizee website master plan — V1
Date: 10 September 2026
Status: Proposed execution plan. Builds on the accepted strategy; no production implementation or deployment in this planning task.

## 1. What winning means

Create a website that helps Indian business owners see the quality of the storefront they can launch, understand the operations they can run, estimate what it costs, and confidently take the next step.

“Better in every aspect” is the ambition. Superiority must be demonstrated through side-by-side usability tests, visual reviews and performance measurements. Competitor conversion rates and internal production methods are unknown.

Primary audience: existing Instagram/WhatsApp sellers and small product businesses. Secondary: new merchants and growing brands. Cover the broader product vision through page architecture; lead the homepage with the audiences for which oBizee can demonstrate the strongest value.

Working brand promise: **Build a beautiful store. Run your whole business.**

## 2. Evidence and opportunity

Reviewed the public homepages visually and through their accessible content, SitesPlaced’s template and examples catalogs, and oBizee’s local package, layout, theme and context files. This is a focused planning review, not a completed mobile, performance or authenticated-product audit.

- SitesPlaced’s homepage combines AI, pricing tiers, integrations, import and real stores. Its first viewport observed on 10 September also contained multiple announcements and a promotional overlay. Opportunity: make oBizee’s first decision clearer, with fewer competing messages.
- SitesPlaced markets editorial/cinematic templates and industry-specific examples. Opportunity: offer strong visual variety with previews that also explain the merchant workflow.
- oBizee’s current homepage leads with pricing and shows operational UI. Several later sections repeat related feature explanations. Opportunity: retain the commercial clarity and replace repetition with one connected business story.
- oBizee already has industry, comparison, blog, help and import surfaces. The plan is to organize, improve and extend them. The earlier suggestion that SEO had barely started is not an adequate current inventory.
- Local code already uses Next 14, React 18, Tailwind, Radix, Framer Motion, Bricolage Grotesque, Plus Jakarta Sans and Instrument Serif. We can build DDS around this foundation.
- Public claims and integration names do not prove backend availability. Each public feature needs an evidence-backed status before new copy goes live.

Sources:
[SP homepage](https://sitesplaced.com/)
[SP templates](https://sitesplaced.com/templates)
[SP examples](https://sitesplaced.com/examples)
[oBizee homepage](https://www.obizee.com/)
[Accepted strategy](https://chatgpt.com/s/t_6aa1a66a66208191a6f66adba7587806)

## 3. Art direction

**Confident, cinematic and grounded in real businesses.**

Keep orange as the recognizable oBizee brand signal. Create contrast between crisp light reading surfaces, deep ink product-story scenes, and rich merchant photography. Use editorial scale and composition without making every section a full-screen animation.

Three visual layers:
1. Brand: disciplined type, orange accents, navigation and consistent spacing.
2. Product: legible working interfaces with coherent sample data and meaningful transitions.
3. Merchant: actual products, people, stores and selected social content.

A marketing page has a strong, consistent oBizee identity. Individual storefront templates can use distinct merchant palettes, type pairings and layouts. DDS shares semantics, quality and rendering rules; it must not make every merchant look like oBizee.

### Proposed color tokens

| Role | Color | Application |
|---|---|---|
| Ink | #111318 | Main text, dark chapters and footer |
| Canvas | #FFFFFF | Reading areas and most pages |
| Cool surface | #F3F5F7 | Secondary sections and interface surfaces |
| Brand orange | #F97316 | Brand details, emphasis, dark-text buttons |
| Deep orange | #C2410C | Orange buttons with white labels, links on white |
| Muted text | #525866 | Supporting text on light surfaces |
| Divider | #DDE1E7 | Decorative separation; not sufficient alone for all controls |
| Success | #166534 | Available/confirmed states with text/icon |
| Future feature | #4338CA | Q4 status badge text on a light violet surface |

These are starting tokens, not a completed contrast audit. Verify every actual text/background pair and interaction state. Bright orange with white small text must not be a default. Status never depends on color alone. Use about 70% neutral, 20% imagery/dark scenes and 10% accent as an art-direction guide, not a rigid rule.

Use one authored light/dark narrative on the marketing homepage. A visitor theme toggle is unnecessary for this first version. Reading-heavy resource pages stay light. Accessible focus rings need light and dark variants.

### Typography, geometry and composition

Retain Bricolage Grotesque for characterful headings, Plus Jakarta Sans for readable body/UI, and Instrument Serif italic for occasional editorial emphasis. Reduce font weights/downloads where possible. Test rupee symbols, long business names and actual content. Hindi pages, if added, need a compatible Devanagari family and editorial review.

Proposed scale:
- Hero: fluid 56–112px desktop, approximately 40–52px mobile, adjusted to avoid awkward wraps.
- Section headings: 36–64px desktop, 28–36px mobile.
- Body: 18px typical; 16px minimum for primary reading.
- Labels: generally 14px or larger.
- Reading width: roughly 60–70 characters.

Use a 12-column desktop grid, 4-column mobile grid, max content width around 1280px, generous section spacing and varied compositions. Hero and merchant showcases can break the grid. Cards use roughly 16–24px radii; controls 10–12px. Reserve fully rounded shapes for tags. Use a consistent line-icon family, clear borders and restrained shadows.

### Imagery and motion

Commission or obtain approved merchant photos and short clips showing making, packing, selling and shipping. Use genuine interface captures or faithful interactive replicas. Mark sample figures as demo data. Generated imagery may illustrate a fictional template brand; it must not impersonate customer proof.

Three signature moments:
1. Merchant product/photo → polished storefront → incoming order.
2. Same order → inventory/materials → shipment → transparent profit breakdown.
3. Instagram/website import → editable preview → selected design, respecting existing capabilities.

Micro-interactions: around 120–200ms. Section entrances: around 300–500ms. Motion explains relationships; text and CTAs are usable immediately. No forced scroll speed, cursor replacement or mandatory animation watching. Limit sticky story scenes, stop offscreen media, supply posters, reduced-motion layouts and pause controls for relevant moving content. Mobile gets compact stepped examples instead of long pinned sequences.

## 4. Homepage storyboard

Aim for 9–11 purposeful chapters. Feature depth lives on dedicated pages. The original 18-section list becomes this tighter narrative.

| Chapter | Message and content | Experience | Next step |
|---|---|---|---|
| 1. Hero | Build a beautiful store. Run your whole business. Brief explanation of connected selling and operations | One excellent storefront transitioning into a clear business view | Start free; secondary See it in action |
| 2. Merchant proof | Approved businesses, verified dated figures and a short attributable quote | Calm, readable proof strip and merchant photography | View merchant story |
| 3. Your storefront | Strong industry-specific storefront examples | Three curated examples; clear desktop/mobile previews | Explore templates |
| 4. Bring your business | Move an existing Instagram shop or website | Existing source-aware import entry; preview before publishing | Import my shop |
| 5. One connected operation | Orders, payments, stock, materials, shipping and money | One coherent sample order through 4–5 selectable steps | Explore relevant feature |
| 6. True profit | Show what remains after costs | Editable sample calculation with explicit assumptions | Explore profit tools |
| 7. Your kind of business | Fashion, jewellery, handmade, food and local retail | Editorial industry cards with distinct workflows | Industry page |
| 8. What is coming | AI, advanced CRM, automation and future design capabilities | Clearly labelled Q4 previews with concrete benefits | View roadmap / express interest if supported |
| 9. Customer evidence | Real people, selected social posts and outcomes | Case-study feature and click-to-play video | Read the story |
| 10. Pricing | Clear platform fee and separate applicable costs | A few order-value examples; link to full rules | View pricing / Start free |
| 11. Questions and close | Migration, availability, mobile usage and support | Concise FAQ and final relevant CTA | Start free or get help |

Do not duplicate the same proof or list of features in several places. Integrations appear beside the workflow they support, with a link to the integration directory. A short demo can cover shipping and payments without creating a separate giant homepage chapter for each.

Draft hero support:
“Create your storefront, manage orders and stock, arrange deliveries, and understand what you earn—all with oBizee.”
Refine against verified launch capabilities. Place the no-subscription proposition beneath the main action, with a pricing link.

## 5. Navigation and journeys

Desktop: Platform / Solutions / Templates / Resources / Pricing, plus Login and Start free. Put AI prominently within Platform and the roadmap rather than adding another top-level item initially. Keep navigation to one concise row. At most one announcement when there is a meaningful launch.

Platform menu: Build, Sell, Operate, Understand, Grow; each group has a short description and selected links, with “All features.” Mobile uses accessible accordion navigation with ordinary links.

Primary journeys:
- Existing seller: Home → Import → authenticate where required → review catalogue → choose/customize design → publish using supported product steps.
- New merchant: Home/template/industry → Start free → create business → add products → choose design → launch.
- Evaluating owner: feature → working example → applicable price/status → proof → start or contact.
- Search visitor: useful answer/tool → relevant feature or industry → template/start.
- Future-feature visitor: Q4 capability → preview and availability → interest action only if implemented.

Keep templates browsable before signup. Preserve template choice and source context through supported handoffs. Never place authentication tokens in URLs.

For every interactive control define loading, empty, success, failure, retry and keyboard behavior. Errors retain the user’s input and explain the next step. No first-visit lead-capture modal covering the hero. Support should be easy to find without several floating widgets.

## 6. Page families and release scope

P0: homepage, navigation/footer, platform/features overview, pricing, templates gallery, migration explanation, existing import handoff, merchant proof, contact/help and legal continuity.

P1: first feature pages and five initial industry pages, template detail/demo pages, integration directory, AI/Q4 pages, first calculators and highest-intent content.

P2: more industry kits, larger tool library, richer case studies, expanded comparison/integration content, localized content and personalized template generation.

Initial priority features:
website builder, online store, Instagram/WhatsApp selling, import, orders, payments, inventory/raw materials, vendors/purchases, shipping/hyperlocal, expenses/profit, customers/CRM, analytics and AI. Split these into separate pages where user intent and unique evidence justify it.

Feature page: specific problem → promised outcome → availability → realistic interface example → workflow → constraints/costs/integrations → relevant proof → FAQ → CTA.

Industry page: merchant-specific hero and imagery → template → relevant workflow → business-specific costs/challenges → real example → feature links → CTA.
Examples: fashion variants; jewellery options and packaging; handmade materials/costing; bakery delivery windows where supported; grocery stock. Do not advertise workflow details merely because the industry would benefit.

Template gallery: filter by industry, visual style and capabilities. Show a stable cover, name, intended business, status and mobile preview. Detail page shows representative product, collection, cart and checkout where applicable. Preview controls must not interrupt scrolling. “Use this template” appears only when that template is actually selectable; Q4 examples say Preview / Coming Q4 2026.

Proposed first design batch: six distinct archetypes across the five initial industries, selected based on actual merchant needs. Publish only validated templates. Count palette variations separately from distinct layouts. Scale targets follow acceptance throughput; 1,000 is a long-term ambition rather than launch copy.

## 7. Content, trust and product truth

Write with merchant vocabulary and specific examples. Explain “raw materials” with wool, boxes, beads or ingredients; explain profit with transparent arithmetic. Avoid broad “best,” “everything,” “zero hidden costs” or instant timing promises without substantiation.

Every claim has a source and owner. Create these linked inventories:
- Feature: ID, group, name, merchant problem, capability, supported audience, live/beta/Q4 status, evidence, limitations, integration, price relevance, demonstration, page, owner, review date.
- Page: URL, search intent, audience, main question, primary action, evidence, related entities, content owner and freshness date.
- Asset: subject, source, permission, approved usage, crop, alt text, device variants.
- Proof: metric definition, period, source, approval, last verified date.

Display the full future vision. Label upcoming features at the feature card, demo, detail page, pricing matrix and CTA—not only in a footer. Q4 2026 is a commitment to validate, not a date mechanically assigned to every unverified feature.

Pricing must distinguish oBizee platform charges from payment, shipping, tax, domain and optional AI charges where applicable. Verify threshold/reset/refund treatment before writing a calculator. Competitor comparisons distinguish native, integrated, paid and upcoming capabilities, with dated sources.

## 8. SEO and AI discoverability

Preserve successful existing URLs unless a change has a demonstrated benefit. Inventory current routes, canonical tags, sitemap entries, internal links and indexed traffic before deciding redirects. Existing /for/clothing-stores/ should not become /for/clothing/ simply to match a draft sitemap.

Build six connected content groups: features, industries, practical problems/guides, integrations, comparisons and tools/templates.
Each core feature gets its own useful explanation, relevant examples, supporting guide, related industry and contextual next step.

First content sprint proposal: 12 priority feature pages, five improved industry pages, three tools (profit, margin/pricing, platform fees), three factual comparisons and 10 substantive guides. These are planning targets; consolidate overlap and do not index thin pages to hit a quota.

Technical requirements: meaningful statically rendered content, proper headings, unique titles/descriptions, canonical URLs, crawlable links, breadcrumbs, useful sitemap grouping, relevant structured data, accessible media and stable URLs. Index only useful standalone pages; prevent filter combinations from generating a crawl maze.

AI visibility comes from clear, accurate, attributable information. A glossary or llms.txt does not guarantee citations. Measure a fixed set of relevant search/AI questions periodically and record actual outcomes without treating one answer as universal.

## 9. DDS implementation and maintenance

Retain the existing stack initially. Separate shared tokens, primitives, patterns, sections, content and demonstration data. Avoid a new framework solely for a visual redesign.

DDS layers:
tokens → primitives → components → sections → page patterns → marketing pages / storefront adapters.
Add explicit light/dark contrast pairs, motion preferences, responsive rules and content constraints.

Do not tightly couple the marketing site's components to a storefront renderer that has not been audited. Shared tokens and content contracts can be established while renderer integration is decided.

Use schema-validated content records in the repository for V1. Define a CMS-compatible model; add a CMS when editorial ownership and publishing frequency require it. Define structured records for features, industries, integrations, templates, articles, statuses and proof so one fact is not copied into many pages.

Keep existing import, authentication and session contracts intact. Project notes identify source parsing, URL parameters, handoff geometry and Instagram extraction as important dependencies. Changes affecting those require focused regression validation. Those notes are historical context; recheck current code before execution.

## 10. Quality and measurable acceptance

Before claiming improvement, record the baseline for both websites on the same devices and test conditions. Competitor analytics are unavailable.

| Dimension | Proposed acceptance |
|---|---|
| Comprehension | At least 8 of 10 representative merchants can explain what oBizee offers after a short first-view test |
| Findability | At least 8 of 10 can locate a suitable template, cost explanation and key feature without help |
| Availability | Every reviewed upcoming feature is clearly recognized as unreleased |
| Visual quality | Side-by-side review of hierarchy, type, media, consistency and polish across desktop/mobile; document reasons, not only ratings |
| Accessibility | WCAG 2.2 AA target, manual keyboard/screen-reader checks, 200% text enlargement, reduced motion, labelled forms and visible focus |
| Mobile | Core journeys work at 360/390px and wider; no clipping; controls work without hover; 44px touch targets preferred |
| Performance | Field p75 LCP ≤2.5s, INP ≤200ms, CLS ≤0.1; prelaunch lab checks are proxies, not proof of field results |
| Reliability | No broken primary CTAs, failed core imports caused by redesign, dead links or missing media |
| SEO | Retained URL coverage, valid canonicals/sitemaps, readable initial HTML, no accidental indexing blocks |
| Conversion | Measure visit → start → signup → import success/template selection → published store, segmented by source/device |

Performance implementation: optimized responsive images with fixed dimensions, appropriate loading priority, subset/self-hosted fonts, code-split optional demos, deferred third-party embeds and media posters. Start with a provisional initial-transfer budget of 1.5MB on core landing pages, excluding user-played video; revise against measured rendering needs. Avoid importing a motion runtime into every static content page.

[Core Web Vitals criteria](https://web.dev/articles/vitals)
[WCAG 2.2 reference](https://www.w3.org/WAI/WCAG22/quickref/)

Usability sample results are directional, not statistically conclusive. Set conversion uplift targets after baseline data exists; use controlled experiments if traffic permits. Never invent a competitor conversion benchmark.

## 11. Delivery sequence and reviewable outputs

| Phase | Output | Completion condition |
|---|---|---|
| A. Inventory and baseline | Product Universe, route/content/asset inventories, competitor comparison and current journey measurements | Every launch claim has an owner/status; critical journeys and URLs mapped |
| B. Art direction and DDS | Color/type tokens, composition rules, motion rules, responsive components, one desktop/mobile hero and connected-order story prototype | Design works with actual content and mobile/reduced-motion alternatives |
| C. Flagship homepage | Complete homepage copy, assets and working interactions | Clear narrative, honest statuses, functional primary paths |
| D. Conversion surfaces | Templates, pricing, migration, proof and feature page patterns | Merchant can choose, understand cost and continue successfully |
| E. Content expansion | Initial feature/industry/tool/guide releases | Unique useful content, factual review and internal links |
| F. Validation and release | Browser/device/accessibility/performance checks, SEO migration report and rollback plan | No critical journey failures; release scope confirmed |
| G. Ongoing improvement | Measured experiments, content refresh and new template batches | Decisions informed by actual behavior and QA capacity |

Sequence A → B → C → D → E → F. Research, copy and asset preparation can overlap where independent. Marketing release does not depend on completing the entire long-term Template Factory or AI platform.

Indicative effort for the marketing release: roughly 4–6 weeks with a dedicated frontend implementer and timely design/content/product input. This is a planning range, not a delivery commitment; re-estimate after Phase A. Backend AI and large-scale storefront generation require separate estimates. Before a calendar is promised, confirm launch date, actual feature readiness and asset availability.

First concrete implementation package after this plan:
1. Product Universe and launch page matrix.
2. DDS V1 tokens and design rules.
3. Responsive homepage storyboard with final draft copy.
4. One flagship visual prototype: hero plus connected business demonstration.
5. Reusable feature-page and template-gallery specifications.

Only the planning document is created in this task. The next implementation should follow this specification and the verified product inventory.

