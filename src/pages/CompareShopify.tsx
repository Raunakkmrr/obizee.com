"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Minus, Phone, Calendar, User } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";
import { OBIZEE_SOFTWARE_SCHEMA } from "@/lib/productSchema";

const CompareShopify = () => {
  const features = [
    { feature: "Monthly subscription", obizee: "None — ₹0/month", competitor: "From ₹1,994/month (Basic, as of 2026)", winner: "obizee" },
    { feature: "Platform fee per order", obizee: "1%, capped at ₹10", competitor: "Up to 2% if not using Shopify Payments", winner: "obizee" },
    { feature: "Payment gateway", obizee: "Razorpay + Paytm built in, from 1%", competitor: "Third-party gateway, set up separately", winner: "obizee" },
    { feature: "Same-day hyperlocal delivery", obizee: "Borzo + Shadowfax riders, booked in-app", competitor: false, winner: "obizee" },
    { feature: "Courier partners", obizee: "Delhivery, DTDC, Blue Dart, India Post +", competitor: "Via paid apps like Shiprocket", winner: "obizee" },
    { feature: "Compare courier rates per order", obizee: true, competitor: false, winner: "obizee" },
    { feature: "AWB generation & pickup scheduling", obizee: true, competitor: "Via third-party apps", winner: "obizee" },
    { feature: "Custom domain mapping", obizee: "Free — DNS & SSL handled for you", competitor: "Supported, domain bought separately", winner: "tie" },
    { feature: "Setup / website-creation fee", obizee: "₹0", competitor: "₹0 (subscription still applies)", winner: "obizee" },
    { feature: "Storefront templates", obizee: "4 India-first templates", competitor: "Large paid theme marketplace", winner: "competitor" },
    { feature: "Order forms for Instagram & WhatsApp", obizee: "Custom form builder + QR + links", competitor: false, winner: "obizee" },
    { feature: "Inventory & stock tracking", obizee: true, competitor: true, winner: "tie" },
    { feature: "Product variants", obizee: "Unlimited, per-combination price, stock, SKU, image", competitor: true, winner: "tie" },
    { feature: "Bulk product upload", obizee: "Photo-first, with AI-assisted titles", competitor: "CSV import", winner: "obizee" },
    { feature: "Raw materials & recipes", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Purchase lists & vendor management", obizee: true, competitor: "Via paid apps", winner: "obizee" },
    { feature: "Discount coupons", obizee: true, competitor: true, winner: "tie" },
    { feature: "Customer retention SMS (RFM segments)", obizee: "Built in, ₹0.25/SMS", competitor: "Via paid apps like Klaviyo", winner: "obizee" },
    { feature: "Expense & profit tracking", obizee: true, competitor: "Via paid apps", winner: "obizee" },
    { feature: "Setup time", obizee: "Under 2 minutes", competitor: "30–60 minutes", winner: "obizee" },
    { feature: "Best for", obizee: "Indian sellers on Instagram, WhatsApp and local delivery", competitor: "Global brands with budget for apps", winner: "tie" },
  ];

  // The spine of the page: what a seller actually needs at each stage, and where
  // a storefront-only tool stops being enough.
  const stages = [
    {
      stage: "Day 1",
      pain: "You are taking orders in Instagram DMs and writing them in a notebook. Two get missed in a week.",
      need: "Somewhere for orders to land",
      obizee: "Store live at yourname.obizee.com in under 2 minutes, custom order forms, QR and shareable links. Orders arrive in one dashboard instead of three inboxes.",
      shopify: "Also gives you a store, but ₹1,994/month before your first sale and no order forms for Instagram or WhatsApp.",
    },
    {
      stage: "First 100 orders",
      pain: "You are standing in a courier queue, and a customer wants their cake today, not Thursday.",
      need: "Shipping and payments that do not need three more subscriptions",
      obizee: "Delhivery, DTDC, Blue Dart and India Post with rate comparison per order. Same-day hyperlocal via Borzo and Shadowfax. Razorpay and Paytm from 1%, no separate gateway account.",
      shopify: "Needs Shiprocket or similar for Indian couriers, a separate gateway, and has no hyperlocal delivery at all.",
    },
    {
      stage: "Scaling",
      pain: "You sold out of the wrong yarn, you cannot remember which vendor was cheaper, and last month's buyers never came back.",
      need: "The business behind the shop",
      obizee: "Raw materials and recipes, purchase lists, vendor management, expense and profit tracking, plus retention SMS to win-back and at-risk customers at ₹0.25 a message.",
      shopify: "Each of these is a paid app. A realistic stack costs more per month than the subscription itself.",
    },
  ];

  const costComparison = [
    { orders: "50 orders/month (avg ₹500)", obizee: "₹250", shopify: "₹2,000+ subscription + gateway fees" },
    { orders: "100 orders/month (avg ₹500)", obizee: "₹500", shopify: "₹2,000+ subscription + gateway fees" },
    { orders: "200 orders/month (avg ₹1,000)", obizee: "₹2,000 (all capped at ₹10)", shopify: "₹2,000+ subscription + ₹2,000+ fees" },
    { orders: "500 orders/month (avg ₹2,000)", obizee: "₹5,000 (all capped at ₹10)", shopify: "₹2,000+ subscription + ₹5,000+ fees" },
  ];

  const faqs = [
    {
      question: "What is the best Shopify alternative in India?",
      answer: "oBizee is the best Shopify alternative for Indian sellers who need shipping and payments built in rather than bolted on. It charges no monthly subscription, takes 1% per order capped at ₹10, and includes Delhivery, DTDC, Blue Dart and same-day hyperlocal delivery without any third-party app. Shopify starts at ₹1,994 per month as of 2026 and requires separate apps for Indian courier integration.",
    },
    {
      question: "Is oBizee cheaper than Shopify for Indian sellers?",
      answer: "Yes, for small and mid-sized sellers. oBizee has no subscription and caps its platform fee at ₹10 per order, so 100 orders a month costs at most ₹1,000. Shopify's Basic plan is ₹1,994 per month before you add a shipping app, a marketing app, or the gateway. The gap widens further because oBizee's app stack is included rather than billed separately.",
    },
    {
      question: "Does oBizee support same-day delivery?",
      answer: "Yes. oBizee books Borzo and Shadowfax riders directly from the app for same-day hyperlocal delivery within your city. Shopify has no equivalent built in. This matters most for food, bakery, flowers and any perishable or gifting category where next-day shipping loses the order.",
    },
    {
      question: "Which courier partners does oBizee support?",
      answer: "Delhivery is integrated directly, and DTDC, Blue Dart, India Post and other national couriers are available through the built-in aggregator. You can compare live rates and pick the cheapest courier per order, then generate the AWB and schedule pickup without leaving the app.",
    },
    {
      question: "What payment gateways does oBizee support?",
      answer: "Razorpay and Paytm are both built in. Gateway charges start at 1% per transaction on Paytm and 2% on Razorpay, charged by the gateway and separate from oBizee's platform fee. You do not need to open or configure a gateway account yourself.",
    },
    {
      question: "Can I use my own domain with oBizee?",
      answer: "Yes. Every merchant gets a free store at yourname.obizee.com, and you can connect your own custom domain. The store is provisioned, secured with HTTPS and served from your domain.",
    },
    {
      question: "Can I migrate from Shopify to oBizee?",
      answer: "Yes. You can set up an oBizee store in under two minutes and bulk upload your products by photo, with titles and descriptions suggested automatically. Customers get a clean storefront and order tracking exactly as before.",
    },
    {
      question: "When is Shopify the better choice?",
      answer: "Shopify is the stronger option if you sell internationally, need a large theme and app ecosystem, or have the budget to assemble a stack of paid apps. oBizee is built specifically for Indian sellers who want shipping, payments, inventory and customer marketing included rather than assembled.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Shopify — Shopify Alternative for Indian Sellers (2026 Comparison)",
    description: "Comparison of oBizee and Shopify for Indian sellers. oBizee charges no monthly subscription, 1% per order capped at ₹10, and includes Delhivery, DTDC, Blue Dart and same-day hyperlocal delivery.",
    url: "https://www.obizee.com/compare/obizee-vs-shopify",
    inLanguage: "en-IN",
  };

  // Real git commit dates — never guess these. Update dateModified only when
  // the content on this page actually changes.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "oBizee vs Shopify — Shopify Alternative for Indian Sellers (2026 Comparison)",
    description: "Comparison of oBizee and Shopify for Indian sellers. oBizee charges no monthly subscription, no setup fee, 1% per order capped at ₹10, and includes a free mapped custom domain, unlimited products, and same-day hyperlocal delivery.",
    datePublished: "2026-04-23",
    dateModified: "2026-08-31",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" },
    },
    mainEntityOfPage: "https://www.obizee.com/compare/obizee-vs-shopify",
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
        { name: "oBizee vs Shopify", url: "https://www.obizee.com/compare/obizee-vs-shopify" },
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
              oBizee vs Shopify
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Which is Better for Indian Sellers?
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              oBizee is a Shopify alternative built for Indian sellers, with no monthly subscription, no setup fee, a custom domain mapped for free, unlimited products and variants, a 1% platform fee capped at ₹10 per order, Razorpay and Paytm from 1%, Delhivery, DTDC and Blue Dart shipping, and same-day hyperlocal delivery through Borzo and Shadowfax. Shopify starts at ₹1,994 per month as of 2026 and needs paid apps for Indian couriers. Here is the honest comparison.
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
                <strong>Choose oBizee</strong> if you're a small Indian merchant, Instagram seller, or home business looking for the most affordable way to sell online with built-in Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping. <strong>Choose Shopify</strong> if you're a larger business with complex needs, selling internationally, and have a budget of ₹2,000+/month for your platform.
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
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">Shopify</th>
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

        {/* Cost Comparison */}
        <section className="py-10 sm:py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">Monthly Cost Comparison</h2>
            <p className="text-gray-600 text-center mb-8">See how much you save with oBizee at different order volumes</p>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Scenario</th>
                      <th className="px-4 py-3 text-left font-semibold text-orange-600">oBizee Cost</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Shopify Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costComparison.map((row) => (
                      <tr key={row.orders} className="border-t border-gray-100">
                        <td className="px-4 py-3 font-medium text-gray-900">{row.orders}</td>
                        <td className="px-4 py-3 text-green-700 font-semibold">{row.obizee}</td>
                        <td className="px-4 py-3 text-gray-700">{row.shopify}</td>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Why Indian Sellers Choose oBizee Over Shopify</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "Zero Monthly Fees", desc: "No subscription. Pay only when you make a sale — 1% per order, max ₹10." },
                { title: "Built-in Indian Logistics", desc: "Delhivery, DTDC & Blue Dart integrated natively. Generate AWB, schedule pickups, live tracking — all from the app." },
                { title: "2-Minute Setup", desc: "Sign up, add products, get your website. No themes to configure, no apps to install." },
                { title: "Made for Indian Merchants", desc: "Built specifically for Instagram sellers, WhatsApp businesses, and home entrepreneurs in India." },
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
              {stages.map((s) => (
                <article
                  key={s.stage}
                  className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                      {s.stage}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">{s.need}</span>
                  </div>
                  <p className="text-gray-600 italic mb-5">&ldquo;{s.pain}&rdquo;</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border-2 border-orange-200 bg-orange-50/60 p-4">
                      <p className="mb-1.5 text-sm font-bold text-orange-700">oBizee</p>
                      <p className="text-sm leading-relaxed text-gray-700">{s.obizee}</p>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <p className="mb-1.5 text-sm font-bold text-gray-500">Shopify</p>
                      <p className="text-sm leading-relaxed text-gray-600">{s.shopify}</p>
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
            <h2 className="text-3xl font-bold text-white mb-5">Ready to Switch from Shopify?</h2>
            <p className="text-lg text-orange-100 mb-8">
              Start free. No credit card needed. Set up your store in under 2 minutes.
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

export default CompareShopify;
