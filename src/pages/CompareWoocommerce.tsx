"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Phone } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";
import { OBIZEE_SOFTWARE_SCHEMA } from "@/lib/productSchema";

const CompareWoocommerce = () => {
  const stages = [
    {
      stage: "Day 1",
      need: "Somewhere for orders to land",
      pain: "You are taking orders in Instagram DMs and writing them in a notebook. Two get missed in a week.",
      obizee: "Store live at yourname.obizee.com in under 2 minutes, or on your own custom domain. Custom order forms, QR codes and shareable links, so orders arrive in one dashboard instead of three inboxes.",
      rival: "WooCommerce can do far more here, but you need WordPress, hosting, a theme and setup time before the first order. oBizee takes under two minutes.",
    },
    {
      stage: "First 100 orders",
      need: "Shipping and payments that do not need three more subscriptions",
      pain: "You are standing in a courier queue, and a customer wants their cake today, not Thursday.",
      obizee: "Delhivery, DTDC, Blue Dart and India Post with live rate comparison per order. Same-day hyperlocal via Borzo and Shadowfax riders. Razorpay and Paytm from 1%, with no separate gateway account to open.",
      rival: "WooCommerce needs a shipping plugin, a gateway plugin and configuration for each. There is no same-day hyperlocal option without custom work.",
    },
    {
      stage: "Scaling",
      need: "The business behind the shop",
      pain: "You sold out of the wrong yarn, you cannot remember which vendor was cheaper, and last month's buyers never came back.",
      obizee: "Raw materials and recipes, purchase lists, vendor management, expense and profit tracking, plus retention SMS to at-risk and win-back segments at ₹0.25 a message.",
      rival: "WooCommerce can be extended to do all of this with the right plugins, which is genuine flexibility — and genuine cost, maintenance and version-compatibility risk.",
    },
  ];

  const features = [
    { feature: "Same-day hyperlocal delivery", obizee: "Borzo + Shadowfax riders, booked in-app", competitor: "Custom development only", winner: "obizee" },
    { feature: "Payment gateway", obizee: "Razorpay + Paytm built in, from 1%", competitor: "Plugin, configured yourself", winner: "obizee" },
    { feature: "Compare courier rates per order", obizee: true, competitor: "Via paid plugin", winner: "obizee" },
    { feature: "Hosting & maintenance", obizee: "None needed", competitor: "You host and maintain it", winner: "obizee" },
    { feature: "Raw materials & recipes", obizee: true, competitor: "Via paid plugin", winner: "obizee" },
    { feature: "Customer retention SMS (RFM segments)", obizee: "Built in, ₹0.25/SMS", competitor: "Via paid plugin", winner: "obizee" },
    { feature: "Customisation ceiling", obizee: "Fixed feature set", competitor: "Unlimited via plugins/code", winner: "competitor" },
    { feature: "Data ownership", obizee: "Hosted by oBizee", competitor: "Fully self-hosted", winner: "competitor" },
    { feature: "Monthly cost", obizee: "₹0/month (1% per order, max ₹10)", competitor: "₹300-2,000+/month (hosting + plugins)", winner: "obizee" },
    { feature: "Setup time", obizee: "Under 2 minutes", competitor: "2-5 hours minimum", winner: "obizee" },
    { feature: "Technical knowledge needed", obizee: "None", competitor: "WordPress, PHP, hosting knowledge", winner: "obizee" },
    { feature: "Hosting included", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Delhivery integration", obizee: true, competitor: "Via plugins", winner: "obizee" },
    { feature: "DTDC integration", obizee: true, competitor: "Via plugins", winner: "obizee" },
    { feature: "Built-in logistics", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Order management", obizee: true, competitor: true, winner: "tie" },
    { feature: "Inventory management", obizee: true, competitor: true, winner: "tie" },
    { feature: "Custom order form builder", obizee: true, competitor: "Via plugins", winner: "obizee" },
    { feature: "Mobile app for sellers", obizee: true, competitor: "Limited", winner: "obizee" },
    { feature: "Security & updates", obizee: "Managed", competitor: "Self-managed", winner: "obizee" },
    { feature: "Plugin ecosystem", obizee: false, competitor: true, winner: "competitor" },
    { feature: "Full customization", obizee: "Template-based", competitor: "Unlimited", winner: "competitor" },
    { feature: "Employee & vendor management", obizee: true, competitor: "Via plugins", winner: "obizee" },
  ];

  const faqs = [
    {
      question: "Is oBizee better than WooCommerce for Indian sellers?",
      answer: "For sellers who do not want to run a website, yes. oBizee needs no hosting, no plugins and no maintenance, and includes Delhivery, DTDC, Blue Dart and same-day hyperlocal shipping, Razorpay and Paytm from 1%, inventory and vendor management. WooCommerce offers more customisation but requires you to build and maintain the stack yourself.",
    },
    {
      question: "Does oBizee have shipping like WooCommerce?",
      answer: "oBizee has shipping built in rather than added by plugin. Delhivery is integrated directly, DTDC, Blue Dart and India Post come through a built-in aggregator with live rate comparison per order, and Borzo and Shadowfax handle same-day hyperlocal delivery. On WooCommerce each of these is a plugin to install, configure and keep updated.",
    },
    {
      question: "What does WooCommerce actually cost?",
      answer: "The plugin is free, but a working store needs hosting, an SSL certificate, a theme, and plugins for shipping, payments and often inventory. That is a recurring cost plus your time maintaining versions and compatibility. oBizee has no subscription and charges 1% per order capped at ₹10.",
    },
    {
      question: "Do I need technical knowledge for oBizee?",
      answer: "No. oBizee is set up from a mobile app in under two minutes with no code, no hosting and no plugin configuration. WooCommerce assumes you are comfortable with WordPress, hosting and periodic maintenance.",
    },
    {
      question: "When is WooCommerce the better choice?",
      answer: "WooCommerce is the better choice if you need deep customisation, want to own and host your data, or have specific requirements only a plugin ecosystem can meet. It is genuinely more flexible. oBizee is the better choice if you want to sell today and never think about hosting.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs WooCommerce — Easiest WooCommerce Alternative for India (2026)",
    description: "Detailed comparison of oBizee vs WooCommerce for Indian sellers. oBizee: 2-minute setup, zero technical knowledge, built-in shipping. WooCommerce: requires WordPress, hosting, and plugins.",
    url: "https://www.obizee.com/compare/obizee-vs-woocommerce",
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
        { name: "oBizee vs WooCommerce", url: "https://www.obizee.com/compare/obizee-vs-woocommerce" },
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
              oBizee vs WooCommerce
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Which is Better for Indian Sellers?
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              oBizee is a WooCommerce alternative for Indian sellers who do not want to run a website. There is no hosting, no plugin stack and no maintenance: Delhivery, DTDC and Blue Dart shipping, same-day hyperlocal delivery via Borzo and Shadowfax, Razorpay and Paytm from 1%, inventory and vendor management are already included, for a 1% platform fee capped at ₹10 per order. WooCommerce is free software but needs hosting, plugins and technical upkeep.
            </p>
          </div>
        </section>

        {/* Quick verdict */}
        <section className="py-8 bg-orange-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Verdict</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                <strong>Choose oBizee</strong> if you want a ready-to-go store with zero technical setup and built-in shipping. <strong>Choose WooCommerce</strong> if you need unlimited customization and are comfortable managing WordPress, hosting, and plugins.
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
                      <th className="px-4 py-3 text-left font-semibold text-gray-700 w-1/3">WooCommerce</th>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Why Indian Sellers Choose oBizee Over WooCommerce</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "Zero Technical Setup", desc: "No WordPress, no hosting, no PHP. Sign up, add products, start selling in 2 minutes." },
                { title: "Built-in Everything", desc: "Shipping, payments, order management — all included. WooCommerce needs 10+ plugins for the same functionality." },
                { title: "No Hosting Costs", desc: "oBizee hosts your store for free. WooCommerce hosting costs ₹300-2,000+/month." },
                { title: "Managed Security", desc: "Automatic updates, security, and backups. WooCommerce requires manual maintenance." },
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
                      <p className="mb-1.5 text-sm font-bold text-gray-500">WooCommerce</p>
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
            <h2 className="text-3xl font-bold text-white mb-5">Skip the Technical Hassle</h2>
            <p className="text-lg text-orange-100 mb-8">
              Start your store in 2 minutes. No WordPress, no hosting, no coding.
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

export default CompareWoocommerce;
