import type { Metadata } from "next";
import dynamic from "next/dynamic";

const BlogIndexPage = dynamic(() => import("@/pages/BlogIndex"), { ssr: false });

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
  return <BlogIndexPage />;
}
