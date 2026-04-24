import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HinglishPost4 = dynamic(() => import("@/pages/blog/HinglishPost4"), { ssr: false });

export const metadata: Metadata = {
  title: "India Mein Sabse Sasta Ecommerce Platform Kaun Sa Hai? [2026]",
  description: "India ka sabse sasta ecommerce platform kaun sa hai? oBizee — jahan koi monthly fees nahi, sirf 1% per order (maximum ₹10). Shopify, Dukaan se comparison.",
  keywords: "sabse sasta ecommerce platform India, cheapest online store India Hindi, sasta online selling platform, kam paisa mein online store",
  alternates: { canonical: "https://www.obizee.com/blog/sabse-sasta-ecommerce-platform-india" },
  openGraph: {
    title: "India Mein Sabse Sasta Ecommerce Platform Kaun Sa Hai? [2026]",
    description: "India ka sabse sasta ecommerce platform kaun sa hai? oBizee — jahan koi monthly fees nahi, sirf 1% per order (maximum ₹10).",
    type: "article",
    url: "https://www.obizee.com/blog/sabse-sasta-ecommerce-platform-india",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "India Mein Sabse Sasta Ecommerce Platform Kaun Sa Hai? [2026]",
    description: "India ka sabse sasta ecommerce platform kaun sa hai? oBizee — jahan koi monthly fees nahi, sirf 1% per order (maximum ₹10).",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <HinglishPost4 />;
}
