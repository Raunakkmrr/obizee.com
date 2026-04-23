"use client";
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import JourneyStepDetails from "@/components/JourneyStepDetails";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import JsonLd from "@/components/JsonLd";

const BusinessJourneyPage = () => {
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;
    const targetId = window.location.hash.replace("#", "");
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee Business Journey",
    description:
      "See the step-by-step oBizee business journey for Indian sellers, from Instagram orders to full operations management.",
    url: "https://www.obizee.com/business-journey",
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.obizee.com/" },
        { name: "Business Journey", url: "https://www.obizee.com/business-journey" },
      ]} />
      <JsonLd data={jsonLd} />

      <div className="min-h-screen bg-white">
        <Navigation />
        <main role="main" id="main-content">
          <Services />
          <JourneyStepDetails />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BusinessJourneyPage;
