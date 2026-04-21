import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { CheckCircle2, CreditCard, LineChart } from "lucide-react";
import { useLocation } from "react-router-dom";

const FeaturesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace("#", "");
    const section = document.getElementById(targetId);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee Features",
    description:
      "Explore oBizee features for Indian sellers: order management, inventory tracking, payment workflows, analytics, and business operations in one place.",
    url: "https://www.obizee.com/features",
  };

  return (
    <>
      <Helmet>
        <title>oBizee Features | Orders, Inventory, Payments, Analytics</title>
        <meta
          name="description"
          content="Explore oBizee features for Indian sellers and small businesses. Manage orders, inventory, payments, customer updates, and analytics from one dashboard."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="oBizee Features | Orders, Inventory, Payments, Analytics" />
        <meta
          property="og:description"
          content="One platform for Indian businesses to manage core operations: orders, stock, payments, and growth analytics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.obizee.com/features" />
        <meta property="og:image" content="https://www.obizee.com/Obizee.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="oBizee Features | Orders, Inventory, Payments, Analytics" />
        <meta
          name="twitter:description"
          content="Manage your business operations in one place with oBizee's India-first feature set."
        />
        <meta name="twitter:image" content="https://www.obizee.com/Obizee.png" />
        <link rel="canonical" href="https://www.obizee.com/features" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FeaturesPage;
