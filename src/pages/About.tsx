import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Users, Target, Award, Heart, Globe, Zap, Shield } from "lucide-react";

const About = () => {
  // JSON-LD structured data for the about page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About StreamFlow - Our Story and Mission",
    description:
      "Learn about StreamFlow's mission to empower businesses with innovative technology solutions. Discover our story, values, and commitment to customer success.",
    publisher: {
      "@type": "Organization",
      name: "Obizee",
      url: "https://obizee.com",
      logo: {
        "@type": "ImageObject",
        url: "https://obizee.com/logo.png",
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
      name: "StreamFlow",
      description:
        "StreamFlow is a comprehensive business management platform that helps businesses streamline operations, manage inventory, handle payments, and grow their customer base.",
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
      sameAs: ["https://facebook.com/streamflow", "https://twitter.com/streamflow", "https://linkedin.com/company/streamflow"],
    },
  };

  return (
    <>
      <Helmet>
        <title>About StreamFlow - Our Story and Mission | Business Management Platform</title>
        <meta
          name="description"
          content="Learn about StreamFlow's mission to empower businesses with innovative technology solutions. Discover our story, values, and commitment to customer success."
        />
        <meta
          name="keywords"
          content="about StreamFlow, business management platform, company mission, business values, customer success, business technology"
        />
        <meta property="og:title" content="About StreamFlow - Our Story and Mission | Business Management Platform" />
        <meta
          property="og:description"
          content="Learn about StreamFlow's mission to empower businesses with innovative technology solutions. Discover our story, values, and commitment to customer success."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://obizee.com/about" />
        <meta property="og:image" content="https://obizee.com/about-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About StreamFlow - Our Story and Mission | Business Management Platform" />
        <meta
          name="twitter:description"
          content="Learn about StreamFlow's mission to empower businesses with innovative technology solutions. Discover our story, values, and commitment to customer success."
        />
        <meta name="twitter:image" content="https://obizee.com/about-twitter.jpg" />
        <link rel="canonical" href="https://obizee.com/about" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet the passionate people behind StreamFlow</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
              {/* Team Member 1 */}
              <div className="text-center" role="listitem">
                <div className="w-32 h-32 rounded-full bg-orange-100 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
                <p className="text-orange-600 mb-4">CEO & Founder</p>
                <p className="text-gray-600">Visionary leader with 15+ years of experience in business technology</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center" role="listitem">
                <div className="w-32 h-32 rounded-full bg-orange-100 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
                <p className="text-orange-600 mb-4">CTO</p>
                <p className="text-gray-600">Tech innovator driving our platform's development</p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center" role="listitem">
                <div className="w-32 h-32 rounded-full bg-orange-100 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-orange-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Johnson</h3>
                <p className="text-orange-600 mb-4">Head of Customer Success</p>
                <p className="text-gray-600">Dedicated to ensuring our customers achieve their goals</p>
              </div>
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
            <Button
              asChild
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/signup" aria-label="Start your free trial now">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
