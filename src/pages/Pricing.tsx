import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Calculator, Shield, Clock3 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";

const Pricing = () => {
  const planFeatures = [
    "3 months full platform access at no platform fee",
    "After trial: 1% charged per successful order",
    "Per-order fee is capped at maximum ₹10",
    "No setup fee and no monthly subscription lock-in",
    "Works for low and high order values with predictable cost",
    "Built for Indian merchants running daily order operations",
  ];

  const feeExamples = [
    { orderValue: "₹100", percentFee: "₹1", finalFee: "₹1", note: "1% of order value" },
    { orderValue: "₹500", percentFee: "₹5", finalFee: "₹5", note: "1% of order value" },
    { orderValue: "₹1000", percentFee: "₹10", finalFee: "₹10", note: "Cap reached" },
    { orderValue: "₹2000", percentFee: "₹20", finalFee: "₹10", note: "Capped at ₹10" },
    { orderValue: "₹5000", percentFee: "₹50", finalFee: "₹10", note: "Capped at ₹10" },
    { orderValue: "₹8000", percentFee: "₹80", finalFee: "₹10", note: "Capped at ₹10" },
  ];

  const faqs = [
    {
      question: "When does billing start?",
      answer: "Billing starts only after your 3-month free trial ends.",
    },
    {
      question: "What exactly is the platform fee after trial?",
      answer: "After trial, the platform fee is 1% per successful order with a maximum cap of ₹10 for each order.",
    },
    {
      question: "Do I pay fee on failed or canceled orders?",
      answer: "No. Platform fee is applied only on successful orders.",
    },
    {
      question: "Are there any setup charges or hidden fees?",
      answer: "No setup charges, no hidden platform fee, and no monthly minimum commitment.",
    },
    {
      question: "How does the cap help on larger order values?",
      answer: "Even if 1% becomes higher than ₹10, your fee per order remains ₹10 due to the cap.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "oBizee",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    areaServed: "IN",
    offers: {
      "@type": "Offer",
      name: "oBizee Single Plan",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://www.obizee.com/pricing",
      description: "3-month free trial. After trial, 1% per successful order with a maximum fee cap of ₹10 per order.",
    },
  };

  return (
    <>
      <Helmet>
        <title>oBizee Pricing | 3-Month Free Trial + 1% Per Order (Max ₹10)</title>
        <meta
          name="description"
          content="Start with a 3-month free trial. After trial, pay 1% per successful order with a maximum cap of ₹10 per order."
        />
        <meta name="keywords" content="oBizee pricing, 3 month free trial, 1 percent fee, max 10 rupees per order, India SaaS pricing" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="oBizee Pricing | 3-Month Free Trial + 1% Per Order (Max ₹10)" />
        <meta
          property="og:description"
          content="Simple single-plan pricing: 3-month free trial, then 1% per successful order capped at ₹10."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.obizee.com/pricing" />
        <meta property="og:image" content="https://www.obizee.com/Obizee.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="oBizee Pricing | 3-Month Free Trial + 1% Per Order (Max ₹10)" />
        <meta
          name="twitter:description"
          content="Simple single-plan pricing: 3-month free trial, then 1% per successful order capped at ₹10."
        />
        <meta name="twitter:image" content="https://www.obizee.com/Obizee.png" />
        <link rel="canonical" href="https://www.obizee.com/pricing" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />

        <section className="py-5 bg-gradient-to-r from-orange-500 to-orange-600" role="status" aria-label="Pricing highlight">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <p className="text-base sm:text-lg font-semibold">3-Month Free Trial • Then 1% per successful order • Max ₹10 per order</p>
          </div>
        </section>

        <section className="py-14 sm:py-16 bg-gradient-to-br from-white to-orange-50/40" aria-labelledby="pricing-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="pricing-heading" className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
              Simple Pricing for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Growing Merchants</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Start free for 3 months. After that, you pay only when you make a successful sale.
            </p>
          </div>
        </section>

        <section className="py-6 sm:py-10" aria-labelledby="single-plan-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="single-plan-heading" className="sr-only">
              oBizee Single Pricing Plan
            </h2>
            <article className="bg-white border-2 border-orange-200 rounded-3xl shadow-xl p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                  <Clock3 className="w-4 h-4 mr-2" aria-hidden="true" />
                  3 Months Free Trial
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-orange-100 text-orange-800">
                  <Calculator className="w-4 h-4 mr-2" aria-hidden="true" />
                  1% per successful order
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                  <Shield className="w-4 h-4 mr-2" aria-hidden="true" />
                  Max ₹10 cap per order
                </span>
              </div>

              <div className="mb-5">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  One plan for all merchants. No confusing tiers. No hidden platform fee. You get full trial access first, then predictable
                  transaction-based pricing.
                </p>
              </div>

              <ul className="space-y-2.5 mb-6" role="list" aria-label="Single plan features">
                {planFeatures.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-700" role="listitem">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <AppDownloadTrigger>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl text-lg font-semibold">
                  Download App
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </AppDownloadTrigger>
            </article>
          </div>
        </section>

        <section className="py-8 sm:py-10 bg-gray-50" aria-labelledby="calculation-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="calculation-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
              How Fee Is Calculated
            </h2>
            <p className="text-gray-600 text-center mb-5 sm:mb-6">
              Fee = 1% of successful order value, with a maximum cap of ₹10 per order.
            </p>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-sm sm:text-base">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="px-3 sm:px-4 py-2.5 sm:py-3 text-left font-semibold">Order Value</th>
                      <th className="px-3 sm:px-4 py-2.5 sm:py-3 text-left font-semibold">1% Fee</th>
                      <th className="px-3 sm:px-4 py-2.5 sm:py-3 text-left font-semibold">Fee Applied</th>
                      <th className="px-3 sm:px-4 py-2.5 sm:py-3 text-left font-semibold">Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeExamples.map((example) => (
                      <tr key={example.orderValue} className="border-t border-gray-100">
                        <td className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-gray-900">{example.orderValue}</td>
                        <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700">{example.percentFee}</td>
                        <td className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold text-orange-600">{example.finalFee}</td>
                        <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-gray-600">{example.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="faq-heading" className="text-3xl font-bold text-center text-gray-900 mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-5" role="list" aria-label="Pricing FAQs">
              {faqs.map((faq) => (
                <article key={faq.question} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" role="listitem">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16 bg-gradient-to-r from-orange-500 to-orange-600" aria-labelledby="pricing-cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="pricing-cta-heading" className="text-3xl font-bold text-white mb-5">
              Start Free, Pay Only When Orders Succeed
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Get started with a 3-month free trial and scale with predictable per-order pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Pricing CTA buttons">
              <AppDownloadTrigger>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl text-lg font-semibold">
                  Download App
                </Button>
              </AppDownloadTrigger>
              <Button
                asChild
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-3 rounded-xl text-lg font-semibold"
              >
                <a href="tel:+917011571373" aria-label="Call sales at +91 70115 71373">
                  Contact Sales: 7011571373
                </a>
              </Button>
            </div>
            <p className="mt-3 text-orange-100">Call now: 7011571373</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;
