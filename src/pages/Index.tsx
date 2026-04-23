"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import SocialProofBar from "../components/SocialProofBar";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useSearchParams, useRouter } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import AppDownloadModal from "@/components/AppDownloadModal";

const Index = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("download_app") !== "1") return;
    setIsDownloadModalOpen(true);
    // Remove the query param from the URL
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", "/");
    }
  }, [searchParams]);

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
      <JsonLd data={jsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />
        <main id="main-content" role="main">
          <Hero />
          <SocialProofBar />
          <Features />
          <HowItWorks />
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
