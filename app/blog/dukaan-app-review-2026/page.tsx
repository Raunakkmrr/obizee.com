import type { Metadata } from "next";
import BlogPost6 from "@/pages/blog/BlogPost6";

export const metadata: Metadata = {
  title: "Dukaan App Review 2026: Pros, Cons, and Better Alternatives",
  description: "An honest review of Dukaan in 2026 — what it does well, where it falls short, pricing breakdown, and how it compares to alternatives like oBizee for Indian sellers.",
  keywords: "Dukaan app review, Dukaan pros cons, Dukaan alternative India, Dukaan vs oBizee, Dukaan pricing 2026",
  alternates: { canonical: "https://www.obizee.com/blog/dukaan-app-review-2026" },
  openGraph: {
    title: "Dukaan App Review 2026: Pros, Cons, and Better Alternatives",
    description: "Honest Dukaan review for 2026. Pros, cons, pricing, and how it compares to oBizee for Indian sellers.",
    type: "article",
    url: "https://www.obizee.com/blog/dukaan-app-review-2026",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dukaan App Review 2026: Pros, Cons, and Better Alternatives",
    description: "Honest Dukaan review for 2026. Pros, cons, pricing, and how it compares to oBizee for Indian sellers.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dukaan App Review 2026: Pros, Cons, and Better Alternatives",
    description: "An honest review of Dukaan in 2026 \u2014 what it does well, where it falls short, pricing breakdown, and how it compares to alternatives like oBizee for Indian sellers.",
    datePublished: "2026-04-23",
    dateModified: "2026-04-23",
    author: { "@type": "Organization", name: "oBizee" },
    publisher: { "@type": "Organization", name: "oBizee", logo: { "@type": "ImageObject", url: "https://www.obizee.com/Obizee.png" } },
    mainEntityOfPage: "https://www.obizee.com/blog/dukaan-app-review-2026",
    image: "https://www.obizee.com/Obizee.png",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.obizee.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.obizee.com/blog" },
      { "@type": "ListItem", position: 3, name: "Dukaan App Review 2026", item: "https://www.obizee.com/blog/dukaan-app-review-2026" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <BlogPost6 />
    </>
  );
}
