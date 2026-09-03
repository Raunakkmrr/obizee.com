"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Phone, Calendar, User } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";
import { OBIZEE_SOFTWARE_SCHEMA } from "@/lib/productSchema";

const CompareInstamojo = () => {
  const stages = [
    {
      stage: "Day 1",
      need: "Somewhere for orders to land",
      pain: "You are taking orders in Instagram DMs and writing them in a notebook. Two get missed in a week.",
      obizee: "Store live at yourname.obizee.com in under 2 minutes, or on your own custom domain. Custom order forms, QR codes and shareable links, so orders arrive in one dashboard instead of three inboxes.",
      rival: "Instamojo gets you taking payments quickly, and for digital products or one-off payment links it is hard to beat.",
    },
    {
      stage: "First 100 orders",
      need: "Shipping and payments that do not need three more subscriptions",
      pain: "You are standing in a courier queue, and a customer wants their cake today, not Thursday.",
      obizee: "Delhivery, DTDC, Blue Dart and India Post with live rate comparison per order. Same-day hyperlocal via Borzo and Shadowfax riders. Razorpay and Paytm built in, with no separate gateway account to open.",
      rival: "Instamojo's storefront is payments-first. Courier booking, rate comparison and same-day hyperlocal delivery are not part of it.",
    },
    {
      stage: "Scaling",
      need: "The business behind the shop",
      pain: "You sold out of the wrong yarn, you cannot remember which vendor was cheaper, and last month's buyers never came back.",
      obizee: "Raw materials and recipes, purchase lists, vendor management, expense and profit tracking, plus retention SMS to at-risk and win-back segments at ₹0.25 a message.",
      rival: "Stock, raw materials, vendors and repeat-customer marketing sit outside Instamojo entirely.",
    },
  ];

  const features = [
    { feature: "Same-day hyperlocal delivery", obizee: "Borzo + Shadowfax riders, booked in-app", competitor: false, winner: "obizee" },
    { feature: "Compare courier rates per order", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Raw materials & recipes", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Purchase lists & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Customer retention SMS (RFM segments)", obizee: "Built in, ₹0.25/SMS", competitor: false, winner: "obizee" },
    { feature: "Digital products & payment links", obizee: "Not the focus", competitor: "Core strength", winner: "competitor" },
    { feature: "Monthly subscription", obizee: "None — ₹0/month", competitor: "Free + Premium from ₹999/month", winner: "obizee" },
    { feature: "Full online store", obizee: true, competitor: "Basic storefront", winner: "obizee" },
    { feature: "Payment links", obizee: false, competitor: true, winner: "competitor" },
    { feature: "Delhivery integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "DTDC integration", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Built-in logistics", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Order management dashboard", obizee: "Full lifecycle", competitor: "Basic", winner: "obizee" },
    { feature: "Inventory management", obizee: "Unlimited products & variants", competitor: "Limited", winner: "obizee" },
    { feature: "Custom domain mapping", obizee: "Free — DNS & SSL handled for you", competitor: false, winner: "obizee" },
    { feature: "Setup / website-creation fee", obizee: "₹0", competitor: "₹0", winner: "tie" },
    { feature: "Custom order form builder", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Digital product support", obizee: false, competitor: true, winner: "competitor" },
    { feature: "Payment gateway (Razorpay etc)", obizee: "Integrated", competitor: "Built-in + mojoXpress", winner: "tie" },
    { feature: "Employee & vendor management", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Fare calculator", obizee: true, competitor: false, winner: "obizee" },
    { feature: "Smart pages/landing pages", obizee: false, competitor: true, winner: "competitor" },
  ];

  const faqs = [
    {
      question: "What is the best Instamojo alternative for physical products?",
      answer: "oBizee is the best Instamojo alternative for sellers shipping physical goods. It includes Delhivery, DTDC, Blue Dart and same-day hyperlocal delivery, inventory with per-combination variants, raw-material and vendor tracking, and retention SMS — none of which are Instamojo's focus.",
    },
    {
      question: "Is oBizee better than Instamojo for selling products?",
      answer: "For physical products, yes. Instamojo is strongest at payments, payment links and digital goods. oBizee is built around the physical order lifecycle: stock, courier booking, AWB generation, tracking, and following up with customers after delivery.",
    },
    {
      question: "Does Instamojo have shipping?",
      answer: "Instamojo's shipping support is limited compared with a logistics-first platform. oBizee integrates Delhivery directly, reaches DTDC, Blue Dart and India Post through a built-in aggregator with live rate comparison per order, and books Borzo and Shadowfax riders for same-day delivery.",
    },
    {
      question: "What does oBizee cost compared with Instamojo?",
      answer: "oBizee has 0 SUBSCRIPTION and charges nothing until your store has taken ₹50,000 in orders — see Pricing for the simple structure after that. Compare it against Instamojo's plan fee plus its transaction charges for your own order volume.",
    },
    {
      question: "When is Instamojo the better choice?",
      answer: "Instamojo is the better choice for digital products, services, course sales or anything that needs a quick payment link without shipping. oBizee is built for sellers moving physical stock.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee vs Instamojo — Best Instamojo Alternative for Indian Sellers (2026)",
    description: "Detailed comparison of oBizee vs Instamojo for Indian sellers. oBizee has 0 SUBSCRIPTION and 0 SETUP FEE. Instamojo charges 2-5% per transaction.",
    url: "https://www.obizee.com/compare/obizee-vs-instamojo",
    inLanguage: "en-IN",
  };

  // Real git commit dates — never guess these. Update dateModified only when
  // the content on this page actually changes.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "oBizee vs Instamojo — Best Instamojo Alternative for Indian Sellers (2026)",
    description: "Detailed comparison of oBizee vs Instamojo for Indian sellers. oBizee has 0 SUBSCRIPTION, 0 SETUP FEE, a FREE mapped custom domain and UNLIMITED products.",
    datePublished: "2026-04-23",
    dateModified: "2026-08-31",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" },
    },
    mainEntityOfPage: "https://www.obizee.com/compare/obizee-vs-instamojo",
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
        { name: "oBizee vs Instamojo", url: "https://www.obizee.com/compare/obizee-vs-instamojo" },
      ]} />
      <JsonLd data={jsonLd} />
      <JsonLd data={articleJsonLd} />
        <JsonLd data={OBIZEE_SOFTWARE_SCHEMA} />
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
              oBizee is an Instamojo alternative for sellers shipping physical products. It adds Delhivery, DTDC and Blue Dart shipping, same-day hyperlocal delivery via Borzo and Shadowfax, 0 SETUP FEE, a FREE mapped custom domain, UNLIMITED products and variants, inventory and raw-material tracking, vendor management and retention SMS, with 0 SUBSCRIPTION. Instamojo began as a payment gateway and its storefront remains lighter on logistics and stock.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 mt-6">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Raunak Kumar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Published 23 April 2026 · Updated 31 August 2026</span>
              </div>
            </div>
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
                { title: "FREE Custom Domain", desc: "DNS and SSL mapped for you at 0 cost. Instamojo doesn't map a domain for you at all." },
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
                      <p className="mb-1.5 text-sm font-bold text-gray-500">Instamojo</p>
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
            <h2 className="text-3xl font-bold text-white mb-5">Need More Than Payment Links?</h2>
            <p className="text-lg text-orange-100 mb-8">
              Get a full store with shipping, orders, and inventory — 0 SUBSCRIPTION, 0 SETUP FEE.
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
