"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Check, Gem, Globe, Truck, Camera, Smartphone, Package } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const ForJewellerySellers = () => {
  const features = [
    {
      icon: Gem,
      title: "Custom Material & Size Forms",
      description: "Create order forms with material options (gold, silver, artificial), ring sizes, engraving text, and custom measurements using oBizee's dynamic form builder.",
    },
    {
      icon: Globe,
      title: "Your Own Jewellery Website",
      description: "Get an auto-generated website at yourname.obizee.com. Share it on Instagram bio, WhatsApp status, and business cards.",
    },
    {
      icon: Truck,
      title: "Built-in Secure Shipping",
      description: "Ship jewellery securely via Delhivery & DTDC directly from the app. Generate AWB, schedule pickup, provide live tracking.",
    },
    {
      icon: Camera,
      title: "Showcase Product Photos",
      description: "Display high-quality jewellery photos with zoom and multiple angles. Let your craftsmanship shine through stunning visuals.",
    },
    {
      icon: Smartphone,
      title: "Sell on WhatsApp & Instagram",
      description: "Take orders from Instagram DMs and WhatsApp chats. Manage your jewellery business from one dashboard.",
    },
    {
      icon: Package,
      title: "Inventory for Collections",
      description: "Track stock across collections — earrings, necklaces, rings, bracelets. Know what's selling and when to restock.",
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
      title: "Upload Jewellery Photos & Details",
      description: "Add product photos, set prices, specify material, weight, and size options for each piece.",
    },
    {
      number: "3",
      title: "Share Your Store Link",
      description: "Share your jewellery store via WhatsApp, Instagram, and social media to start getting orders.",
    },
    {
      number: "4",
      title: "Ship Securely & Get Paid",
      description: "Process orders, pack jewellery securely, ship via Delhivery/DTDC, and track everything from your dashboard.",
    },
  ];

  const pricingExamples = [
    { item: "₹300 earrings", fee: "₹3 fee" },
    { item: "₹1,500 necklace", fee: "₹10 fee (capped)" },
    { item: "₹25,000 gold set", fee: "₹10 fee (capped)" },
  ];

  const faqs = [
    {
      question: "How do I sell jewellery online in India?",
      answer: "Download oBizee, create your account, add your jewellery products with photos and details, and share your store link. You can sell through your own website, WhatsApp, and Instagram — all managed from one app.",
    },
    {
      question: "Can I add material and size options?",
      answer: "Yes. oBizee's custom form builder supports material options (gold, silver, artificial), ring sizes, engraving text, chain length, and any other product variants your jewellery business needs.",
    },
    {
      question: "How much does it cost?",
      answer: "Setting up is free. After a 3-month trial, you pay 1% per order with a maximum cap of ₹10. Even on a ₹25,000 gold set, you only pay ₹10.",
    },
    {
      question: "Can I ship jewellery safely across India?",
      answer: "Yes. oBizee has built-in Delhivery and DTDC integration. Generate AWB numbers, schedule pickups, and provide live tracking to customers — all from the app. Ship your jewellery securely anywhere in India.",
    },
    {
      question: "Is oBizee good for handmade jewellery sellers?",
      answer: "Perfect for handmade and artisan jewellery sellers. Custom order forms let customers specify personalization options, there are no monthly fees, and Instagram integration helps you convert followers into buyers.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Online Store for Jewellery Business in India — Sell Jewellery Online | oBizee",
    description: "Create your online jewellery store on oBizee. Sell earrings, necklaces, rings on Instagram & WhatsApp. Custom order forms for size/material options. Built-in Delhivery & DTDC. 1% per order, max ₹10.",
    url: "https://www.obizee.com/for/jewellery-sellers",
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
        { name: "Online Store for Jewellery Business", url: "https://www.obizee.com/for/jewellery-sellers" },
      ]} />
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-orange-100 uppercase tracking-wide mb-3">For Jewellery & Accessories Sellers</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5">
              Sell Your Jewellery{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                To Customers Across India
              </span>
            </h1>
            <p className="text-base sm:text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Sell earrings, necklaces, rings, bracelets — handmade, traditional, or fashion jewellery — with your own website, WhatsApp & Instagram integration, and Delhivery/DTDC shipping built in. Set up in 2 minutes.
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

        {/* Why oBizee for Jewellery */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">Everything a Jewellery Seller Needs</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">How to Start Selling Jewellery Online with oBizee</h2>
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

        {/* How oBizee Helps Your Jewellery Business */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">How oBizee Helps Your Jewellery Business</h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="/illustrations/jewellery-showcase.svg" alt="Handmade jewellery displayed on an online store via oBizee app" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Showcase Your Jewellery Beautifully</h3>
                  <p className="text-gray-600 leading-relaxed">Display necklaces, earrings, rings, and bracelets with high-quality photos. Your auto-generated store gives each piece the spotlight it deserves.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <img src="/illustrations/jewellery-order-form.svg" alt="Custom jewellery order form with material, size, and engraving options on oBizee" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Take Custom Orders Effortlessly</h3>
                  <p className="text-gray-600 leading-relaxed">Build order forms with material choices, ring sizes, engraving text, and more. Customers customize their jewellery and place orders in seconds.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="/illustrations/jewellery-delivery.svg" alt="Secure jewellery shipping with live tracking via Delhivery on oBizee" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ship Securely Across India</h3>
                  <p className="text-gray-600 leading-relaxed">Ship delicate jewellery safely with Delhivery or DTDC. Your customers get live tracking and delivery notifications automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Highlight */}
        <section className="py-10 sm:py-14 bg-orange-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Affordable Pricing for Every Jewellery Seller</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                No monthly fees. No yearly subscription. Pay only 1% per order, capped at ₹10 maximum. Sell a ₹25,000 gold set and pay just ₹10 in platform fees.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Start Your Jewellery Store Today</h2>
            <p className="text-orange-100 text-base sm:text-lg mb-8">
              Join thousands of jewellery sellers on oBizee. No fees. Built-in shipping.
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

export default ForJewellerySellers;
