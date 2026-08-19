"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Phone } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const CompareInstamojo = () => {
  const features = [
    { feature: "Monthly subscription", obizee: "None — ₹0/month", competitor: "Free + Premium from ₹999/month", winner: "obizee" },
    { feature: "Commission per order", obizee: "1% (max ₹10)", competitor: "2-5% + payment gateway fees", winner: "obizee" },
    { feature: "Full online store", obizee: true, competitor: "Basic storefront", winner: "obizee" },
    { feature: "Payment links", obizee: false, competitor: true, winner: "competitor" },
    { feature: "Delhivery integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "DTDC integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Built-in logistics", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Order management dashboard", obizee: "Full lifecycle", competitor: "Basic", winner: "obizee" },
    { feature: "Inventory management", obizee: true, competitor: "Limited", winner: "obizee" },
    { feature: "Custom order form builder", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Digital product support", obizee: false, competitor: true, winner: "competitor" },
    { feature: "Payment gateway (Razorpay etc)", obizee: "Integrated", competitor: "Built-in + mojoXpress", winner: "tie" },
    { feature: "Employee & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Fare calculator", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Smart pages/landing pages", obizee: false, competitor: true, winner: "competitor" },
  ];

  const faqs = [
    {
      question: "Is oBizee better than Instamojo for selling products?",
      answer: "For physical products, yes. oBizee offers a full store, order management, inventory tracking, and built-in Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping. Instamojo is better for digital products and payment links.",
    },
    {
      question: "Does Instamojo have shipping?",
      answer: "No. Instamojo is primarily a payment platform with a basic storefront. oBizee has native Delhivery, DTDC, Blue Dart and hyperlocal logistics integration.",
    },
    {
      question: "Which is cheaper — oBizee or Instamojo?",
      answer: "oBizee charges 1% per order capped at ₹10. Instamojo charges 2-5% per transaction. For a ₹2,000 order, you pay ₹10 on oBizee vs ₹40-100 on Instamojo.",
    },
    {
      question: "Can Instamojo replace an online store?",
      answer: "Instamojo offers basic storefront features, but it's primarily a payment gateway. oBizee is purpose-built as a complete D2C store with order management, inventory, shipping, and multi-channel selling.",
    },
    {
      question: "What is the best Instamojo alternative for physical products?",
      answer: "oBizee is the best Instamojo alternative for physical product sellers in India. It offers everything Instamojo lacks: full order lifecycle management, Delhivery, DTDC & Blue Dart integration, and custom order forms — all at lower fees.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Instamojo — Best Instamojo Alternative for Indian Sellers (2026)",
    description: "Detailed comparison of oBizee vs Instamojo for Indian sellers. oBizee charges 1% per order (max ₹10) with no monthly fees. Instamojo charges 2-5% per transaction.",
    url: "https://www.obizee.com/compare/obizee-vs-instamojo",
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
        { name: "oBizee vs Instamojo", url: "https://www.obizee.com/compare/obizee-vs-instamojo" },
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
              oBizee vs Instamojo
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Which is Better for Indian Sellers?
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              oBizee is a full D2C store builder with integrated logistics. Instamojo started as a payment gateway and now offers basic storefronts. Here's how they compare for Indian sellers.
            </p>
          </div>
        </section>

        {/* Quick verdict */}
        <section className="py-8 bg-orange-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Verdict</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                <strong>Choose oBizee</strong> if you're a physical product seller who needs a full store with built-in shipping. <strong>Choose Instamojo</strong> if you sell digital products, need payment links, or want smart landing pages.
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
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">Instamojo</th>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Why Indian Sellers Choose oBizee Over Instamojo</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "Full-Featured Store", desc: "Complete online store with order management, inventory, and multi-channel selling. Instamojo offers a basic storefront." },
                { title: "Built-in Shipping", desc: "Native Delhivery, DTDC, Blue Dart & hyperlocal. AWB generation, pickups, live tracking. Instamojo has no logistics integration." },
                { title: "Lower Fees", desc: "1% per order, max ₹10. Instamojo charges 2-5% per transaction plus gateway fees." },
                { title: "Order Lifecycle", desc: "Track orders from Pending → In Progress → Shipped → Delivered. Instamojo has basic order tracking." },
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
            <h2 className="text-3xl font-bold text-white mb-5">Need More Than Payment Links?</h2>
            <p className="text-lg text-orange-100 mb-8">
              Get a full store with shipping, orders, and inventory — all for 1% per order.
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

export default CompareInstamojo;
