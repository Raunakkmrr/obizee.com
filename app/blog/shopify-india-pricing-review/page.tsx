import type { Metadata } from "next";
import dynamic from "next/dynamic";

const BlogPost5 = dynamic(() => import("@/pages/blog/BlogPost5"), { ssr: false });

export const metadata: Metadata = {
  title: "Shopify India Pricing: Is It Worth It for Small Businesses?",
  description: "A detailed breakdown of Shopify's real cost for Indian sellers — monthly plans, transaction fees, app costs, and how it compares to affordable alternatives like oBizee.",
  keywords: "Shopify pricing India, Shopify cost India, is Shopify worth it India, Shopify expensive India, Shopify alternative cheap",
  alternates: { canonical: "https://www.obizee.com/blog/shopify-india-pricing-review" },
  openGraph: {
    title: "Shopify India Pricing: Is It Worth It for Small Businesses?",
    description: "Real cost breakdown of Shopify for Indian sellers. Monthly plans, hidden fees, app costs — and a cheaper alternative.",
    type: "article",
    url: "https://www.obizee.com/blog/shopify-india-pricing-review",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify India Pricing: Is It Worth It for Small Businesses?",
    description: "Real cost breakdown of Shopify for Indian sellers. Monthly plans, hidden fees, app costs — and a cheaper alternative.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <BlogPost5 />;
}
