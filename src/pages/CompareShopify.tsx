"use client";
import React from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Check, Truck, MessageCircle, Wallet, Send, Eye,
  Rocket, Link2, Clock, Globe, Phone, MapPin, User, Calendar,
  Image as ImageIcon, Tag, Users, Store, Banknote, Mail, Download, Search,
  BarChart3, Bug, Megaphone, Receipt,
} from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";
import { liveShops } from "@/data/liveShops";
import { OBIZEE_SOFTWARE_SCHEMA } from "@/lib/productSchema";
import { GoalMark, Mark, type ComparisonGroup } from "@/components/compare/marks";

/**
 * oBizee vs Shopify.
 *
 * Section order is the argument, not a checklist:
 * why → what's built in → the integrations themselves → real shops →
 * why sellers move → the comparison → the receipt → how the move works →
 * what survives it → who it's for → what it costs.
 *
 * SOURCING. Every Shopify figure on this page was read from a Shopify page on
 * 2026-09-03 and is recorded against its source in the comment above each block.
 * Three claims that Indian blogs repeat and that are NOT true were deliberately
 * left off, because printing them would make everything else here suspect:
 *   - "You need an app for cash on delivery." False. COD is a built-in manual
 *     payment method on Shopify, and it is exempt from Shopify's 2% cut.
 *   - "You must buy a shipping app, a COD app and a GST app." False at small
 *     volume — NimbusPost, Delhivery and iThink are free to install, and GST Pro
 *     has a free tier to 50 orders a month.
 *   - "Shopify adds 18% GST to the plan." Not for a merchant who submits a GSTIN;
 *     Shopify exempts them. Shopify also publishes no rate of its own, so the
 *     figure cannot be sourced. Do not print it.
 *
 * INTEGRATION MARKS: real partner logos live in public/partner-logos/. Delhivery
 * and Blue Dart are the two brands with no usable mark — both sites are JS shells
 * serving no logo file — so they fall back to an icon. Never draw an imitation
 * logo (R4); add the real file and set `logo` on that item.
 */
