"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import { ArrowRight, Target, Heart, Globe, Shield } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const About = () => {
  const leadershipTeam = [
    {
      name: "Raunak Kumar",
      role: "Founder",
      image: "/CEO.jpg",
      description:
        "An 8+ year operator building oBizee with the belief that small businesses deserve powerful systems, clear direction, and products that truly move them forward.",
    },
    {
      name: "Pushkar Malhotra",
      role: "CMO",
      image: "/CMO.jpeg",
      description:
        "A 7+ year marketing leader focused on building trust, creating momentum, and helping the brand connect with merchants in a way that feels real, ambitious, and lasting.",
    },
  ];

  // JSON-LD structured data for the about page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About oBizee - Our Story and Mission",
    description:
      "Learn about oBizee's mission to empower businesses with innovative technology solutions. Discover our story, values, and commitment to customer success.",
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      url: "https://www.obizee.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.obizee.com/logo.png",
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
    mainEntity: {
      "@type": "Organization",
      name: "oBizee",
      description:
        "oBizee is a comprehensive business management platform that helps businesses streamline operations, manage inventory, handle payments, and grow their customer base.",
      foundingDate: "2023",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gurgaon",
          addressRegion: "Haryana",
          addressCountry: "IN",
        },
      },
      sameAs: ["https://facebook.com/obizee", "https://twitter.com/obizee", "https://linkedin.com/company/obizee"],
    },
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "About", url: "https://www.obizee.com/about" },
      ]} />
      <JsonLd data={jsonLd} />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden" aria-labelledby="about-hero-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="about-hero-heading" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Story
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Empowering businesses with innovative technology solutions since 2023
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white" aria-labelledby="mission-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To empower businesses of all sizes with the tools they need to succeed in the digital age
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
              {/* Value 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">Constantly pushing boundaries to deliver cutting-edge solutions</p>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer First</h3>
                <p className="text-gray-600">Putting our customers' success at the heart of everything we do</p>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Impact</h3>
                <p className="text-gray-600">Making a positive difference in businesses worldwide</p>
              </div>

              {/* Value 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all" role="listitem">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust & Security</h3>
                <p className="text-gray-600">Building trust through transparency and security</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built by people who believe every strong company begins with courage, consistency, and the willingness to start before the
                world understands the vision.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2" role="list">
              {leadershipTeam.map((member) => (
                <div
                  key={member.name}
                  className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                  role="listitem"
                >
                  <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-orange-100 shadow-sm">
                    <img
                      src={member.image}
                      alt={`${member.name} portrait`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mb-4 font-medium text-orange-600">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-8">
              Join Our Journey
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Be part of our mission to transform businesses through technology
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

export default About;
