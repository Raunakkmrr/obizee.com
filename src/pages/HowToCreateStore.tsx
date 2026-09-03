"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const HowToCreateStore = () => {
  const faqs = [
    {
      question: "How long does it take to set up a store on oBizee?",
      answer:
        "You can create your account and add your first product in under 5 minutes. The entire setup — from download to sharing your first order form — takes about 10 minutes.",
    },
    {
      question: "Do I need technical knowledge to create an online store?",
      answer:
        "No. oBizee is designed for non-technical merchants. Everything works through a simple mobile app — no coding, no hosting, no WordPress knowledge required.",
    },
    {
      question: "How much does it cost to create a store on oBizee?",
      answer:
        "Setting up your store is completely free. There are no setup fees and no monthly subscription. Once your store has taken ₹50,000 in orders, you pay 1% per order, capped at \u20B910 maximum.",
    },
    {
      question: "How do customers place orders on my oBizee store?",
      answer:
        "You share an order form link with customers via WhatsApp, Instagram, or any channel. Customers open the link, select products, fill in delivery details, choose a delivery date, and confirm the order.",
    },
    {
      question: "Can I ship orders directly from the oBizee app?",
      answer:
        "Yes. oBizee has built-in integration with Delhivery, DTDC and Blue Dart. You can create shipments, generate AWB numbers, choose shipping modes, and your customers get live order tracking — all from the app.",
    },
  ];

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How to Create Your Online Store on oBizee — Step-by-Step Guide [2026]",
    description:
      "Learn how to set up your online store on oBizee in minutes. Step-by-step guide with screenshots: create account, add products, share order forms, manage shipping with Delhivery, DTDC & Blue Dart.",
    url: "https://www.obizee.com/how-to-create-online-store",
    inLanguage: "en-IN",
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Create Your Online Store on oBizee",
    description:
      "A complete step-by-step guide to setting up your online store on oBizee — from downloading the app to shipping your first order via Delhivery or DTDC.",
    totalTime: "PT10M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "INR", value: "0" },
    tool: [{ "@type": "HowToTool", name: "Smartphone (Android or iOS)" }],
    step: [
      {
        "@type": "HowToStep",
        name: "Download the oBizee App",
        text: "Download oBizee from the App Store or Google Play and open the app.",
        url: "https://www.obizee.com/how-to-create-online-store#step-1",
      },
      {
        "@type": "HowToStep",
        name: "Create Your Business Account",
        text: "Fill in your business information (name, address, state, phone), owner details, and social media links. Review and submit.",
        url: "https://www.obizee.com/how-to-create-online-store#step-2",
      },
      {
        "@type": "HowToStep",
        name: "Set Up Your Dashboard",
        text: "Log in to see your dashboard with order stats, financial overview, and setup prompts for categories and products.",
        url: "https://www.obizee.com/how-to-create-online-store#step-3",
      },
      {
        "@type": "HowToStep",
        name: "Add Product Categories and Products",
        text: "Create categories to organize your products, then add products with images, name, price, and description.",
        url: "https://www.obizee.com/how-to-create-online-store#step-4",
      },
      {
        "@type": "HowToStep",
        name: "Customize Your Store Website",
        text: "Choose a template, edit content and brand colors to match your business identity.",
        url: "https://www.obizee.com/how-to-create-online-store#step-5",
      },
      {
        "@type": "HowToStep",
        name: "Create and Share Order Forms",
        text: "Select products, set delivery amount and total, generate a shareable link or QR code to send to customers.",
        url: "https://www.obizee.com/how-to-create-online-store#step-6",
      },
      {
        "@type": "HowToStep",
        name: "Customer Places Order",
        text: "Customer opens the link, selects quantities, fills in delivery details, chooses delivery date, reviews and confirms the order.",
        url: "https://www.obizee.com/how-to-create-online-store#step-7",
      },
      {
        "@type": "HowToStep",
        name: "Manage Orders and Ship",
        text: "View orders on your dashboard, track order lifecycle, create shipments via Delhivery or DTDC, and generate AWB numbers.",
        url: "https://www.obizee.com/how-to-create-online-store#step-8",
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
          { name: "How to Create Your Online Store", url: "https://www.obizee.com/how-to-create-online-store" },
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
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">Step-by-Step Guide</p>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
              How to Create Your Online Store on oBizee
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                From Download to First Sale in 10 Minutes
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Follow this visual guide to set up your store, add products, take orders, and ship with Delhivery, DTDC & Blue Dart — no coding needed.
            </p>
          </div>
        </section>

        {/* Step 1 */}
        <section id="step-1" className="py-10 sm:py-14 bg-white scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-lg font-bold">
                1
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Download the oBizee App</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Download oBizee from the App Store or Google Play. Open the app and you'll see the welcome screen with an overview of what oBizee offers.
            </p>
            <div className="flex justify-center mt-6">
              <img
                src="/how-to/11.jpg"
                alt="oBizee welcome onboarding screen"
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Create Your Business Account</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Tap 'Create Account' on the login screen. You'll go through a simple 4-step process: enter your business information (name, address, state, phone), add owner details, link your social media profiles, and review everything before submitting.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center mt-6">
              <img
                src="/how-to/12.jpg"
                alt="oBizee login screen with Create Account option"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/13.jpg"
                alt="oBizee business information form"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/15.jpg"
                alt="oBizee owner information form"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/16.jpg"
                alt="oBizee account review screen before creation"
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Set Up Your Dashboard</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              After logging in, you'll see your merchant dashboard with order statistics, revenue tracking, and a guided setup banner. The app also prompts you to set your order preparation time and shows a Delhivery integration option.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-[560px] mx-auto justify-items-center mt-6">
              <img
                src="/how-to/17.jpg"
                alt="oBizee dashboard setup prompt for order preparation time"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/18.jpg"
                alt="oBizee dashboard with business setup progress and categories"
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Add Categories & Products</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Tap 'Add Categories' to organize your products. Give each category a name and description. Once saved, you'll be prompted to add products. For each product, upload images, enter the name, price, and description.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center mt-6">
              <img
                src="/how-to/19.jpg"
                alt="oBizee add category form"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/20.jpg"
                alt="oBizee category created successfully with Add Product option"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/22.jpg"
                alt="oBizee add product form with image, name, price fields"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/24.jpg"
                alt="oBizee product details with name, price, and description"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Customize Your Store Website</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Go to Settings &rarr; Website Settings to customize your auto-generated store. Choose a template, edit your content, and set your brand colors. Your store is live at yourname.obizee.com.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-[840px] mx-auto justify-items-center mt-6">
              <img
                src="/how-to/29.jpg"
                alt="oBizee settings menu with website, shipping, and payment options"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/30.jpg"
                alt="oBizee website settings - template, content, and brand colors"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/31.jpg"
                alt="oBizee store template selection screen"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Create & Share Order Forms</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Tap 'Share Form' on your dashboard. Select the products for the order, set the delivery amount and total order amount, then tap 'Generate Link'. You'll get a shareable link and QR code that you can send to customers via WhatsApp, Instagram, or any channel.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center mt-6">
              <img
                src="/how-to/25.jpg"
                alt="oBizee dashboard with Share Form button"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/32.jpg"
                alt="oBizee product selection for order form"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/33.jpg"
                alt="oBizee generate form link with delivery and total amount"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/34.jpg"
                alt="oBizee order link created with QR code and shareable link"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Step 7 */}
        <section id="step-7" className="py-10 sm:py-14 bg-white scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-lg font-bold">
                7
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Customer Places the Order</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              When a customer opens your order link, they see your store branding and the selected products. They fill in their delivery details (pincode, address, phone), choose a delivery date, and review the full order summary before confirming.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center mt-6">
              <img
                src="/how-to/35.jpg"
                alt="Customer order form showing products and delivery fields on oBizee"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/36.jpg"
                alt="Customer filling delivery address and contact details"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/37.jpg"
                alt="Customer selecting delivery date on oBizee order form"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/38.jpg"
                alt="Order review page with items, delivery charges, and total"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Step 8 */}
        <section id="step-8" className="py-10 sm:py-14 bg-gray-50 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-lg font-bold">
                8
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Manage Orders & Ship</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              New orders appear on your Orders dashboard. Tap any order to see full customer and order details, including a status timeline. If you've integrated Delhivery or DTDC, tap 'Create Shipment' to enter package dimensions, choose a shipping mode, and generate an AWB number. Your customer gets live tracking automatically.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center mt-6">
              <img
                src="/how-to/39.jpg"
                alt="oBizee merchant orders dashboard showing new and pending orders"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/40.jpg"
                alt="oBizee order details with customer info and shipment timeline"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/41.jpg"
                alt="oBizee create shipment screen with Delhivery integration"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
              <img
                src="/how-to/42.jpg"
                alt="Customer live order tracking page showing order status"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-10 sm:py-14 bg-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Quick Actions — Manage Your Entire Business</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Beyond orders, oBizee gives you quick access to manage your entire business — product management, vendor & supply chain, and finance & operations — all from one screen.
            </p>
            <div className="flex justify-center mt-6">
              <img
                src="/how-to/27.jpg"
                alt="oBizee quick actions menu for product, vendor, and finance management"
                className="rounded-2xl shadow-lg border border-gray-200 max-w-[260px] w-full"
                loading="lazy"
              />
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
            <h2 className="text-3xl font-bold text-white mb-5">Ready to Create Your Store?</h2>
            <p className="text-lg text-orange-100 mb-8">
              Download oBizee and set up your online store in minutes. No coding. No monthly fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppDownloadTrigger>
                <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl text-lg font-semibold">
                  Download oBizee <ArrowRight className="ml-2 h-5 w-5" />
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

export default HowToCreateStore;
