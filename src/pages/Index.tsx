import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import AppDownloadModal from "@/components/AppDownloadModal";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("download_app") !== "1") return;

    setIsDownloadModalOpen(true);
    const params = new URLSearchParams(searchParams);
    params.delete("download_app");
    setSearchParams(params, { replace: true });
  }, [searchParams, setSearchParams]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee - Order and Business Management for Indian Sellers",
    description:
      "oBizee helps Indian small businesses manage orders, inventory, payments, shipping, and customer communication from one platform.",
    url: "https://www.obizee.com",
    inLanguage: "en-IN",
  };

  return (
    <>
      <Helmet>
        <title>oBizee - Order & Business Management for Indian Sellers</title>
        <meta
          name="description"
          content="India-first SaaS for Instagram and WhatsApp sellers. Manage orders, inventory, payments, shipping, and customer updates from one dashboard."
        />
        <meta
          name="keywords"
          content="Indian seller platform, Instagram order management, WhatsApp business tools, inventory tracking, payment tracking, shipping management"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="oBizee - Order & Business Management for Indian Sellers" />
        <meta
          property="og:description"
          content="Run your business from one place: orders, inventory, payments, shipping, and customer communication."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.obizee.com" />
        <meta property="og:image" content="https://www.obizee.com/Obizee.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="oBizee - Order & Business Management for Indian Sellers" />
        <meta
          name="twitter:description"
          content="India-first SaaS for small businesses selling online. Manage orders, inventory, payments, and shipping."
        />
        <meta name="twitter:image" content="https://www.obizee.com/Obizee.png" />
        <link rel="canonical" href="https://www.obizee.com" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navigation />
        <main id="main-content" role="main">
          <Hero />
          <Features />
          <Services />
          <Testimonials />
          <CTA />
        </main>
        <AppDownloadModal open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
