"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Phone } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const CompareDM2buy = () => {
  const features = [
    { feature: "Monthly subscription", obizee: "None — ₹0/month", competitor: "Free tier + unclear paid features", winner: "obizee" },
    { feature: "Transparent pricing", obizee: "1% per order, max ₹10 (published)", competitor: "Commission-based (details vary)", winner: "obizee" },
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
    { feature: "Inventory management", obizee: "Full-featured", competitor: "Basic", winner: "obizee" },
    { feature: "Order dashboard", obizee: "Full lifecycle tracking", competitor: "Basic", winner: "obizee" },
    { feature: "Fare calculator", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Employee & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Seller collaboration network", obizee: false, competitor: true, winner: "competitor" },
    { feature: "IRL pop-up events", obizee: false, competitor: true, winner: "competitor" },
    { feature: "Payment processing", obizee: "Razorpay + Paytm built in, from 1% per transaction", competitor: "Available", winner: "obizee" },
  ];

  const faqs = [
    {
      question: "What is the difference between oBizee and DM2buy?",
      answer: "oBizee is a full D2C commerce platform with multi-channel support (Instagram, WhatsApp, web), built-in Delhivery, DTDC, Blue Dart & hyperlocal shipping, custom order forms, and transparent pricing (1% per order, max ₹10). DM2buy is primarily an Instagram-focused storefront that excels at converting DMs into orders, but does not include logistics integration or multi-channel selling.",
    },
    {
      question: "Does DM2buy have shipping integration?",
      answer: "No. DM2buy does not have built-in logistics or shipping integration. Merchants need to handle shipping separately. oBizee has native integration with Delhivery, DTDC and Blue Dart — you can generate AWB numbers, schedule courier pickups, and provide live tracking to customers directly from the app.",
    },
    {
      question: "Is DM2buy free to use?",
      answer: "DM2buy offers a free tier for basic features, but their pricing for advanced features is not publicly documented. oBizee has fully transparent pricing: no monthly fees, just 1% per order capped at ₹10 maximum. You always know exactly what you'll pay.",
    },
    {
      question: "Can I sell on WhatsApp with DM2buy?",
      answer: "No, DM2buy is Instagram-only. oBizee supports selling through Instagram, WhatsApp, and your own auto-generated website — all managed from a single dashboard. This multi-channel approach means you can reach more customers without managing multiple tools.",
    },
    {
      question: "Which is better for Indian small businesses — oBizee or DM2buy?",
      answer: "oBizee is the more complete solution for Indian small businesses. It offers everything DM2buy does (online storefront, product listings, order management) plus logistics integration, multi-channel selling, custom order forms, fare calculator, and transparent pricing — winning on 13 out of 19 features in a direct comparison.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs DM2buy — Which D2C Platform is Better for Indian Sellers?",
    description: "Compare oBizee and DM2buy: features, pricing, shipping, multi-channel support. oBizee wins on 14 of 19 features with built-in Delhivery, DTDC, Blue Dart & hyperlocal logistics.",
    url: "https://www.obizee.com/compare/obizee-vs-dm2buy",
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
        { name: "oBizee vs DM2buy", url: "https://www.obizee.com/compare/obizee-vs-dm2buy" },
      ]} />
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="py-12 sm:py-16 bg-gradient-to-br from-white to-orange-50/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">2026 Comparison</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
              oBizee vs DM2buy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Which Platform Should You Choose?
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Both platforms help Indian sellers go online. But oBizee offers built-in logistics, multi-channel selling, and transparent pricing — winning on 13 out of 19 features. Here's the full breakdown.
            </p>
          </div>
        </section>

        <section className="py-8 bg-orange-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Verdict</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                <strong>Choose oBizee</strong> if you need shipping integration, want to sell on both Instagram and WhatsApp, and prefer transparent pricing. <strong>Consider DM2buy</strong> if you're purely an Instagram seller who values their seller collaboration network and doesn't need logistics support.
              </p>
            </div>
          </div>
        </section>

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
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">DM2buy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((row) => (
                      <tr key={row.feature} className={`border-t border-gray-100 ${row.winner === "obizee" ? "bg-green-50/50" : row.winner === "competitor" ? "bg-blue-50/30" : ""}`}>
                        <td className="px-4 py-3 font-medium text-gray-900">{row.feature}</td>
                        <td className="px-4 py-3 text-gray-700">{renderValue(row.obizee)}</td>
                        <td className="px-4 py-3 text-gray-700">{renderValue(row.competitor)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">
              oBizee wins on 13 features. DM2buy wins on 2 features (collaboration network & IRL events). 4 are tied.
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Why oBizee Wins for Indian Sellers</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "Built-in Shipping", desc: "Delhivery, DTDC & Blue Dart integrated natively. AWB generation, pickup scheduling, live tracking — all from the app. DM2buy has no shipping integration." },
                { title: "Multi-Channel Selling", desc: "Sell on Instagram, WhatsApp, and your own website from one dashboard. DM2buy only supports Instagram." },
                { title: "Transparent Pricing", desc: "1% per order, max ₹10. Published and clear. You always know exactly what you'll pay before you start." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
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

        <section className="py-14 sm:py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-5">Ready to Try a Better Platform?</h2>
            <p className="text-lg text-orange-100 mb-8">
              Get shipping, multi-channel selling, and transparent pricing — all in one app.
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

export default CompareDM2buy;
