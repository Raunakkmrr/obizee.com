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
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "50 Profitable Online Business Ideas for India in 2026",
    description: "50 proven online business ideas for India in 2026. From handmade products to food delivery, dropshipping to digital services. Find the right business for you.",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: { "@type": "Organization", name: "oBizee", logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" } },
    mainEntityOfPage: "https://www.obizee.com/blog/profitable-online-business-ideas-india-2026",
    image: "https://www.obizee.com/Obizee.png",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.obizee.com/blog" },
      { "@type": "ListItem", position: 3, name: "50 Profitable Online Business Ideas for India", item: "https://www.obizee.com/blog/profitable-online-business-ideas-india-2026" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <TopFunnelPost2 />
    </>
  );
}
