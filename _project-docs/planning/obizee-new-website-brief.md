# oBizee new website — extracted strategy and scope

Source: [Analyse SitesPlaced Platform](https://chatgpt.com/c/6aa0363f-e9e8-83ee-a4b4-5b521931f93b). Extracted 9 September 2026.

Follow-up source reviewed 10 September 2026: [Shared strategy response](https://chatgpt.com/s/t_6aa1a66a66208191a6f66adba7587806). All 24 sections were readable in the browser. This is the revised strategy already preserved in source turn 4; it confirms the direction below rather than supplying the missing pricing continuation or master-plan PDF.

The shared response emphasizes three connected deliverables: the future-state marketing website, a DDS-powered template/brand-to-website production system, and a large interconnected SEO/content system. The immediate planning artifact is the oBizee 2026 Product Universe: existing and Q4 features, AI, integrations, template categories, industries, content clusters, landing pages, tools and user journeys. Design the site from this inventory, with cinematic storytelling revealing product depth and clear availability labels. The missing PDF does not prevent this planning work from proceeding.

This is a consolidation of that conversation, not a new strategy or a verification of current product capabilities. The source transcript is preserved in `analyse-sitesplaced-source.md` beside this file. Source-turn references below use its chronological numbering.

## 1. Decisions established by the user

- Upgrade the whole oBizee website to match or exceed SitesPlaced in visual appeal and communicate oBizee’s greater product breadth. This extends beyond a homepage facelift.
- Explicitly pursue SitesPlaced’s premium editorial/cinematic aesthetic: motion, video backgrounds, glass surfaces and scroll-driven typography. The earlier alternative visual direction was superseded.
- Include Instagram posts selected by merchants, whichever posts they want to display.
- Compete on template quality and production speed; investigate a high-capacity AI production system.
- Build a very large SEO acquisition funnel. Feature pages must be a central part of SEO, alongside other content.
- Present the full intended product universe. Unreleased capabilities should visibly carry “Coming Q4 2026” status.
- Proceed with DDS: Design Delivery System. The user accepted starting with DDS and setting it up against the local project.
- The user broadly endorsed the original plan, then clarified aesthetics, SEO scale and future-feature presentation. Individual example names, counts, prices and implementation details still require specification.

Evidence: source turns 3–5 and 7–8. The latest architectural recommendation in turn 9 was to audit storefront rendering before implementing DDS or redesigning the marketing site.

## 2. Positioning and the website’s purpose

Central message proposed: **“Run your entire business from one place.”** Supporting message: website, orders, payments, inventory, shipping, customers, expenses and profit, connected in one platform for Indian businesses.

The narrative is start → build → sell → operate → fulfil → understand profit → grow → AI. The site should communicate a complete business platform, with operational depth as a major differentiator.

The strongest proposed differentiators are raw-material costing, vendors, purchases, expenses, true profit, multi-courier shipping, hyperlocal delivery and moving an existing business to oBizee. These were described in the prior chat; their actual availability needs a product/code audit before publication.

The website is the front door connecting product development, design/templates, content, distribution and conversion. It also becomes a product blueprint for the future platform.

## 3. Product universe the website should cover

| Area | Capabilities discussed |
|---|---|
| Build | Website builder, online store, custom domain, forms, catalogue, templates and brand customization |
| Sell | Products, variants, orders, checkout, payments, COD, WhatsApp, Instagram and QR selling |
| Operate | Inventory, raw materials, vendors, purchases, employees, order operations and fulfilment |
| Money / Understand | Revenue, expenses, costs, margins, true profit, payouts, analytics and customers |
| Grow | Marketing, SEO, reviews, CRM, retention, customer insights and automation |
| AI | Business manager, store/catalogue assistance, finance, growth, operations and creative generation |

Important feature narratives:

- **True profit:** revenue less product cost, materials, shipping, payment fees, discounts, returns, marketing and other expenses. Views were proposed by product, order, customer, channel and month. The implementation must resolve cost definitions to avoid double counting.
- **Product management:** selling price, cost, margin, stock, materials, vendors, variants, images, SEO, reviews, orders and marketing connected around each product.
- **Shipping:** visually compare courier prices and delivery estimates, then book a shipment. Delhivery, DTDC, Blue Dart and India Post appeared as examples in the chat.
- **Hyperlocal:** a dedicated “Deliver today” proposition for bakeries, florists, gifts, food, pharmacies, boutiques and local shops. Borzo and Shadowfax were named as examples.
- **CRM:** customer segments, order history, spend, timelines, repeat buyers, inactive customers and WhatsApp follow-up; later AI retention suggestions.
- **Migration:** import from Instagram, WhatsApp, Dukaan, an existing website/store, spreadsheets, PDFs or catalogues. Preserve existing business setup where supported. Proposed dedicated route: `/switch-to-obizee`.

## 4. Navigation and page architecture

Proposed top navigation: **Platform · Solutions · Templates · AI · Resources · Pricing**, with **Login** and **Start Free**.

Platform navigation groups: Build, Sell, Operate, Understand and Grow. These are navigation groupings, while the six product pillars above describe the platform more broadly.

Required page families discussed:

- Homepage: premium platform story and primary conversion entry point.
- Features index and dedicated feature pages.
- Industry/solution landing pages with specific workflows.
- Template gallery, template categories and individual template experiences.
- AI capability pages and explanation of credits.
- Migration/switching pages.
- Integrations and integration-focused content.
- Pricing.
- Resources: guides/blogs, comparisons, free tools, documentation/help, glossary, research and educational material.
- Merchant examples, testimonials and case studies.
- Product launch and SEO landing pages powered by the shared DDS system.

Explicit feature routes proposed:

```text
/features
/features/website-builder
/features/online-store
/features/orders
/features/inventory
/features/shipping
/features/payments
/features/whatsapp
/features/instagram
/features/analytics
/features/profit
/features/customers
/features/vendors
/features/expenses
/features/ai
```

Feature-page structure: **Problem → Solution → UI demonstration → How it works → Benefits → Integrations → FAQ → CTA**.

Industry routes proposed under `/for/`: clothing, jewellery, handmade, gifts, bakery, cafe, restaurant, beauty, cosmetics, home-decor, furniture, electronics, photographers, freelancers, consultants, coaches, creators and local-business. Each needs distinct workflows and examples rather than duplicated copy.

## 5. Homepage content and sequence

The original proposed sequence is a content inventory, not a locked wireframe. Later discussion changed the visual treatment and established that DDS and product mapping come before homepage implementation.

1. **Hero:** “Run your entire business from one place.” Primary CTA: Start Free. Secondary: See How It Works.
2. **Proof:** real businesses, orders, revenue or seller metrics.
3. **Business command center:** animated dashboard showing revenue, profit, orders, products, customers, charts and operational alerts.
4. **Build your store:** website builder and premium template previews.
5. **Import your existing business:** Instagram → oBizee transformation and migration proposition.
6. **Sell everywhere:** website, WhatsApp, Instagram and QR.
7. **Payments:** UPI, cards, COD and reconciliation.
8. **Ship smarter:** courier comparison and hyperlocal delivery.
9. **Know your real profit:** costs, expenses and margins.
10. **Manage inventory:** products, materials and vendors.
11. **Know your customers:** CRM and customer relationships.
12. **AI business manager:** concrete recommendations and actions.
13. **Templates:** beautiful previews and live examples.
14. **Integrations:** recognizable services, limited to accurate status.
15. **Testimonials:** real merchant proof.
16. **Pricing:** easy-to-understand economics.
17. **FAQ.**
18. **Final CTA.**

The hero should show the business command center, with floating order, payment, shipping, stock and profit cards. All numbers and merchant names in the source were illustrative mock data, not approved public proof.

Proposed scrolling story: **Know what you have → Know what it’s costing you → Know what you’re actually making → Know what to do next.** Product stock, materials, vendors, expenses, shipping fees, profit and AI appear as a connected narrative. Avoid turning the homepage into dozens of feature icons.

## 6. Visual direction

The user’s later aesthetic instruction overrides the earlier “Stripe × Linear × Shopify × Indian startup” suggestion.

The intended visual language includes cinematic/full-screen heroes, editorial typography, very large headlines, generous whitespace, full-bleed photography, video backgrounds, floating UI, restrained glass surfaces, animated transitions, interactive cards, rich template previews, scroll storytelling and polished micro-interactions.

The source suggested desktop headline sizes of 100–180px as an example, not a fixed specification. Fonts, colors, spacing, breakpoints and exact motion rules have not been chosen.

Reverse-engineer visual mechanics and develop oBizee’s own implementation and assets. Study premium references beyond SitesPlaced too. Responsive behavior, accessibility and performance are part of quality review. Merchant dashboard speed remains important even when marketing pages use richer storytelling.

Instagram should be a visual layer across the experience: merchant posts in the hero, template examples, testimonials, before/after case studies and a community feed. Merchant control over which posts appear is an explicit requirement. Authentication, ingestion and refresh behavior remain unspecified.

## 7. DDS — Design Delivery System

DDS is the shared design foundation for the marketing site, storefront templates, merchant websites, AI website generation, SEO/industry/landing pages, launch pages and eventually dashboard visuals, ads and social creatives.

Proposed architecture:

```text
Visual intelligence and design rules
  → Tokens + primitives + motion
  → Components
  → Sections
  → Patterns
  → Marketing site / SEO pages / storefront engine
  → Template Factory
  → Personalized merchant sites
```

Define colors, typography, spacing, grids, radius, borders, shadows, glass, image ratios, surfaces, buttons, navigation, transitions, animation curves, scrolling and mobile behavior.

Suggested primitives: Button, Text, Container, Stack, Grid, Surface and Media. Components: Navbar, ProductCard, FeatureCard, Testimonial, PricingCard and LogoCloud.

Suggested section families:

- Heroes: cinematic, editorial, split, video, product-led and AI-led.
- Products: editorial grid, bento, horizontal scroll, fullscreen and interactive.
- Storytelling: scroll narrative, timeline, before/after, sticky and full-bleed.
- Social: Instagram wall, masonry, testimonials and creator proof.
- Supporting sections: features, pricing, FAQ and CTA.

Document design principles, visual language, component rules, typography hierarchy, spacing rules, motion philosophy, media treatment and prohibited patterns before generating many templates.

## 8. Template Factory and brand-to-website engine

Two complementary engines were proposed:

1. **Universal Template Factory:** produces templates for the public gallery.
2. **Brand-to-Website AI:** generates personalized sites from Instagram, websites, PDFs, catalogues, WhatsApp or images.

Production grammar: **industry + visual archetype + sections + content + imagery + tokens → template**.

Visual archetypes discussed: editorial, luxury, minimal, cinematic, brutalist, playful, modern, organic, premium and tech. Verticals include fashion, jewellery, beauty, food, bakery, photography, architecture, creators, SaaS, consulting, fitness, restaurants, handmade and home decor, alongside the industry-page categories.

“Business Kits” expand templates into industry-specific functionality. The fashion example includes product cards, size/color selection, size charts, WhatsApp, Instagram, COD, shipping, abandoned cart, reviews, festival banners, SEO, content prompts and AI product photography.

Proposed factory roles: researcher → art director → designer → copywriter → image director → builder → responsive QA → SEO QA → human review → publish. Accessibility, conversion and template quality scoring were also proposed.

The system could learn from views, clicks, signups, template selections, edits and conversions. This is a future production system, not evidence that such automation already exists.

Scale ideas progressed from 100+ templates to 1,000 variations, with a theoretical 10,000 combinations. These were aspirations and arithmetic examples, not agreed launch quotas. SitesPlaced’s actual production method remains unknown; manual teams, modular systems, AI assistance and an internal generator were hypotheses.

Instagram brand analysis was proposed to extract colors, photography, products, typography, tone, style, audience and story; then choose a design language and generate copy/catalogue/social sections. This extends the user’s explicit curated-post requirement and needs a separate product specification.

## 9. SEO, AEO and GEO content system

The user explicitly emphasized a large funnel and feature-based SEO. The proposed scope goes beyond a blog:

- Product and feature pages.
- Industry/solution pages.
- Problem/intent pages.
- Blog and how-to clusters.
- Integration pages and setup guides.
- Free tools.
- Comparison pages.
- Template/category pages.
- Help/documentation, FAQs, glossary, original research and expert content.

Comparison targets named: SitesPlaced, Dukaan, Shopify, Wix, WooCommerce and Instamojo. Comparative claims require verification; the draft comparison table is not a validated capability matrix.

Free tools named: profit, pricing, GST, shipping, COD, margin, break-even and wholesale-price calculators; Instagram bio generator; return-policy generator; invoice generator; UPI QR generator.

Content topics include starting a business, Instagram/WhatsApp selling, calculating profit, pricing, COD returns/RTO, selecting couriers, building websites, ads and repeat customers. Competitor research also identified payments, shipping, digital products and migration/import clusters.

Proposed funnel: search → helpful article → tool → industry page → feature page → template → signup → first store → first order. These are linked entry points, not a mandatory linear user path.

Build a content relationship model connecting features, industries, problems, solutions and content. Example: selling jewellery online links to the jewellery solution, jewellery templates, builder, WhatsApp, inventory, shipping, profit calculator, related guides and signup.

For AI discoverability, the chat proposed clear entity definitions, consistent brand terminology, structured content, FAQs, organization/software/product schema where appropriate, authentic review data, comparisons, statistics and strong internal links. These are proposed practices, not a guarantee of AI visibility.

## 10. AI product story and credits

Working names included oBizee Copilot and AI Business Manager; neither was finalized. Suggested roles: CEO/business performance, Store Manager, Finance, Growth, Operations and Creator.

Use concrete recommendations rather than a generic chat pitch: low margins, rising COD returns, better-converting products, aging stock, cross-sell opportunities and customer retention. Show how the user can act on a recommendation.

A transparent AI-credit economy was proposed, with useful basic AI free and expensive generation metered. Example costs were description 1, SEO 2, caption 1, product image 5, lifestyle image 10, ad creative 10, video 25, business analysis 5 and bulk catalogue optimization 20 credits. These are brainstorming examples, not approved pricing.

The competitor teardown discussed visible costs before generation, refunds for failures, top-ups and propose/apply approval cards. These are patterns to assess for oBizee, not automatically committed requirements.

## 11. Availability and pricing presentation

Show the full platform vision while clearly distinguishing **Available now** and **Coming Q4 2026**. Status should be integrated into feature presentation rather than an unrelated “coming soon” website.

The source’s illustrative “Now” group contained website, store, orders, payments, shipping and inventory. Its Q4 examples contained AI Business Manager, advanced CRM, advanced profit intelligence, AI marketing, AI website generation, automation and Template Marketplace. This grouping was suggested by the assistant and must be checked against the actual launch plan.

The pricing story discussed was no monthly subscription, free until ₹50,000 in sales/orders, then 1% per order capped at ₹10. The source also suggested “No setup fee” and a possible Pro offering. These were prior-chat descriptions/proposals, not independently verified commercial terms. The response cuts off while discussing Pro.

## 12. Agreed direction for how to start

The following consolidates the latest visible guidance; it does not claim to reproduce the unavailable PDF’s nine phases.

1. **Discovery and product truth:** inventory every existing/Q4 capability, AI feature, integration, template category, vertical, content cluster, landing page, tool and journey. Map competitor capability → oBizee capability → gap → opportunity.
2. **Storefront architecture audit first:** trace merchant data, template selection, brand/theme config, sections, components, products/collections and mobile/desktop rendering. Decide whether DDS fits the existing renderer or requires restructuring. The chat referenced four current storefront templates; verify that in code.
3. **Marketing repository audit:** framework, styling, reusable components, tokens, routing, animations and CMS/content structure. Backend/dashboard/mobile are only initially needed where configuration depends on them.
4. **DDS intelligence and design DNA:** analyze SitesPlaced and other premium references, build a visual taxonomy and document rules.
5. **DDS foundation and one reference homepage:** implement tokens, primitives, components, motion and sections; prove the quality in oBizee.com as the flagship implementation.
6. **Extract proven sections into the Template Factory:** expand archetypes and industry adaptations after the reference quality is established.
7. **Expand the website/content system:** feature, solution, comparison, template, tool, integration and documentation surfaces using shared DDS.
8. **Develop brand-to-website generation and scale:** introduce broader automation and measurement once the pipeline works.

The prior chat proposed GPT for architecture, Claude for visual direction, Codex for implementation and Gemini for volume work, with named model examples. This records the historical recommendation only; no current model evaluation or agent deployment is implied. The suggested starting workflow was research → visual exploration → critique → implementation, adding bulk workers later.

## 13. Open decisions and source limitations

- **Product status:** the exact live/Q4 matrix and launch commitments are not finalized in the retrieved text.
- **Launch scope:** the first-release page list, template count and SEO volume are not fixed.
- **Brand execution:** fonts, palette, asset library and final homepage composition remain open.
- **Commercial terms:** final pricing, Pro plan and AI credit economics remain open.
- **Implementation:** repository audit must determine stack reuse, content management, renderer constraints and ingestion mechanics.
- **Proof/content:** approved merchant stories, testimonials, screenshots, metrics and Instagram content need an inventory.
- **PDF:** the chat says it created a phase-by-phase PDF covering nine phases, a 90-day plan, metrics, team and guardrails. The reader returned only an unresolved content reference and no PDF attachment, so its actual contents were not reviewed.
- **Truncated response:** all nine turns were retrieved, but the initial detailed strategy response ends at 20,000 characters during point 28 on pricing. Any later points in that response remain unavailable. A browser attempt reached a logged-out ChatGPT page and did not recover the missing text.
- **Source claims:** competitor feature counts, pricing, integrations and claims of completed scraping are statements in the previous conversation, not independently verified findings of this extraction.

The most useful follow-up is the original master-plan PDF or a full export of the long strategy response. Everything available from the named chat has been consolidated here, with the missing portions explicitly identified.
