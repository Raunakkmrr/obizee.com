import type { Metadata } from "next";
import BlogPost4 from "@/pages/blog/BlogPost4";

export const metadata: Metadata = {
  title: "10 Cheapest Ecommerce Platforms in India [2026 Comparison]",
  description: "A ranked comparison of the 10 most affordable ecommerce platforms for Indian sellers in 2026 — with real pricing, per-order fees, and honest pros and cons.",
  keywords: "cheapest ecommerce platform India, best online store India 2026, affordable D2C platform, free ecommerce India",
  alternates: { canonical: "https://www.obizee.com/blog/cheapest-ecommerce-platforms-india-2026" },
  openGraph: {
    title: "10 Cheapest Ecommerce Platforms in India [2026 Comparison]",
    description: "Ranked comparison of the 10 most affordable ecommerce platforms for Indian sellers in 2026. Real pricing, real costs, honest pros and cons.",
    type: "article",
    url: "https://www.obizee.com/blog/cheapest-ecommerce-platforms-india-2026",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Cheapest Ecommerce Platforms in India [2026 Comparison]",
    description: "Ranked comparison of the 10 most affordable ecommerce platforms for Indian sellers in 2026. Real pricing, real costs, honest pros and cons.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <BlogPost4 />
    </>
  );
}
