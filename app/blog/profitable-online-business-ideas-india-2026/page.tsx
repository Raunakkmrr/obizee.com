import type { Metadata } from "next";
import TopFunnelPost2 from "@/pages/blog/TopFunnelPost2";

export const metadata: Metadata = {
  title: "50 Profitable Online Business Ideas for India in 2026",
  description: "50 proven online business ideas for India in 2026. From handmade products to food delivery, dropshipping to digital services. Find the right business for you.",
  keywords: "online business ideas India, profitable business ideas 2026, home business ideas India, small business ideas online India",
  alternates: { canonical: "https://www.obizee.com/blog/profitable-online-business-ideas-india-2026" },
  openGraph: {
    title: "50 Profitable Online Business Ideas for India in 2026",
    description: "50 proven online business ideas for India in 2026. From handmade products to food delivery, dropshipping to digital services. Find the right business for you.",
    type: "article",
    url: "https://www.obizee.com/blog/profitable-online-business-ideas-india-2026",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "50 Profitable Online Business Ideas for India in 2026",
    description: "50 proven online business ideas for India in 2026. From handmade products to food delivery, dropshipping to digital services.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <TopFunnelPost2 />
    </>
  );
}
