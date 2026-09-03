import type { Metadata } from "next";
import ForHandicraftsPage from "@/pages/ForHandicrafts";


export const metadata: Metadata = {
  title:
    "Sell Handicrafts Online in India — Online Store for Artisans | oBizee",
  description:
    "Create your online handicraft store on oBizee. Sell handmade products, crochet, pottery, paintings on Instagram & WhatsApp. Custom order forms, built-in Delhivery, DTDC, Blue Dart & hyperlocal shipping. Nothing to pay until ₹50,000 in orders, then 1% per order, max ₹10.",
  keywords:
    "sell handicrafts online India, handicraft online store, handmade products online India, artisan ecommerce platform, crochet business online, pottery online store India, sell handmade items online",
  alternates: {
    canonical: "https://www.obizee.com/for/handicrafts",
  },
  openGraph: {
    title:
      "Sell Handicrafts Online in India — Online Store for Artisans | oBizee",
    description:
      "Create your online handicraft store on oBizee. Sell handmade products, crochet, pottery, paintings on Instagram & WhatsApp. Custom order forms, built-in Delhivery, DTDC, Blue Dart & hyperlocal shipping. Nothing to pay until ₹50,000 in orders, then 1% per order, max ₹10.",
    type: "website",
    url: "https://www.obizee.com/for/handicrafts",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sell Handicrafts Online in India — Online Store for Artisans | oBizee",
    description:
      "Create your online handicraft store on oBizee. Sell handmade products on Instagram & WhatsApp. Custom order forms, built-in shipping. Nothing to pay until ₹50,000 in orders, then 1% per order, max ₹10.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <ForHandicraftsPage />;
}
