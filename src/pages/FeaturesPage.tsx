"use client";
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { CheckCircle2, CreditCard, LineChart } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const FeaturesPage = () => {
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;
    const targetId = window.location.hash.replace("#", "");
    const section = document.getElementById(targetId);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const faqs = [
    {
      question: "What features does oBizee offer?",
      answer: "oBizee offers auto-generated merchant websites, order management dashboard, inventory tracking, custom order form builder, Delhivery & DTDC logistics integration, fare calculator, employee & vendor management, payment tracking, and sales analytics — all from a single mobile app.",
    },
    {
      question: "Does oBizee have shipping and logistics features?",
      answer: "Yes. oBizee has native integration with Delhivery and DTDC. You can generate AWB numbers, schedule courier pickups, and provide live order tracking to your customers — all directly from the app.",
    },
    {
      question: "Can I manage inventory on oBizee?",
      answer: "Yes. oBizee includes full inventory management with stock tracking, product categories, and real-time updates across all your sales channels.",
    },
    {
      question: "Does oBizee support payment processing?",
      answer: "Yes. oBizee supports hosted payment processing with UPI, cards, net banking, and wallet options via integrated payment gateway. Transaction visibility is available in the dashboard.",
    },
    {
      question: "Can I track my business performance on oBizee?",
      answer: "Yes. oBizee provides business analytics including order funnel visibility, revenue and expense snapshots, product-level insights, and custom date range reports to help you make data-driven decisions.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee Features",
    description:
      "Explore oBizee features for Indian sellers: order management, inventory tracking, payment workflows, analytics, and business operations in one place.",
    url: "https://www.obizee.com/features",
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

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Features", url: "https://www.obizee.com/features" },
      ]} />
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />
        <main role="main" id="main-content">
          <Features />
          <section id="payment-processing" className="py-14 sm:py-20 bg-white scroll-mt-24" aria-labelledby="payment-processing-heading">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-3xl p-5 sm:p-8">
                <h2 id="payment-processing-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-7 h-7 text-orange-600 mr-3" aria-hidden="true" />
                  Payment Processing
                </h2>
                <p className="text-gray-700 mb-5">
                  oBizee supports hosted payment processing flow for Indian merchants using UPI, cards, net banking, and wallet options via
                  payment gateway integration.
                </p>
                <ul className="space-y-2.5" role="list" aria-label="Payment processing capabilities">
                  {[
                    "Hosted checkout redirection model to reduce card-data exposure on merchant systems.",
                    "Payment status reconciliation using callback/webhook confirmation.",
                    "Merchant-level transaction visibility inside oBizee dashboard.",
                  ].map((item) => (
                    <li key={item} className="flex items-start text-gray-700" role="listitem">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="business-analytics" className="py-14 sm:py-20 bg-gray-50 scroll-mt-24" aria-labelledby="business-analytics-heading">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-8">
                <h2 id="business-analytics-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <LineChart className="w-7 h-7 text-orange-600 mr-3" aria-hidden="true" />
                  Business Analytics
                </h2>
                <p className="text-gray-700 mb-5">
                  Track business health with practical reports for order volume, status pipeline, product performance, and finance summaries.
                </p>
                <ul className="space-y-2.5" role="list" aria-label="Business analytics capabilities">
                  {[
                    "Order funnel visibility (new, in-progress, completed, shipped).",
                    "Revenue, expense, and net profit snapshots across day/week/month/custom ranges.",
                    "Product and category level insights to support pricing and stock decisions.",
                  ].map((item) => (
                    <li key={item} className="flex items-start text-gray-700" role="listitem">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="features-faq-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="features-faq-heading" className="text-3xl font-bold text-center text-gray-900 mb-10">
                Frequently Asked Questions
              </h2>
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
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FeaturesPage;
