import type { Metadata } from "next";
import BlogIndexPage from "@/pages/BlogIndex";


export const metadata: Metadata = {
  title: "oBizee Blog — Guides & Stories for Indian Sellers",
  description: "Learn how to sell online, grow your business, and make the most of oBizee. Guides on ecommerce, shipping, pricing, and success stories from Indian merchants.",
  keywords: "oBizee blog, sell online India guide, ecommerce tips India, online store guide, Indian seller tips",
  alternates: { canonical: "https://www.obizee.com/blog" },
  openGraph: {
    title: "oBizee Blog — Guides & Stories for Indian Sellers",
    description: "Guides, tips, and success stories for Indian merchants selling online.",
    type: "website",
    url: "https://www.obizee.com/blog",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee Blog — Guides & Stories for Indian Sellers",
    description: "Guides, tips, and success stories for Indian merchants selling online.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "oBizee Blog",
    description: "Learn how to sell online, grow your business, and make the most of oBizee. Guides on ecommerce, shipping, pricing, and success stories from Indian merchants.",
    url: "https://www.obizee.com/blog",
    publisher: {
      "@type": "Organization",
      name: "oBizee",
      logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" },
    },
    inLanguage: "en-IN",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.obizee.com/blog" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <BlogIndexPage />
    </>
  );
}
