"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Minus, Phone } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const CompareDukaan = () => {
  const features = [
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
      question: "Is oBizee cheaper than Dukaan?",
      answer: "Yes. oBizee has no yearly subscription and charges only 1% per order, capped at ₹10 max. Dukaan charges ₹4,999/year plus 2-3% per order. For a merchant doing 100 orders/month at ₹500 average, oBizee costs ₹500/month vs Dukaan's ₹417/month subscription + ₹1,000+ in transaction fees.",
    },
    {
      question: "Does Dukaan have shipping integration?",
      answer: "No. Dukaan does not have built-in logistics. You need to handle shipping separately or use third-party services. oBizee has native Delhivery and DTDC integration with AWB generation, pickup scheduling, and live customer tracking.",
    },
    {
      question: "Can I switch from Dukaan to oBizee?",
      answer: "Yes. Set up your oBizee store in under 2 minutes, add your products, and start selling immediately. You get an auto-generated website, order management, and shipping — all without paying a yearly subscription.",
    },
    {
      question: "Does Dukaan have WhatsApp selling?",
      answer: "Yes, both Dukaan and oBizee support WhatsApp selling. However, oBizee also includes built-in logistics integration, custom order forms, and a fare calculator that Dukaan doesn't offer.",
    },
    {
      question: "Which is the best Dukaan alternative in India?",
      answer: "oBizee is the best Dukaan alternative for merchants who want lower costs and built-in shipping. With zero monthly fees, 1% per order (max ₹10), and native Delhivery/DTDC logistics, oBizee offers more value at a fraction of the cost.",
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
              oBizee charges ₹0/month with a 1% fee capped at ₹10 per order. Dukaan charges ₹4,999/year plus 2-3% per order. Here's the full comparison.
            </p>
          </div>
        </section>

        {/* Quick verdict */}
        <section className="py-8 bg-orange-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Verdict</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                <strong>Choose oBizee</strong> if you want zero monthly fees, built-in Delhivery/DTDC shipping, and the lowest per-order cost. <strong>Choose Dukaan</strong> if you need built-in marketing tools and are willing to pay ₹4,999/year for them.
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
                { title: "Built-in Indian Logistics", desc: "Delhivery & DTDC integrated. AWB generation, pickup scheduling, live tracking. Dukaan has no shipping integration." },
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
