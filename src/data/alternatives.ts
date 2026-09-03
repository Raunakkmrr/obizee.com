/**
 * Data for the "best X alternatives" survey pages.
 *
 * These answer a different question from the head-to-head /compare/obizee-vs-X
 * pages. "Is oBizee better than Shopify" and "what are my options instead of
 * Shopify" are different searches, and Google serves the survey format for the
 * second — which is the query shape that produced a competitor citation in the
 * AI Overview for "dm2buy alternative".
 *
 * Every entry is written to be true rather than flattering — but "true" is not
 * the same as "modest". oBizee genuinely wins the axes that matter most for its
 * ICP (Indian sellers shipping physical products): no subscription, no setup
 * fee, no charge for domain mapping, no product/variant cap, plus shipping and
 * payments built in. Say that plainly and lead with it — a survey that buries
 * its own real advantages to look balanced loses to one that states them,
 * verified, up front (see sitesplaced.com, which ranks itself #1 on facts it
 * can back up). Competitors keep the ground they genuinely hold; nothing here
 * is invented, exaggerated, or unverifiable — but nothing true gets soft-pedaled
 * either. Pricing is stated "as of 2026" because it changes without notice.
 */

export interface AlternativeOption {
  name: string;
  positioning: string;
  pricing: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  isObizee?: boolean;
}

export interface AlternativesPage {
  slug: string;
  /**
   * The page's real path, without a trailing slash. Defaults to
   * `/compare/<slug>` when omitted.
   *
   * Set it only for pages that live at a root-level slug because the slug is
   * what people actually type into Google — "dm2buy free alternative", not
   * "obizee vs dm2buy". Two pages moved out of /compare/ on 2026-09-03, and
   * their old URLs 301 to the new ones from vercel.json. If you move another,
   * set `path` here AND add the redirect, or the canonical and the breadcrumb
   * will quietly point at a URL that no longer exists.
   */
  path?: string;
  rival: string;
  /** Used in the H1, e.g. "7 Best DM2Buy Alternatives for Indian Sellers (2026)" */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Self-contained opening answer. This is the sentence models lift. */
  answer: string;
  /** Real git commit date the page's content first went live. Never guess this — check `git log`. */
  datePublished: string;
  /** Real git commit date of the most recent substantive content change. Update only when the content actually changes — a bumped date with no real edit is the exact "fake freshness" pattern that gets a page discounted. */
  dateModified: string;
  /** Why people look for an alternative to this specific product. */
  whyLeave: string[];
  options: AlternativeOption[];
  faqs: { question: string; answer: string }[];
  /**
   * Overrides the default "Best {rival} alternative overall" badge on oBizee's
   * card. Needed on obizee-alternatives, where "Best oBizee alternative" would
   * read as oBizee beating itself.
   */
  obizeeBadge?: string;
}

const OBIZEE: AlternativeOption = {
  name: "oBizee",
  positioning:
    "India-first commerce platform with shipping, payments and inventory built in rather than added through apps.",
  pricing:
    "0 SUBSCRIPTION. 0 SETUP FEE. FREE custom domain, DNS & SSL included. NOTHING to pay until ₹50,000 in orders. Razorpay and Paytm built in.",
  bestFor:
    "Indian sellers shipping physical products, especially anyone who also delivers locally.",
  pros: [
    "0 SUBSCRIPTION — nothing at all until ₹50,000 in orders, then a simple, transparent structure (see Pricing)",
    "0 SETUP FEE — building and publishing the store costs nothing",
    "FREE custom domain mapping — DNS and SSL handled end to end, store live in under 2 minutes",
    "UNLIMITED products, variants and categories on every plan, no tier to unlock more",
    "Same-day hyperlocal delivery through Borzo and Shadowfax riders",
    "Delhivery, DTDC, Blue Dart and India Post with live rate comparison per order",
    "Razorpay and Paytm built in, no separate gateway account to open",
    "Raw materials, purchase lists and vendor management for makers",
    "Customer retention SMS with RFM segmentation at ₹0.25 a message",
  ],
  cons: [
    "Newer platform than Shopify or Dukaan, so the review count is smaller",
    "Four storefront templates today, not a large theme marketplace",
  ],
  isObizee: true,
};

