"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Check, X, Phone, Calendar, User, Truck, MessageCircle, ShieldCheck, Zap, Globe, Receipt,
} from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";
import CompareMigrationOffer from "@/components/CompareMigrationOffer";
import { sellerQuotes } from "@/data/sellerQuotes";
import { OBIZEE_SOFTWARE_SCHEMA } from "@/lib/productSchema";

const CompareDM2buy = () => {
  const trustBadges = [
    { icon: Zap, label: "Store live in under 2 minutes" },
    { icon: ShieldCheck, label: "0 SETUP FEE" },
    { icon: Globe, label: "FREE mapped custom domain" },
  ];

  const integrations = [
    {
      category: "Payments",
      items: [
        { name: "Razorpay", detail: "UPI, cards, net banking, wallets" },
        { name: "Paytm", detail: "Wallet and UPI checkout" },
      ],
    },
    {
      category: "Shipping",
      items: [
        { name: "Delhivery", detail: "Direct integration, AWB + pickup" },
        { name: "DTDC, Blue Dart, India Post", detail: "Via built-in aggregator" },
        { name: "Borzo, Shadowfax", detail: "Same-day hyperlocal riders" },
      ],
    },
    {
      category: "Selling channels",
      items: [
        { name: "Instagram order forms", detail: "Custom fields, QR, shareable links" },
        { name: "WhatsApp order forms", detail: "Same order dashboard, no separate app" },
      ],
    },
    {
      category: "Running the business",
      items: [
        { name: "Raw materials & recipes", detail: "Know your margin before you price" },
        { name: "Vendor & purchase lists", detail: "One place to track who's cheaper" },
        { name: "Retention SMS", detail: "Win-back and at-risk segments, ₹0.25/SMS" },
      ],
    },
  ];

  const alwaysIncluded = [
    "Store on yourname.obizee.com or your own domain",
    "Unlimited products, variants and categories",
    "Custom order forms, QR codes, shareable links",
    "Delhivery, DTDC, Blue Dart, India Post shipping",
    "Same-day hyperlocal delivery booking",
    "Inventory, raw-material and vendor tracking",
  ];

  const passThrough = [
    "Courier charges — billed by the courier per shipment, same as anywhere",
    "Payment gateway charges — billed by Razorpay or Paytm directly, not oBizee",
    "Retention SMS — ₹0.25 per message, only if you send one",
  ];

  const whyLeaving = [
    {
      icon: ShieldCheck,
      title: "The store has to stay up",
      body: "A bio link is the only path from someone scrolling at midnight to an actual order. If it's down, or a feature is gated behind a plan that keeps moving, that order goes to whoever has a working store.",
    },
    {
      icon: Truck,
      title: "A catalog link isn't a shipping department",
      body: "Booking a courier by hand, one order at a time, is fine at five orders a week. At fifty, it's the job. Sellers move once the manual work costs more than the platform ever would.",
    },
    {
      icon: MessageCircle,
      title: "Orders live in three places, not one",
      body: "Instagram DMs, WhatsApp chats, a notebook. Nothing reconciles itself. The sellers who switch aren't chasing a feature list — they're tired of doing the same job three times.",
    },
  ];

  const stages = [
    {
      stage: "Day 1",
      need: "Somewhere for orders to land",
      pain: "You are taking orders in Instagram DMs and writing them in a notebook. Two get missed in a week.",
      obizee: "Store live at yourname.obizee.com in under 2 minutes, or on your own custom domain. Custom order forms, QR codes and shareable links, so orders arrive in one dashboard instead of three inboxes.",
      rival: "DM2Buy is genuinely good at this and free. If all you need is a link to share in your bio, it does the job.",
    },
    {
      stage: "First 100 orders",
      need: "Shipping and payments that do not need three more subscriptions",
      pain: "You are standing in a courier queue, and a customer wants their cake today, not Thursday.",
      obizee: "Delhivery, DTDC, Blue Dart and India Post with live rate comparison per order. Same-day hyperlocal via Borzo and Shadowfax riders. Razorpay and Paytm built in, with no separate gateway account to open.",
      rival: "DM2Buy has no built-in logistics. You book couriers yourself or pay for a separate aggregator, and there is no same-day option.",
    },
    {
      stage: "Scaling",
      need: "The business behind the shop",
      pain: "You sold out of the wrong yarn, you cannot remember which vendor was cheaper, and last month's buyers never came back.",
      obizee: "Raw materials and recipes, purchase lists, vendor management, expense and profit tracking, plus retention SMS to at-risk and win-back segments at ₹0.25 a message.",
      rival: "DM2Buy is a catalog tool, not a business system. Stock, materials, vendors and repeat-customer marketing all live outside it.",
    },
  ];

  const features = [
    { feature: "Same-day hyperlocal delivery", obizee: "Borzo + Shadowfax riders, booked in-app", competitor: false, winner: "obizee" },
    { feature: "Compare courier rates per order", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Raw materials & recipes", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Purchase lists & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Customer retention SMS (RFM segments)", obizee: "Built in, ₹0.25/SMS", competitor: false, winner: "obizee" },
    { feature: "Free to start", obizee: "3-month free trial", competitor: "Core catalog free", winner: "competitor" },
    { feature: "Monthly subscription", obizee: "None — ₹0/month", competitor: "Free tier + unclear paid features", winner: "obizee" },
    { feature: "Auto-generated website", obizee: true, competitor: true, winner: "tie" },
    { feature: "Instagram selling", obizee: true, competitor: true, winner: "tie" },
    { feature: "WhatsApp selling", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Multi-channel dashboard", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Delhivery integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "DTDC integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "AWB generation & pickup scheduling", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Live order tracking for customers", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Custom order form builder", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Multi-link order forms", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Inventory management", obizee: "Unlimited products & variants, full-featured", competitor: "Basic", winner: "obizee" },
    { feature: "Order dashboard", obizee: "Full lifecycle tracking", competitor: "Basic", winner: "obizee" },
    { feature: "Fare calculator", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Employee & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Seller collaboration network", obizee: false, competitor: true, winner: "competitor" },
    { feature: "IRL pop-up events", obizee: false, competitor: true, winner: "competitor" },
    { feature: "Payment processing", obizee: "Razorpay + Paytm built in, no separate account", competitor: "Available", winner: "obizee" },
    { feature: "Custom domain mapping", obizee: "Free — DNS & SSL handled for you", competitor: false, winner: "obizee" },
    { feature: "Website setup / creation cost", obizee: "₹0 — free to build and publish", competitor: "₹0", winner: "tie" },
  ];

  const forWhom = [
    "Crochet & handmade",
    "Jewellery & accessories",
    "Clothing & fashion",
    "Food, snacks & bakery",
    "Beauty & skincare",
    "Home decor & gifting",
    "Art & prints",
  ];

  const faqs = [
    {
      question: "Will I lose orders or customers while I switch from DM2Buy?",
      answer: "No. Your DM2Buy store keeps running until you decide to point your Instagram bio at oBizee instead — nothing goes offline mid-move. Products, prices and images come across first; you check the new store before anyone else sees it.",
    },
    {
      question: "What is the best DM2Buy alternative for Indian sellers?",
      answer: "oBizee is the best DM2Buy alternative for sellers who need more than a catalog link. It includes Delhivery, DTDC, Blue Dart and same-day hyperlocal shipping, Razorpay and Paytm built in, inventory and variant management, and customer retention SMS, with 0 SUBSCRIPTION and 0 SETUP FEE (see Pricing for the simple structure).",
    },
    {
      question: "What is the difference between oBizee and DM2Buy?",
      answer: "DM2Buy is a catalog and order-link tool: it gives customers somewhere to browse and place an order. oBizee is a full commerce platform that also handles shipping, payments, stock, raw materials, vendors and repeat-customer marketing. If shipping and inventory happen outside your current tool, that is the gap oBizee fills.",
    },
    {
      question: "Does DM2Buy have shipping integration?",
      answer: "No. DM2Buy does not include courier integration, so sellers book shipments themselves or subscribe to a separate aggregator. oBizee integrates Delhivery directly and reaches DTDC, Blue Dart and India Post through a built-in aggregator, with live rate comparison per order and same-day hyperlocal delivery through Borzo and Shadowfax.",
    },
    {
      question: "Is oBizee free like DM2Buy?",
      answer: "oBizee has a 3-month FREE trial and 0 SUBSCRIPTION after it — see Pricing for the simple structure that applies once you're making sales. DM2Buy's core catalog is free too — the trade is that shipping, payments and inventory are included with oBizee rather than handled separately.",
    },
    {
      question: "When is DM2Buy the better choice?",
      answer: "DM2Buy is the better choice if you want a free catalog link, ship orders yourself, and do not need stock or courier management. It is a good starting point. oBizee makes sense once losing orders, booking couriers or tracking stock starts costing you more time than the fee.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs DM2buy — Which D2C Platform is Better for Indian Sellers?",
    description: "Compare oBizee and DM2buy: features, pricing, shipping, multi-channel support. oBizee wins on 20 of 26 features with built-in Delhivery, DTDC, Blue Dart & hyperlocal logistics, UNLIMITED products, and a FREE mapped custom domain.",
    url: "https://www.obizee.com/compare/obizee-vs-dm2buy",
    inLanguage: "en-IN",
  };

  // Real git commit dates — never guess these. Update dateModified only when
  // the content on this page actually changes.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "oBizee vs DM2buy — Which D2C Platform is Better for Indian Sellers?",
    description: "Compare oBizee and DM2buy: features, pricing, shipping, multi-channel support. oBizee wins on 20 of 26 features.",
    datePublished: "2026-04-23",
    dateModified: "2026-09-03",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" },
    },
    mainEntityOfPage: "https://www.obizee.com/compare/obizee-vs-dm2buy",
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

  const renderValue = (val: string | boolean) => {
    if (val === true) return <Check className="h-4 w-4 text-green-600" />;
    if (val === false) return <X className="h-4 w-4 text-red-400" />;
    return <span>{val}</span>;
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Compare", url: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
        { name: "oBizee vs DM2buy", url: "https://www.obizee.com/compare/obizee-vs-dm2buy" },
      ]} />
      <JsonLd data={jsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={OBIZEE_SOFTWARE_SCHEMA} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="py-10 sm:py-14 bg-gradient-to-br from-white to-orange-50/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-700 mb-4">
              Free for sellers leaving DM2Buy
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              oBizee vs DM2buy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Which platform should you choose?
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Sellers move off DM2Buy for different reasons — a storefront down at the wrong moment,
              no way to book a courier without a second app, or just wanting Instagram and WhatsApp
              orders in one dashboard instead of three. oBizee is built to be the platform you don't
              have to leave next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <AppDownloadTrigger>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold">
                  Try oBizee Free <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </AppDownloadTrigger>
              <a href="#comparison" className="text-sm font-semibold text-gray-600 hover:text-orange-600 underline underline-offset-4">
                See the full comparison ↓
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs text-gray-500">
              {trustBadges.map((b) => (
                <span key={b.label} className="flex items-center gap-1.5">
                  <b.icon className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
                  {b.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-5 text-xs text-gray-400">
              <span className="flex items-center gap-1"><User className="w-3 h-3" />Raunak Kumar</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />Updated 3 September 2026</span>
            </div>
          </div>
        </section>

        {/* Real shops, open right now */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-1.5">Real shops, open right now</h2>
            <p className="text-center text-sm text-gray-600 max-w-xl mx-auto mb-7">
              Not mockups. {sellerQuotes.length} sellers running live on oBizee today — open any of them.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sellerQuotes.map((s) => (
                <a
                  key={s.subDomain}
                  href={`https://${s.subDomain}.obizee.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-gray-200 overflow-hidden hover:border-orange-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-2 border-b border-gray-200">
                    <span className="h-2 w-2 rounded-full bg-red-300" />
                    <span className="h-2 w-2 rounded-full bg-yellow-300" />
                    <span className="h-2 w-2 rounded-full bg-green-300" />
                    <span className="ml-2 text-[11px] font-mono text-gray-500 truncate">{s.subDomain}.obizee.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white">
                    <img src={s.logo} alt="" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-lg object-cover shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-900 truncate">{s.brandName}</p>
                      <p className="text-xs text-gray-500 font-mono">{s.category} · {s.products} products</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Everything already plugged in */}
        <section className="py-8 sm:py-12 bg-stone-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-1.5">Everything already plugged in</h2>
            <p className="text-center text-sm text-gray-600 max-w-xl mx-auto mb-7">
              Not an app store. Not a Pro-plan gate. Real integrations, included from day one.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {integrations.map((group) => (
                <div key={group.category} className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-orange-600 mb-2.5">{group.category}</p>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item.name} className="flex items-start gap-2 text-sm">
                        <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                        <span>
                          <span className="font-semibold text-gray-900">{item.name}</span>
                          <span className="text-gray-500"> — {item.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why sellers are actually leaving DM2Buy */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-1.5">Why sellers are actually leaving DM2Buy</h2>
            <p className="text-center text-sm text-gray-600 max-w-xl mx-auto mb-7">
              It is rarely one thing. Three reasons come up most.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {whyLeaving.map((r) => (
                <div key={r.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-100 mb-3">
                    <r.icon className="h-4 w-4 text-orange-600" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mb-1.5">{r.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-600">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stage-by-stage pain narrative */}
        <section className="py-8 sm:py-12 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-1.5">Where each stage actually stops</h2>
            <p className="text-center text-sm text-gray-600 max-w-xl mx-auto mb-7">
              Most platforms solve the first stage well and leave you to buy apps for the rest.
            </p>
            <div className="space-y-4">
              {stages.map((item) => (
                <article key={item.stage} className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-bold text-orange-700">{item.stage}</span>
                    <span className="text-xs font-semibold text-gray-900">{item.need}</span>
                  </div>
                  <p className="text-xs text-gray-500 italic mb-3">&ldquo;{item.pain}&rdquo;</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border-2 border-orange-200 bg-orange-50/60 p-3">
                      <p className="mb-1 text-xs font-bold text-orange-700">oBizee</p>
                      <p className="text-xs leading-relaxed text-gray-700">{item.obizee}</p>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                      <p className="mb-1 text-xs font-bold text-gray-500">DM2buy</p>
                      <p className="text-xs leading-relaxed text-gray-600">{item.rival}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Feature comparison table */}
        <section id="comparison" className="py-8 sm:py-12 bg-white scroll-mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-1.5">oBizee vs DM2buy, feature by feature</h2>
            <p className="text-center text-xs text-gray-500 mb-6">Reviewed 3 September 2026 — refreshed whenever either side ships a real change.</p>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-xs sm:text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-3 py-2.5 text-left font-semibold text-gray-700 w-1/3">Feature</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-orange-600 w-1/3">oBizee</th>
                      <th className="px-3 py-2.5 text-left font-semibold text-gray-700 w-1/3">DM2buy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((row) => (
                      <tr key={row.feature} className={`border-t border-gray-100 ${row.winner === "obizee" ? "bg-green-50/50" : row.winner === "competitor" ? "bg-blue-50/30" : ""}`}>
                        <td className="px-3 py-2.5 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-3 py-2.5 text-gray-700">{renderValue(row.obizee)}</td>
                        <td className="px-3 py-2.5 text-gray-700">{renderValue(row.competitor)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-3 text-xs">
              oBizee wins on 20 features. DM2buy wins on 3 (collaboration network, IRL events, free to start). 3 are tied.
            </p>
          </div>
        </section>

        {/* Migration process + what you keep */}
        <CompareMigrationOffer competitorName="DM2Buy" />

        {/* Who it's for */}
        <section className="py-8 sm:py-12 bg-orange-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5">Built for Indian Instagram and WhatsApp sellers</h2>
            <p className="text-sm text-gray-600 max-w-xl mx-auto mb-6">
              Not generic ecommerce. Small businesses selling handmade and short-run products from a
              phone, usually as a one-person team.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {forWhom.map((cat) => (
                <span key={cat} className="rounded-full bg-white border border-orange-200 px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Honest pricing picture — what's included vs pass-through, R3-compliant */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-1.5">The honest pricing picture</h2>
            <p className="text-center text-sm text-gray-600 max-w-xl mx-auto mb-7">
              0 SUBSCRIPTION, always. Not a free tier with the real features locked behind a plan.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border-2 border-green-200 bg-green-50/40 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-green-700 mb-3">Always free, always included</p>
                <ul className="space-y-2">
                  {alwaysIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-700">
                      <Check className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-3">Pass-through, not oBizee's cut</p>
                <ul className="space-y-2">
                  {passThrough.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <Receipt className="h-3.5 w-3.5 text-gray-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center mt-6">
              <a href="/pricing" className="text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-4">
                See the full structure and worked examples on Pricing →
              </a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 sm:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-7">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 sm:py-14 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Move your DM2Buy store by tomorrow</h2>
            <p className="text-sm sm:text-base text-orange-100 mb-6">
              Send your store link on WhatsApp. We rebuild it, transfer your domain, and you're taking orders again — free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <AppDownloadTrigger>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-2.5 rounded-lg text-sm font-semibold">
                  Try oBizee Free <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </AppDownloadTrigger>
              <a href="https://wa.me/918796971046?text=Hi%2C%20I%20want%20to%20know%20more%20about%20oBizee" target="_blank" rel="noopener noreferrer">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-6 py-2.5 rounded-lg text-sm font-semibold">
                  <Phone className="mr-1.5 h-4 w-4" /> Contact Us
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

export default CompareDM2buy;
