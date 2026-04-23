"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const Contact = () => {
  // JSON-LD structured data for the contact page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact oBizee - Get in Touch",
    description:
      "Get in touch with oBizee's support team. We're here to help you with any questions about our business management platform.",
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      url: "https://www.obizee.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.obizee.com/logo.png",
      },
    },
    mainEntity: {
      "@type": "Organization",
      name: "oBizee",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7011571373",
          contactType: "customer service",
          email: "admin@obizee.com",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
          hoursAvailable: "Mo-Su 09:00-18:00",
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-7011571373",
          contactType: "technical support",
          email: "support@obizee.com",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
          hoursAvailable: "Mo-Su 09:00-18:00",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gurgaon",
        addressLocality: "Gurgaon",
        addressRegion: "Haryana",
        postalCode: "122001",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Contact", url: "https://www.obizee.com/contact" },
      ]} />
      <JsonLd data={jsonLd} />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden" aria-labelledby="contact-hero-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="contact-hero-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">We're here to help you with any questions about our platform</p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-white" aria-labelledby="contact-info-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="contact-info-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the best way to reach us</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
              {/* Email */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  <a href="mailto:admin@obizee.com" className="text-orange-600 hover:text-orange-500">
                    admin@obizee.com
                  </a>
                </p>
                <p className="text-gray-600">For general inquiries and support</p>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  <a href="tel:+917011571373" className="text-orange-600 hover:text-orange-500">
                    +91-7011571373
                  </a>
                </p>
                <p className="text-gray-600">Available Monday to Friday, 9 AM to 6 PM IST</p>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-4">Gurgaon, Haryana, India</p>
                <p className="text-gray-600">By appointment only</p>
              </div>

              {/* Support Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Hours</h3>
                <p className="text-gray-600 mb-4">Monday to Friday</p>
                <p className="text-gray-600">9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white" aria-labelledby="contact-form-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="contact-form-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            <form className="space-y-6" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  aria-label="Full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email"
                  aria-label="Email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter message subject"
                  aria-label="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your message"
                  aria-label="Message content"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                aria-label="Send message"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
