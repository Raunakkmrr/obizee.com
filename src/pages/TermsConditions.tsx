"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const TermsConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using oBizee's business management platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.",
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 18 years old and have the legal authority to enter into these terms. If you are using our services on behalf of a business, you represent that you have the authority to bind that entity to these terms.",
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. We will notify you of material changes via email or through our platform. Continued use of our services after such modifications constitutes acceptance of the updated terms.",
        },
      ],
    },
    {
      title: "User Accounts",
      icon: Shield,
      content: [
        {
          subtitle: "Account Creation",
          text: "To use our services, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.",
        },
        {
          subtitle: "Account Responsibilities",
          text: "You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any security breach.",
        },
        {
          subtitle: "Account Termination",
          text: "We may suspend or terminate your account if you violate these terms or engage in any activities that may harm our platform or other users.",
        },
      ],
    },
    {
      title: "Services Provided",
      icon: Scale,
      content: [
        {
          subtitle: "Platform Features",
          text: "oBizee provides a comprehensive business management platform including templates, inventory management, invoicing, analytics, and related tools to help businesses streamline their operations.",
        },
        {
          subtitle: "Service Availability",
          text: "We strive to provide uninterrupted access to our services but cannot guarantee 100% uptime. We may perform maintenance, updates, or modifications that may temporarily affect service availability.",
        },
        {
          subtitle: "Service Modifications",
          text: "We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice to users.",
        },
      ],
    },
    {
      title: "Intellectual Property Rights",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Our Intellectual Property",
          text: "All content, features, and functionality of our platform, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by oBizee or our licensors and are protected by copyright and other intellectual property laws.",
        },
        {
          subtitle: "User Content",
          text: "You retain ownership of any content you upload or create using our platform. By using our services, you grant us a non-exclusive, royalty-free license to use, store, and process your content solely for the purpose of providing our services.",
        },
        {
          subtitle: "Restrictions",
          text: "You may not copy, modify, distribute, sell, or lease any part of our services or included software, nor may you reverse engineer or attempt to extract the source code of our software.",
        },
      ],
    },
  ];

  const additionalSections = [
    {
      title: "User Conduct",
      items: [
        "Use our services only for lawful purposes and in accordance with these terms",
        "Not engage in any activity that interferes with or disrupts our services",
        "Not attempt to gain unauthorized access to our systems or other users' accounts",
        "Not use our services to transmit harmful, offensive, or illegal content",
        "Comply with all applicable laws and regulations",
      ],
    },
    {
      title: "Payment Terms",
      items: [
        "Fees are charged as outlined in our pricing page (1% per order, max ₹10)",
        "All fees are non-refundable except as required by law",
        "You are responsible for all applicable taxes",
        "We may change our fees with 30 days' notice",
        "Failure to pay fees may result in service suspension",
      ],
    },
    {
      title: "Disclaimers and Limitation of Liability",
      items: [
        'Our services are provided "as is" without warranties of any kind',
        "We do not guarantee that our services will meet your specific requirements",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount you paid us in the 12 months preceding the claim",
        "Some jurisdictions do not allow certain limitations, so these may not apply to you",
      ],
    },
  ];

  // JSON-LD structured data for terms and conditions
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions | oBizee",
    description:
      "Legal agreement between you and oBizee. Read our terms and conditions to understand your rights and responsibilities when using our business management platform.",
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      url: "https://www.obizee.com",
    },
    mainEntity: {
      "@type": "Article",
      name: "Terms and Conditions",
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      author: {
        "@type": "Organization",
        name: "oBizee",
      },
      publisher: {
        "@type": "Organization",
        name: "oBizee",
        url: "https://www.obizee.com",
      },
    },
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Terms & Conditions", url: "https://www.obizee.com/terms-conditions" },
      ]} />
      <JsonLd data={jsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-white" aria-labelledby="terms-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-8"
              aria-hidden="true"
            >
              <Scale className="h-8 w-8 text-white" aria-hidden="true" />
            </div>
            <h1 id="terms-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 mb-4">Legal agreement between you and oBizee</p>
            <p className="text-gray-500">
              Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16" aria-labelledby="terms-content">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introduction */}
            <div className="bg-orange-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to oBizee</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions ("Terms") govern your use of oBizee's business management platform and services. Please read
                these Terms carefully before using our services. These Terms constitute a legally binding agreement between you and
                SRN TECHNO, a sole proprietorship of Raunak Kumar, which operates oBizee.
              </p>
            </div>

            {/* Main Sections */}
            <div className="space-y-12" role="list" aria-label="Terms and conditions sections">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0" role="listitem">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mr-4"
                      aria-hidden="true"
                    >
                      <section.icon className="h-6 w-6 text-orange-600" aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  <div className="space-y-6" role="list" aria-label={`${section.title} details`}>
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} role="listitem">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.subtitle}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="space-y-12 mt-16" role="list" aria-label="Additional terms information">
              {additionalSections.map((section, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8" role="listitem">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                  <ul className="space-y-3" role="list" aria-label={`${section.title} items`}>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start" role="listitem">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" aria-hidden="true"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Additional Legal Sections */}
            <div className="space-y-8 mt-16" role="list" aria-label="Legal information">
              <div className="bg-gray-50 rounded-2xl p-8" role="listitem">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless oBizee, its officers, directors, employees, and agents from and
                  against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of our
                  services or violation of these Terms.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8" role="listitem">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate this agreement at any time. Upon termination, your right to use our services will cease
                  immediately. We may, in our sole discretion, suspend or terminate your access to our services for any reason, including
                  breach of these Terms.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8" role="listitem">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of our services will be
                  resolved through binding arbitration in New Delhi, in accordance with the Arbitration and Conciliation Act, 1996.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 mt-12 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-orange-100 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <address className="space-y-2 text-orange-100 not-italic">
                <p>
                  Email:{" "}
                  <a href="mailto:admin@obizee.com" className="underline hover:text-white">
                    admin@obizee.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+918796971046" className="underline hover:text-white">
                    +91 87969 71046
                  </a>
                </p>
                <p>Address: SRN TECHNO, G-11, Hemkunt Chamber, Nehru Place, New Delhi, Delhi 110019, India</p>
              </address>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsConditions;
