"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Phone } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const BestPlatforms2026 = () => {
  const platforms = [
    {
      rank: 1,
      name: "oBizee",
      verdict: "Best overall for Indian small merchants",
      pricing: "1% per order, max ₹10. No monthly fees.",
      pros: ["Built-in Delhivery/DTDC shipping", "Zero subscription fees", "2-minute setup"],
      cons: ["No blog/SEO tools built in", "Newer platform"],
    },
    {
      rank: 2,
      name: "Dukaan",
      verdict: "Good all-round D2C platform",
      pricing: "₹4,999/year",
      pros: ["WhatsApp selling", "Marketing tools", "Established platform"],
      cons: ["No shipping integration", "Yearly subscription required"],
    },
    {
      rank: 3,
      name: "Shopify",
      verdict: "Best for larger or international businesses",
      pricing: "₹2,000+/month",
      pros: ["Massive app ecosystem", "International selling", "Advanced analytics"],
      cons: ["Expensive for small sellers", "No built-in Indian logistics"],
    },
    {
      rank: 4,
      name: "Bikayi",
      verdict: "Best for WhatsApp-first sellers",
      pricing: "Free tier + ₹999/month for premium",
      pros: ["WhatsApp Business API", "AI store builder", "Easy setup"],
      cons: ["No shipping integration", "Paid plans get expensive"],
    },
    {
      rank: 5,
      name: "Instamojo",
      verdict: "Best for digital products and payment links",
      pricing: "Free + 2-5% per transaction",
      pros: ["Payment links", "Digital product support", "Smart pages"],
      cons: ["Basic storefront only", "High transaction fees"],
    },
    {
      rank: 6,
      name: "WooCommerce",
      verdict: "Best for technical users wanting full control",
      pricing: "₹300-2,000+/month (hosting + plugins)",
      pros: ["Unlimited customization", "Huge plugin ecosystem", "Open source"],
      cons: ["Requires technical knowledge", "Self-managed hosting/security"],
    },
    {
      rank: 7,
      name: "DM2buy",
      verdict: "Best for Instagram-only sellers in a community",
      pricing: "Free tier, paid pricing unclear",
      pros: ["Seller collaboration network", "IRL events"],
      cons: ["Instagram only", "No logistics, opaque pricing, payment delay reports"],
    },
  ];

  const summaryTable = [
    { platform: "oBizee", cost: "₹0/month + 1% (max ₹10)", shipping: "Delhivery, DTDC", multiChannel: "Yes", bestFor: "Small Indian merchants" },
    { platform: "Dukaan", cost: "₹4,999/year", shipping: "No", multiChannel: "Yes", bestFor: "Small-medium D2C brands" },
    { platform: "Shopify", cost: "₹2,000+/month", shipping: "Via apps", multiChannel: "Yes", bestFor: "Larger/international businesses" },
    { platform: "Bikayi", cost: "Free + ₹999/month", shipping: "No", multiChannel: "WhatsApp focus", bestFor: "WhatsApp-first sellers" },
    { platform: "Instamojo", cost: "Free + 2-5%/txn", shipping: "No", multiChannel: "Limited", bestFor: "Digital products" },
    { platform: "WooCommerce", cost: "₹300-2,000+/month", shipping: "Via plugins", multiChannel: "Yes", bestFor: "Technical users" },
    { platform: "DM2buy", cost: "Free tier", shipping: "No", multiChannel: "Instagram only", bestFor: "Instagram community sellers" },
  ];

  const faqs = [
    {
      question: "Which is the cheapest ecommerce platform in India?",
      answer: "oBizee is the cheapest with zero monthly fees and 1% per order capped at ₹10. Even for high-value orders, the maximum commission is ₹10.",
    },
    {
      question: "Which platform has built-in shipping in India?",
      answer: "oBizee is the only platform on this list with native Delhivery and DTDC integration built into the app. Others require third-party shipping solutions.",
    },
    {
      question: "Can I start an online store for free in India?",
      answer: "Yes. oBizee has no setup fees and no monthly subscription. You only pay 1% per order (max ₹10) when you make a sale. Bikayi and DM2buy also have free tiers but with limitations.",
    },
    {
      question: "Which platform is best for Instagram sellers in India?",
      answer: "oBizee and DM2buy both support Instagram selling. oBizee is better if you also want WhatsApp selling and built-in shipping. DM2buy offers a seller collaboration network.",
    },
    {
      question: "Is Shopify worth it for small Indian businesses?",
      answer: "For most small Indian businesses, Shopify's ₹2,000+/month pricing is hard to justify when platforms like oBizee offer similar core features at a fraction of the cost with built-in Indian logistics.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "7 Best Ecommerce Platforms in India [2026] — Cheapest to Most Expensive",
    description: "We compared pricing, features, shipping integration, and ease of use across the 7 most popular ecommerce platforms for Indian merchants in 2026.",
    url: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026",
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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Ecommerce Platforms in India 2026",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: 7,
    itemListElement: platforms.map((p) => ({
      "@type": "ListItem",
      position: p.rank,
      name: p.name,
      description: p.verdict,
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Best Ecommerce Platforms India 2026", url: "https://www.obizee.com/compare/best-ecommerce-platforms-india-2026" },
      ]} />
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={itemListJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-white to-orange-50/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">2026 Roundup</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
              7 Best Ecommerce Platforms
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                for Indian Sellers in 2026
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We compared pricing, features, shipping integration, and ease of use across the most popular platforms for Indian merchants.
            </p>
          </div>
        </section>

        {/* Quick verdict */}
        <section className="py-8 bg-orange-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Verdict</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                For most Indian small merchants, <strong>oBizee</strong> offers the best value: zero monthly fees, built-in Delhivery/DTDC shipping, and the lowest per-order cost at 1% (max ₹10). <strong>Shopify</strong> is better for larger businesses, and <strong>Instamojo</strong> for digital products.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Rankings */}
        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">The Rankings</h2>
            <div className="space-y-6">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-2xl p-6 sm:p-8 border-2 ${
                    p.name === "oBizee" ? "border-orange-400 bg-orange-50/50" : "border-gray-200 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                        p.name === "oBizee"
                          ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {p.rank}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{p.name}</h3>
                      <p className="text-orange-600 font-medium mb-2">{p.verdict}</p>
                      <p className="text-gray-600 text-sm mb-4">
                        <strong>Pricing:</strong> {p.pricing}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-green-700 mb-2">Pros</p>
                          <ul className="space-y-1">
                            {p.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-red-600 mb-2">Cons</p>
                          <ul className="space-y-1">
                            {p.cons.map((con) => (
                              <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
                                <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section className="py-10 sm:py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Comparison Summary</h2>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-sm sm:text-base">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Platform</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Monthly Cost</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Shipping Integration</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Multi-Channel</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summaryTable.map((row) => (
                      <tr
                        key={row.platform}
                        className={`border-t border-gray-100 ${row.platform === "oBizee" ? "bg-green-50/50" : ""}`}
                      >
                        <td className="px-4 py-3 font-medium text-gray-900">{row.platform}</td>
                        <td className="px-4 py-3 text-gray-700">{row.cost}</td>
                        <td className="px-4 py-3 text-gray-700">{row.shipping}</td>
                        <td className="px-4 py-3 text-gray-700">{row.multiChannel}</td>
                        <td className="px-4 py-3 text-gray-700">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16 bg-white">
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
            <h2 className="text-3xl font-bold text-white mb-5">Start Your Online Store Today</h2>
            <p className="text-lg text-orange-100 mb-8">
              Join thousands of Indian sellers on oBizee. Zero fees. Built-in shipping.
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

export default BestPlatforms2026;
