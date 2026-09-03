import type { Metadata } from "next";
import HinglishPost3 from "@/pages/blog/HinglishPost3";

export const metadata: Metadata = {
  title: "Mobile Se Online Store Kaise Banaye — Sirf Phone Se [2026]",
  description: "Sirf apne mobile phone se online store banayein. Koi laptop ya computer ki zaroorat nahi. oBizee app se 2 minute mein store ready. Step-by-step guide.",
  keywords: "mobile se online store kaise banaye, phone se online selling, mobile se business kaise kare, smartphone se dukaan",
  alternates: { canonical: "https://www.obizee.com/blog/mobile-se-online-store-kaise-banaye" },
  openGraph: {
    title: "Mobile Se Online Store Kaise Banaye — Sirf Phone Se [2026]",
    description: "Sirf apne mobile phone se online store banayein. Koi laptop ya computer ki zaroorat nahi. oBizee app se 2 minute mein store ready.",
    type: "article",
    url: "https://www.obizee.com/blog/mobile-se-online-store-kaise-banaye",
    images: [{ url: "/Obizee.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Se Online Store Kaise Banaye — Sirf Phone Se [2026]",
    description: "Sirf apne mobile phone se online store banayein. Koi laptop ya computer ki zaroorat nahi. oBizee app se 2 minute mein store ready.",
    images: ["/Obizee.png"],
  },
};

export default function Page() {

  return (
    <>
      <HinglishPost3 />
    </>
  );
}
