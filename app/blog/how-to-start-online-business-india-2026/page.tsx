import type { Metadata } from "next";
import dynamic from "next/dynamic";

const TopFunnelPost1 = dynamic(() => import("@/pages/blog/TopFunnelPost1"), { ssr: false });

export const metadata: Metadata = {
  title: "How to Start an Online Business in India: Complete Guide [2026]",
  description: "Everything you need to know about starting an online business in India in 2026. From choosing a product to setting up your store, shipping, payments, and growing your customer base.",
  keywords: "how to start online business India, online business India 2026, start selling online India, ecommerce India beginners guide",
  alternates: { canonical: "https://www.obizee.com/blog/how-to-start-online-business-india-2026" },
  openGraph: {
    title: "How to Start an Online Business in India: Complete Guide [2026]",
    description: "Everything you need to know about starting an online business in India in 2026. From choosing a product to setting up your store, shipping, payments, and growing your customer base.",
    type: "article",
    url: "https://www.obizee.com/blog/how-to-start-online-business-india-2026",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start an Online Business in India: Complete Guide [2026]",
    description: "Everything you need to know about starting an online business in India in 2026. From choosing a product to setting up your store, shipping, payments, and growing your customer base.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <TopFunnelPost1 />;
}
