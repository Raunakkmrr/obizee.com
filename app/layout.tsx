import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "../src/index.css";

/**
 * The site previously loaded no web font at all — `font-sans` fell through to
 * whatever the device happened to have, which is a large part of why it read
 * cheaper than it should. next/font self-hosts these, so there is no request to
 * Google on page load and no layout shift while they arrive.
 *
 * Bricolage Grotesque carries headings; Plus Jakarta Sans carries everything
 * else. Deliberately not Inter — it is the default every generated site reaches
 * for, and looking generic is the thing this is meant to fix.
 */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});
import Providers from "./providers";
import Analytics from "@/components/Analytics";
import LeadCapturePrompt from "@/components/LeadCapturePrompt";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

// The default title and description every page inherits, and the first thing a
// search engine or an assistant reads about oBizee. The lead line is the
// positioning and it is checkable: no code path in the backend charges a
// subscription, a monthly fee or a setup fee, and the 1% commission is debited
// only after an order exists. Keep any rewrite true to that.
export const metadata: Metadata = {
  title: {
    default: "oBizee — 0 Subscription Charges. Pay Only When You Get an Order.",
    template: "%s",
  },
  description:
    "0 subscription charges — you pay oBizee only when you get an order, and then just 1% capped at ₹10. A month with no sales costs nothing. Online store, orders from Instagram and WhatsApp, stock and raw materials, Delhivery, DTDC and Blue Dart shipping, COD and real profit reporting. No coding needed.",
  keywords:
    "no subscription ecommerce India, pay per order ecommerce India, cheapest ecommerce platform India, D2C platform India, online store builder, Shopify alternative India, Dukaan alternative, sell online India, Instagram seller platform, WhatsApp business tools",
  metadataBase: new URL("https://www.obizee.com"),
  openGraph: {
    title: "oBizee — 0 Subscription Charges. Pay Only When You Get an Order.",
    description:
      "0 subscription charges — pay only when you get an order, then 1% capped at ₹10. Online store, order management, stock, and Delhivery, DTDC & Blue Dart shipping.",
    url: "https://www.obizee.com",
    siteName: "oBizee",
    images: [{ url: "/Obizee.png" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "oBizee — 0 Subscription Charges. Pay Only When You Get an Order.",
    description:
      "0 subscription charges — pay only when you get an order, then 1% capped at ₹10. Online store, order management, stock, and Delhivery, DTDC & Blue Dart shipping.",
    images: ["/Obizee.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.obizee.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/Obizee.png" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>{children}</Providers>
        <LeadCapturePrompt />
        <Analytics />
      </body>
    </html>
  );
}
