import type { Metadata } from "next";
import ForClothingStoresPage from "@/pages/ForClothingStores";


export const metadata: Metadata = {
  title:
    "Online Store for Clothing Business in India — Start Selling in 2 Minutes | oBizee",
  description:
    "Create your online clothing store on oBizee. Sell clothes on Instagram, WhatsApp & your own website. Built-in Delhivery, DTDC & Blue Dart shipping, custom order forms with size/color options. 1% per order, max ₹10.",
  keywords:
    "online store for clothing business India, sell clothes online India, clothing ecommerce platform, fashion online store India, Instagram clothing seller platform, how to sell clothes online",
  alternates: {
    canonical: "https://www.obizee.com/for/clothing-stores",
  },
  openGraph: {
    title:
      "Online Store for Clothing Business in India — Start Selling in 2 Minutes | oBizee",
    description:
      "Create your online clothing store on oBizee. Sell clothes on Instagram, WhatsApp & your own website. Built-in Delhivery, DTDC & Blue Dart shipping, custom order forms with size/color options. 1% per order, max ₹10.",
    type: "website",
    url: "https://www.obizee.com/for/clothing-stores",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Online Store for Clothing Business in India — Start Selling in 2 Minutes | oBizee",
    description:
      "Create your online clothing store on oBizee. Sell clothes on Instagram, WhatsApp & your own website. Built-in shipping, custom order forms. 1% per order, max ₹10.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <ForClothingStoresPage />;
}
