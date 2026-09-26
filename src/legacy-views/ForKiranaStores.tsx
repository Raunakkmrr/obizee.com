"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Check, ShoppingCart, Smartphone, Package, ClipboardList, Globe, Store } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const ForKiranaStores = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Easy Product Catalog",
      description: "Add your groceries by category — atta, dal, rice, oils, snacks. Simple catalog setup that takes minutes, not hours.",
    },
    {
      icon: Smartphone,
      title: "WhatsApp Ordering",
      description: "Your regular customers can order directly via WhatsApp. Share your store link and they order from their phone.",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock in real-time. Know when items are running low and need restocking. Never disappoint a customer with out-of-stock items.",
    },
    {
      icon: ClipboardList,
      title: "Order Tracking",
      description: "Manage orders from pending to packed to delivered. Keep track of every order with status updates for you and your customers.",
    },
    {
      icon: Globe,
      title: "Your Own Shop Website",
      description: "Get an auto-generated website at yourname.obizee.com. Share it with customers in your neighbourhood.",
    },
    {
      icon: Store,
      title: "Simple Mobile App",
      description: "Manage your entire shop from your phone. No computer needed. If you can use WhatsApp, you can use oBizee.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Download oBizee & Create Your Account",
      description: "Sign up in 2 minutes with your shop details. No coding or technical knowledge needed.",
    },
    {
      number: "2",
      title: "Add Product Categories & Items",
      description: "Set up categories like Groceries, Dairy, Snacks, Beverages. List products with prices and stock quantities.",
    },
    {
      number: "3",
      title: "Share Shop Link with Customers",
      description: "Share your store link with nearby customers on WhatsApp. They can browse and order from their phone.",
    },
    {
      number: "4",
      title: "Manage Orders & Deliveries",
      description: "Receive orders, pack items, and manage deliveries. Track everything from your mobile dashboard.",
    },
  ];

  const pricingExamples = [
    { item: "₹200 grocery order", fee: "₹2 fee" },
    { item: "₹500 weekly essentials", fee: "₹5 fee" },
    { item: "₹1,500 monthly supplies", fee: "₹10 fee (capped)" },
  ];

  const faqs = [
    {
      question: "How can I take my kirana store online?",
      answer: "Download oBizee, add your products with prices, and share your store link with regular customers on WhatsApp. They can browse your catalog and place orders from their phone. You manage everything from the oBizee app.",
    },
    {
      question: "Do I need a computer or technical knowledge?",
      answer: "No, everything works from the oBizee mobile app. If you can use WhatsApp, you can use oBizee. The entire setup takes just a few minutes from your phone.",
    },
    {
      question: "How much does it cost?",
      answer: "Setting up is free. Once your store has taken ₹50,000 in orders, you pay 1% per order with a maximum cap of ₹10. Much cheaper than building your own app or website.",
    },
    {
      question: "Can my regular customers order on WhatsApp?",
      answer: "Yes. Share your store link or order forms directly on WhatsApp. Customers order from their phone, you manage from yours. It's that simple.",
    },
    {
      question: "Is this better than listing on BigBasket or JioMart?",
      answer: "oBizee gives you your own store. No marketplace commission — BigBasket takes 20-30%. You keep your customers and your relationship with them. Pay just 1% per order, capped at ₹10.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kirana Store Online Delivery Platform — Take Your Shop Online | oBizee",
    description: "Take your kirana store online with oBizee. Accept orders via WhatsApp, manage inventory, track deliveries. Auto-generated website for your shop. No technical knowledge needed. 1% per order, max ₹10.",
    url: "https://www.obizee.com/for/kirana-stores",
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

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Kirana Store Online Platform", url: "https://www.obizee.com/for/kirana-stores" },
      ]} />
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-orange-100 uppercase tracking-wide mb-3">For Kirana & Local Shops</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5">
              Take Your Kirana Store{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                Online — Serve More Customers
              </span>
            </h1>
            <p className="text-base sm:text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Your neighbourhood grocery store deserves an online presence. Accept orders via WhatsApp, manage inventory, track daily essentials deliveries — all from your phone. Set up in 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AppDownloadTrigger>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl text-lg font-semibold">
                  Start Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </AppDownloadTrigger>
            </div>
          </div>
        </section>

        {/* Why oBizee for Kirana */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">Everything a Kirana Store Needs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-10 sm:py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">How to Take Your Kirana Store Online with oBizee</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How oBizee Helps Your Kirana Store */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">How oBizee Helps Your Kirana Store</h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="/illustrations/kirana-shop-online.svg" alt="Traditional kirana shop going digital with an online store on oBizee" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Take Your Shop Online</h3>
                  <p className="text-gray-600 leading-relaxed">List your groceries, dairy, snacks, and daily essentials online. Customers browse your catalog and place orders from their phone — no more phone-call confusion.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <img src="/illustrations/kirana-whatsapp-order.svg" alt="Neighborhood customer ordering groceries from kirana store via WhatsApp" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Accept WhatsApp Orders</h3>
                  <p className="text-gray-600 leading-relaxed">Share your store link with regular customers on WhatsApp. They order from home, you manage everything from your phone. Perfect for neighborhood delivery.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="/illustrations/kirana-inventory.svg" alt="Kirana store inventory management with stock alerts on oBizee app" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Track Your Inventory</h3>
                  <p className="text-gray-600 leading-relaxed">Know exactly what's in stock and what's running low. Get alerts before items run out so you never miss a sale or disappoint a customer.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Highlight */}
        <section className="py-10 sm:py-14 bg-orange-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Affordable Pricing for Every Kirana Store</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                No monthly fees. No yearly subscription. Pay only 1% per order, capped at ₹10 maximum. A ₹1,500 monthly supplies order costs you just ₹10 in platform fees.
              </p>
              <div className="bg-orange-50 rounded-xl p-4">
                <table className="w-full text-sm sm:text-base">
                  <tbody>
                    {pricingExamples.map((row, i) => (
                      <tr key={row.item} className={i < pricingExamples.length - 1 ? "border-b border-orange-200" : ""}>
                        <td className="py-3 text-left font-medium text-gray-900">{row.item}</td>
                        <td className="py-3 text-right">
                          <ArrowRight className="inline h-4 w-4 text-orange-400 mr-2" />
                          <span className="font-semibold text-orange-600">{row.fee}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Take Your Shop Online Today</h2>
            <p className="text-orange-100 text-base sm:text-lg mb-8">
              Join thousands of kirana store owners on oBizee. No fees. No technical knowledge needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AppDownloadTrigger>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl text-lg font-semibold">
                  Start Free <ArrowRight className="ml-2 h-5 w-5" />
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

export default ForKiranaStores;
