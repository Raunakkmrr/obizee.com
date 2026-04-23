import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutPage = dynamic(() => import("@/pages/About"), { ssr: false });

export const metadata: Metadata = {
  title: "About oBizee - Our Story and Mission | Business Management Platform",
  description:
    "Learn about oBizee's mission to empower businesses with innovative technology solutions. Discover our story, values, and commitment to customer success.",
  keywords:
    "about oBizee, business management platform, company mission, business values, customer success, business technology",
  alternates: { canonical: "https://www.obizee.com/about" },
  openGraph: {
    title:
      "About oBizee - Our Story and Mission | Business Management Platform",
    description:
      "Learn about oBizee's mission to empower businesses with innovative technology solutions. Discover our story, values, and commitment to customer success.",
    type: "website",
    url: "https://www.obizee.com/about",
    images: [{ url: "/about-og.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About oBizee - Our Story and Mission | Business Management Platform",
    description:
      "Learn about oBizee's mission to empower businesses with innovative technology solutions. Discover our story, values, and commitment to customer success.",
    images: ["/about-twitter.jpg"],
  },
};

export default function Page() {
  return <AboutPage />;
}
