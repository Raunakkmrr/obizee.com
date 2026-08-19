"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Minus, Phone } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";
import { OBIZEE_SOFTWARE_SCHEMA } from "@/lib/productSchema";

const CompareDukaan = () => {
  const stages = [
    {
      stage: "Day 1",
      need: "Somewhere for orders to land",
      pain: "You are taking orders in Instagram DMs and writing them in a notebook. Two get missed in a week.",
      obizee: "Store live at yourname.obizee.com in under 2 minutes, or on your own custom domain. Custom order forms, QR codes and shareable links, so orders arrive in one dashboard instead of three inboxes.",
      rival: "Dukaan also gets you a store quickly, and its catalog builder is genuinely simple. Order forms for Instagram and WhatsApp are not part of it.",
    },
    {
      stage: "First 100 orders",
      need: "Shipping and payments that do not need three more subscriptions",
      pain: "You are standing in a courier queue, and a customer wants their cake today, not Thursday.",
      obizee: "Delhivery, DTDC, Blue Dart and India Post with live rate comparison per order. Same-day hyperlocal via Borzo and Shadowfax riders. Razorpay and Paytm from 1%, with no separate gateway account to open.",
      rival: "Dukaan has no built-in courier integration, so shipping means a separate Shiprocket-style subscription and a second dashboard. There is no hyperlocal option.",
    },
    {
      stage: "Scaling",
      need: "The business behind the shop",
      pain: "You sold out of the wrong yarn, you cannot remember which vendor was cheaper, and last month's buyers never came back.",
      obizee: "Raw materials and recipes, purchase lists, vendor management, expense and profit tracking, plus retention SMS to at-risk and win-back segments at ₹0.25 a message.",
      rival: "Raw materials, purchase lists and vendor management are not part of Dukaan. Retention marketing needs a third-party tool.",
    },
  ];

  const features = [
    { feature: "Same-day hyperlocal delivery", obizee: "Borzo + Shadowfax riders, booked in-app", competitor: false, winner: "obizee" },
    { feature: "Payment gateway", obizee: "Razorpay + Paytm built in, from 1%", competitor: "Supported, configured separately", winner: "obizee" },
    { feature: "Compare courier rates per order", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Raw materials & recipes", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Purchase lists & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Customer retention SMS (RFM segments)", obizee: "Built in, ₹0.25/SMS", competitor: "Third-party tool", winner: "obizee" },
    { feature: "Established user base", obizee: "Growing", competitor: "Large, well known", winner: "competitor" },
    { feature: "Monthly subscription", obizee: "None — ₹0/month", competitor: "₹4,999/year (~₹417/month)", winner: "obizee" },
    { feature: "Commission per order", obizee: "1% (max ₹10 cap)", competitor: "2-3% + payment gateway fees", winner: "obizee" },
    { feature: "Auto-generated website", obizee: true, competitor: true, winner: "tie" },
    { feature: "Custom domain support", obizee: "Subdomain (free)", competitor: "Custom domain (paid plans)", winner: "tie" },
    { feature: "Delhivery integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "DTDC integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Built-in logistics (AWB, pickup)", obizee: true, competitor: false, winner: "obizee" },
    { feature: "WhatsApp selling", obizee: true, competitor: true, winner: "tie" },
    { feature: "Instagram selling", obizee: true, competitor: true, winner: "tie" },
    { feature: "Order management dashboard", obizee: true, competitor: true, winner: "tie" },
    { feature: "Inventory management", obizee: true, competitor: true, winner: "tie" },
    { feature: "Custom order form builder", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Multi-link order forms", obizee: true, competitor: false, winner: "obizee" },
    { feature: "No coding needed", obizee: true, competitor: true, winner: "tie" },
    { feature: "Mobile-first app", obizee: true, competitor: true, winner: "tie" },
    { feature: "Employee & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Fare calculator", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Setup time", obizee: "Under 2 minutes", competitor: "5-10 minutes", winner: "obizee" },
    { feature: "Marketing tools", obizee: "Basic", competitor: "SEO tools, discount codes", winner: "competitor" },
    { feature: "Best for", obizee: "Indian small merchants, Instagram & WhatsApp sellers", competitor: "Small-medium D2C brands", winner: "tie" },
  ];

  const faqs = [
    {
      question: "Which is the best Dukaan alternative in India?",
      answer: "oBizee is the best Dukaan alternative for sellers who need shipping built in rather than bought separately. There is no annual plan — the platform fee is 1% per order capped at ₹10 — and Delhivery, DTDC, Blue Dart and same-day hyperlocal delivery are included. Dukaan's paid plans start at ₹4,999 a year as of 2026 and it has no native courier integration.",
    },
    {
      question: "Is oBizee cheaper than Dukaan?",
      answer: "For most sellers, yes. Dukaan charges an annual plan fee whether or not you sell. oBizee charges nothing monthly and caps the platform fee at ₹10 per order, so 100 orders a month costs at most ₹1,000. The gap widens once you add the shipping subscription Dukaan requires and oBizee does not.",
    },
    {
      question: "Does Dukaan have shipping integration?",
      answer: "Dukaan does not have native courier integration. Sellers arrange shipping through a separate aggregator such as Shiprocket, which means an extra subscription and a second dashboard. oBizee integrates Delhivery directly and reaches DTDC, Blue Dart and India Post through a built-in aggregator, with rate comparison per order.",
    },
    {
      question: "Can I deliver same-day with Dukaan?",
      answer: "No. Dukaan has no hyperlocal delivery option. oBizee books Borzo and Shadowfax riders directly from the app for same-day delivery within your city, which matters for food, bakery, flowers and gifting where next-day shipping loses the order.",
    },
    {
      question: "When is Dukaan the better choice?",
      answer: "Dukaan is a reasonable pick if you want a simple catalog and storefront, have shipping already handled, and prefer a large established user base. oBizee is the stronger choice when you want shipping, payments, inventory and customer marketing included rather than assembled from separate tools.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Dukaan — Best Dukaan Alternative in India (2026 Comparison)",
    description: "Detailed comparison of oBizee vs Dukaan for Indian sellers. oBizee charges 1% per order (max ₹10) with no monthly fees. Dukaan costs ₹4,999/year plus 2-3% per order.",
    url: "https://www.obizee.com/compare/obizee-vs-dukaan",
    inLanguage: "en-IN",
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
        { name: "oBizee vs Dukaan", url: "https://www.obizee.com/compare/obizee-vs-dukaan" },
      ]} />
      <JsonLd data={jsonLd} />
        <JsonLd data={OBIZEE_SOFTWARE_SCHEMA} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-white to-orange-50/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">2026 Comparison</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
              oBizee vs Dukaan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Which is Better for Indian Sellers?
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              oBizee is a Dukaan alternative for Indian sellers with no annual plan, a 1% platform fee capped at ₹10 per order, Razorpay and Paytm from 1%, Delhivery, DTDC and Blue Dart shipping, and same-day hyperlocal delivery through Borzo and Shadowfax. Dukaan's paid plans start at ₹4,999 a year as of 2026 and it has no built-in courier integration. Here is the honest comparison.
            </p>
          </div>
        </section>

        {/* Quick verdict */}
        <section className="py-8 bg-orange-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Verdict</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                <strong>Choose oBizee</strong> if you want zero monthly fees, built-in Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping, and the lowest per-order cost. <strong>Choose Dukaan</strong> if you need built-in marketing tools and are willing to pay ₹4,999/year for them.
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
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">Dukaan</th>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Why Indian Sellers Choose oBizee Over Dukaan</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "Zero Monthly Fees", desc: "No subscription at all. Dukaan charges ₹4,999/year. oBizee: pay only when you sell." },
                { title: "Built-in Indian Logistics", desc: "Delhivery, DTDC & Blue Dart integrated. AWB generation, pickup scheduling, live tracking. Dukaan has no shipping integration." },
                { title: "Lower Per-Order Cost", desc: "1% per order, max ₹10. On a ₹5,000 order, you pay ₹10 on oBizee vs ₹100-150 on Dukaan." },
                { title: "Custom Order Forms", desc: "Build custom order forms with dynamic fields and multi-link support. Dukaan doesn't offer this." },
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
                      <p className="mb-1.5 text-sm font-bold text-gray-500">Dukaan</p>
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
            <h2 className="text-3xl font-bold text-white mb-5">Ready to Switch from Dukaan?</h2>
            <p className="text-lg text-orange-100 mb-8">
              Start free. No yearly subscription. Set up your store in under 2 minutes.
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

export default CompareDukaan;
