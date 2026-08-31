import type { Metadata } from "next";
import BlogPost2 from "@/pages/blog/BlogPost2";

export const metadata: Metadata = {
  title: "Why oBizee Charges Only 1% — And Why That Matters for Small Businesses",
  description: "Understanding oBizee's pricing model: 1% per order capped at ₹10. How it compares to Shopify, Dukaan, and why it's the most affordable option for Indian sellers.",
  keywords: "oBizee pricing, 1 percent commission, cheapest ecommerce platform India, oBizee vs Shopify pricing, low cost online store India",
  alternates: { canonical: "https://www.obizee.com/blog/why-obizee-charges-only-1-percent" },
  openGraph: {
    title: "Why oBizee Charges Only 1% — And Why That Matters for Small Businesses",
    description: "Understanding oBizee's pricing model: 1% per order capped at ₹10. Real cost comparison with Shopify, Dukaan, and food delivery platforms.",
    type: "article",
    url: "https://www.obizee.com/blog/why-obizee-charges-only-1-percent",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why oBizee Charges Only 1% — And Why That Matters for Small Businesses",
    description: "Understanding oBizee's pricing model: 1% per order capped at ₹10. Real cost comparison with Shopify, Dukaan, and food delivery platforms.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why oBizee Charges Only 1% \u2014 And Why That Matters for Small Businesses",
    description: "Understanding oBizee's pricing model: 1% per order capped at \u20B910. How it compares to Shopify, Dukaan, and why it's the most affordable option for Indian sellers.",
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: { "@type": "Organization", name: "oBizee", logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" } },
    mainEntityOfPage: "https://www.obizee.com/blog/why-obizee-charges-only-1-percent",
    image: "https://www.obizee.com/Obizee.png",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.obizee.com/blog" },
      { "@type": "ListItem", position: 3, name: "Why oBizee Charges Only 1%", item: "https://www.obizee.com/blog/why-obizee-charges-only-1-percent" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <BlogPost2 />
    </>
  );
}
