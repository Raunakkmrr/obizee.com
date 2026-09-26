"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Check, UtensilsCrossed, Globe, ClipboardList, Smartphone, Truck, BarChart3 } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const ForFoodBusiness = () => {
  const features = [
    {
      icon: UtensilsCrossed,
      title: "Custom Menu & Order Forms",
      description: "Create menus with flavors, portion sizes, dietary preferences, and special instructions using oBizee's dynamic form builder.",
    },
    {
      icon: Globe,
      title: "Your Own Food Store Website",
      description: "Get an auto-generated website at yourname.obizee.com. Share it on Instagram bio, WhatsApp status, and business cards.",
    },
    {
      icon: ClipboardList,
      title: "Order Management Dashboard",
      description: "Track orders from pending to preparing to ready to delivered. Never miss an order with real-time status updates.",
    },
    {
      icon: Smartphone,
      title: "WhatsApp Ordering for Home Kitchens",
      description: "Take orders directly from WhatsApp chats. Perfect for home bakers, tiffin services, and cloud kitchens.",
    },
    {
      icon: Truck,
      title: "Delivery Tracking",
      description: "Manage deliveries for perishable items with time-sensitive tracking. Keep customers informed about their food orders.",
    },
    {
      icon: BarChart3,
      title: "Revenue & Expense Tracking",
      description: "Track ingredient costs, revenue, and profits. Know exactly how your food business is performing with built-in analytics.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Download oBizee & Create Your Account",
      description: "Sign up in 2 minutes with your business details. No coding needed.",
    },
    {
      number: "2",
      title: "Create Menu Categories",
      description: "Set up categories like Cakes, Tiffin, Snacks, Pickles. Add items with customization options, photos, and prices.",
    },
    {
      number: "3",
      title: "Share Your Ordering Link",
      description: "Share your food store link or menu via WhatsApp, Instagram, and social media to start receiving orders.",
    },
    {
      number: "4",
      title: "Manage Prep & Delivery",
      description: "Track orders from preparation to delivery. Manage your kitchen workflow from one dashboard.",
    },
  ];

  const pricingExamples = [
    { item: "₹150 tiffin order", fee: "₹1.50 fee" },
    { item: "₹800 cake", fee: "₹8 fee" },
    { item: "₹2,000 catering order", fee: "₹10 fee (capped)" },
  ];

  const faqs = [
    {
      question: "How do I start an online food business in India?",
      answer: "Download oBizee, create your account, set up your menu with categories and items, and share your ordering link via WhatsApp and Instagram. You can start taking orders from your own website within minutes.",
    },
    {
      question: "Can I take custom orders for cakes and food?",
      answer: "Yes. oBizee's custom form builder lets you add flavor options, cake sizes, dietary requirements, delivery time slots, and any other customization your food business needs.",
    },
    {
      question: "How much does it cost to sell food online?",
      answer: "Setting up is free. Once your store has taken ₹50,000 in orders, you pay 1% per order with a maximum cap of ₹10. Even on a ₹2,000 catering order, you only pay ₹10.",
    },
    {
      question: "Can I manage tiffin service subscriptions?",
      answer: "Yes. The order management dashboard tracks all orders with status tracking — pending, preparing, ready, and delivered. Perfect for managing daily tiffin orders and recurring customers.",
    },
    {
      question: "Do I need a food delivery app like Swiggy or Zomato?",
      answer: "oBizee gives you your own store without the 25-30% commission that Swiggy and Zomato charge. Keep more of your profits with just 1% per order, capped at ₹10. Build your own customer base instead of competing on a marketplace.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Online Ordering for Home Food Business in India — Sell Food Online | oBizee",
    description: "Start your online food business with oBizee. Take orders for homemade cakes, tiffin services, bakery items, and snacks via WhatsApp & your own website. Custom menus, order management, delivery tracking. 1% per order, max ₹10.",
    url: "https://www.obizee.com/for/food-business",
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
        { name: "Online Ordering for Food Business", url: "https://www.obizee.com/for/food-business" },
      ]} />
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-orange-100 uppercase tracking-wide mb-3">For Food & Home Kitchen Businesses</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5">
              Take Your Food Business{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                Online in Minutes
              </span>
            </h1>
            <p className="text-base sm:text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Sell homemade cakes, tiffin services, bakery items, snacks, and pickles — with your own website, WhatsApp ordering, custom menus, and order management. Set up in 2 minutes.
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

        {/* Why oBizee for Food */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">Everything a Food Seller Needs</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">How to Start Selling Food Online with oBizee</h2>
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

        {/* How oBizee Helps Your Food Business */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">How oBizee Helps Your Food Business</h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="/illustrations/food-menu-online.svg" alt="Home kitchen food menu going online with cakes, tiffin, and snacks on oBizee" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Put Your Menu Online</h3>
                  <p className="text-gray-600 leading-relaxed">List your cakes, tiffin plans, snacks, and homemade specialties with photos and prices. Customers browse your menu and order directly.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <img src="/illustrations/food-whatsapp-orders.svg" alt="Customers ordering food via WhatsApp through oBizee order forms" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Take Orders via WhatsApp</h3>
                  <p className="text-gray-600 leading-relaxed">Share your order form link on WhatsApp. Customers select items, customize their order, and you get everything organized in your dashboard.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="/illustrations/food-delivery-tracking.svg" alt="Food order preparation and delivery tracking from kitchen to customer" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Track Orders from Kitchen to Customer</h3>
                  <p className="text-gray-600 leading-relaxed">Manage the full order lifecycle — received, preparing, out for delivery, delivered. Customers see real-time status updates on their tracking page.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Highlight */}
        <section className="py-10 sm:py-14 bg-orange-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Affordable Pricing for Every Food Seller</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                No monthly fees. No yearly subscription. Pay only 1% per order, capped at ₹10 maximum. Sell a ₹2,000 catering order and pay just ₹10 in platform fees.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Start Taking Food Orders Today</h2>
            <p className="text-orange-100 text-base sm:text-lg mb-8">
              Join thousands of food sellers on oBizee. No fees. Built-in order management.
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

export default ForFoodBusiness;
