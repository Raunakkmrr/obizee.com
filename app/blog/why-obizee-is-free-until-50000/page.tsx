import type { Metadata } from "next";
import BlogPost2 from "@/pages/blog/BlogPost2";

export const metadata: Metadata = {
  title: "Why oBizee Charges Nothing Until ₹50,000 — And Only 1% After That",
  description: "Understanding oBizee's pricing model: nothing at all until ₹50,000 in orders, then 1% per order capped at ₹10. How it compares to Shopify, Dukaan, and why it's the most affordable option for Indian sellers.",
  keywords: "oBizee pricing, 1 percent commission, cheapest ecommerce platform India, oBizee vs Shopify pricing, low cost online store India",
  alternates: { canonical: "https://www.obizee.com/blog/why-obizee-is-free-until-50000" },
  openGraph: {
    title: "Why oBizee Charges Nothing Until ₹50,000 — And Only 1% After That",
    description: "Understanding oBizee's pricing model: nothing at all until ₹50,000 in orders, then 1% per order capped at ₹10. Real cost comparison with Shopify, Dukaan, and food delivery platforms.",
    type: "article",
    url: "https://www.obizee.com/blog/why-obizee-is-free-until-50000",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why oBizee Charges Nothing Until ₹50,000 — And Only 1% After That",
    description: "Understanding oBizee's pricing model: nothing at all until ₹50,000 in orders, then 1% per order capped at ₹10. Real cost comparison with Shopify, Dukaan, and food delivery platforms.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <BlogPost2 />
    </>
  );
}
