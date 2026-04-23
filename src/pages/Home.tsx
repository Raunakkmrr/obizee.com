"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import JsonLd from "@/components/JsonLd";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  BarChart,
  Users,
  CreditCard,
  Smartphone,
  Globe,
  FileText,
  Settings,
} from "lucide-react";

const Home = () => {
  // JSON-LD structured data for the home page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "oBizee - Business Management Platform",
    url: "https://www.obizee.com",
    description:
      "oBizee is a comprehensive business management platform that helps businesses streamline operations, manage inventory, handle payments, and grow their customer base.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.obizee.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      url: "https://www.obizee.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.obizee.com/Obizee.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7011571373",
        contactType: "customer service",
        email: "admin@obizee.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
    offers: {
      "@type": "Offer",
      name: "oBizee Single Plan",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      description: "3-month free trial. After trial, 1% per successful order with a maximum cap of ₹10 per order.",
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Streamline Your Business with{" "}
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">oBizee</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                All-in-one platform for inventory management, payments, and customer engagement. Download the app and start your 3-month
                free trial. After trial, pay 1% per successful order with a ₹10 maximum cap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AppDownloadTrigger>
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    aria-label="Download oBizee app"
                  >
                    Download App
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </AppDownloadTrigger>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-xl text-lg font-semibold"
                >
                  <Link href="/solutions" aria-label="View our solutions">
                    View Solutions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Run Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful features to help you manage your business efficiently and grow your customer base
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast Setup</h3>
                <p className="text-gray-600">Get started in minutes with our intuitive interface and pre-built templates</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>
                <p className="text-gray-600">Bank-grade security with 99.9% uptime guarantee for your business operations</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock customer support to help you with any questions</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <BarChart className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
                <p className="text-gray-600">Make data-driven decisions with comprehensive business insights</p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Management</h3>
                <p className="text-gray-600">Build lasting relationships with your customers through personalized engagement</p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <CreditCard className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Processing</h3>
                <p className="text-gray-600">Accept payments seamlessly with multiple payment options</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white" aria-labelledby="how-it-works-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How oBizee Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get started in three simple steps</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
              {/* Step 1 */}
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Download the App</h3>
                <p className="text-gray-600">Install oBizee on iOS or Android and activate your 3-month free trial</p>
              </div>

              {/* Step 2 */}
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Set Up Your Business</h3>
                <p className="text-gray-600">Add your products, services, and business details</p>
              </div>

              {/* Step 3 */}
              <div className="text-center" role="listitem">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Growing</h3>
                <p className="text-gray-600">Begin managing your business with oBizee</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using oBizee to grow their operations
            </p>
            <AppDownloadTrigger>
              <Button
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                aria-label="Download oBizee app"
              >
                Download App
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </AppDownloadTrigger>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
