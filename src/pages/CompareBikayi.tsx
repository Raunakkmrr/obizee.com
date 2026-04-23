import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";

const CompareBikayi = () => {
  const features = [
    { feature: "Monthly subscription", obizee: "None — ₹0/month", competitor: "Free tier + paid plans from ₹999/month", winner: "obizee" },
    { feature: "Commission per order", obizee: "1% (max ₹10)", competitor: "Varies by plan", winner: "obizee" },
    { feature: "Auto-generated website", obizee: true, competitor: true, winner: "tie" },
    { feature: "WhatsApp catalog integration", obizee: true, competitor: true, winner: "tie" },
    { feature: "Delhivery integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "DTDC integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Built-in logistics (AWB, pickup)", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Order management", obizee: true, competitor: true, winner: "tie" },
    { feature: "Inventory management", obizee: true, competitor: true, winner: "tie" },
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
      answer: "For Indian small merchants who need built-in shipping and transparent pricing, yes. oBizee offers Delhivery/DTDC logistics, custom order forms, and a simple 1% fee capped at ₹10. Bikayi excels with WhatsApp Business API integration.",
    },
    {
      question: "Does Bikayi have shipping integration?",
      answer: "No. Bikayi focuses on WhatsApp commerce and store building but doesn't have built-in logistics. oBizee has native Delhivery and DTDC integration.",
    },
    {
      question: "Is Bikayi free?",
      answer: "Bikayi has a free tier with limited features. Advanced features require paid plans starting at ₹999/month. oBizee has no monthly fees — just 1% per order, max ₹10.",
    },
    {
      question: "Which is cheaper — oBizee or Bikayi?",
      answer: "oBizee is cheaper for most merchants. Zero monthly fees and a flat 1% per order (max ₹10) vs Bikayi's paid plans that start at ₹999/month for full features.",
    },
    {
      question: "Can I sell on WhatsApp with oBizee?",
      answer: "Yes. oBizee supports WhatsApp selling along with Instagram and your own website. While Bikayi offers deeper WhatsApp Business API integration, oBizee provides multi-channel selling with built-in logistics.",
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
        <title>oBizee vs Bikayi — Best Bikayi Alternative in India [2026 Comparison]</title>
        <meta
          name="description"
          content="Compare oBizee vs Bikayi for Indian sellers. oBizee: ₹0/month, 1% per order (max ₹10), built-in Delhivery & DTDC shipping. Bikayi: free tier + paid plans from ₹999/month."
        />
        <meta
          name="keywords"
          content="oBizee vs Bikayi, Bikayi alternative, Bikayi app review, cheapest online store India, Bikayi pricing"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="oBizee vs Bikayi — Best Bikayi Alternative in India [2026 Comparison]" />
        <meta
          property="og:description"
          content="Side-by-side comparison: ₹0/month vs ₹999+/month. Built-in Delhivery/DTDC vs no logistics. See why Indian sellers choose oBizee over Bikayi."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.obizee.com/compare/obizee-vs-bikayi" />
        <meta property="og:image" content="https://www.obizee.com/Obizee.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="oBizee vs Bikayi — Best Bikayi Alternative in India [2026 Comparison]" />
        <meta
          name="twitter:description"
          content="₹0/month vs ₹999+/month. Built-in Delhivery/DTDC vs no logistics. Compare oBizee and Bikayi for Indian sellers."
        />
        <link rel="canonical" href="https://www.obizee.com/compare/obizee-vs-bikayi" />
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
              oBizee vs Bikayi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Which is Better for Indian Sellers?
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              oBizee charges ₹0/month. Bikayi starts free but paid plans go up to ₹999+/month. Both focus on Indian sellers — here's how they compare.
            </p>
          </div>
        </section>

        {/* Quick verdict */}
        <section className="py-8 bg-orange-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Verdict</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                <strong>Choose oBizee</strong> if you want zero monthly fees, built-in Delhivery/DTDC shipping, and transparent pricing. <strong>Choose Bikayi</strong> if you specifically need WhatsApp Business API integration and AI-powered store building features.
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
                { title: "Built-in Shipping", desc: "Native Delhivery & DTDC integration. AWB generation, pickup scheduling, live tracking. Bikayi has no logistics integration." },
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
