import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Minus, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";

const CompareShopify = () => {
  const features = [
    { feature: "Monthly subscription", obizee: "None — ₹0/month", competitor: "Starts at ₹2,000+/month", winner: "obizee" },
    { feature: "Commission per order", obizee: "1% (max ₹10 cap)", competitor: "0.5–2% + payment gateway fees", winner: "obizee" },
    { feature: "Auto-generated website", obizee: true, competitor: true, winner: "tie" },
    { feature: "Custom domain support", obizee: "Subdomain (free)", competitor: "Custom domain (paid)", winner: "tie" },
    { feature: "Delhivery integration", obizee: true, competitor: "Via third-party apps", winner: "obizee" },
    { feature: "DTDC integration", obizee: true, competitor: "Via third-party apps", winner: "obizee" },
    { feature: "Built-in logistics (AWB, pickup)", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Order management dashboard", obizee: true, competitor: true, winner: "tie" },
    { feature: "Inventory management", obizee: true, competitor: true, winner: "tie" },
    { feature: "Custom order form builder", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Multi-link order forms", obizee: true, competitor: false, winner: "obizee" },
    { feature: "No coding needed", obizee: true, competitor: "Mostly, but themes need some setup", winner: "obizee" },
    { feature: "Mobile-first app", obizee: true, competitor: true, winner: "tie" },
    { feature: "Employee & vendor management", obizee: true, competitor: "Via apps (paid)", winner: "obizee" },
    { feature: "Fare calculator", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Setup time", obizee: "Under 2 minutes", competitor: "30–60 minutes", winner: "obizee" },
    { feature: "Best for", obizee: "Indian small merchants", competitor: "Global businesses, larger stores", winner: "tie" },
  ];

  const costComparison = [
    { orders: "50 orders/month (avg ₹500)", obizee: "₹250", shopify: "₹2,000+ subscription + gateway fees" },
    { orders: "100 orders/month (avg ₹500)", obizee: "₹500", shopify: "₹2,000+ subscription + gateway fees" },
    { orders: "200 orders/month (avg ₹1,000)", obizee: "₹2,000 (all capped at ₹10)", shopify: "₹2,000+ subscription + ₹2,000+ fees" },
    { orders: "500 orders/month (avg ₹2,000)", obizee: "₹5,000 (all capped at ₹10)", shopify: "₹2,000+ subscription + ₹5,000+ fees" },
  ];

  const faqs = [
    {
      question: "Is oBizee really cheaper than Shopify for Indian sellers?",
      answer: "Yes. oBizee has no monthly subscription — you pay only 1% per order, capped at ₹10 max. A merchant doing 100 orders/month at ₹500 average pays just ₹500 total on oBizee vs ₹2,000+ on Shopify before any transaction fees. For small Indian merchants, oBizee is dramatically more affordable.",
    },
    {
      question: "Does oBizee have shipping like Shopify?",
      answer: "oBizee has built-in native integration with Delhivery and DTDC — India's top courier services. You can generate AWB numbers, schedule pickups, and provide live tracking directly from the app. Shopify requires third-party apps like Shiprocket for Indian logistics, adding complexity and cost.",
    },
    {
      question: "Can I migrate from Shopify to oBizee?",
      answer: "Yes. You can set up your oBizee store in under 2 minutes, add your products, and start taking orders immediately. Your customers won't notice any difference — they get a clean storefront and order tracking just like Shopify.",
    },
    {
      question: "Is Shopify better for larger businesses?",
      answer: "Shopify has more advanced features for larger, global businesses with complex needs. But for Indian small merchants, home businesses, Instagram sellers, and WhatsApp businesses, oBizee offers everything you need at a fraction of the cost — with logistics built in rather than requiring paid add-ons.",
    },
    {
      question: "Which is the cheapest Shopify alternative in India?",
      answer: "oBizee is the cheapest Shopify alternative in India. With zero monthly fees and a maximum of ₹10 per order in commission, it's designed specifically for Indian small merchants who find Shopify's ₹2,000+/month pricing too expensive.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Shopify — Cheapest Shopify Alternative in India (2026 Comparison)",
    description: "Detailed comparison of oBizee vs Shopify for Indian sellers. oBizee charges 1% per order (max ₹10) with no monthly fees. Shopify costs ₹2,000+/month.",
    url: "https://www.obizee.com/compare/obizee-vs-shopify",
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
      <Helmet>
        <title>oBizee vs Shopify — Cheapest Shopify Alternative in India [2026]</title>
        <meta
          name="description"
          content="Compare oBizee vs Shopify for Indian sellers. oBizee: ₹0/month, 1% per order (max ₹10), built-in Delhivery & DTDC shipping. Shopify: ₹2,000+/month + extra for Indian logistics."
        />
        <meta
          name="keywords"
          content="oBizee vs Shopify, Shopify alternative India, cheapest Shopify alternative, Shopify too expensive India, best ecommerce platform India, Shopify India pricing"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="oBizee vs Shopify — Is oBizee the Cheapest Shopify Alternative in India?" />
        <meta
          property="og:description"
          content="Side-by-side comparison: ₹0/month vs ₹2,000+/month. Built-in Delhivery/DTDC vs paid third-party apps. See why Indian sellers are switching to oBizee."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.obizee.com/compare/obizee-vs-shopify" />
        <meta property="og:image" content="https://www.obizee.com/Obizee.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="oBizee vs Shopify — Cheapest Shopify Alternative in India [2026]" />
        <meta
          name="twitter:description"
          content="₹0/month vs ₹2,000+/month. Built-in Delhivery/DTDC vs paid apps. Compare oBizee and Shopify for Indian sellers."
        />
        <link rel="canonical" href="https://www.obizee.com/compare/obizee-vs-shopify" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

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
              oBizee charges ₹0/month with a 1% fee capped at ₹10 per order. Shopify starts at ₹2,000+/month plus transaction fees. Here's a detailed, honest comparison to help you decide.
            </p>
          </div>
        </section>

        {/* Quick verdict */}
        <section className="py-8 bg-orange-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Verdict</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                <strong>Choose oBizee</strong> if you're a small Indian merchant, Instagram seller, or home business looking for the most affordable way to sell online with built-in Delhivery/DTDC shipping. <strong>Choose Shopify</strong> if you're a larger business with complex needs, selling internationally, and have a budget of ₹2,000+/month for your platform.
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
                { title: "Built-in Indian Logistics", desc: "Delhivery & DTDC integrated natively. Generate AWB, schedule pickups, live tracking — all from the app." },
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
