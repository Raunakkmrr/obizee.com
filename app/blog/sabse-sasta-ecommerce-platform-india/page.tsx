import type { Metadata } from "next";
import HinglishPost4 from "@/pages/blog/HinglishPost4";

export const metadata: Metadata = {
  title: "India Mein Sabse Sasta Ecommerce Platform Kaun Sa Hai? [2026]",
  description: "India ka sabse sasta ecommerce platform kaun sa hai? oBizee — 0 SUBSCRIPTION, 0 SETUP FEE. Shopify, Dukaan se comparison.",
  keywords: "sabse sasta ecommerce platform India, cheapest online store India Hindi, sasta online selling platform, kam paisa mein online store",
  alternates: { canonical: "https://www.obizee.com/blog/sabse-sasta-ecommerce-platform-india" },
  openGraph: {
    title: "India Mein Sabse Sasta Ecommerce Platform Kaun Sa Hai? [2026]",
    description: "India ka sabse sasta ecommerce platform kaun sa hai? oBizee — 0 SUBSCRIPTION, 0 SETUP FEE.",
    type: "article",
    url: "https://www.obizee.com/blog/sabse-sasta-ecommerce-platform-india",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "India Mein Sabse Sasta Ecommerce Platform Kaun Sa Hai? [2026]",
    description: "India ka sabse sasta ecommerce platform kaun sa hai? oBizee — 0 SUBSCRIPTION, 0 SETUP FEE.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <HinglishPost4 />
    </>
  );
}
