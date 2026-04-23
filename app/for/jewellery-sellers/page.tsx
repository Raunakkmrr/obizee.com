import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ForJewellerySellersPage = dynamic(
  () => import("@/pages/ForJewellerySellers"),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "Online Store for Jewellery Business in India — Sell Jewellery Online | oBizee",
  description:
    "Create your online jewellery store on oBizee. Sell earrings, necklaces, rings on Instagram & WhatsApp. Custom order forms for size/material options. Built-in Delhivery & DTDC. 1% per order, max ₹10.",
  keywords:
    "online store for jewellery business India, sell jewellery online India, jewellery ecommerce platform, handmade jewellery online store, Instagram jewellery seller, how to sell jewellery online",
  alternates: {
    canonical: "https://www.obizee.com/for/jewellery-sellers",
  },
  openGraph: {
    title:
      "Online Store for Jewellery Business in India — Sell Jewellery Online | oBizee",
    description:
      "Create your online jewellery store on oBizee. Sell earrings, necklaces, rings on Instagram & WhatsApp. Custom order forms for size/material options. Built-in Delhivery & DTDC. 1% per order, max ₹10.",
    type: "website",
    url: "https://www.obizee.com/for/jewellery-sellers",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Online Store for Jewellery Business in India — Sell Jewellery Online | oBizee",
    description:
      "Create your online jewellery store on oBizee. Sell earrings, necklaces, rings on Instagram & WhatsApp. Custom order forms, built-in shipping. 1% per order, max ₹10.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <ForJewellerySellersPage />;
}
