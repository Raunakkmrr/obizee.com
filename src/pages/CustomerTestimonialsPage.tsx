import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import BrandDirectory from "@/components/BrandDirectory";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { verifiedBrands } from "@/data/verifiedBrands";

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
      <Helmet>
        <title>oBizee Customer Testimonials | Real Business Growth Stories</title>
        <meta
          name="description"
          content="Read customer testimonials from Indian small businesses and Instagram sellers using oBizee to manage orders, stock, and operations."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="oBizee Customer Testimonials | Real Business Growth Stories" />
        <meta
          property="og:description"
          content="See how real Indian businesses use oBizee to streamline day-to-day operations and grow online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.obizee.com/customer-testimonials" />
        <meta property="og:image" content="https://www.obizee.com/Obizee.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="oBizee Customer Testimonials | Real Business Growth Stories" />
        <meta
          name="twitter:description"
          content="Real testimonials from Indian sellers and founders using oBizee to run business operations."
        />
        <meta name="twitter:image" content="https://www.obizee.com/Obizee.png" />
        <link rel="canonical" href="https://www.obizee.com/customer-testimonials" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
