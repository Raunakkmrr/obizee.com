"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Check, Paintbrush, Globe, Truck, Smartphone, Package, BadgePercent } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const ForHandicrafts = () => {
  const features = [
    {
      icon: Paintbrush,
      title: "Custom Order Forms",
      description: "Create forms for personalization, engraving, custom sizes, color choices, and special requests using oBizee's dynamic form builder.",
    },
    {
      icon: Globe,
      title: "Beautiful Product Showcase",
      description: "Get an auto-generated website at yourname.obizee.com. Showcase your handmade creations with stunning product photos.",
    },
    {
      icon: Truck,
      title: "Built-in Delhivery, DTDC, Blue Dart & Hyperlocal Shipping",
      description: "Ship fragile handicraft items safely via Delhivery, DTDC & Blue Dart. Generate AWB, schedule pickup, provide live tracking to customers.",
    },
    {
      icon: Smartphone,
      title: "Instagram & WhatsApp Selling",
      description: "Convert Instagram followers and WhatsApp contacts into buyers. Share your store link and take orders from anywhere.",
    },
    {
      icon: Package,
      title: "Inventory for One-of-a-Kind Items",
      description: "Track unique and limited-edition handmade items. Mark pieces as sold, manage stock for batch-produced crafts.",
    },
    {
      icon: BadgePercent,
      title: "Transparent Pricing",
      description: "Just 1% per order, capped at ₹10. No monthly fees, no hidden charges. Keep more of your artisan margins.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Photograph Your Creations",
      description: "Take beautiful photos of your handicrafts. Sign up on oBizee in 2 minutes — no coding needed.",
    },
    {
      number: "2",
      title: "Add Products with Details",
      description: "Upload photos, add materials, dimensions, customization options, and prices for each handmade item.",
    },
    {
      number: "3",
      title: "Share on Instagram & Craft Fairs",
      description: "Share your store link on Instagram bio, WhatsApp status, craft fairs, and social media to reach buyers.",
    },
    {
      number: "4",
      title: "Ship via Delhivery, DTDC & Blue Dart",
      description: "Pack your crafts securely, ship via built-in Delhivery, DTDC, Blue Dart & hyperlocal, and track deliveries from your dashboard.",
    },
  ];

  const pricingExamples = [
    { item: "₹250 crochet earrings", fee: "₹2.50 fee" },
    { item: "₹1,200 handmade bag", fee: "₹10 fee (capped)" },
    { item: "₹8,000 pottery set", fee: "₹10 fee (capped)" },
  ];

  const faqs = [
    {
      question: "How do I sell handmade products online in India?",
      answer: "Download oBizee, photograph your crafts, add them to your store with details and prices, and share your store link on Instagram and WhatsApp. You get your own website and can start selling within minutes.",
    },
    {
      question: "Can I take custom orders for personalized items?",
      answer: "Yes. oBizee's custom form builder supports personalization options, custom messages, size and color preferences, engraving text, and any other customization your handmade products need.",
    },
    {
      question: "How much does it cost to sell handicrafts on oBizee?",
      answer: "Setting up is free. After a 3-month trial, you pay 1% per order with a maximum cap of ₹10. Perfect for artisans who need to protect their margins. Even on an ₹8,000 pottery set, you pay just ₹10.",
    },
    {
      question: "Can I ship fragile handicraft items?",
      answer: "Yes. Delhivery, DTDC and Blue Dart are built into oBizee. Specify package dimensions and weight for accurate shipping quotes. Customers get live tracking for their orders.",
    },
    {
      question: "Is oBizee better than Etsy for Indian artisans?",
      answer: "For Indian artisans selling domestically, yes. oBizee has lower fees (1% max ₹10 vs Etsy's 6.5%), built-in Indian shipping via Delhivery, DTDC & Blue Dart, and no listing fees. Etsy is better only if you're selling internationally.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sell Handicrafts Online in India — Online Store for Artisans | oBizee",
    description: "Create your online handicraft store on oBizee. Sell handmade products, crochet, pottery, paintings on Instagram & WhatsApp. Custom order forms, built-in Delhivery, DTDC, Blue Dart & hyperlocal shipping. 1% per order, max ₹10.",
    url: "https://www.obizee.com/for/handicrafts",
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
        { name: "Sell Handicrafts Online", url: "https://www.obizee.com/for/handicrafts" },
      ]} />
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-500 to-orange-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-orange-100 uppercase tracking-wide mb-3">For Artisans & Handicraft Sellers</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5">
              Your Handmade Creations{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                Deserve a Global Audience
              </span>
            </h1>
            <p className="text-base sm:text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Sell crochet, pottery, paintings, handloom, woodwork, and more — with your own website, Instagram & WhatsApp integration, and Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping built in. Set up in 2 minutes.
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

        {/* Why oBizee for Handicrafts */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">Everything a Handicraft Seller Needs</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">How to Start Selling Handicrafts Online with oBizee</h2>
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

        {/* How oBizee Helps Your Handicraft Business */}
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">How oBizee Helps Your Handicraft Business</h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="/illustrations/handicraft-artisan.svg" alt="Artisan handmade creations displayed in an online store on oBizee" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Showcase Your Creations Online</h3>
                  <p className="text-gray-600 leading-relaxed">From crochet to pottery to handloom — photograph your handmade products and list them with prices, materials, and customization options on your own store.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <img src="/illustrations/handicraft-instagram.svg" alt="Selling handmade products through Instagram and oBizee website" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">From Instagram Post to Paid Order</h3>
                  <p className="text-gray-600 leading-relaxed">Post your creations on Instagram, link to your oBizee store, and turn followers into paying customers. No more managing orders in DMs.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img src="/illustrations/handicraft-nationwide.svg" alt="Shipping handmade products across India from home studio via Delhivery" className="w-full md:w-1/2 max-w-[480px]" loading="lazy" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ship Your Art Across India</h3>
                  <p className="text-gray-600 leading-relaxed">Ship fragile handmade items safely with Delhivery or DTDC. Specify dimensions, choose shipping modes, and your customers get live tracking from workshop to doorstep.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Highlight */}
        <section className="py-10 sm:py-14 bg-orange-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border-2 border-orange-200 p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Affordable Pricing for Every Artisan</h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                No monthly fees. No yearly subscription. Pay only 1% per order, capped at ₹10 maximum. Sell an ₹8,000 pottery set and pay just ₹10 in platform fees.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Start Selling Your Creations Today</h2>
            <p className="text-orange-100 text-base sm:text-lg mb-8">
              Join thousands of artisans on oBizee. No fees. Built-in shipping.
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

export default ForHandicrafts;
