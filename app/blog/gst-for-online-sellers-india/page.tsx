import type { Metadata } from "next";
import TopFunnelPost4 from "@/pages/blog/TopFunnelPost4";

export const metadata: Metadata = {
  title: "GST for Online Sellers in India: Everything You Need to Know [2026]",
  description: "Complete guide to GST for online sellers in India. Registration threshold, rates, filing, invoicing, and common questions answered for ecommerce businesses.",
  keywords: "GST for online sellers India, GST registration online business, GST rates ecommerce India, do I need GST for online selling",
  alternates: { canonical: "https://www.obizee.com/blog/gst-for-online-sellers-india" },
  openGraph: {
    title: "GST for Online Sellers in India: Everything You Need to Know [2026]",
    description: "Complete guide to GST for online sellers in India. Registration threshold, rates, filing, invoicing, and common questions answered.",
    type: "article",
    url: "https://www.obizee.com/blog/gst-for-online-sellers-india",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST for Online Sellers in India: Everything You Need to Know [2026]",
    description: "Complete guide to GST for online sellers in India. Registration, rates, filing, invoicing, and common questions answered.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "GST for Online Sellers in India: Everything You Need to Know [2026]",
    description: "Complete guide to GST for online sellers in India. Registration threshold, rates, filing, invoicing, and common questions answered for ecommerce businesses.",
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    author: { "@type": "Organization", name: "oBizee" },
    publisher: { "@type": "Organization", name: "oBizee", logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" } },
    mainEntityOfPage: "https://www.obizee.com/blog/gst-for-online-sellers-india",
    image: "https://www.obizee.com/Obizee.png",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.obizee.com/blog" },
      { "@type": "ListItem", position: 3, name: "GST for Online Sellers in India", item: "https://www.obizee.com/blog/gst-for-online-sellers-india" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <TopFunnelPost4 />
    </>
  );
}
