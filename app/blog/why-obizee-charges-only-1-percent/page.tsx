import type { Metadata } from "next";
import dynamic from "next/dynamic";

const BlogPost2 = dynamic(() => import("@/pages/blog/BlogPost2"), { ssr: false });

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
  return <BlogPost2 />;
}
