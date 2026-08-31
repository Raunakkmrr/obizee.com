import type { Metadata } from "next";
import BlogPost1 from "@/pages/blog/BlogPost1";

export const metadata: Metadata = {
  title: "How to Create Your Online Store in 5 Minutes with oBizee",
  description: "A complete guide to setting up your online store on oBizee. From download to first sale — no coding, no monthly fees, no technical knowledge needed.",
  keywords: "create online store India, how to sell online, oBizee store setup, free online store India, sell on Instagram India",
  alternates: { canonical: "https://www.obizee.com/blog/how-to-create-online-store-5-minutes" },
  openGraph: {
    title: "How to Create Your Online Store in 5 Minutes with oBizee",
    description: "Step-by-step guide to setting up your online store on oBizee — from download to first product. No coding, no monthly fees.",
    type: "article",
    url: "https://www.obizee.com/blog/how-to-create-online-store-5-minutes",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Create Your Online Store in 5 Minutes with oBizee",
    description: "Step-by-step guide to setting up your online store on oBizee — from download to first product. No coding, no monthly fees.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Create Your Online Store in 5 Minutes with oBizee",
    description: "A complete guide to setting up your online store on oBizee. From download to first sale — no coding, no monthly fees, no technical knowledge needed.",
    datePublished: "2026-04-23",
    dateModified: "2026-08-31",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: { "@type": "Organization", name: "oBizee", logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" } },
    mainEntityOfPage: "https://www.obizee.com/blog/how-to-create-online-store-5-minutes",
    image: "https://www.obizee.com/Obizee.png",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.obizee.com/blog" },
      { "@type": "ListItem", position: 3, name: "How to Create Your Online Store in 5 Minutes", item: "https://www.obizee.com/blog/how-to-create-online-store-5-minutes" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <BlogPost1 />
    </>
  );
}