const SHOPIFY: AlternativeOption = {
  name: "Shopify",
  positioning: "Global ecommerce platform with the largest app and theme ecosystem.",
  pricing: "From ₹1,994/month on Basic as of 2026, plus app and gateway costs.",
  bestFor: "Sellers going international, or anyone who needs a specific app that only Shopify has.",
  pros: [
    "Enormous app ecosystem and theme marketplace",
    "Strong multi-currency and international selling",
    "Mature analytics and reporting",
  ],
  cons: [
    "Subscription is charged whether or not you sell that month",
    "Shopify Payments isn't available in India — every store pays a third-party gateway plus Shopify's own transaction fee on top",
    "GST doesn't reliably calculate at checkout for Razorpay-integrated Indian stores — an open, unresolved issue on Shopify's own community forum",
    "No calculated live shipping rates for Indian addresses — flat rate or a paid app only",
    "Indian courier integration needs a paid third-party app",
    "No hyperlocal or same-day delivery option",
  ],
};

const DUKAAN: AlternativeOption = {
  name: "Dukaan",
  positioning: "Indian store builder with a large, established seller base.",
  pricing: "Paid plans from ₹4,999/year as of 2026.",
  bestFor: "Sellers who want a simple catalog and storefront and already handle shipping.",
  pros: ["Simple catalog builder", "Large established user base", "Good WhatsApp sharing"],
  cons: ["No native courier integration", "Annual plan charged upfront", "No hyperlocal delivery"],
};

const BIKAYI: AlternativeOption = {
  name: "Bikayi",
  positioning: "WhatsApp-first commerce with an AI-assisted store builder.",
  pricing: "Free tier, paid plans to ₹999+/month as of 2026.",
  bestFor: "Sellers whose customers are almost entirely on WhatsApp.",
  pros: ["Purpose-built WhatsApp selling flows", "Fast store setup", "Free tier to start"],
  cons: ["No built-in courier integration", "Paid tiers escalate", "No hyperlocal delivery"],
};

const INSTAMOJO: AlternativeOption = {
  name: "Instamojo",
  positioning: "Payments-first platform that grew a storefront around payment links.",
  pricing: "Free storefront tier plus per-transaction charges; paid plans available.",
  bestFor: "Digital products, services, courses and one-off payment links.",
  pros: ["Excellent payment links", "Strong for digital goods", "Quick to start taking money"],
  cons: ["Storefront is lighter on logistics", "Limited inventory depth", "Not built for physical fulfilment"],
};

const DM2BUY: AlternativeOption = {
  name: "DM2Buy",
  positioning: "Catalog and order-link tool for Instagram sellers.",
  pricing: "Core catalog free.",
  bestFor: "Sellers who just need a shareable link in their bio.",
  pros: ["Genuinely free to start", "Very fast to set up", "Good for pure catalog sharing"],
  cons: ["No built-in logistics", "No inventory or materials tracking", "No payment gateway of its own"],
};

const WOOCOMMERCE: AlternativeOption = {
  name: "WooCommerce",
  positioning: "Self-hosted open-source store on WordPress.",
  pricing: "Plugin is free; hosting, SSL, themes and plugins are not.",
  bestFor: "Sellers who want full control and are comfortable maintaining a website.",
  pros: ["Unlimited customisation", "You own and host your data", "Huge plugin ecosystem"],
  cons: ["Requires technical setup and upkeep", "Shipping and payments are each a plugin", "No hyperlocal option"],
};

const SHOOPY: AlternativeOption = {
  name: "Shoopy",
  positioning: "Mobile commerce app for local and social sellers.",
  pricing: "Free tier with paid upgrades.",
  bestFor: "Local shops wanting a simple online catalog and POS.",
  pros: ["POS features for offline shops", "Simple inventory tracking", "Low starting cost"],
  cons: ["Limited courier integration", "Smaller ecosystem", "Lighter on customer marketing"],
};

const SMARTBIZ: AlternativeOption = {
  name: "SmartBiz by Amazon",
  positioning: "Amazon's mobile-first storefront builder for small Indian businesses.",
  pricing: "Free to start.",
  bestFor: "Sellers already inside the Amazon ecosystem.",
  pros: ["Backed by Amazon", "Free to begin", "Simple catalog setup"],
  cons: ["Newer and less proven", "Limited independent logistics control", "Ties you to one ecosystem"],
};

