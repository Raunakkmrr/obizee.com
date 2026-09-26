"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import BrandDirectory from "@/components/BrandDirectory";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { verifiedBrands } from "@/data/verifiedBrands";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const CustomerTestimonialsPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "oBizee Customer Testimonials",
        description:
          "Read customer testimonials from Indian businesses using oBizee for order management, inventory control, and online growth.",
        url: "https://www.obizee.com/customer-testimonials",
      },
      {
        "@type": "ItemList",
        name: "Verified Customer Proof Profiles",
        itemListElement: verifiedBrands.map((brand, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Organization",
            name: brand.brandName,
            founder: {
              "@type": "Person",
              name: brand.ownerName,
            },
            sameAs: brand.instagramUrl,
            logo: brand.logo,
            address: {
              "@type": "PostalAddress",
              addressRegion: brand.state,
              addressCountry: "IN",
            },
            description: brand.quote,
          },
        })),
      },
    ],
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Customer Testimonials", url: "https://www.obizee.com/customer-testimonials" },
      ]} />
      <JsonLd data={jsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />
        <main role="main" id="main-content">
          <Testimonials />
          <BrandDirectory />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CustomerTestimonialsPage;
