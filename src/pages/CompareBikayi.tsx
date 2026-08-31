"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Phone, Calendar, User } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";
import { OBIZEE_SOFTWARE_SCHEMA } from "@/lib/productSchema";

const CompareBikayi = () => {
  const stages = [
    {
      stage: "Day 1",
      need: "Somewhere for orders to land",
      pain: "You are taking orders in Instagram DMs and writing them in a notebook. Two get missed in a week.",
      obizee: "Store live at yourname.obizee.com in under 2 minutes, or on your own custom domain. Custom order forms, QR codes and shareable links, so orders arrive in one dashboard instead of three inboxes.",
      rival: "Bikayi is strong here, particularly for WhatsApp-led selling, and its store builder is well made.",
    },
    {
      stage: "First 100 orders",
      need: "Shipping and payments that do not need three more subscriptions",
      pain: "You are standing in a courier queue, and a customer wants their cake today, not Thursday.",
      obizee: "Delhivery, DTDC, Blue Dart and India Post with live rate comparison per order. Same-day hyperlocal via Borzo and Shadowfax riders. Razorpay and Paytm from 1%, with no separate gateway account to open.",
      rival: "Bikayi does not include courier integration, so shipping is a separate subscription and dashboard. There is no same-day hyperlocal option.",
    },
    {
      stage: "Scaling",
      need: "The business behind the shop",
      pain: "You sold out of the wrong yarn, you cannot remember which vendor was cheaper, and last month's buyers never came back.",
      obizee: "Raw materials and recipes, purchase lists, vendor management, expense and profit tracking, plus retention SMS to at-risk and win-back segments at ₹0.25 a message.",
      rival: "Bikayi covers the storefront well but stops before raw materials, purchase lists, vendor management and RFM retention marketing.",
    },
  ];

  const features = [
    { feature: "Same-day hyperlocal delivery", obizee: "Borzo + Shadowfax riders, booked in-app", competitor: false, winner: "obizee" },
    { feature: "Payment gateway", obizee: "Razorpay + Paytm built in, from 1%", competitor: "Supported, configured separately", winner: "obizee" },
    { feature: "Compare courier rates per order", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Raw materials & recipes", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Purchase lists & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Customer retention SMS (RFM segments)", obizee: "Built in, ₹0.25/SMS", competitor: "Third-party tool", winner: "obizee" },
    { feature: "WhatsApp-native selling flows", obizee: "Order forms + links", competitor: "Purpose-built", winner: "competitor" },
    { feature: "Monthly subscription", obizee: "None — ₹0/month", competitor: "Free tier + paid plans from ₹999/month", winner: "obizee" },
    { feature: "Commission per order", obizee: "1% (max ₹10)", competitor: "Varies by plan", winner: "obizee" },
    { feature: "Auto-generated website", obizee: true, competitor: true, winner: "tie" },
    { feature: "WhatsApp catalog integration", obizee: true, competitor: true, winner: "tie" },
    { feature: "Delhivery integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "DTDC integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Built-in logistics (AWB, pickup)", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Order management", obizee: true, competitor: true, winner: "tie" },
    { feature: "Inventory management", obizee: "Unlimited products & variants", competitor: true, winner: "tie" },
    { feature: "Custom domain mapping", obizee: "Free — DNS & SSL handled for you", competitor: "Free domain tied to the yearly plan", winner: "obizee" },
    { feature: "Setup / website-creation fee", obizee: "₹0", competitor: "₹0 on free tier", winner: "tie" },
    { feature: "Custom order form builder", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Multi-link order forms", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Fare calculator", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Employee & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "WhatsApp Business API", obizee: false, competitor: true, winner: "competitor" },
    { feature: "AI-powered store builder", obizee: false, competitor: true, winner: "competitor" },
  ];

  const faqs = [
    {
      question: "Is oBizee better than Bikayi?",
      answer: "For sellers who ship physical products, oBizee covers more ground. It includes Delhivery, DTDC, Blue Dart and same-day hyperlocal delivery, Razorpay and Paytm from 1%, raw-material and vendor tracking and retention SMS, with no monthly subscription. Bikayi builds a strong WhatsApp-led storefront but leaves shipping and inventory depth to other tools.",
    },
    {
      question: "Does Bikayi have shipping integration?",
      answer: "Bikayi does not include native courier integration. Sellers use a separate aggregator, which adds a subscription and a second dashboard. oBizee integrates Delhivery directly, reaches DTDC, Blue Dart and India Post through a built-in aggregator, and books same-day hyperlocal riders through Borzo and Shadowfax.",
    },
    {
      question: "How much does oBizee cost compared with Bikayi?",
      answer: "oBizee has no monthly subscription. After a 3-month free trial you pay 1% per successful order capped at ₹10, plus gateway charges from 1%. Bikayi's paid tiers reach ₹999 a month or more as of 2026, charged whether or not you sell that month.",
    },
    {
      question: "Which is better for WhatsApp selling?",
      answer: "Both handle WhatsApp orders. Bikayi is built around WhatsApp-first flows and does that well. oBizee provides custom order forms, QR codes and shareable links that work across WhatsApp and Instagram, and then carries the order through shipping, payment and stock rather than stopping at checkout.",
    },
    {
      question: "When is Bikayi the better choice?",
      answer: "Bikayi is the better choice if WhatsApp-native selling flows are your priority and shipping is already handled. oBizee is stronger when you want couriers, payments, inventory and retention marketing included in one place.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Bikayi — Best Bikayi Alternative in India (2026 Comparison)",
    description: "Detailed comparison of oBizee vs Bikayi for Indian sellers. oBizee charges 1% per order (max ₹10) with no monthly fees. Bikayi has paid plans from ₹999/month.",
    url: "https://www.obizee.com/compare/obizee-vs-bikayi",
    inLanguage: "en-IN",
  };

  // Real git commit dates — never guess these. Update dateModified only when
  // the content on this page actually changes.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "oBizee vs Bikayi — Best Bikayi Alternative in India (2026 Comparison)",
    description: "Detailed comparison of oBizee vs Bikayi for Indian sellers. oBizee charges 1% per order (max ₹10) with no monthly fees, no setup fee, a free mapped custom domain and unlimited products.",
    datePublished: "2026-04-23",
    dateModified: "2026-08-31",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" },
    },
    mainEntityOfPage: "https://www.obizee.com/compare/obizee-vs-bikayi",
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
    if (val === true) return <Check className="h-5 w-5 text-green-600" />;
    if (val === false) return <X className="h-5 w-5 text-red-400" />;
    return <span>{val}</span>;
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Compare", url: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
        { name: "oBizee vs Bikayi", url: "https://www.obizee.com/compare/obizee-vs-bikayi" },
      ]} />
      <JsonLd data={jsonLd} />
      <JsonLd data={articleJsonLd} />
        <JsonLd data={OBIZEE_SOFTWARE_SCHEMA} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-white to-orange-50/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">2026 Comparison</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
              oBizee vs Bikayi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Which is Better for Indian Sellers?
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              oBizee is a Bikayi alternative for Indian sellers with no monthly subscription, no setup fee, a custom domain mapped for free, unlimited products and variants, a 1% platform fee capped at ₹10 per order, Razorpay and Paytm from 1%, Delhivery, DTDC and Blue Dart shipping, and same-day hyperlocal delivery via Borzo and Shadowfax. Bikayi's paid plans run to ₹999 a month or more as of 2026 and it has no built-in courier integration. Here is the honest comparison.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mt-6">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Raunak Kumar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Published 23 April 2026 · Updated 31 August 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick verdict */}
        <section className="py-8 bg-orange-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Verdict</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                <strong>Choose oBizee</strong> if you want zero monthly fees, built-in Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping, and transparent pricing. <strong>Choose Bikayi</strong> if you specifically need WhatsApp Business API integration and AI-powered store building features.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Feature-by-Feature Comparison</h2>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">Feature</th>
                      <th className="px-4 py-3 text-left font-semibold text-orange-600 w-1/3">oBizee</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">Bikayi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((row, i) => (
                      <tr key={row.feature} className={`border-t border-gray-100 ${row.winner === "obizee" ? "bg-green-50/50" : ""}`}>
                        <td className="px-4 py-3 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-4 py-3 text-gray-700">{renderValue(row.obizee)}</td>
                        <td className="px-4 py-3 text-gray-700">{renderValue(row.competitor)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Why oBizee */}
        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Why Indian Sellers Choose oBizee Over Bikayi</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "Zero Subscription", desc: "No monthly or yearly fees. Bikayi's advanced features require paid plans starting at ₹999/month." },
                { title: "Built-in Shipping", desc: "Native Delhivery, DTDC, Blue Dart & hyperlocal integration. AWB generation, pickup scheduling, live tracking. Bikayi has no logistics integration." },
                { title: "Transparent Pricing", desc: "1% per order, max ₹10. Always know what you'll pay. Bikayi's pricing varies by plan." },
                { title: "Custom Order Forms", desc: "Build custom order forms with dynamic fields. Bikayi doesn't offer this functionality." },
              ].map((item) => (
                <div key={item.title} className="bg-orange-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
              What You Actually Need, and When
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              Most platforms solve the first stage well and leave you to buy apps for the rest.
              Here is where each one stops.
            </p>

            <div className="space-y-6">
              {stages.map((item) => (
                <article
                  key={item.stage}
                  className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                      {item.stage}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">{item.need}</span>
                  </div>
                  <p className="text-gray-600 italic mb-5">&ldquo;{item.pain}&rdquo;</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border-2 border-orange-200 bg-orange-50/60 p-4">
                      <p className="mb-1.5 text-sm font-bold text-orange-700">oBizee</p>
                      <p className="text-sm leading-relaxed text-gray-700">{item.obizee}</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <p className="mb-1.5 text-sm font-bold text-gray-500">Bikayi</p>
                      <p className="text-sm leading-relaxed text-gray-600">{item.rival}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <article key={faq.question} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-5">Ready to Try a Better Alternative?</h2>
            <p className="text-lg text-orange-100 mb-8">
              Start free. No subscription needed. Get shipping built in.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppDownloadTrigger>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl text-lg font-semibold">
                  Try oBizee Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </AppDownloadTrigger>
              <a href="https://wa.me/918796971046?text=Hi%2C%20I%20want%20to%20know%20more%20about%20oBizee" target="_blank" rel="noopener noreferrer">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-3 rounded-xl text-lg font-semibold">
                  <Phone className="mr-2 h-5 w-5" /> Contact Us
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

export default CompareBikayi;
