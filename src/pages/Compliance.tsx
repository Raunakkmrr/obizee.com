"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, FileCheck2, Landmark, ShieldCheck, Workflow } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const Compliance = () => {
  const paymentFlow = [
    "Customer selects products/services and proceeds to checkout in oBizee.",
    "oBizee creates a payment order and redirects to Zaakpay hosted payment page.",
    "Customer completes payment on Zaakpay using UPI/cards/net banking/wallets.",
    "Zaakpay sends payment status callback to oBizee webhook endpoint.",
    "oBizee verifies transaction signature/reference and updates order status.",
    "Merchant dashboard shows paid/pending/failed status and settlement tracking.",
    "Customer receives final payment and order confirmation update.",
  ];

  const pciChecklist = [
    "Hosted checkout model (payment card data entry happens on Zaakpay pages).",
    "oBizee does not store raw card numbers, CVV, or card PIN in application databases.",
    "TLS encryption is used for browser and API communication.",
    "Access to payment-related admin tools is role-based and authenticated.",
    "Payment events are logged with reference IDs for audit and reconciliation.",
    "Webhook validation is applied before marking any transaction as successful.",
    "Incident response and support contact are available through compliance channels.",
  ];

  const businessModelPoints = [
    "oBizee is a SaaS platform for small and early-stage Indian businesses.",
    "Merchants use oBizee to manage catalog, form-based order capture, logistics flow, and financial tracking.",
    "Revenue model is subscription and/or platform service fee based, as published on pricing pages.",
    "oBizee is a software facilitator and does not operate as a lending or escrow institution.",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "oBizee",
    legalName: "SRN TECHNO (Proprietor: Raunak Kumar)",
    url: "https://www.obizee.com/compliance",
    address: {
      "@type": "PostalAddress",
      streetAddress: "G-11, Hemkunt Chamber, Nehru Place",
      addressLocality: "New Delhi",
      postalCode: "110019",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "legal and compliance",
      email: "admin@obizee.com",
    },
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Compliance", url: "https://www.obizee.com/compliance" },
      ]} />
      <JsonLd data={jsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />
        <main role="main" id="main-content">
          <section className="py-14 sm:py-20 bg-gradient-to-br from-orange-50 to-white" aria-labelledby="compliance-heading">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-10 sm:mb-12">
                <h1 id="compliance-heading" className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                  Merchant Compliance and Payment Information
                </h1>
                <p className="text-base sm:text-xl text-gray-600">
                  Information prepared for payment gateway onboarding and compliance review.
                </p>
              </header>

              <div className="space-y-6 sm:space-y-8">
                <article className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 flex items-center">
                    <Landmark className="w-7 h-7 text-orange-600 mr-3" aria-hidden="true" />
                    Merchant Legal Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-sm text-gray-500 mb-1">Legal Entity Name</p>
                      <p className="font-semibold">Raunak Kumar (Proprietor)</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-sm text-gray-500 mb-1">Trade Name</p>
                      <p className="font-semibold">SRN TECHNO</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-sm text-gray-500 mb-1">GSTIN / Registration Number</p>
                      <p className="font-semibold">07ABSPK5301D1ZA</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-sm text-gray-500 mb-1">Registered Office Address</p>
                      <p className="font-semibold">G-11, Hemkunt Chamber, Nehru Place, New Delhi, Delhi 110019, India</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-sm text-gray-500 mb-1">Compliance Contact Email</p>
                      <a href="mailto:admin@obizee.com" className="font-semibold text-orange-600 underline">
                        admin@obizee.com
                      </a>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-sm text-gray-500 mb-1">Compliance Contact Phone</p>
                      <a href="tel:+918796971046" className="font-semibold text-orange-600 underline">
                        +91 87969 71046
                      </a>
                    </div>
                  </div>
                </article>

                <article className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 flex items-center">
                    <FileCheck2 className="w-7 h-7 text-orange-600 mr-3" aria-hidden="true" />
                    Registration Certificate
                  </h2>
                  <p className="text-gray-700 mb-4">
                    GST Registration Certificate (Form GST REG-06) is available for payment gateway verification.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <a
                      href="/compliance/gst-certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-orange-600 text-white font-semibold px-5 py-2.5 hover:bg-orange-700 transition-colors"
                    >
                      View GST Registration Certificate
                    </a>
                    <a
                      href="/compliance/gst-certificate.pdf"
                      download
                      className="inline-flex items-center rounded-full border border-orange-200 text-orange-700 font-semibold px-5 py-2.5 hover:bg-orange-50 transition-colors"
                    >
                      Download PDF
                    </a>
                  </div>
                  <p className="text-gray-700">
                    For any additional verification document requests, contact{" "}
                    <a href="mailto:admin@obizee.com" className="text-orange-600 underline font-semibold">
                      admin@obizee.com
                    </a>
                    .
                  </p>
                </article>

                <article className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 flex items-center">
                    <Workflow className="w-7 h-7 text-orange-600 mr-3" aria-hidden="true" />
                    Payment Flow Explanation
                  </h2>
                  <ol className="space-y-3" role="list" aria-label="Payment process steps">
                    {paymentFlow.map((step) => (
                      <li key={step} className="flex items-start text-gray-700" role="listitem">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </article>

                <article className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 flex items-center">
                    <ShieldCheck className="w-7 h-7 text-orange-600 mr-3" aria-hidden="true" />
                    PCI DSS Checklist (Platform Scope Summary)
                  </h2>
                  <ul className="space-y-3" role="list" aria-label="PCI DSS checklist">
                    {pciChecklist.map((item) => (
                      <li key={item} className="flex items-start text-gray-700" role="listitem">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Merchant Business Model</h2>
                  <ul className="space-y-3" role="list" aria-label="Business model points">
                    {businessModelPoints.map((point) => (
                      <li key={point} className="flex items-start text-gray-700" role="listitem">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Compliance;
