import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HinglishPost2 = dynamic(() => import("@/pages/blog/HinglishPost2"), { ssr: false });

export const metadata: Metadata = {
  title: "Bina Paisa Lagaye Online Business Kaise Shuru Kare [2026]",
  description: "Bina koi paisa lagaye online business shuru karne ka tarika. oBizee ke saath bilkul free mein apna online store banayein. 3 mahine free trial, koi setup fees nahi.",
  keywords: "bina paisa online business, free online store India, bina investment online selling, ghar baithe online business kaise kare",
  alternates: { languages: { "hi-Latn-IN": "" }, canonical: "https://www.obizee.com/blog/bina-paisa-online-business-kaise-shuru-kare" },
  openGraph: {
    title: "Bina Paisa Lagaye Online Business Kaise Shuru Kare [2026]",
    description: "Bina koi paisa lagaye online business shuru karne ka tarika. oBizee ke saath bilkul free mein apna online store banayein.",
    type: "article",
    url: "https://www.obizee.com/blog/bina-paisa-online-business-kaise-shuru-kare",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bina Paisa Lagaye Online Business Kaise Shuru Kare [2026]",
    description: "Bina koi paisa lagaye online business shuru karne ka tarika. oBizee ke saath bilkul free mein apna online store banayein.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {
  return <HinglishPost2 />;
}