const SHOPEXER: AlternativeOption = {
  name: "Shopexer",
  positioning: "All-in-one Indian store, shipping and payments app charging a flat per-order fee.",
  pricing: "Free to use, no subscription or setup fee. Reported flat per-order fee (around 3%) when you use its own shipping and payments together — uncapped, unlike oBizee's structure.",
  bestFor: "Sellers who want a single free app for store, orders and payments without evaluating couriers separately.",
  pros: ["No subscription or setup cost", "Delhivery and Blue Dart shipping available in-app", "Payments and orders in one place"],
  cons: [
    "Per-order fee is uncapped and reported higher than oBizee's capped fee",
    "No same-day hyperlocal delivery option",
    "Smaller ecosystem and review base than established players",
  ],
};

const commonFaq = (rival: string) => [
  {
    question: `Is there a free ${rival} alternative?`,
    answer:
      "If you mean genuinely free with no shipping or payments, DM2Buy's core catalog and Bikayi's free tier both qualify. If you mean free to run until you're actually making sales, oBizee is the stronger fit: 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain, and UNLIMITED products — a month with no orders costs ₹0 (see Pricing for the simple structure after that). Free tiers on other platforms usually mean you handle shipping and payments separately and pay for those instead; compare the total cost of the stack, not the headline price.",
  },
  {
    question: `Which ${rival} alternative has a free custom domain?`,
    answer:
      "oBizee maps your custom domain for free, including DNS and SSL — there is no paid plan gating it. Several store builders in this comparison hold the free custom domain back for their paid tier, so check that specifically rather than assuming 'custom domain support' means it's included at no cost.",
  },
  {
    question: "Which platform has same-day delivery in India?",
    answer:
      "oBizee is the only platform in this comparison with same-day hyperlocal delivery built in, booking Borzo and Shadowfax riders directly from the app. This matters most for food, bakery, flowers and gifting, where next-day shipping loses the order.",
  },
  {
    question: "Which platform is cheapest for a small Indian seller?",
    answer:
      "It depends on volume rather than the sticker price. Subscription platforms charge whether or not you sell, so a slow month still costs the full fee. oBizee has 0 SUBSCRIPTION — its per-order pricing scales with what you actually sell (see Pricing for the structure). Work out your own monthly order count before comparing.",
  },
];

