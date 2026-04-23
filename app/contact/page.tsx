import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactPage = dynamic(() => import("@/pages/Contact"), { ssr: false });

export const metadata: Metadata = {
  title: "Contact oBizee - Get in Touch | Business Management Platform",
  description:
    "Get in touch with oBizee's support team. We're here to help you with any questions about our business management platform.",
  keywords:
    "contact oBizee, customer support, technical support, business management platform, help desk",
  alternates: { canonical: "https://www.obizee.com/contact" },
  openGraph: {
    title: "Contact oBizee - Get in Touch | Business Management Platform",
    description:
      "Get in touch with oBizee's support team. We're here to help you with any questions about our business management platform.",
    type: "website",
    url: "https://www.obizee.com/contact",
    images: [{ url: "/contact-og.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact oBizee - Get in Touch | Business Management Platform",
    description:
      "Get in touch with oBizee's support team. We're here to help you with any questions about our business management platform.",
    images: ["/contact-twitter.jpg"],
  },
};

export default function Page() {
  return <ContactPage />;
}
