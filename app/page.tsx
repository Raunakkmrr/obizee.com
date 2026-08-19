import type { Metadata } from "next";
import { Suspense } from "react";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "oBizee — India's Most Affordable Online Store Builder | Start Free, Pay 1% Max ₹10",
  description: "India's cheapest D2C platform. Auto-generated online store, Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping, order management, inventory tracking. 1% per order, max ₹10. No monthly fees. No coding needed.",
  keywords: "cheapest ecommerce platform India, D2C platform India, online store builder, Shopify alternative India, Dukaan alternative, sell online India",
  alternates: { canonical: "https://www.obizee.com" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee - Order and Business Management for Indian Sellers",
    description: "oBizee helps Indian small businesses manage orders, inventory, payments, shipping, and customer communication from one platform.",
    url: "https://www.obizee.com",
    inLanguage: "en-IN",
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "oBizee",
    url: "https://www.obizee.com",
    logo: "https://www.obizee.com/Obizee.png",
    description: "India's most affordable D2C commerce platform. 1% per order, max ₹10. No monthly fees.",
    sameAs: [
      "https://play.google.com/store/apps/details?id=com.obizee",
    ],
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "oBizee",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    areaServed: "IN",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "3-month free trial. After trial, 1% per successful order capped at ₹10.",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <Suspense>
        <HomePageClient />
      </Suspense>
    </>
  );
}