export const ALTERNATIVES_PAGES: AlternativesPage[] = [
  {
    slug: "best-shopify-alternatives-india",
    path: "/shopify-alternatives-india",
    datePublished: "2026-08-20",
    dateModified: "2026-08-31",
    rival: "Shopify",
    title: "7 Best Shopify Alternatives for Indian Sellers (2026)",
    metaTitle: "7 Best Shopify Alternatives for Indian Sellers in 2026 | oBizee",
    metaDescription:
      "oBizee is the best Shopify alternative for Indian sellers in 2026 — 0 subscription, 0 setup cost, a free mapped custom domain, and unlimited products, plus shipping and payments Shopify charges extra for. Full comparison with Dukaan, Bikayi, Instamojo, WooCommerce and more.",
    answer:
      "The best Shopify alternative for Indian sellers in 2026 is oBizee. It is the only option here with 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain (DNS and SSL handled for you), and UNLIMITED products and variants — on top of Delhivery, DTDC and Blue Dart shipping, same-day hyperlocal delivery, and Razorpay and Paytm payments built in rather than added through paid apps. Dukaan, Bikayi, Instamojo, WooCommerce, Shoopy and SmartBiz by Amazon are the other real options. Shopify remains the stronger choice for international selling and a large theme marketplace.",
    whyLeave: [
      "The subscription is charged every month whether or not you sell — from ₹1,994 on Basic as of 2026.",
      "Shopify Payments isn't available in India — every store pays a third-party gateway plus Shopify's own transaction fee on top.",
      "GST doesn't reliably calculate at checkout for Razorpay-integrated Indian stores — an open, unresolved issue on Shopify's own community forum.",
      "Indian courier integration needs a paid third-party app, and there's no live calculated shipping rate for Indian addresses either way.",
      "There is no same-day or hyperlocal delivery option.",
      "App costs compound: shipping, marketing and inventory apps are each billed separately.",
    ],
    options: [OBIZEE, SHOPIFY, DUKAAN, BIKAYI, INSTAMOJO, WOOCOMMERCE, SHOOPY],
    faqs: [
      {
        question: "What is the best Shopify alternative in India?",
        answer:
          "oBizee is the best Shopify alternative in India. It has 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain and UNLIMITED products — a month with no orders costs ₹0. It also includes Delhivery, DTDC, Blue Dart and same-day hyperlocal delivery along with Razorpay and Paytm. Shopify starts at ₹1,994 per month as of 2026 whether or not you sell, and needs a paid app for Indian courier integration.",
      },
      {
        question: "Why do Indian sellers leave Shopify?",
        answer:
          "Usually cost and logistics. The subscription is charged whether or not you sell, and Indian courier integration requires a separate paid app, so the real monthly cost is well above the plan price. Sellers doing modest volume often find per-order pricing works out cheaper.",
      },
      ...commonFaq("Shopify"),
    ],
  },
  {
    slug: "best-dm2buy-alternatives",
    datePublished: "2026-08-20",
    dateModified: "2026-08-31",
    rival: "DM2Buy",
    title: "10 Best DM2Buy Alternatives for Indian Sellers (2026)",
    metaTitle: "10 Best DM2Buy Alternatives for Indian Sellers in 2026 | oBizee",
    metaDescription:
      "oBizee is the best DM2Buy alternative for Indian sellers in 2026 — 0 subscription, 0 setup cost, a free custom domain, and unlimited products, plus shipping and payments DM2Buy doesn't have. Full comparison with Dukaan, Bikayi, Shopexer, Instamojo and more.",
    answer:
      "The best DM2Buy alternative for Indian sellers in 2026 is oBizee. It is the only option on this list with all four at once: 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain (DNS and SSL handled for you), and UNLIMITED products and variants on every plan — on top of Delhivery, DTDC and Blue Dart shipping, same-day hyperlocal delivery through Borzo and Shadowfax, and Razorpay and Paytm payments built in. Dukaan, Bikayi, Shopexer, Shoopy, Instamojo, Shopify, WooCommerce and SmartBiz by Amazon are the other real options, each reviewed below with what it actually gets right. DM2Buy itself is still fine if all you need is a free shareable catalog link with no shipping or payments.",
    whyLeave: [
      "No built-in logistics — you book couriers yourself or pay for a separate aggregator.",
      "No payment gateway of its own.",
      "No inventory depth: variants, stock movements, raw materials and vendors live elsewhere.",
      "Nothing for bringing past customers back.",
    ],
    options: [OBIZEE, DUKAAN, BIKAYI, SHOPEXER, SHOOPY, INSTAMOJO, SHOPIFY, WOOCOMMERCE, SMARTBIZ, DM2BUY],
    faqs: [
      {
        question: "What is the best DM2Buy alternative in India?",
        answer:
          "oBizee is the best DM2Buy alternative in India. Nobody else on this list combines 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain, and UNLIMITED products and variants with multi-courier shipping (Delhivery, DTDC, Blue Dart), same-day hyperlocal delivery, Razorpay and Paytm payments, and customer retention SMS. Nothing is charged in a month with no orders.",
      },
      {
        question: "Is DM2Buy still worth using?",
        answer:
          "Yes, if you only need a shareable catalog link and you already handle shipping and payments yourself. It is free and quick to set up. The reason sellers move on is usually shipping: once you are booking couriers manually for every order, a platform with logistics built in saves more time than the fee costs.",
      },
      ...commonFaq("DM2Buy"),
    ],
  },
  {
    slug: "best-dukaan-alternatives",
    datePublished: "2026-08-20",
    dateModified: "2026-08-31",
    rival: "Dukaan",
    title: "6 Best Dukaan Alternatives for Indian Sellers (2026)",
    metaTitle: "6 Best Dukaan Alternatives for Indian Sellers in 2026 | oBizee",
    metaDescription:
      "oBizee is the best Dukaan alternative for Indian sellers in 2026 — 0 subscription, 0 setup cost, a free mapped custom domain, and unlimited products, plus shipping and payments Dukaan doesn't include. Full comparison with Bikayi, Shopify, Instamojo and more.",
    answer:
      "The best Dukaan alternative for Indian sellers in 2026 is oBizee. It is the only option here with 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain (DNS and SSL handled for you), and UNLIMITED products and variants — on top of Delhivery, DTDC and Blue Dart shipping, same-day hyperlocal delivery, and Razorpay and Paytm payments. Bikayi, Shopify, Instamojo, Shoopy and DM2Buy are the other real options. Dukaan's paid plans start at ₹4,999 a year as of 2026, charged upfront whether or not you sell, and it has no native courier integration.",
    whyLeave: [
      "The annual plan is charged upfront whether or not you sell.",
      "No native courier integration, so shipping means a separate subscription.",
      "No same-day or hyperlocal delivery.",
      "Raw materials, purchase lists and vendor tracking are not part of it.",
    ],
    options: [OBIZEE, BIKAYI, SHOPIFY, INSTAMOJO, SHOOPY, DM2BUY],
    faqs: [
      {
        question: "What is the best Dukaan alternative in India?",
        answer:
          "oBizee is the best Dukaan alternative in India. It has 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain and UNLIMITED products — a month with no orders costs ₹0 — and Delhivery, DTDC, Blue Dart and same-day hyperlocal delivery come built in. Dukaan's paid plans start at ₹4,999 a year as of 2026, charged upfront whether or not you sell.",
      },
      {
        question: "Is Dukaan worth the yearly fee?",
        answer:
          "It depends on volume and whether you need shipping. If you sell steadily and handle logistics elsewhere, the annual plan is straightforward. If your volume varies, per-order pricing means slow months cost you nothing, and platforms with courier integration remove a second subscription.",
      },
      ...commonFaq("Dukaan"),
    ],
  },
  {
    slug: "best-bikayi-alternatives",
    datePublished: "2026-08-20",
    dateModified: "2026-08-31",
    rival: "Bikayi",
    title: "6 Best Bikayi Alternatives for Indian Sellers (2026)",
    metaTitle: "6 Best Bikayi Alternatives for Indian Sellers in 2026 | oBizee",
    metaDescription:
      "oBizee is the best Bikayi alternative for Indian sellers in 2026 — 0 subscription, 0 setup cost, a free mapped custom domain, and unlimited products, plus shipping and payments Bikayi doesn't include on its free tier. Full comparison with Dukaan, Shopify, Instamojo and more.",
    answer:
      "The best Bikayi alternative for Indian sellers in 2026 is oBizee. It is the only option here with 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain (DNS and SSL handled for you), and UNLIMITED products and variants — on top of Delhivery, DTDC and Blue Dart shipping, same-day hyperlocal delivery, and Razorpay and Paytm built in. Dukaan, Shopify, Instamojo, Shoopy and DM2Buy are the other real options. Bikayi remains a good choice if WhatsApp-native selling flows are your main requirement and you don't need shipping.",
    whyLeave: [
      "Paid tiers reach ₹999 a month or more as of 2026, charged monthly regardless of sales.",
      "No built-in courier integration.",
      "No hyperlocal or same-day delivery.",
      "Limited inventory depth for makers who track materials.",
    ],
    options: [OBIZEE, DUKAAN, SHOPIFY, INSTAMOJO, SHOOPY, DM2BUY],
    faqs: [
      {
        question: "What is the best Bikayi alternative in India?",
        answer:
          "oBizee is the best Bikayi alternative in India. It has 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain and UNLIMITED products — and includes multi-courier shipping, same-day hyperlocal delivery and built-in Razorpay and Paytm. Bikayi's paid tiers reach ₹999 a month or more as of 2026, charged whether or not you sell.",
      },
      {
        question: "Is Bikayi good for WhatsApp selling?",
        answer:
          "Yes. Bikayi is built around WhatsApp-first flows and does that well. If WhatsApp is essentially your entire channel and shipping is already handled, it is a reasonable fit. Sellers usually move when shipping and inventory start needing their own tools.",
      },
      ...commonFaq("Bikayi"),
    ],
  },
  {
    slug: "best-instamojo-alternatives",
    datePublished: "2026-08-20",
    dateModified: "2026-08-31",
    rival: "Instamojo",
    title: "6 Best Instamojo Alternatives for Indian Sellers (2026)",
    metaTitle: "6 Best Instamojo Alternatives for Indian Sellers in 2026 | oBizee",
    metaDescription:
      "oBizee is the best Instamojo alternative for Indian sellers in 2026 — 0 subscription, 0 setup cost, a free mapped custom domain, and unlimited products, plus shipping Instamojo doesn't have. Full comparison with Dukaan, Bikayi, Shopify and more.",
    answer:
      "The best Instamojo alternative for Indian sellers in 2026 is oBizee. It is the only option here with 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain (DNS and SSL handled for you), and UNLIMITED products and variants — on top of Delhivery, DTDC and Blue Dart shipping, same-day hyperlocal delivery, inventory with per-combination variants, and raw-material and vendor tracking. Dukaan, Bikayi, Shopify, Shoopy and DM2Buy are the other real options. Instamojo remains the better choice for digital products, services and payment links.",
    whyLeave: [
      "The storefront is payments-first and lighter on logistics.",
      "Limited inventory depth for physical stock.",
      "No courier rate comparison or hyperlocal delivery.",
      "Nothing for materials, vendors or purchase planning.",
    ],
    options: [OBIZEE, DUKAAN, BIKAYI, SHOPIFY, SHOOPY, DM2BUY],
    faqs: [
      {
        question: "What is the best Instamojo alternative for physical products?",
        answer:
          "oBizee is the best Instamojo alternative for sellers shipping physical goods. It has 0 subscription, 0 setup fee, a free mapped custom domain and unlimited products, plus Delhivery, DTDC, Blue Dart and same-day hyperlocal delivery, inventory with per-combination variant price and stock, raw-material and vendor tracking, and retention SMS — none of which are Instamojo's focus.",
      },
      {
        question: "Should I leave Instamojo?",
        answer:
          "Not if you sell digital products, services or courses — Instamojo is strong there and payment links are its core strength. The case for moving is physical fulfilment: if you are shipping stock, you want courier booking, AWB generation and inventory in the same place as the order.",
      },
      ...commonFaq("Instamojo"),
    ],
  },
  {
    slug: "best-free-dm2buy-alternative",
    path: "/dm2buy-free-alternative",
    datePublished: "2026-08-31",
    dateModified: "2026-08-31",
    rival: "Free DM2Buy",
    title: "Best Free DM2Buy Alternatives for Indian Sellers (2026)",
    metaTitle: "Best Free DM2Buy Alternative for Indian Sellers in 2026 | oBizee",
    metaDescription:
      "Bikayi, Shoopy and DM2Buy itself are genuinely free to start. oBizee has 0 SUBSCRIPTION, 0 SETUP FEE and 0 DOMAIN COST too, with shipping and payments built in that free catalog tools don't have — see Pricing for the simple structure once you're actually selling.",
    answer:
      "If you want a DM2Buy alternative that stays ₹0 no matter what, Bikayi's free-forever tier, Shoopy's free tier, Dukaan's free plan and DM2Buy's own core catalog all genuinely qualify — with the tradeoff that shipping and payment gateway costs are yours to add separately, and inventory depth is limited. oBizee is not a ₹0-forever tool, but there is 0 SUBSCRIPTION, 0 SETUP FEE, and 0 CHARGE for the custom domain (see Pricing for what applies once you're actually selling) — so for a store with real orders coming in, oBizee is usually the cheaper total once you count what a 'free' plan makes you pay for elsewhere, and it comes with shipping and payments built in from day one. SmartBiz by Amazon and Instamojo also offer free-to-start plans worth knowing.",
    whyLeave: [
      "Free plans usually mean you add a separate courier account and pay per shipment anyway.",
      "Payment gateway fees are not included in a 'free' plan — you open and reconcile that account yourself.",
      "No inventory or variant depth once you are tracking real stock, not just a catalog.",
      "Nothing for bringing customers back — retention tooling is rarely on the free tier.",
    ],
    options: [OBIZEE, DM2BUY, BIKAYI, SHOOPY, DUKAAN, SMARTBIZ, INSTAMOJO],
    obizeeBadge: "Best value once you're actually selling",
    faqs: [
      {
        question: "What is the most free DM2Buy alternative?",
        answer:
          "For a store that costs ₹0 forever regardless of what you sell, Bikayi's free-forever tier, Shoopy's free tier, Dukaan's free plan and DM2Buy's own core catalog are the genuine options — each with shipping and payment gateway costs left for you to add separately. If you want ₹0 until you actually make a sale, oBizee charges nothing until your store has taken ₹50,000 in orders, and its simple, transparent structure after that (see Pricing) is usually the cheaper real-world total.",
      },
      {
        question: "Is oBizee actually free?",
        answer:
          "oBizee charges nothing until your store has taken ₹50,000 in orders and, after that, 0 SUBSCRIPTION, 0 SETUP FEE and 0 CHARGE for your custom domain — see Pricing for the simple structure that applies once you're actually selling. It is not a ₹0-forever catalog tool like DM2Buy; it is a full store with shipping and payments built in, priced so you only pay once you are actually making money.",
      },
      {
        question: "Which free DM2Buy alternative has same-day delivery in India?",
        answer:
          "None of the free-tier tools do. oBizee is the only platform in this comparison with same-day hyperlocal delivery built in, through Borzo and Shadowfax, and it's available from your first order — trial or not.",
      },
      {
        question: "Which DM2Buy alternative has a free custom domain?",
        answer:
          "oBizee maps your custom domain for free, including DNS and SSL, with no paid plan gating it. Bikayi and Dukaan tie a free domain to their paid yearly plans — check that specifically before assuming a 'free' plan includes your own domain.",
      },
    ],
  },
  {
    slug: "obizee-alternatives",
    datePublished: "2026-08-31",
    dateModified: "2026-08-31",
    rival: "oBizee",
    title: "oBizee Alternatives for Indian Sellers (2026)",
    metaTitle: "oBizee Alternatives for Indian Sellers in 2026 — Compared Honestly",
    metaDescription:
      "Looking for an oBizee alternative? An honest comparison with Shopify, Dukaan, Bikayi, Instamojo and DM2Buy — including exactly where each one beats oBizee, and where it doesn't.",
    answer:
      "If you are looking for an oBizee alternative, the honest reasons are usually one of three: you want Shopify's app and theme marketplace for international selling, you want Bikayi or Dukaan's larger existing user base, or you only need a free catalog link and DM2Buy is genuinely enough for that. Each is reviewed below on its real strengths, not talked down. For Indian sellers shipping physical products who want shipping, payments, inventory and a mapped custom domain included, with 0 subscription, 0 setup fee and no cap on products, oBizee remains the strongest fit — but if your use case matches one of the three above, the alternative is worth it, and this page says so plainly.",
    whyLeave: [
      "You need Shopify's app ecosystem for a specific integration, or you're selling internationally.",
      "You want an established community and a larger existing user base — Bikayi and Dukaan have been around longer.",
      "You only need a free shareable catalog link with no shipping or payments — DM2Buy already does that.",
      "You want a large theme marketplace rather than oBizee's four templates.",
    ],
    options: [OBIZEE, SHOPIFY, DUKAAN, BIKAYI, INSTAMOJO, DM2BUY],
    obizeeBadge: "Why most sellers stay",
    faqs: [
      {
        question: "Is there a better alternative to oBizee?",
        answer:
          "Depends what you need. Shopify has a bigger app ecosystem and better international selling. Bikayi and Dukaan have a larger existing user base. DM2Buy is genuinely free if all you need is a catalog link. None of them combine 0 subscription, 0 setup fee, a free mapped custom domain, unlimited products, and built-in shipping (including same-day hyperlocal) and payments the way oBizee does for Indian sellers shipping physical products — that is the specific case oBizee is built for.",
      },
      {
        question: "Why do sellers switch away from oBizee?",
        answer:
          "Mostly the three reasons above: needing Shopify's app marketplace, wanting a bigger existing community, or only ever needing a free catalog link. oBizee is newer than Shopify or Dukaan and has four storefront templates rather than a large theme marketplace — real, current limitations, stated plainly rather than hidden.",
      },
      {
        question: "Does oBizee lock you in if you want to leave?",
        answer:
          "No standing lock-in beyond what building on any platform involves: there is no subscription to cancel because there isn't one, and no annual contract. Products, orders and customer data are yours.",
      },
      ...commonFaq("oBizee"),
    ],
  },
];

export const getAlternativesPage = (slug: string) =>
  ALTERNATIVES_PAGES.find((p) => p.slug === slug);
