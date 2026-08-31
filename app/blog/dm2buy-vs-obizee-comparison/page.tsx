import type { Metadata } from "next";
import BlogPost7 from "@/pages/blog/BlogPost7";

export const metadata: Metadata = {
  title: "DM2buy vs oBizee: Which Platform Should Indian Sellers Choose?",
  description: "A detailed comparison of DM2buy and oBizee — features, pricing, shipping, multi-channel support, and which platform is better for Indian online sellers.",
  keywords: "DM2buy vs oBizee, DM2buy review, DM2buy alternative, Instagram selling platform India, DM2buy shipping",
  alternates: { canonical: "https://www.obizee.com/blog/dm2buy-vs-obizee-comparison" },
  openGraph: {
    title: "DM2buy vs oBizee: Which Platform Should Indian Sellers Choose?",
    description: "DM2buy vs oBizee — detailed feature comparison, pricing, shipping integration, and which is better for Indian sellers.",
    type: "article",
    url: "https://www.obizee.com/blog/dm2buy-vs-obizee-comparison",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DM2buy vs oBizee: Which Platform Should Indian Sellers Choose?",
    description: "DM2buy vs oBizee — detailed feature comparison, pricing, shipping integration, and which is better for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "DM2buy vs oBizee: Which Platform Should Indian Sellers Choose?",
    description: "A detailed comparison of DM2buy and oBizee \u2014 features, pricing, shipping, multi-channel support, and which platform is better for Indian online sellers.",
    datePublished: "2026-04-24",
    dateModified: "2026-08-31",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: { "@type": "Organization", name: "oBizee", logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" } },
    mainEntityOfPage: "https://www.obizee.com/blog/dm2buy-vs-obizee-comparison",
    image: "https://www.obizee.com/Obizee.png",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.obizee.com/blog" },
      { "@type": "ListItem", position: 3, name: "DM2buy vs oBizee Comparison", item: "https://www.obizee.com/blog/dm2buy-vs-obizee-comparison" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <BlogPost7 />
    </>
  );
}
