import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import JourneyStepDetails from "@/components/JourneyStepDetails";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const BusinessJourneyPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace("#", "");
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "oBizee Business Journey",
    description:
      "See the step-by-step oBizee business journey for Indian sellers, from Instagram orders to full operations management.",
    url: "https://obizee.com/business-journey",
  };

  return (
    <>
      <Helmet>
        <title>oBizee Business Journey | From Instagram Orders to Managed Operations</title>
        <meta
          name="description"
          content="Follow oBizee's business journey: connect sales channels, manage orders, set up payments, track deliveries, and scale operations in one platform."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="oBizee Business Journey | From Instagram Orders to Managed Operations" />
        <meta
          property="og:description"
          content="A clear workflow for Indian businesses to move from manual order handling to structured growth with oBizee."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://obizee.com/business-journey" />
        <meta property="og:image" content="https://obizee.com/Obizee.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="oBizee Business Journey | From Instagram Orders to Managed Operations" />
        <meta
          name="twitter:description"
          content="Understand how oBizee helps sellers in India set up systems and scale business operations."
        />
        <meta name="twitter:image" content="https://obizee.com/Obizee.png" />
        <link rel="canonical" href="https://obizee.com/business-journey" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

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
