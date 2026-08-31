import type { Metadata } from "next";
import TopFunnelPost3 from "@/pages/blog/TopFunnelPost3";

export const metadata: Metadata = {
  title: "Ecommerce Shipping in India: Delhivery vs DTDC vs BlueDart [2026 Guide]",
  description: "Complete guide to ecommerce shipping in India. Compare Delhivery, DTDC, and BlueDart on pricing, coverage, speed, and reliability. Plus how to integrate shipping into your online store.",
  keywords: "ecommerce shipping India, Delhivery vs DTDC, best courier for ecommerce India, shipping for online sellers India, cheapest courier India",
  alternates: { canonical: "https://www.obizee.com/blog/ecommerce-shipping-india-delhivery-dtdc-bluedart" },
  openGraph: {
    title: "Ecommerce Shipping in India: Delhivery vs DTDC vs BlueDart [2026 Guide]",
    description: "Compare Delhivery, DTDC, and BlueDart for ecommerce shipping in India. Pricing, coverage, speed, and integration guide for online sellers.",
    type: "article",
    url: "https://www.obizee.com/blog/ecommerce-shipping-india-delhivery-dtdc-bluedart",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Shipping in India: Delhivery vs DTDC vs BlueDart [2026 Guide]",
    description: "Compare Delhivery, DTDC, and BlueDart for ecommerce shipping in India. Pricing, coverage, speed, and integration guide.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ecommerce Shipping in India: Delhivery vs DTDC vs BlueDart [2026 Guide]",
    description: "Complete guide to ecommerce shipping in India. Compare Delhivery, DTDC, and BlueDart on pricing, coverage, speed, and reliability. Plus how to integrate shipping into your online store.",
    datePublished: "2026-04-24",
    dateModified: "2026-08-20",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: { "@type": "Organization", name: "oBizee", logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" } },
    mainEntityOfPage: "https://www.obizee.com/blog/ecommerce-shipping-india-delhivery-dtdc-bluedart",
    image: "https://www.obizee.com/Obizee.png",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.obizee.com/blog" },
      { "@type": "ListItem", position: 3, name: "Ecommerce Shipping in India", item: "https://www.obizee.com/blog/ecommerce-shipping-india-delhivery-dtdc-bluedart" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <TopFunnelPost3 />
    </>
  );
}
