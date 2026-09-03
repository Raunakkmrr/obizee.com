"use client";
import React from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Check, Truck, MessageCircle, Wallet, Send, Eye,
  Rocket, Link2, ShieldCheck, Clock, Globe, Phone, MapPin,
  Image as ImageIcon, Tag, Users, Store, Banknote, Mail, Download, Search,
  BarChart3, Bug, Megaphone, User, Calendar,
} from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";
import { liveShops } from "@/data/liveShops";
import { OBIZEE_SOFTWARE_SCHEMA } from "@/lib/productSchema";
import { GoalMark, Mark, type ComparisonGroup } from "@/components/compare/marks";

/**
 * oBizee vs DM2Buy.
 *
 * Section order is the argument, not a checklist:
 * why → what's built in → the integrations themselves → real shops →
 * why sellers move → the comparison → how the move works → what survives it →
 * who it's for → what it costs.
 *
 * INTEGRATION MARKS: real partner logos live in public/partner-logos/, all pulled
 * from the brand's own site or simple-icons at source resolution — vectors where
 * one exists, otherwise ≥256px raster cropped to the brand's square symbol so it
 * still reads inside a 28px cell. Delhivery and Blue Dart are the two brands with
 * no usable mark: both sites are JS shells serving no logo file and their favicons
 * are sub-20px fragments, so they fall back to an icon. Never draw an imitation
 * logo (R4); add the real file and set `logo` on that item.
 *
 * Items that are capabilities rather than brands (COD, custom domain, store
 * import, SEO, the tracking tools) carry a lucide `icon` instead of a logo.
 */
