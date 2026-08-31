import type { Metadata } from "next";
import HinglishPost1 from "@/pages/blog/HinglishPost1";

export const metadata: Metadata = {
  title: "Online Dukaan Kaise Khole — Poori Jankari [2026 Guide]",
  description: "Online dukaan kholne ka sabse aasan tarika. oBizee app se 2 minute mein apna online store banayein. Koi coding nahi, koi monthly fees nahi. Poori step-by-step guide.",
  keywords: "online dukaan kaise khole, online store kaise banaye, apna online business kaise shuru kare, online selling kaise kare India",
  alternates: { canonical: "https://www.obizee.com/blog/online-dukaan-kaise-khole" },
  openGraph: {
    title: "Online Dukaan Kaise Khole — Poori Jankari [2026 Guide]",
    description: "Online dukaan kholne ka sabse aasan tarika. oBizee app se 2 minute mein apna online store banayein. Koi coding nahi, koi monthly fees nahi.",
    type: "article",
    url: "https://www.obizee.com/blog/online-dukaan-kaise-khole",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Dukaan Kaise Khole — Poori Jankari [2026 Guide]",
    description: "Online dukaan kholne ka sabse aasan tarika. oBizee app se 2 minute mein apna online store banayein. Koi coding nahi, koi monthly fees nahi.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Online Dukaan Kaise Khole \u2014 Poori Jankari [2026 Guide]",
    description: "Online dukaan kholne ka sabse aasan tarika. oBizee app se 2 minute mein apna online store banayein. Koi coding nahi, koi monthly fees nahi. Poori step-by-step guide.",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    author: { "@type": "Person", name: "Raunak Kumar", url: "https://www.obizee.com/about" },
    publisher: { "@type": "Organization", name: "oBizee", logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" } },
    mainEntityOfPage: "https://www.obizee.com/blog/online-dukaan-kaise-khole",
    image: "https://www.obizee.com/Obizee.png",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.obizee.com/blog" },
      { "@type": "ListItem", position: 3, name: "Online Dukaan Kaise Khole", item: "https://www.obizee.com/blog/online-dukaan-kaise-khole" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <HinglishPost1 />
    </>
  );
}
