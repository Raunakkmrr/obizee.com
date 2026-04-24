"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Package, Truck, MapPin, ClipboardCheck, BarChart3 } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const HowToShipProducts = () => {
  const faqs = [
    {
      question: "Which courier services does oBizee support?",
      answer:
        "oBizee has native integration with Delhivery and DTDC \u2014 two of India's largest courier networks. You can connect either or both from the Shipping Settings in the app.",
    },
    {
      question: "How do I generate an AWB number on oBizee?",
      answer:
        "Open any order, tap Create Shipment, enter package dimensions and weight, choose your shipping mode (Surface or Express), and tap Get AWB Number. The AWB is generated instantly and the pickup is scheduled automatically.",
    },
    {
      question: "How much does shipping cost on oBizee?",
      answer:
        "Shipping costs depend on the courier partner, package dimensions, weight, and destination. oBizee shows you real-time pricing from Delhivery and DTDC before you confirm \u2014 for example, Surface delivery from Delhi might cost \u20B937 while Express costs \u20B938. You always see the price before committing.",
    },
    {
      question: "Do I need a separate Delhivery account?",
      answer:
        "You need a Delhivery or DTDC merchant account, which you can set up directly from the oBizee app under Settings \u2192 Shipping Settings. The integration takes just one step.",
    },
    {
      question: "Can my customers track their orders?",
      answer:
        "Yes. Once you create a shipment, your customer automatically gets a live tracking page showing the order status (In Progress, Shipped, Out for Delivery, Delivered), expected delivery date, and all order details.",
    },
    {
      question: "Do I need to use third-party shipping apps like Shiprocket?",
      answer:
        "No. Unlike Shopify or WooCommerce where you need third-party tools like Shiprocket, oBizee has Delhivery and DTDC built directly into the app. No extra apps, no extra fees, no complex setup.",
    },
    {
      question: "What information do I need to create a shipment?",
      answer:
        "You need the pickup address (saved from your settings), package dimensions (length, breadth, height in cm), package weight (minimum 50 grams), and packaging type (Box or Plastic Cover). The customer's delivery address is automatically pulled from their order.",
    },
  ];

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How to Ship Products Online in India \u2014 Delhivery & DTDC Integration Guide [2026]",
    description:
      "Learn how to ship products online in India using oBizee's built-in Delhivery & DTDC integration. Generate AWB numbers, schedule pickups, track shipments \u2014 all from one app. No third-party tools needed.",
    url: "https://www.obizee.com/how-to-ship-products-online-india",
    inLanguage: "en-IN",
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Ship Products Online in India with oBizee",
    description:
      "Step-by-step guide to shipping products in India using oBizee's built-in Delhivery and DTDC integration. Generate AWB numbers, schedule pickups, and provide live tracking to customers.",
    totalTime: "PT5M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "37" },
    tool: [
      { "@type": "HowToTool", name: "oBizee App (Android or iOS)" },
      { "@type": "HowToTool", name: "Delhivery or DTDC merchant account" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Set Up Shipping Integration",
        text: "Go to Settings \u2192 Shipping Settings in the oBizee app. Connect your Delhivery or DTDC account in one tap.",
        url: "https://www.obizee.com/how-to-ship-products-online-india#step-1",
      },
      {
        "@type": "HowToStep",
        name: "Receive an Order",
        text: "When a customer places an order through your oBizee store, it appears on your Orders dashboard with full customer and delivery details.",
        url: "https://www.obizee.com/how-to-ship-products-online-india#step-2",
      },
      {
        "@type": "HowToStep",
        name: "Create a Shipment",
        text: "Open the order, tap Create Shipment. Enter your pickup address, package dimensions (length, breadth, height), and weight.",
        url: "https://www.obizee.com/how-to-ship-products-online-india#step-3",
      },
      {
        "@type": "HowToStep",
        name: "Choose Shipping Mode",
        text: "Select between Surface (standard) and Express delivery. See real-time pricing for each option before confirming.",
        url: "https://www.obizee.com/how-to-ship-products-online-india#step-4",
      },
      {
        "@type": "HowToStep",
        name: "Generate AWB Number",
        text: "Tap Get AWB Number to generate your Air Waybill. The courier pickup is automatically scheduled.",
        url: "https://www.obizee.com/how-to-ship-products-online-india#step-5",
      },
      {
        "@type": "HowToStep",
        name: "Customer Gets Live Tracking",
        text: "Your customer automatically receives live order tracking showing shipment status, expected delivery date, and real-time updates.",
        url: "https://www.obizee.com/how-to-ship-products-online-india#step-6",
      },
    ],
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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.obizee.com/" },
          { name: "How to Ship Products Online in India", url: "https://www.obizee.com/how-to-ship-products-online-india" },
        ]}
      />
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={howToJsonLd} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-white to-orange-50/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">Shipping & Logistics Guide</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
              How to Ship Products Online in India
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Built-in Delhivery & DTDC — No Third-Party Tools Needed
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              oBizee is the only ecommerce platform for Indian sellers with native courier integration. Generate AWB numbers, schedule pickups, and give customers live tracking — all from one app.
            </p>
          </div>
        </section>

        {/* Why oBizee Shipping is Different */}
        <section className="py-10 sm:py-14 bg-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Why oBizee Shipping is Different</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Package className="h-10 w-10 text-orange-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Third-Party Apps</h3>
                <p className="text-gray-600 leading-relaxed">Delhivery & DTDC are built into oBizee. No Shiprocket, no plugins, no extra fees.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <Truck className="h-10 w-10 text-orange-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">One-Tap AWB Generation</h3>
                <p className="text-gray-600 leading-relaxed">Enter dimensions, pick a shipping mode, tap a button. Your AWB is ready and pickup is scheduled.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <MapPin className="h-10 w-10 text-orange-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Customer Tracking</h3>
                <p className="text-gray-600 leading-relaxed">Customers get a tracking page automatically. They see real-time status updates and expected delivery date.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <BarChart3 className="h-10 w-10 text-orange-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600 leading-relaxed">See exact shipping costs from Delhivery and DTDC before you ship. No surprise fees.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1 */}
        <section id="step-1" className="py-10 sm:py-14 bg-white scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-lg font-bold">
                1
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Set Up Shipping Integration</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Open the oBizee app and go to Settings. Tap Shipping Settings to connect your Delhivery or DTDC account. The integration banner also appears right on your dashboard — tap Setup to get started in one step.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-[560px] mx-auto justify-items-center mt-6">
              <img
                src="/how-to/29.jpg"
                alt="oBizee settings menu showing Shipping Settings option"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/17.jpg"
                alt="oBizee dashboard with Delhivery integration setup banner"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section id="step-2" className="py-10 sm:py-14 bg-gray-50 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-lg font-bold">
                2
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Receive a Customer Order</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              When a customer places an order through your store link, it appears in your Orders dashboard. You can see the customer name, phone, order value, items, and delivery dates at a glance. Tap any order to see full details.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-[560px] mx-auto justify-items-center mt-6">
              <img
                src="/how-to/39.jpg"
                alt="oBizee orders dashboard showing new pending orders with details"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/40.jpg"
                alt="oBizee order details showing customer info, delivery timeline, and Create Shipment button"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section id="step-3" className="py-10 sm:py-14 bg-white scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-lg font-bold">
                3
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Create a Shipment</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              In the order details, tap Create Shipment. You'll see a clean form to enter your package details: select your pickup address, enter the package dimensions (length x breadth x height in cm), weight, and packaging type (Box or Plastic Cover).
            </p>
            <div className="flex justify-center mt-6">
              <img
                src="/how-to/41.jpg"
                alt="oBizee Create Shipment screen showing pickup address, package dimensions, weight, and shipping mode options with Delhivery pricing"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section id="step-4" className="py-10 sm:py-14 bg-gray-50 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-lg font-bold">
                4
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Choose Your Shipping Mode</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              oBizee shows you real-time pricing for different shipping options. For example, Surface delivery in Zone D1 might cost ₹36.99 with 1-day delivery, while Express delivery costs ₹38.17. Choose the option that works best for your business and your customer's needs.
            </p>
            <div className="flex justify-center mt-6">
              <img
                src="/how-to/41.jpg"
                alt="Delhivery shipping modes on oBizee showing Surface and Express pricing with delivery times"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4 max-w-lg mx-auto">
              <p className="text-green-800 text-sm font-medium">💡 Pro tip: Surface delivery is usually cheaper by just ₹1-2 and has the same delivery time for nearby zones. Express is better for distant destinations or time-sensitive orders.</p>
            </div>
          </div>
        </section>

        {/* Step 5 */}
        <section id="step-5" className="py-10 sm:py-14 bg-white scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-lg font-bold">
                5
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Generate AWB Number</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Tap 'Get AWB Number' to generate your Air Waybill. The AWB is created instantly through Delhivery or DTDC, and a courier pickup is automatically scheduled at your saved pickup address. You can now prepare the package and hand it over when the courier arrives.
            </p>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 max-w-md mx-auto mt-6 text-center">
              <ClipboardCheck className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">AWB Generated!</h3>
              <p className="text-gray-600 text-sm">Your Air Waybill number is created instantly. Courier pickup is scheduled at your saved address. Just pack and hand over.</p>
            </div>
          </div>
        </section>

        {/* Step 6 */}
        <section id="step-6" className="py-10 sm:py-14 bg-gray-50 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-lg font-bold">
                6
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Customer Gets Live Tracking</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Once the shipment is created, your customer's order tracking page updates automatically. They can see the current status (In Progress → Shipped → Out for Delivery → Delivered), expected delivery date, and full order details — all without calling or messaging you.
            </p>
            <div className="flex justify-center mt-6">
              <img
                src="/how-to/42.jpg"
                alt="Customer live order tracking page on oBizee showing order status and expected delivery date"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">How oBizee Shipping Compares</h2>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm sm:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Feature</th>
                    <th className="px-4 py-3 text-left font-semibold text-orange-600">oBizee</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Shopify / Dukaan / Others</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100 bg-green-50/50"><td className="px-4 py-3 font-medium">Delhivery built-in</td><td className="px-4 py-3 text-green-600 font-semibold">✓ Native</td><td className="px-4 py-3 text-gray-500">Via Shiprocket / third-party</td></tr>
                  <tr className="border-t border-gray-100 bg-green-50/50"><td className="px-4 py-3 font-medium">DTDC built-in</td><td className="px-4 py-3 text-green-600 font-semibold">✓ Native</td><td className="px-4 py-3 text-gray-500">Via Shiprocket / third-party</td></tr>
                  <tr className="border-t border-gray-100 bg-green-50/50"><td className="px-4 py-3 font-medium">AWB generation</td><td className="px-4 py-3 text-green-600 font-semibold">✓ In-app</td><td className="px-4 py-3 text-gray-500">Separate dashboard</td></tr>
                  <tr className="border-t border-gray-100 bg-green-50/50"><td className="px-4 py-3 font-medium">Pickup scheduling</td><td className="px-4 py-3 text-green-600 font-semibold">✓ Automatic</td><td className="px-4 py-3 text-gray-500">Manual / separate app</td></tr>
                  <tr className="border-t border-gray-100 bg-green-50/50"><td className="px-4 py-3 font-medium">Live customer tracking</td><td className="px-4 py-3 text-green-600 font-semibold">✓ Automatic</td><td className="px-4 py-3 text-gray-500">Varies</td></tr>
                  <tr className="border-t border-gray-100 bg-green-50/50"><td className="px-4 py-3 font-medium">Extra shipping app cost</td><td className="px-4 py-3 text-green-600 font-semibold">₹0</td><td className="px-4 py-3 text-gray-500">₹500-2,000/month</td></tr>
                </tbody>
              </table>
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
            <h2 className="text-3xl font-bold text-white mb-5">Start Shipping Smarter</h2>
            <p className="text-lg text-orange-100 mb-8">
              Built-in Delhivery & DTDC. No third-party apps. No extra fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppDownloadTrigger>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl text-lg font-semibold">
                  Download oBizee <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </AppDownloadTrigger>
              <a href="https://wa.me/918796971046?text=Hi%2C%20I%20want%20to%20know%20more%20about%20oBizee%20shipping" target="_blank" rel="noopener noreferrer">
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

export default HowToShipProducts;