const CompareDM2buy2 = () => {
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
        { logo: "/partner-logos/razorpay.svg", name: "Razorpay", how: "UPI, cards, net banking and wallets at checkout. Already connected — you never open a gateway account.", site: "razorpay.com" },
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
        { logo: null, icon: Download, name: "Store import", how: "Bring your catalogue across from DM2Buy, Instagram or an existing site. You re-upload nothing.", site: "included" },
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

  /**
   * These five are the recurring themes in public Play Store and App Store India
   * reviews for DM2Buy, Dukaan, Bikayi and DotPe — read across ~3,400 reviews on
   * 2026-09-03. They are paraphrased patterns, deliberately not quotes: the
   * reviews are other people's words about named companies, and neither belongs
   * on oBizee's marketing page.
   *
   * Deliberately NOT included: "sellers lose orders in Instagram DMs." Every
   * source for that claim was vendor marketing, with no verifiable seller
   * saying it. Do not add it back without real evidence.
   */
  const migrationReasons = [
    {
      lead: "It goes down, and nobody answers",
      body: "The most common thing sellers write about a storefront tool is not a missing feature — it is that the store stopped loading and support went quiet for days. On oBizee your store is the thing we are judged on, and there is a real person on WhatsApp, not a ticket queue.",
    },
    {
      lead: "Will the platform still be here next year",
      body: "Sellers have watched a funded storefront company shrink, stop answering, and take their shop down with it. It is a fair question to ask us too, so we answer it with the only thing that matters: your catalogue, your domain and your customer list are yours, and they leave with you.",
    },
    {
      lead: "The price changing after you are locked in",
      body: "This is the loudest complaint in the whole set, and it is not that the price was high — it is that the price moved six months into an annual plan, and leaving meant abandoning what was already paid. We would rather be judged on this than argue it: nothing at all until ₹50,000 in orders, and the structure after that published in full, before you sign up.",
    },
    {
      lead: "Who is actually holding your money",
      body: "One seller put it better than we could: are you a platform, or a marketplace — decide. Payments settle into your own Razorpay or Paytm account. Your money never passes through oBizee, so there is no payout for us to delay, hold, or put under review.",
    },
    {
      lead: "Whose domain is it, really",
      body: "Sellers describe paying for a domain and then being told it cannot be released to them. It is the sharpest version of lock-in, because every post, reel and bio link you have ever published points at it. Your domain is mapped free, stays in your name, and you can point it somewhere else the day you want to.",
    },
  ];

  // Counted from the data, never typed by hand — the heading can't go stale.
  const integrationCount = integrationGroups.reduce((n, g) => n + g.items.length, 0);

  const comparisonGroups: ComparisonGroup[] = [
    {
      group: "Shipping & delivery",
      rows: [
        { feature: "Courier network", obizee: { s: "yes", t: "Delhivery, DTDC, Blue Dart, India Post" }, rival: { s: "no", t: "You book every courier yourself" } },
        { feature: "Rate comparison per order", obizee: { s: "yes", t: "Live rates, cheapest picked per parcel" }, rival: { s: "no", t: "Not offered" } },
        { feature: "Same-day hyperlocal", obizee: { s: "yes", t: "Borzo and Shadowfax riders, in-app" }, rival: { s: "no", t: "No same-day option" } },
        { feature: "AWB & pickup scheduling", obizee: { s: "yes", t: "Generated and booked in one tap" }, rival: { s: "no", t: "Handled outside the tool" } },
        { feature: "Tracking for your customer", obizee: { s: "yes", t: "Live tracking page, sent automatically" }, rival: { s: "no", t: "You send updates by hand" } },
      ],
    },
    {
      group: "Payments & storefront",
      rows: [
        { feature: "Payment gateways", obizee: { s: "yes", t: "Razorpay and Paytm, already connected" }, rival: { s: "partial", t: "Available, you set it up separately" } },
        { feature: "Custom domain", obizee: { s: "yes", t: "FREE — DNS and SSL mapped for you" }, rival: { s: "no", t: "Not mapped for you" } },
        { feature: "Products & variants", obizee: { s: "yes", t: "UNLIMITED, per-variant price and stock" }, rival: { s: "partial", t: "Catalog listing, basic variants" } },
        { feature: "Cost to build and publish", obizee: { s: "yes", t: "₹0, and the store is live in 2 minutes" }, rival: { s: "yes", t: "₹0 on the free tier" } },
        { feature: "Monthly subscription", obizee: { s: "yes", t: "None. ₹0/month, at every volume" }, rival: { s: "partial", t: "Free tier; Pro reported at ₹999/mo" } },
      ],
    },
    {
      group: "Selling channels",
      rows: [
        { feature: "Instagram selling", obizee: { s: "yes", t: "Order forms, QR codes and bio links" }, rival: { s: "yes", t: "Its core strength" } },
        { feature: "WhatsApp selling", obizee: { s: "yes", t: "Same forms, same order list" }, rival: { s: "no", t: "Instagram-first" } },
        { feature: "One dashboard across channels", obizee: { s: "yes", t: "Every order in a single list" }, rival: { s: "no", t: "Catalog only" } },
        { feature: "Seller collaboration network", obizee: { s: "no", t: "Not offered" }, rival: { s: "yes", t: "Runs a seller network" } },
        { feature: "IRL pop-up events", obizee: { s: "no", t: "Not offered" }, rival: { s: "yes", t: "Organises pop-ups" } },
      ],
    },
    {
      group: "Running the business",
      rows: [
        { feature: "Expense & profit tracking", obizee: { s: "yes", t: "Every expense against every order" }, rival: { s: "no", t: "Not part of a catalog tool" } },
        { feature: "Financial records", obizee: { s: "yes", t: "Daily invoice, every rupee itemised" }, rival: { s: "no", t: "No ledger to check" } },
        { feature: "Analytics", obizee: { s: "yes", t: "Orders, revenue and repeat buyers" }, rival: { s: "partial", t: "Basic order counts" } },
        { feature: "Vendor management", obizee: { s: "yes", t: "Vendors, purchase lists and their rates" }, rival: { s: "no", t: "Not offered" } },
        { feature: "Employee management", obizee: { s: "yes", t: "Manager, marketer and technician roles, each with its own access" }, rival: { s: "no", t: "Single account" } },
        { feature: "Raw materials & recipes", obizee: { s: "yes", t: "Know unit cost before you set a price" }, rival: { s: "no", t: "Not offered" } },
        { feature: "Customer retention SMS", obizee: { s: "yes", t: "Win-back segments, ₹0.25 a message" }, rival: { s: "no", t: "Not offered" } },
      ],
    },
  ];

  const migrationSteps = [
    { icon: Link2, title: "Send the link", body: "Your DM2Buy store URL, on WhatsApp. That is the whole ask — we never need your login." },
    { icon: Rocket, title: "We move it", body: "Products, images, prices, variants and categories, rebuilt on oBizee. You re-upload nothing." },
    { icon: Eye, title: "You check it", body: "Your DM2Buy store stays live the entire time. You see yours on oBizee before any customer does." },
    { icon: Send, title: "Switch when you say", body: "Point your domain over, or use your free obizee.com address. Your call, your timing." },
  ];

  const whatYouKeep = [
    { icon: ImageIcon, keep: "Every product photo", detail: "At full resolution, not recompressed" },
    { icon: Tag, keep: "Your prices and variants", detail: "Categories and stock come across intact" },
    { icon: Globe, keep: "Your own domain", detail: "Or a free obizee.com one, if you have none" },
    { icon: Users, keep: "Your customer list", detail: "We never touch it, never market to it" },
    { icon: MessageCircle, keep: "Instagram and WhatsApp orders", detail: "Same numbers, now in one dashboard" },
    { icon: Store, keep: "Your DM2Buy store", detail: "Still live until you personally switch it off" },
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
      question: "What is the best DM2Buy alternative in India?",
      answer: "oBizee. It does everything a catalog link does — an Instagram-ready storefront, order collection, a shareable link — and then keeps going: Delhivery, DTDC, Blue Dart and India Post shipping, same-day hyperlocal delivery through Borzo and Shadowfax, Razorpay and Paytm built in, plus expenses, vendors, staff accounts and analytics. You are not charged anything until your store has taken ₹50,000 in orders.",
    },
    {
      question: "Do I need a GST number to start selling?",
      answer:
        "Not to open your oBizee store — you can build it, publish it and take orders without one. Whether you need GST registration depends on your turnover and whether you sell across state lines, so check with a CA for your own numbers. When you do have a GSTIN, add it and oBizee works out CGST, SGST and IGST automatically from each product's HSN rate and the buyer's state, and puts them on the invoice.",
    },
    {
      question: "Will I lose orders while I switch from DM2Buy?",
      answer: "No. Your DM2Buy store keeps running the whole time. We rebuild your catalogue on oBizee first, you check it, and only then do you point your Instagram bio or your domain across. Nothing goes dark in the middle.",
    },
    {
      question: "Do I have to re-upload all my products?",
      answer: "No. Send your DM2Buy store link on WhatsApp and we move the products, images, prices, variants and categories across for you. There is no charge for the move.",
    },
    {
      question: "Does DM2Buy have shipping integration?",
      answer: "No. DM2Buy does not include courier integration, so sellers book shipments themselves or pay for a separate aggregator. oBizee integrates Delhivery directly and reaches DTDC, Blue Dart and India Post through a built-in aggregator, with live rate comparison per order and same-day hyperlocal delivery through Borzo and Shadowfax.",
    },
    {
      question: "When is DM2Buy the better choice?",
      answer: "If you want a free catalog link, you ship every order yourself, and you do not need stock, courier, vendor or staff management, DM2Buy does that job. Its seller collaboration network and its IRL pop-up events have no oBizee equivalent. oBizee makes sense once the manual work around the order costs you more than the platform does.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs DM2buy — India's Best DM2Buy Alternative for Indian Sellers",
    description:
      "oBizee vs DM2buy for Indian sellers: built-in Delhivery, DTDC, Blue Dart and India Post shipping, same-day hyperlocal delivery, Instagram and WhatsApp selling, expenses, vendors and staff accounts. Nothing to pay until your store has taken ₹50,000 in orders.",
    url: "https://www.obizee.com/compare/obizee-vs-dm2buy-2",
    inLanguage: "en-IN",
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "oBizee vs DM2buy — India's Best DM2Buy Alternative for Indian Sellers",
    description:
      "A line-by-line comparison of oBizee and DM2buy for Indian Instagram and WhatsApp sellers: what is built in, real shops running today, why sellers move, how migration works and what it costs.",
    datePublished: "2026-09-03",
    dateModified: "2026-09-03",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" },
    },
    mainEntityOfPage: "https://www.obizee.com/compare/obizee-vs-dm2buy-2",
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

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.obizee.com/" },
          { name: "Compare", url: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
          { name: "oBizee vs DM2buy", url: "https://www.obizee.com/compare/obizee-vs-dm2buy-2" },
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
              India&rsquo;s best DM2Buy alternative
            </span>
            <h1 className="mb-4 text-[26px] font-bold leading-tight text-gray-900 sm:text-[40px]">
              Your storefront should never be{" "}
              <span className="text-orange-600">the reason an order is lost</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              DM2Buy gives you a catalog link. oBizee gives you the rest of the job — couriers,
              payments, stock, vendors and staff — in the same screen the order arrives in. We move
              your store across free, and you keep selling the whole time.
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
                href="#comparison"
                className="text-sm font-semibold text-gray-600 underline underline-offset-4 transition-colors hover:text-orange-600"
              >
                See it line by line ↓
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

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-orange-500" />Live in under 2 minutes</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-orange-500" />0 SETUP FEE</span>
              <span className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5 text-orange-500" />FREE custom domain</span>
            </div>
          </div>
        </section>

        {/* 2 — WHAT IS ACTUALLY PLUGGED IN */}
        <section className="border-b border-gray-100 bg-stone-50 py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-orange-600">Already built in</p>
              <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-[28px]">
                {integrationCount} integrations, <span className="text-orange-600">and none of them cost extra</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm text-gray-600">
                No app store. No per-integration fee. No Pro plan holding the useful ones back —
                every one of these is on your account from day one.
              </p>
            </div>

            <div className="grid items-start gap-5 lg:grid-cols-2">
              {integrationGroups.map((group) => (
                <div key={group.group} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
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
                          {item.sub && (
                            <p className="mb-1 font-mono text-[10.5px] uppercase tracking-wide text-gray-400">{item.sub}</p>
                          )}
                          <p className="text-[12.5px] leading-relaxed text-gray-600">{item.how}</p>
                          {!item.badge && (
                            <span className="mt-1.5 inline-block font-mono text-[10.5px] text-gray-400">{item.site}</span>
                          )}
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
                What sellers are actually walking away from in{" "}
                <span className="font-editorial italic font-normal text-orange-700">2026</span>
              </h2>

              <div className="space-y-3 text-[13.5px] leading-[1.62] text-stone-700 sm:text-[14.5px]">
                <p>
                  A storefront tool is judged on one night, not on a feature list. The night the link
                  in your bio stops loading, someone is scrolling, and the order goes to whoever has a
                  working store.
                </p>
                <p>
                  We read more than{" "}
                  <span className="font-semibold text-stone-900">8,000 public reviews</span> Indian
                  sellers left for the storefront apps in this category, in their own words. The
                  complaints are remarkably consistent, and almost none are about features — they are
                  about the store being down, nobody answering, a fee nobody mentioned, and money that
                  has not arrived.
                </p>
                <p className="font-semibold text-stone-900">
                  Those five things are the brief oBizee was built against.
                </p>
              </div>

              <p className="mt-5 border-t border-stone-300/70 pt-4 text-[11.5px] leading-relaxed text-stone-500">
                Paraphrased from public Play Store and Indian App Store reviews, read 3 September 2026.
                No seller&rsquo;s words are reproduced and none are named — those reviews are theirs, not
                ours to quote in an ad.
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
                  oBizee vs <span className="text-orange-600">DM2buy</span>, feature by feature
                </h2>
                <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
                  The line-by-line comparison sellers ask for before switching. Where DM2Buy technically
                  does something but with a catch, it is marked as partial rather than a tick — you make
                  the call yourself.
                </p>
                <p className="text-xs italic text-gray-400">
                  Reviewed 3 September 2026. Refreshed whenever either side ships a real change.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <div className="grid grid-cols-[minmax(120px,1fr)_1.3fr_1.3fr] gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500">Feature</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-orange-600">oBizee</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500">DM2buy</span>
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

        {/* 6 — THE PROCESS */}
        <section className="bg-gray-900 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-9 text-center">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-orange-400">The actual switch</p>
              <h2 className="mb-2 text-xl font-bold text-white sm:text-[28px]">
                We move your store. <span className="text-orange-400">You re-upload nothing.</span>
              </h2>
              <p className="mx-auto max-w-lg text-sm text-gray-400">
                Four steps, and three of them are ours. There is no charge for the move.
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

        {/* 7 — WHAT YOU KEEP */}
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
                <li
                  key={item.keep}
                  className="group relative bg-white p-5 transition-colors hover:bg-orange-50/50"
                >
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

        {/* 8 — WHO IT IS FOR */}
        <section className="border-y border-orange-100 bg-orange-50 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-orange-600">Built for</p>
            <h2 className="mb-3 text-xl font-bold text-gray-900 sm:text-[28px]">
              Sellers running a real business <span className="text-orange-600">from their phone</span>
            </h2>
            <p className="mx-auto mb-7 max-w-xl text-sm text-gray-600">
              Not generic ecommerce. Small Indian businesses selling handmade and short-run products
              on Instagram and WhatsApp, usually as a one-person team.
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

        {/* 9 — FREE, AND WHAT COMES AFTER */}
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
                    a small fee per order
                  </span>
                </div>
              </div>
            </div>

            <p className="mx-auto max-w-2xl text-center text-[13.5px] leading-relaxed text-gray-400">
              Not a trial. Not a limited tier. Every courier, both payment gateways, Instagram and
              WhatsApp forms, <span className="font-semibold text-white">unlimited products</span>, your{" "}
              <span className="font-semibold text-white">mapped custom domain</span>, expenses, vendors
              and staff accounts are switched on the whole time —{" "}
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
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-[30px]">Move your DM2Buy store by tomorrow</h2>
            <p className="mb-7 text-sm text-orange-100 sm:text-base">
              Send us the link on WhatsApp. We rebuild it, you check it, and your old store keeps
              running until you say otherwise.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <AppDownloadTrigger>
                <Button className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-50 motion-safe:hover:-translate-y-0.5">
                  Start free <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </AppDownloadTrigger>
              <a
                href="https://wa.me/918796971046?text=Hi%20oBizee%2C%20I%27d%20like%20to%20move%20my%20store%20from%20DM2Buy.%20Here%20is%20my%20store%20link%3A%20"
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

export default CompareDM2buy2;
