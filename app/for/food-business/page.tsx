import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ForFoodBusinessPage = dynamic(
  () => import("@/pages/ForFoodBusiness"),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    "Online Ordering for Home Food Business in India — Sell Food Online | oBizee",
  description:
    "Start your online food business with oBizee. Take orders for homemade cakes, tiffin services, bakery items, and snacks via WhatsApp & your own website. Custom menus, order management, delivery tracking. 1% per order, max ₹10.",
  keywords:
    "online ordering food business India, sell food online India, home food business platform, tiffin service online ordering, bakery online store India, homemade food business app",
  alternates: {
    canonical: "https://www.obizee.com/for/food-business",
  },
  openGraph: {
    title:
      "Online Ordering for Home Food Business in India — Sell Food Online | oBizee",
    description:
      "Start your online food business with oBizee. Take orders for homemade cakes, tiffin services, bakery items, and snacks via WhatsApp & your own website. Custom menus, order management, delivery tracking. 1% per order, max ₹10.",
    type: "website",
    url: "https://www.obizee.com/for/food-business",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Online Ordering for Home Food Business in India — Sell Food Online | oBizee",
    description:
      "Start your online food business with oBizee. Take orders for cakes, tiffin, snacks via WhatsApp & your own website. 1% per order, max ₹10.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <ForFoodBusinessPage />;
}
