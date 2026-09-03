"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Phone, Calendar, User } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";
import Testimonials from "@/components/Testimonials";
import CompareMigrationOffer from "@/components/CompareMigrationOffer";
import { OBIZEE_SOFTWARE_SCHEMA } from "@/lib/productSchema";

const CompareDM2buy = () => {
  const stages = [
    {
      stage: "Day 1",
      need: "Somewhere for orders to land",
      pain: "You are taking orders in Instagram DMs and writing them in a notebook. Two get missed in a week.",
      obizee: "Store live at yourname.obizee.com in under 2 minutes, or on your own custom domain. Custom order forms, QR codes and shareable links, so orders arrive in one dashboard instead of three inboxes.",
      rival: "DM2Buy is genuinely good at this and free. If all you need is a link to share in your bio, it does the job.",
    },
    {
      stage: "First 100 orders",
      need: "Shipping and payments that do not need three more subscriptions",
      pain: "You are standing in a courier queue, and a customer wants their cake today, not Thursday.",
      obizee: "Delhivery, DTDC, Blue Dart and India Post with live rate comparison per order. Same-day hyperlocal via Borzo and Shadowfax riders. Razorpay and Paytm built in, with no separate gateway account to open.",
      rival: "DM2Buy has no built-in logistics. You book couriers yourself or pay for a separate aggregator, and there is no same-day option.",
    },
    {
      stage: "Scaling",
      need: "The business behind the shop",
      pain: "You sold out of the wrong yarn, you cannot remember which vendor was cheaper, and last month's buyers never came back.",
      obizee: "Raw materials and recipes, purchase lists, vendor management, expense and profit tracking, plus retention SMS to at-risk and win-back segments at ₹0.25 a message.",
      rival: "DM2Buy is a catalog tool, not a business system. Stock, materials, vendors and repeat-customer marketing all live outside it.",
    },
  ];

  const features = [
    { feature: "Same-day hyperlocal delivery", obizee: "Borzo + Shadowfax riders, booked in-app", competitor: false, winner: "obizee" },
    { feature: "Compare courier rates per order", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Raw materials & recipes", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Purchase lists & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Customer retention SMS (RFM segments)", obizee: "Built in, ₹0.25/SMS", competitor: false, winner: "obizee" },
    { feature: "Free to start", obizee: "3-month free trial", competitor: "Core catalog free", winner: "competitor" },
    { feature: "Monthly subscription", obizee: "None — ₹0/month", competitor: "Free tier + unclear paid features", winner: "obizee" },
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
    { feature: "Inventory management", obizee: "Unlimited products & variants, full-featured", competitor: "Basic", winner: "obizee" },
    { feature: "Order dashboard", obizee: "Full lifecycle tracking", competitor: "Basic", winner: "obizee" },
    { feature: "Fare calculator", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Employee & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Seller collaboration network", obizee: false, competitor: true, winner: "competitor" },
    { feature: "IRL pop-up events", obizee: false, competitor: true, winner: "competitor" },
    { feature: "Payment processing", obizee: "Razorpay + Paytm built in, no separate account", competitor: "Available", winner: "obizee" },
    { feature: "Custom domain mapping", obizee: "Free — DNS & SSL handled for you", competitor: false, winner: "obizee" },
    { feature: "Website setup / creation cost", obizee: "₹0 — free to build and publish", competitor: "₹0", winner: "tie" },
  ];

  const faqs = [
    {
      question: "What is the best DM2Buy alternative for Indian sellers?",
      answer: "oBizee is the best DM2Buy alternative for sellers who need more than a catalog link. It includes Delhivery, DTDC, Blue Dart and same-day hyperlocal shipping, Razorpay and Paytm built in, inventory and variant management, and customer retention SMS, with 0 SUBSCRIPTION and 0 SETUP FEE (see Pricing for the simple structure).",
    },
    {
      question: "What is the difference between oBizee and DM2Buy?",
      answer: "DM2Buy is a catalog and order-link tool: it gives customers somewhere to browse and place an order. oBizee is a full commerce platform that also handles shipping, payments, stock, raw materials, vendors and repeat-customer marketing. If shipping and inventory happen outside your current tool, that is the gap oBizee fills.",
    },
    {
      question: "Does DM2Buy have shipping integration?",
      answer: "No. DM2Buy does not include courier integration, so sellers book shipments themselves or subscribe to a separate aggregator. oBizee integrates Delhivery directly and reaches DTDC, Blue Dart and India Post through a built-in aggregator, with live rate comparison per order and same-day hyperlocal delivery through Borzo and Shadowfax.",
    },
    {
      question: "Is oBizee free like DM2Buy?",
      answer: "oBizee has a 3-month FREE trial and 0 SUBSCRIPTION after it — see Pricing for the simple structure that applies once you're making sales. DM2Buy's core catalog is free too — the trade is that shipping, payments and inventory are included with oBizee rather than handled separately.",
    },
    {
      question: "When is DM2Buy the better choice?",
      answer: "DM2Buy is the better choice if you want a free catalog link, ship orders yourself, and do not need stock or courier management. It is a good starting point. oBizee makes sense once losing orders, booking couriers or tracking stock starts costing you more time than the fee.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs DM2buy — Which D2C Platform is Better for Indian Sellers?",
    description: "Compare oBizee and DM2buy: features, pricing, shipping, multi-channel support. oBizee wins on 20 of 26 features with built-in Delhivery, DTDC, Blue Dart & hyperlocal logistics, UNLIMITED products, and a FREE mapped custom domain.",
    url: "https://www.obizee.com/compare/obizee-vs-dm2buy",
    inLanguage: "en-IN",
  };

  // Real git commit dates — never guess these. Update dateModified only when
  // the content on this page actually changes.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "oBizee vs DM2buy — Which D2C Platform is Better for Indian Sellers?",
    description: "Compare oBizee and DM2buy: features, pricing, shipping, multi-channel support. oBizee wins on 20 of 26 features.",
    datePublished: "2026-04-23",
    dateModified: "2026-09-03",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" },
    },
    mainEntityOfPage: "https://www.obizee.com/compare/obizee-vs-dm2buy",
    image: "https://www.obizee.com/Obizee.png",
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
      <JsonLd data={articleJsonLd} />
        <JsonLd data={OBIZEE_SOFTWARE_SCHEMA} />
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
              oBizee is a DM2Buy alternative for Indian sellers who have outgrown a catalog link. It adds Delhivery, DTDC and Blue Dart shipping, same-day hyperlocal delivery via Borzo and Shadowfax, Razorpay and Paytm built in, UNLIMITED products and variants, a FREE mapped custom domain, and inventory and raw-material tracking, and retention SMS — with 0 SETUP FEE and 0 SUBSCRIPTION. DM2Buy is a catalog and order-link tool without built-in logistics.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mt-6">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Raunak Kumar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Published 23 April 2026 · Updated 3 September 2026</span>
              </div>
            </div>
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
              oBizee wins on 20 features. DM2buy wins on 3 features (collaboration network, IRL events & free to start). 3 are tied.
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
                { title: "FREE Custom Domain", desc: "DNS and SSL mapped for you at 0 cost, store live in under 2 minutes. DM2buy doesn't map a domain for you at all." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                      <p className="mb-1.5 text-sm font-bold text-gray-500">DM2buy</p>
                      <p className="text-sm leading-relaxed text-gray-600">{item.rival}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />

        <CompareMigrationOffer competitorName="DM2Buy" />

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