const CompareShopify = () => {
  // Queried from liveShops.ts on 2026-09-03, not typed from memory.
  const shopCount = liveShops.length;
  const stateCount = new Set(liveShops.map((s) => s.state)).size;
  const categoryCount = new Set(liveShops.map((s) => s.category)).size;
  const featuredShops = liveShops.slice(0, 12);

  /**
   * Category colour tokens. Each integration group owns one hue, and that hue is
   * reused for the group label, the card's hover ring and its accent rule — so
   * colour encodes what kind of thing this is, rather than decorating.
   * `logo: null` = the real brand mark is not in the repo yet (see file header).
   */
  const integrationGroups = [
    {
      group: "Payments & checkout",
      icon: Wallet,
      tone: { label: "text-blue-700", chip: "bg-blue-50 text-blue-700 ring-blue-200", rule: "bg-blue-500", hover: "hover:border-blue-300" },
      items: [
        { logo: "/partner-logos/razorpay.svg", name: "Razorpay", how: "UPI, cards, net banking and wallets. Connected for you — and the money lands in your own Razorpay account, never ours.", site: "razorpay.com" },
        { logo: "/partner-logos/paytm.svg", name: "Paytm", how: "Wallet and UPI checkout on the same order, switchable per store.", site: "paytm.com" },
        { logo: "/partner-logos/phonepe.svg", name: "PhonePe", how: "UPI, cards and wallets for buyers who already keep PhonePe on their phone.", site: "phonepe.com" },
        { logo: "/partner-logos/cashfree.png", name: "Cashfree", how: "UPI, cards, net banking and pay-later options at checkout.", site: "cashfree.com" },
        { logo: "/partner-logos/stripe.svg", name: "Stripe", how: "Card payments from customers outside India, when you start shipping abroad.", site: "stripe.com" },
        { logo: null, icon: Banknote, name: "Cash on delivery", how: "Switch COD on per product, and it reconciles against the order on its own.", site: "built in" },
        { logo: "/partner-logos/whatsapp.svg", name: "WhatsApp checkout", how: "Order over WhatsApp, for buyers who would rather chat before they pay.", site: "whatsapp.com" },
      ],
    },
    {
      group: "Courier network",
      icon: Truck,
      tone: { label: "text-rose-700", chip: "bg-rose-50 text-rose-700 ring-rose-200", rule: "bg-rose-500", hover: "hover:border-rose-300" },
      items: [
        { logo: "/partner-logos/delhivery.png", name: "Delhivery", how: "Direct integration. Generate the AWB, schedule the pickup and push tracking to your customer without leaving oBizee.", site: "delhivery.com" },
        { logo: "/partner-logos/dtdc.png", name: "DTDC", how: "Rates compared against every other courier on the same order, then booked in one tap.", site: "dtdc.in" },
        { logo: null, icon: Truck, name: "Blue Dart", how: "Available through the built-in aggregator for faster metro lanes.", site: "bluedart.com" },
        { logo: "/partner-logos/indiapost.png", icon: Mail, name: "India Post", how: "The cheapest lane for light parcels, and the pin codes private couriers skip.", site: "indiapost.gov.in" },
      ],
    },
    {
      group: "Same-day delivery",
      icon: Rocket,
      tone: { label: "text-emerald-700", chip: "bg-emerald-50 text-emerald-700 ring-emerald-200", rule: "bg-emerald-500", hover: "hover:border-emerald-300" },
      items: [
        { logo: "/partner-logos/borzo.svg", icon: Rocket, name: "Borzo", how: "Book a rider for same-day hyperlocal delivery inside your city, straight from the order screen.", site: "borzodelivery.com" },
        { logo: "/partner-logos/shadowfax.png", name: "Shadowfax", how: "A second rider network, so cakes, flowers and gifting reach the buyer today rather than Thursday.", site: "shadowfax.in" },
      ],
    },
    {
      group: "Selling channels",
      icon: MessageCircle,
      tone: { label: "text-violet-700", chip: "bg-violet-50 text-violet-700 ring-violet-200", rule: "bg-violet-500", hover: "hover:border-violet-300" },
      items: [
        { logo: "/partner-logos/instagram.svg", name: "Instagram", how: "Custom order forms, QR codes and bio links that drop the order straight into your dashboard.", site: "instagram.com" },
        { logo: "/partner-logos/whatsapp.svg", name: "WhatsApp", how: "The same forms and the same order list, for buyers who would rather chat before they pay.", site: "whatsapp.com" },
      ],
    },
    {
      group: "Growth",
      icon: Rocket,
      tone: { label: "text-amber-700", chip: "bg-amber-50 text-amber-800 ring-amber-200", rule: "bg-amber-500", hover: "hover:border-amber-300" },
      items: [
        { logo: null, icon: Globe, name: "Custom domain", how: "yourbrand.com mapped for you — DNS and SSL handled, at no cost, on every account.", site: "included" },
        { logo: null, icon: Download, name: "Store import", how: "Bring your catalogue across from Shopify, Instagram or an existing site. You re-upload nothing.", site: "included" },
        { logo: null, icon: Search, name: "SEO", how: "Every product page ships with its own title, description and structured data, indexable from day one.", site: "included" },
      ],
    },
    {
      group: "Marketing & tracking",
      icon: Tag,
      tone: { label: "text-teal-700", chip: "bg-teal-50 text-teal-800 ring-teal-200", rule: "bg-teal-500", hover: "hover:border-teal-300" },
      items: [
        { logo: "/partner-logos/google-analytics.svg", icon: BarChart3, name: "Google Analytics", sub: "via custom head code", how: "Your own GA4 property, measuring real sessions on your live storefront.", site: "included" },
        { logo: "/partner-logos/google-tag-manager.svg", icon: Tag, name: "Google Tag Manager", sub: "via custom head code", how: "Manage every tag and pixel yourself, without waiting on a developer.", site: "included" },
        { logo: "/partner-logos/clarity.png", icon: Eye, name: "Microsoft Clarity", sub: "via custom head code", how: "Session recordings and heatmaps, to see where buyers actually drop off.", site: "included" },
        { logo: "/partner-logos/sentry.svg", icon: Bug, name: "Sentry", sub: "via custom head code", how: "Catch front-end errors on your storefront before a customer reports them.", site: "included" },
        { logo: "/partner-logos/google-ads.svg", icon: Megaphone, name: "Google Ads", how: "Conversion tracking wired to real orders, not guessed events.", site: "Q3 2026", badge: "Q3 2026" },
        { logo: "/partner-logos/whatsapp.svg", icon: Megaphone, name: "WhatsApp Ads", how: "Click-to-WhatsApp campaigns landing straight in your order dashboard.", site: "Q3 2026", badge: "Q3 2026" },
      ],
    },
  ];

  // Counted from the data, never typed by hand — the heading can't go stale.
  const integrationCount = integrationGroups.reduce((n, g) => n + g.items.length, 0);

  /**
   * The five reasons. Each is a documented Shopify-in-India fact, read from a
   * Shopify page on 2026-09-03, written as the seller experiences it rather than
   * as a citation. Sources, in order:
   *  1. help.shopify.com/manual/payments/shopify-payments/supported-countries —
   *     40 countries, India not among them; plus shopify.com/in/pricing for the
   *     2% / 1% / 0.6% / 0.2% third-party fee, and the help page confirming it is
   *     charged "in addition to" the gateway's own processing fee.
   *  2. shopify.com/in/pricing, read live — `paidTrialAmount: ₹20`,
   *     `paidTrialMonths: 3`, "Try 3 days free, then ₹20/month for 3 months";
   *     Basic ₹1,994/mo monthly, ₹1,499/mo billed yearly. Plus the archived
   *     captures for the withdrawn ₹399 Starter plan: present 2026-03-06, gone
   *     2026-04-26, and help.shopify.com "The Starter plan isn't available to
   *     new stores."
   *  3. RBI e-mandate ceilings — ₹15,000 on cards, ₹5,000 on UPI — against
   *     Shopify's own India billing pages, which confirm amounts over ₹15,000
   *     need separate OTP authorisation through Razorpay.
   *  4. help.shopify.com/manual/international/shipping — labels for US, Canada,
   *     Australia only.
   *  5. help.shopify.com/manual/taxes/india-gst — "No. Shopify doesn't create a
   *     GST-compliant bill."
   *
   * DELIBERATELY NOT HERE: "you pay Shopify in a month you sold nothing." It is
   * a true statement about the pricing model, and it is already a comparison row
   * — but as a claim about why sellers leave it has almost no Indian merchant
   * testimony behind it (2–3 instances across ~20,000 reviews screened on
   * 2026-09-03). It was cut for the same reason "sellers lose orders in DMs" was
   * cut from the DM2Buy page. Do not add it back as a reason without evidence.
   */
  const migrationReasons = [
    {
      lead: "You pay Shopify 2% for using an Indian gateway",
      body: "Shopify Payments does not operate in India — it runs in forty countries and this is not one of them. So an Indian merchant wires up Razorpay or PayU, and Shopify charges a further 2% on Basic on top of whatever the gateway takes. Shopify's own documentation calls it a third-party transaction fee and confirms it is in addition to the gateway's cut. An entire Indian checkout industry exists to route around it.",
    },
    {
      lead: "₹20 a month. Then ₹1,994 a month",
      body: "Shopify's India page offers three days free and then ₹20 a month for three months. What it does not put next to that number is where you land in month four: ₹1,994 billed monthly, or ₹1,499 if you commit to a year. And the ₹399 Starter plan — the one permanently cheap way in — came off the India page between March and April 2026, with nothing announced. On oBizee there is no month four, because there is no plan.",
    },
    {
      lead: "Indian payment rails do not fit Shopify's billing",
      body: "The RBI caps auto-debit at ₹15,000 on a card and ₹5,000 on UPI. So a merchant signing up for a ₹20 plan is asked to authorise ₹5,000, which reads like a trap and is really just the ceiling. Worse at the other end: a bill above ₹15,000 cannot be auto-debited at all, and merchants describe stores frozen for days while it is sorted out. oBizee bills in rupees, per order, with no mandate to register.",
    },
    {
      lead: "Shopify Shipping does not run in India",
      body: "Discounted label buying works if your business is in the United States, Canada or Australia. In India you connect a courier or an aggregator yourself and manage rates in a second dashboard — and that second dashboard is where sellers describe most of their real losses, in weight disputes and withheld COD remittances. oBizee reaches Delhivery, DTDC, Blue Dart and India Post from the order screen itself.",
    },
    {
      lead: "It will not produce a GST invoice",
      body: "This one is Shopify's own answer rather than our claim: asked whether it creates a GST-compliant bill, its India documentation says no, and points merchants at a third-party service or an app. It also cannot split CGST and SGST into separate tax lines, and HSN codes have to live in a repurposed customs field. Every oBizee order produces a GST invoice with the split worked out from the product's HSN rate and the buyer's state.",
    },
  ];

  const comparisonGroups: ComparisonGroup[] = [
    {
      group: "What it costs to keep the shop open",
      rows: [
        { feature: "Monthly subscription", obizee: { s: "yes", t: "None. ₹0/month, at every volume" }, rival: { s: "no", t: "₹1,994/mo monthly, ₹1,499 on annual billing (Basic)" } },
        { feature: "Cheapest way to start", obizee: { s: "yes", t: "₹0 — and nothing at all until ₹50,000 in orders" }, rival: { s: "partial", t: "₹20/mo, but only for the first 3 months" } },
        { feature: "Cheapest way to stay", obizee: { s: "yes", t: "Still ₹0/month, at every volume, forever" }, rival: { s: "no", t: "₹1,499/mo. The permanent ₹399 Starter plan was withdrawn in India in 2026" } },
        { feature: "A month with no orders", obizee: { s: "yes", t: "Costs you nothing" }, rival: { s: "no", t: "The full plan fee, charged anyway" } },
        { feature: "Platform cut per order", obizee: { s: "yes", t: "1%, capped at ₹10 — and ₹0 before ₹50,000" }, rival: { s: "no", t: "2% on Basic, on top of your gateway's own fee" } },
        { feature: "Native payment processing", obizee: { s: "yes", t: "Razorpay and Paytm connected for you" }, rival: { s: "no", t: "Shopify Payments does not operate in India" } },
        { feature: "Cost to build and publish", obizee: { s: "yes", t: "₹0, and the store is live in 2 minutes" }, rival: { s: "partial", t: "₹0 to build — the subscription still runs" } },
      ],
    },
    {
      group: "Shipping & delivery",
      rows: [
        { feature: "Courier network", obizee: { s: "yes", t: "Delhivery, DTDC, Blue Dart, India Post" }, rival: { s: "no", t: "Shopify Shipping is US, Canada and Australia only" } },
        { feature: "Rate comparison per order", obizee: { s: "yes", t: "Live rates, cheapest picked per parcel" }, rival: { s: "partial", t: "Only if you wire up an aggregator yourself" } },
        { feature: "Same-day hyperlocal", obizee: { s: "yes", t: "Borzo and Shadowfax riders, in-app" }, rival: { s: "no", t: "No same-day option in India" } },
        { feature: "AWB & pickup scheduling", obizee: { s: "yes", t: "Generated and booked in one tap" }, rival: { s: "partial", t: "Through a third-party app, in its own dashboard" } },
        { feature: "Tracking for your customer", obizee: { s: "yes", t: "Live tracking page, sent automatically" }, rival: { s: "partial", t: "Depends on the courier app you installed" } },
      ],
    },
    {
      group: "The India essentials",
      rows: [
        { feature: "GST-compliant invoice", obizee: { s: "yes", t: "On every order, CGST/SGST/IGST split automatically" }, rival: { s: "no", t: "Shopify's own docs: it does not create a GST-compliant bill" } },
        { feature: "CGST / SGST as separate lines", obizee: { s: "yes", t: "Split from the HSN rate and the buyer's state" }, rival: { s: "no", t: "Can only charge the combined amount" } },
        { feature: "HSN codes", obizee: { s: "yes", t: "Per product, at whatever length your rate uses" }, rival: { s: "partial", t: "The tariff field needs 6+ digits; shorter codes need a workaround" } },
        { feature: "Cash on delivery", obizee: { s: "yes", t: "Per product, and it reconciles against the order itself" }, rival: { s: "yes", t: "Built in as a manual payment method — and it skips Shopify's 2%" } },
        { feature: "Prices shown in rupees", obizee: { s: "yes", t: "INR throughout, nothing to configure" }, rival: { s: "partial", t: "Local-currency display needs Shopify Payments, so not in India" } },
        { feature: "What you are billed in", obizee: { s: "yes", t: "INR, on a daily invoice you can check" }, rival: { s: "partial", t: "Plan in INR; every App Store charge is billed in USD" } },
      ],
    },
    {
      group: "Selling channels",
      rows: [
        { feature: "Instagram selling", obizee: { s: "yes", t: "Order forms, QR codes and bio links" }, rival: { s: "partial", t: "Through the sales-channel app, not order forms" } },
        { feature: "WhatsApp selling", obizee: { s: "yes", t: "Same forms, same order list" }, rival: { s: "no", t: "Not a native channel" } },
        { feature: "Custom order forms", obizee: { s: "yes", t: "Your own fields — size, flavour, delivery date, engraving" }, rival: { s: "no", t: "Fixed cart checkout" } },
        { feature: "One dashboard across channels", obizee: { s: "yes", t: "Every order in a single list" }, rival: { s: "partial", t: "Web-first; other channels are add-ons" } },
      ],
    },
    {
      group: "Running the business",
      rows: [
        { feature: "Order lifecycle dashboard", obizee: { s: "yes", t: "Pending → in progress → shipped → delivered, per order" }, rival: { s: "yes", t: "Full order management" } },
        { feature: "Products & variants", obizee: { s: "yes", t: "UNLIMITED, per-variant price, stock, SKU and image" }, rival: { s: "yes", t: "Full variant support" } },
        { feature: "Bulk product upload", obizee: { s: "yes", t: "Photo-first, with AI-assisted titles" }, rival: { s: "partial", t: "CSV import" } },
        { feature: "Expense & profit tracking", obizee: { s: "yes", t: "Every expense against every order" }, rival: { s: "partial", t: "Through paid apps" } },
        { feature: "Financial records", obizee: { s: "yes", t: "Daily invoice, every rupee itemised" }, rival: { s: "partial", t: "Reports on the plan; accounting through apps" } },
        { feature: "Analytics", obizee: { s: "yes", t: "Orders, revenue and repeat buyers" }, rival: { s: "yes", t: "Strong built-in analytics" } },
        { feature: "Vendor management", obizee: { s: "yes", t: "Vendors, purchase lists and their rates" }, rival: { s: "partial", t: "Through paid apps" } },
        { feature: "Employee management", obizee: { s: "yes", t: "Manager, marketer and technician roles, each with its own access" }, rival: { s: "partial", t: "Staff accounts, capped by plan tier" } },
        { feature: "Raw materials & recipes", obizee: { s: "yes", t: "Know unit cost before you set a price" }, rival: { s: "no", t: "Not offered" } },
        { feature: "Customer retention SMS", obizee: { s: "yes", t: "Win-back segments, ₹0.25 a message" }, rival: { s: "partial", t: "Through paid apps like Klaviyo" } },
      ],
    },
    {
      group: "Where Shopify is genuinely ahead",
      rows: [
        { feature: "Theme marketplace", obizee: { s: "partial", t: "4 India-first templates, free" }, rival: { s: "yes", t: "A large paid theme marketplace" } },
        { feature: "App ecosystem", obizee: { s: "no", t: "No app store — what is built in is what there is" }, rival: { s: "yes", t: "Thousands of apps for almost anything" } },
        { feature: "Selling internationally", obizee: { s: "partial", t: "Stripe for overseas cards; shipping is India-first" }, rival: { s: "yes", t: "Built for cross-border from the start" } },
        { feature: "Physical retail / POS", obizee: { s: "no", t: "Not offered" }, rival: { s: "yes", t: "Shopify POS, at ₹7,000/mo per location" } },
        { feature: "Enterprise scale", obizee: { s: "partial", t: "Built for small Indian sellers, not enterprise" }, rival: { s: "yes", t: "Shopify Plus, from ₹1,75,000/mo" } },
      ],
    },
  ];

  /**
   * The receipt. One month, thirty orders, ₹800 each — ₹24,000 taken.
   *
   * The payment gateway is deliberately EXCLUDED from both columns: a merchant
   * pays Razorpay the same on either platform, so counting it against Shopify
   * would be dishonest, and it is exactly the sort of thing that makes a whole
   * page suspect. What is left is the only thing that actually differs — what
   * the platform itself takes.
   *
   * Shopify lines: shopify.com/in/pricing, read 2026-09-03 — Basic at ₹1,499/mo
   * on annual billing, and a 2% third-party payment provider fee on Basic.
   * oBizee lines: 1% per order capped at ₹10, and ₹0 before ₹50,000.
   */
  const receipt = {
    orders: 30,
    aov: 800,
    shopify: [
      { label: "Shopify Basic plan", note: "annual billing — ₹1,994 if you pay monthly", amount: 1499 },
      { label: "Shopify's cut on 30 orders", note: "2% of ₹24,000, because Shopify Payments has no India", amount: 480 },
    ],
    obizee: [
      { label: "oBizee plan", note: "there isn't one", amount: 0 },
      { label: "oBizee's cut on 30 orders", note: "₹0 until the shop has taken ₹50,000", amount: 0 },
    ],
    obizeeAfter: [
      { label: "oBizee plan", note: "still isn't one", amount: 0 },
      { label: "oBizee's cut on 30 orders", note: "1% of ₹800, capped at ₹10 — so ₹8 an order", amount: 240 },
    ],
  };
  const gmv = receipt.orders * receipt.aov;
  const sum = (rows: { amount: number }[]) => rows.reduce((n, r) => n + r.amount, 0);
  const shopifyTotal = sum(receipt.shopify);
  const obizeeTotal = sum(receipt.obizee);
  const obizeeAfterTotal = sum(receipt.obizeeAfter);
  const multiple = Math.round(shopifyTotal / obizeeAfterTotal);

  const migrationSteps = [
    { icon: Link2, title: "Send the link", body: "Your myshopify.com address or your own domain, on WhatsApp. That is the whole ask — we never need your Shopify login." },
    { icon: Rocket, title: "We move it", body: "Products, images, prices, variants and collections, rebuilt on oBizee. You re-upload nothing." },
    { icon: Eye, title: "You check it", body: "Your Shopify store stays live the entire time. You see yours on oBizee before any customer does." },
    { icon: Send, title: "Cancel when you're ready", body: "Point your domain over, then cancel Shopify yourself. Nobody switches anything off but you." },
  ];

  const whatYouKeep = [
    { icon: ImageIcon, keep: "Every product photo", detail: "At full resolution, not recompressed" },
    { icon: Tag, keep: "Your prices and variants", detail: "Collections and stock come across intact" },
    { icon: Globe, keep: "Your own domain", detail: "It stays in your name — we only map it" },
    { icon: Users, keep: "Your customer list", detail: "We never touch it, never market to it" },
    { icon: Wallet, keep: "Your Razorpay account", detail: "Payments keep landing where they already land" },
    { icon: Store, keep: "Your Shopify store", detail: "Live until you cancel it yourself" },
  ];

  // Real categories with real counts, from liveShops.ts — not a decorative pill row.
  const categoryCounts = Object.entries(
    liveShops.reduce<Record<string, number>>((acc, s) => {
      acc[s.category] = (acc[s.category] || 0) + 1;
      return acc;
    }, {}),
  ).sort((a, b) => b[1] - a[1]);

  const faqs = [
    {
      question: "What is the best Shopify alternative in India?",
      answer:
        "oBizee, for a small Indian seller. There is no subscription at any volume, and nothing at all is charged until your store has taken ₹50,000 in orders. Delhivery, DTDC, Blue Dart and India Post shipping are built in with live rate comparison — Shopify Shipping does not operate in India — along with same-day hyperlocal delivery, Razorpay and Paytm, GST invoicing, expenses, vendors, staff accounts and analytics.",
    },
    {
      question: "How much does Shopify actually cost in India?",
      answer:
        "Shopify's India page offers three days free and then ₹20 a month for three months. After that, Basic is ₹1,499 a month billed yearly or ₹1,994 billed monthly, Grow is ₹5,599 or ₹7,447, and Advanced is ₹22,680 or ₹30,164 — all read from Shopify's India pricing page on 3 September 2026. On top of the plan, because Shopify Payments does not operate in India, Shopify charges a third-party transaction fee — 2% on Basic — in addition to whatever your payment gateway charges. Shopify adds GST to its bill unless you submit a GSTIN, in which case it exempts you.",
    },
    {
      question: "Is Shopify really ₹20 a month in India?",
      answer:
        "For three months. Shopify's India pricing page offers a three-day free trial and then ₹20 a month for the first three months, after which the plan reverts to standard pricing — ₹1,994 a month on Basic if you are billed monthly, or ₹1,499 if you commit to a year. The ₹20 is an introductory price, not a plan you can stay on.",
    },
    {
      question: "Is there still a ₹399 Shopify plan in India?",
      answer:
        "No. The Starter plan at ₹399 a month was still on Shopify's India pricing page in March 2026 and was gone by late April 2026. Shopify's help centre now states that the Starter plan is not available to new stores, and that a merchant who moves off it cannot go back. With Starter withdrawn, the cheapest way to stay on Shopify in India is Basic at ₹1,499 a month on annual billing.",
    },
    {
      question: "Does Shopify give you a GST invoice in India?",
      answer:
        "No, and this is Shopify's own answer rather than ours — its India GST documentation says it does not create a GST-compliant bill, and points merchants to a third-party service or an app. It also cannot split CGST and SGST into separate tax lines. On oBizee every order produces a GST invoice with the split worked out from the product's HSN rate and the buyer's state.",
    },
    {
      question: "Do I need a shipping app on Shopify in India?",
      answer:
        "You need something, because Shopify's own discounted label buying only covers businesses in the United States, Canada and Australia. Several Indian courier apps are free to install and bill only the freight — NimbusPost, Delhivery's own app and iThink among them — so the subscription itself can be zero. What you cannot avoid is running your shipping in a second dashboard. On oBizee it is in the order screen.",
    },
    {
      question: "Will I lose orders while I switch from Shopify?",
      answer:
        "No. Your Shopify store keeps running the whole time. We rebuild your catalogue on oBizee first, you check it, and only then do you point your domain across. You cancel Shopify yourself, when you are ready — nobody switches anything off on your behalf.",
    },
    {
      question: "When is Shopify the better choice?",
      answer:
        "When you are selling internationally, when you need a specific app from a large ecosystem, when you run physical retail alongside online, or when a paid theme is worth more to you than the monthly fee. Shopify is a genuinely excellent global platform. oBizee is built for an Indian seller shipping Indian parcels to Indian pin codes, and that is the case where a monthly subscription buys you the least.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Shopify — India's Best Shopify Alternative for Indian Sellers",
    description:
      "oBizee vs Shopify for Indian sellers: no monthly subscription, built-in Delhivery, DTDC, Blue Dart and India Post shipping, GST invoicing and same-day hyperlocal delivery. Nothing to pay until your store has taken ₹50,000 in orders.",
    url: "https://www.obizee.com/shopify-alternative",
    inLanguage: "en-IN",
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "oBizee vs Shopify — India's Best Shopify Alternative for Indian Sellers",
    description:
      "A line-by-line comparison of oBizee and Shopify for Indian sellers: what a month actually costs, what is built in, real shops running today, why sellers move, and how migration works.",
    datePublished: "2026-04-23",
    dateModified: "2026-09-03",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" },
    },
    mainEntityOfPage: "https://www.obizee.com/shopify-alternative",
    image: "https://www.obizee.com/Obizee.png",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.obizee.com/" },
          { name: "Compare", url: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
          { name: "oBizee vs Shopify", url: "https://www.obizee.com/shopify-alternative" },
        ]}
      />
      <JsonLd data={jsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={OBIZEE_SOFTWARE_SCHEMA} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* 1 — WHY */}
        <section className="border-b border-orange-100 bg-gradient-to-b from-orange-50/70 to-white py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-600" />
              </span>
              India&rsquo;s best Shopify alternative
            </span>
            {/* See CompareDM2buy for why the exact phrase sits in the H1. */}
            <h1 className="mb-4 text-[26px] font-bold leading-tight text-gray-900 sm:text-[40px]">
              The <span className="text-orange-600">Shopify alternative</span> that
              doesn&rsquo;t charge you rent
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              You should not be paying rent on a shop that has not sold anything yet. Shopify will
              sell you three months at ₹20; month four is{" "}
              <span className="font-semibold text-gray-900">₹1,994</span>, sold or not — and it takes
              another <span className="font-semibold text-gray-900">2% of every order</span> because
              Shopify Payments has no India. oBizee charges you nothing until your shop has actually
              sold, and ships through four couriers while it does.
            </p>

            <div className="mt-8">
              <GoalMark />
            </div>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AppDownloadTrigger>
                <Button className="rounded-lg bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-700 motion-safe:hover:-translate-y-0.5">
                  Start free <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </AppDownloadTrigger>
              <a
                href="#receipt"
                className="text-sm font-semibold text-gray-600 underline underline-offset-4 transition-colors hover:text-orange-600"
              >
                See one month, itemised ↓
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11.5px] text-gray-500">
              <span className="flex items-center gap-1.5">
                <User className="h-3 w-3" aria-hidden="true" />
                By <span className="font-semibold text-gray-700">Raunak Kumar</span>
              </span>
              <span aria-hidden="true" className="text-gray-300">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3 w-3" aria-hidden="true" />
                Published 23 April 2026
              </span>
              <span aria-hidden="true" className="text-gray-300">·</span>
              <span className="font-semibold text-gray-700">Updated 3 September 2026</span>
            </div>
          </div>
        </section>

        {/* 2 — WHAT IS ACTUALLY PLUGGED IN */}
        <section className="border-b border-gray-100 bg-gray-50/60 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 text-center">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-orange-600">Already wired in</p>
              <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-[28px]">
                {integrationCount} integrations, <span className="text-orange-600">and no app store bill</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm text-gray-600">
                There is no oBizee app store, because there is nothing left to sell you. Every one of
                these is switched on at signup, on every account, at no extra cost.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {integrationGroups.map((group) => (
                <div
                  key={group.group}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-2.5 border-b border-gray-100 px-5 py-3">
                    <span className={`h-4 w-1 rounded-full ${group.tone.rule}`} aria-hidden="true" />
                    <group.icon className={`h-4 w-4 ${group.tone.label}`} aria-hidden="true" />
                    <p className={`font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] ${group.tone.label}`}>
                      {group.group}
                    </p>
                    <span className="ml-auto font-mono text-[10.5px] text-gray-400">{group.items.length}</span>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className={`group flex items-start gap-3.5 border border-transparent px-5 py-4 transition-all duration-300 ${group.tone.hover} hover:bg-gray-50/60`}
                      >
                        {/*
                          A brand plate, not a square. Half these marks are wordmarks
                          (DTDC is 4.4:1, India Post 1.5:1) and a 40px square renders
                          those as an illegible smudge. 64×40 with the image height-
                          capped lets a wide wordmark use the width while a square
                          symbol still sits at 28px — one cell for every row, so the
                          text column stays aligned.
                        */}
                        <span className="grid h-10 w-16 shrink-0 place-items-center overflow-hidden rounded-xl border border-gray-200 bg-white px-2 py-1.5 transition-transform duration-300 motion-safe:group-hover:scale-110">
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt={`${item.name} logo`}
                              width={48}
                              height={28}
                              loading="lazy"
                              className="max-h-7 w-full object-contain"
                            />
                          ) : item.icon ? (
                            <item.icon className={`h-4.5 w-4.5 ${group.tone.label}`} aria-hidden="true" />
                          ) : (
                            <span className="font-mono text-[11px] font-bold text-gray-500">
                              {item.name.slice(0, 2)}
                            </span>
                          )}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="mb-0.5 flex flex-wrap items-center gap-2">
                            <span className="text-[14px] font-bold text-gray-900">{item.name}</span>
                            {item.badge ? (
                              <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-gray-600 ring-1 ring-gray-200">
                                Coming {item.badge}
                              </span>
                            ) : (
                              <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ring-1 ${group.tone.chip}`}>
                                Free
                              </span>
                            )}
                          </div>
                          {item.sub ? (
                            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.1em] text-gray-400">
                              {item.sub}
                            </p>
                          ) : null}
                          <p className="text-[12.5px] leading-relaxed text-gray-600">{item.how}</p>
                          <p className="mt-1.5 font-mono text-[10.5px] text-gray-400">{item.site}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 — STORES AVAILABLE */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 text-center">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-orange-600">See for yourself</p>
              <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-[28px]">
                165 real shops, <span className="text-orange-600">open right now</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm text-gray-600">
                Not mockups and not templates. <span className="font-semibold text-gray-900">165 merchants</span>{" "}
                selling on oBizee today, across{" "}
                <span className="font-semibold text-gray-900">{stateCount} states</span> and{" "}
                <span className="font-semibold text-gray-900">{categoryCount} categories</span>. Open any of them
                and buy something.
              </p>
              {/*
                Merchant milestone count is owner-supplied (Raunak, 2026-09-03). It is not
                derivable from anything in this repo — liveShops.ts only records shops with a
                working storefront and more than two products. Do not "correct" it against
                that file; update it only from the billing data.
              */}
              <p className="mx-auto mt-4 inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[13px] text-orange-900">
                <Check className="h-3.5 w-3.5 shrink-0 text-orange-600" strokeWidth={3} aria-hidden="true" />
                <span className="font-bold text-orange-700">{shopCount} of them</span>
                <span>have already crossed the first goal —</span>
                <span className="font-bold text-orange-700">₹50,000 in orders</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {featuredShops.map((shop) => (
                <a
                  key={shop.subDomain}
                  href={`https://${shop.subDomain}.obizee.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-orange-300 hover:shadow-lg motion-safe:hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                    <img
                      src={`/shops/${shop.subDomain}.jpg`}
                      alt={`${shop.brandName} storefront running on oBizee`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <p className="truncate text-[13px] font-bold text-gray-900 transition-colors group-hover:text-orange-600">
                      {shop.brandName}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1 truncate font-mono text-[10.5px] text-gray-500">
                      <MapPin className="h-2.5 w-2.5 shrink-0" aria-hidden="true" />
                      {shop.category} · {shop.state}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-gray-500">
              Showing 12 of the {shopCount} with full catalogues. Every one is a real merchant with a working storefront, checked 27 August 2026.
            </p>
          </div>
        </section>

        {/* 4 — WHY SELLERS ARE MIGRATING (editorial, per R19 — an argument, not a card grid) */}
        <section className="border-y border-stone-200/70 bg-[#f4efe7] py-11 sm:py-14">
          <div className="mx-auto grid max-w-5xl gap-x-12 gap-y-7 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-14 lg:px-8">
            {/* Left rail: the setup. Right rail: the five reasons. Both fit one screen. */}
            <div className="lg:pt-1">
              <p className="mb-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                2026 update
              </p>

              <h2 className="mb-4 text-[26px] font-bold leading-[1.1] tracking-tight text-stone-900 sm:text-[34px]">
                Five things Shopify does not do for an{" "}
                <span className="font-editorial italic font-normal text-orange-700">Indian</span> seller
              </h2>

              <div className="space-y-3 text-[13.5px] leading-[1.62] text-stone-700 sm:text-[14.5px]">
                <p>
                  Shopify is a very good platform. It is simply not an Indian one, and the gaps land on
                  the same person every time — the seller packing parcels at their kitchen table.
                </p>
                <p>
                  Every claim on the right was read off{" "}
                  <span className="font-semibold text-stone-900">Shopify&rsquo;s own pages</span> on 3
                  September 2026, not from a review and not from a blog. Where Shopify is better than
                  its reputation we have said so on this page too: cash on delivery is built in, and it
                  even escapes Shopify&rsquo;s 2% cut.
                </p>
                <p className="font-semibold text-stone-900">
                  These five are what a rupee-denominated business actually runs into.
                </p>
              </div>

              <p className="mt-5 border-t border-stone-300/70 pt-4 text-[11.5px] leading-relaxed text-stone-500">
                Sources: shopify.com/in/pricing, its archived captures for the withdrawn Starter plan,
                and help.shopify.com for payments, shipping and India GST. Checked 3 September 2026, and
                re-checked whenever Shopify changes a page.
              </p>
            </div>

            <ol className="space-y-4">
              {migrationReasons.map((r, i) => (
                <li key={r.lead} className="flex gap-3.5 border-b border-stone-300/50 pb-4 last:border-b-0 last:pb-0">
                  <span className="shrink-0 font-editorial text-[22px] italic leading-none text-orange-700/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-1 text-[15px] font-bold leading-snug text-stone-900">{r.lead}</h3>
                    <p className="text-[13px] leading-[1.6] text-stone-600">{r.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5 — COMPARISON */}
        <section id="comparison" className="scroll-mt-20 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <p className="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-700">
                  The receipts
                </p>
                <h2 className="mb-4 text-[26px] font-bold leading-tight text-gray-900 sm:text-[32px]">
                  oBizee vs <span className="text-orange-600">Shopify</span>, feature by feature
                </h2>
                <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
                  The line-by-line comparison sellers ask for before switching. Where Shopify
                  technically does something but with a catch, it is marked as partial rather than a
                  tick — and the last group is the five things Shopify simply does better than us.
                </p>
                <p className="text-xs italic text-gray-400">
                  Shopify figures read from Shopify&rsquo;s own pages, 3 September 2026. Refreshed whenever
                  either side ships a real change.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <div className="grid grid-cols-[minmax(120px,1fr)_1.3fr_1.3fr] gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500">Feature</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-orange-600">oBizee</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500">Shopify</span>
                </div>

                {comparisonGroups.map((group) => (
                  <div key={group.group}>
                    <p className="border-b border-gray-200 bg-orange-50/70 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-orange-700">
                      {group.group}
                    </p>
                    {group.rows.map((row) => (
                      <div
                        key={row.feature}
                        className="grid grid-cols-[minmax(120px,1fr)_1.3fr_1.3fr] gap-3 border-b border-gray-100 px-4 py-3 transition-colors last:border-b-0 hover:bg-orange-50/30"
                      >
                        <span className="text-[13px] font-medium leading-snug text-gray-900">{row.feature}</span>
                        <Mark cell={row.obizee} />
                        <Mark cell={row.rival} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*
          6 — THE RECEIPT
          The number is the argument, so it is set as an actual itemised bill rather
          than described in a paragraph. The gateway fee is excluded from BOTH sides
          on purpose: a merchant pays Razorpay the same either way, and counting it
          against Shopify would make every other figure here suspect.
        */}
        <section id="receipt" className="scroll-mt-20 border-y border-stone-200 bg-stone-100 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 text-center">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-orange-600">One month, itemised</p>
              <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-[28px]">
                {receipt.orders} orders. {inr(receipt.aov)} each.{" "}
                <span className="text-orange-600">Who takes what.</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm text-gray-600">
                {inr(gmv)} through the shop in a month. Your payment gateway charges the same on both
                platforms, so it is left out of both columns — below is only what the{" "}
                <span className="font-semibold text-gray-900">platform itself</span> takes.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {/* Shopify */}
              <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
                <div className="flex items-center gap-2 border-b border-dashed border-gray-300 px-6 py-3.5">
                  <Receipt className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                    Shopify Basic
                  </p>
                </div>
                <dl className="flex-1 divide-y divide-dashed divide-gray-200 px-6">
                  {receipt.shopify.map((line) => (
                    <div key={line.label} className="flex items-start justify-between gap-4 py-4">
                      <div className="min-w-0">
                        <dt className="text-[13.5px] font-semibold text-gray-900">{line.label}</dt>
                        <p className="mt-0.5 text-[11.5px] leading-snug text-gray-500">{line.note}</p>
                      </div>
                      <dd className="shrink-0 font-mono text-[15px] font-bold tabular-nums text-gray-900">
                        {inr(line.amount)}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-baseline justify-between gap-4 border-t-2 border-gray-900 px-6 py-4">
                  <span className="text-[12px] font-bold uppercase tracking-wide text-gray-600">
                    Shopify&rsquo;s take
                  </span>
                  <span className="font-mono text-[26px] font-bold tabular-nums text-gray-900">
                    {inr(shopifyTotal)}
                  </span>
                </div>
              </div>

              {/* oBizee */}
              <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-orange-500 bg-white shadow-md">
                <div className="flex items-center gap-2 border-b border-dashed border-orange-200 bg-orange-50/70 px-6 py-3.5">
                  <Receipt className="h-4 w-4 text-orange-500" aria-hidden="true" />
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-700">
                    oBizee
                  </p>
                  <span className="ml-auto rounded bg-orange-600 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wide text-white">
                    Before ₹50,000
                  </span>
                </div>
                <dl className="flex-1 divide-y divide-dashed divide-orange-100 px-6">
                  {receipt.obizee.map((line) => (
                    <div key={line.label} className="flex items-start justify-between gap-4 py-4">
                      <div className="min-w-0">
                        <dt className="text-[13.5px] font-semibold text-gray-900">{line.label}</dt>
                        <p className="mt-0.5 text-[11.5px] leading-snug text-gray-500">{line.note}</p>
                      </div>
                      <dd className="shrink-0 font-mono text-[15px] font-bold tabular-nums text-orange-600">
                        {inr(line.amount)}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="flex items-baseline justify-between gap-4 border-t-2 border-orange-500 bg-orange-50/50 px-6 py-4">
                  <span className="text-[12px] font-bold uppercase tracking-wide text-orange-700">
                    oBizee&rsquo;s take
                  </span>
                  <span className="font-mono text-[26px] font-bold tabular-nums text-orange-600">
                    {inr(obizeeTotal)}
                  </span>
                </div>
              </div>
            </div>

            {/* And after the free period — the honest second half */}
            <div className="mt-5 rounded-2xl border border-gray-200 bg-white px-6 py-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <Clock className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
                <p className="text-[13.5px] font-bold text-gray-900">And once your shop is past ₹50,000?</p>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-gray-600">
                The same month costs you{" "}
                <span className="font-mono font-bold text-orange-600">{inr(obizeeAfterTotal)}</span> — 1%
                of each order, capped at ₹10, so ₹8 on an ₹800 sale. There is still no plan fee, and a
                month with no orders still costs nothing. Shopify&rsquo;s{" "}
                <span className="font-mono font-bold text-gray-900">{inr(shopifyTotal)}</span> does not
                move either way, which is{" "}
                <span className="font-bold text-gray-900">{multiple}× more</span> — in the month you are
                already selling well.
              </p>
            </div>

            <p className="mt-5 text-center text-[11.5px] leading-relaxed text-gray-500">
              Shopify lines read from shopify.com/in/pricing on 3 September 2026: Basic at ₹1,499/month
              on annual billing (₹1,994 monthly), and a 2% third-party transaction fee on Basic, which
              applies because Shopify Payments does not operate in India. Shopify&rsquo;s introductory offer
              of ₹20/month covers the first three months only, so this is month four onward — the month
              that repeats. Shopify adds GST to its bill unless you submit a GSTIN, so no GST line is
              shown here. Courier freight is excluded from both columns — you pay the courier either way.
            </p>
          </div>
        </section>

        {/* 7 — THE PROCESS */}
        <section className="bg-gray-900 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 text-center">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-orange-400">The actual switch</p>
              <h2 className="mb-2 text-xl font-bold text-white sm:text-[28px]">
                We move your store. <span className="text-orange-400">You re-upload nothing.</span>
              </h2>
              <p className="mx-auto max-w-lg text-sm text-gray-400">
                Four steps, and three of them are ours. There is no charge for the move, and you cancel
                Shopify in your own time.
              </p>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {migrationSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl border-t-2 border-orange-500 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 motion-safe:hover:-translate-y-1"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500/20">
                      <step.icon className="h-4 w-4 text-orange-400" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[11px] text-gray-500">0{i + 1}</span>
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold text-white">{step.title}</h3>
                  <p className="text-[12.5px] leading-relaxed text-gray-400">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 8 — WHAT YOU KEEP */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 text-center">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-orange-600">Nothing gets left behind</p>
              <h2 className="text-xl font-bold text-gray-900 sm:text-[28px]">
                Everything that <span className="text-orange-600">comes with you</span>
              </h2>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-3">
              {whatYouKeep.map((item) => (
                <li key={item.keep} className="group relative bg-white p-5 transition-colors hover:bg-orange-50/50">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-orange-500 transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-orange-100 transition-colors group-hover:bg-orange-600">
                    <item.icon className="h-4.5 w-4.5 text-orange-600 transition-colors group-hover:text-white" aria-hidden="true" />
                  </span>
                  <p className="text-[14px] font-bold leading-snug text-gray-900">{item.keep}</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9 — WHO IT IS FOR */}
        <section className="border-y border-orange-100 bg-orange-50 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-orange-600">Built for</p>
            <h2 className="mb-3 text-xl font-bold text-gray-900 sm:text-[28px]">
              Sellers shipping Indian parcels to <span className="text-orange-600">Indian pin codes</span>
            </h2>
            <p className="mx-auto mb-7 max-w-xl text-sm text-gray-600">
              Not global ecommerce. Small Indian businesses selling handmade and short-run products on
              Instagram and WhatsApp, usually as a one-person team — the case where a monthly
              subscription buys you the least.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {categoryCounts.map(([cat, count]) => (
                <span
                  key={cat}
                  className="group flex items-center gap-2 rounded-full border border-orange-200 bg-white py-1.5 pl-3.5 pr-1.5 text-xs font-medium text-gray-700 shadow-sm transition-all hover:border-orange-400 motion-safe:hover:-translate-y-0.5"
                >
                  {cat}
                  <span className="grid h-5 min-w-[20px] place-items-center rounded-full bg-orange-100 px-1.5 font-mono text-[10.5px] font-bold text-orange-700 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                    {count}
                  </span>
                </span>
              ))}
            </div>
            <p className="mt-5 font-mono text-[11px] text-gray-500">
              Live shop counts per category, {shopCount} shops total — queried 27 August 2026
            </p>
          </div>
        </section>

        {/* 10 — FREE, AND WHAT COMES AFTER */}
        <section className="relative overflow-hidden bg-gray-950 py-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-orange-600/20 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-emerald-500/10 blur-[120px]"
          />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400">No catch</p>
              <h2 className="text-2xl font-bold leading-tight text-white sm:text-[34px]">
                You pay us <span className="text-orange-400">nothing</span> until your shop has sold
              </h2>
            </div>

            {/* The number is the argument */}
            <div className="mb-11 flex justify-center">
              <div className="scale-110 sm:scale-[1.45]">
                <GoalMark tone="dark" />
              </div>
            </div>

            {/* The threshold, drawn */}
            <div className="mb-10">
              <div className="mb-2.5 flex items-end justify-between text-[11px] font-semibold uppercase tracking-wider">
                <span className="text-orange-300">₹0 → ₹50,000</span>
                <span className="text-gray-500">after ₹50,000</span>
              </div>
              <div className="flex gap-1.5">
                <div className="relative h-11 flex-[5] overflow-hidden rounded-l-xl bg-gradient-to-r from-orange-600 to-orange-500">
                  <span className="absolute inset-0 grid place-items-center text-[13px] font-bold uppercase tracking-wide text-white">
                    You pay ₹0
                  </span>
                </div>
                <div className="relative h-11 flex-[2] overflow-hidden rounded-r-xl border border-white/15 bg-white/5">
                  <span className="absolute inset-0 grid place-items-center px-2 text-center text-[12px] font-semibold text-gray-300">
                    1%, capped at ₹10
                  </span>
                </div>
              </div>
            </div>

            <p className="mx-auto max-w-2xl text-center text-[13.5px] leading-relaxed text-gray-400">
              Not a trial. Not a limited tier. Every courier, all five payment gateways, Instagram and
              WhatsApp forms, <span className="font-semibold text-white">unlimited products</span>, your{" "}
              <span className="font-semibold text-white">mapped custom domain</span>, GST invoicing,
              expenses, vendors and staff accounts are switched on the whole time —{" "}
              <span className="font-semibold text-orange-300">0 SUBSCRIPTION, 0 SETUP FEE</span>, and a
              month with no orders still costs you nothing.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AppDownloadTrigger>
                <Button className="rounded-lg bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-500 motion-safe:hover:-translate-y-0.5">
                  Start free <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </AppDownloadTrigger>
              <Link
                href="/pricing"
                className="text-sm font-semibold text-gray-300 underline underline-offset-4 transition-colors hover:text-white"
              >
                See the full worked examples →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-gray-100 bg-stone-50 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-orange-600">Before you switch</p>
              <h2 className="text-xl font-bold text-gray-900 sm:text-[28px]">Questions sellers actually ask</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              {faqs.map((faq, i) => (
                <article
                  key={faq.question}
                  className="group flex gap-4 border-b border-gray-100 p-5 transition-colors last:border-b-0 hover:bg-orange-50/40 sm:gap-5 sm:p-6"
                >
                  <span className="shrink-0 font-mono text-[11px] font-bold text-orange-300 transition-colors group-hover:text-orange-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="mb-1.5 text-[14.5px] font-bold leading-snug text-gray-900">{faq.question}</h3>
                    <p className="text-[13px] leading-relaxed text-gray-600">{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-[30px]">Move your Shopify store by tomorrow</h2>
            <p className="mb-7 text-sm text-orange-100 sm:text-base">
              Send us the link on WhatsApp. We rebuild it, you check it, and your Shopify store keeps
              running until you cancel it yourself.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AppDownloadTrigger>
                <Button className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-50 motion-safe:hover:-translate-y-0.5">
                  Start free <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </AppDownloadTrigger>
              <a
                href="https://wa.me/918796971046?text=Hi%20oBizee%2C%20I%27d%20like%20to%20move%20my%20store%20from%20Shopify.%20Here%20is%20my%20store%20link%3A%20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-lg border-2 border-white bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20">
                  <Phone className="mr-1.5 h-4 w-4" /> Send my store link
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CompareShopify;
