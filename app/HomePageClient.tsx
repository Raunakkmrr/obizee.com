"use client";

import React, { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedOn from "@/components/FeaturedOn";
import SocialProofBar from "@/components/SocialProofBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatItRuns from "@/components/WhatItRuns";
import MoveYourShop from "@/components/MoveYourShop";
import WhoItIsFor from "@/components/WhoItIsFor";
import PricingExplained from "@/components/PricingExplained";
import FAQ from "@/components/FAQ";
import ShopsWall from "@/components/ShopsWall";

// Only the query-param modal is deferred. See the note in that file: it holds
// the `useSearchParams` call, which opts its subtree out of prerendering.
const DownloadAppFromQuery = lazy(() => import("./DownloadAppFromQuery"));

/**
 * Every section is imported statically and on purpose.
 *
 * These were previously `React.lazy()` inside `<Suspense fallback={null}>` to
 * keep them out of the initial bundle. React.lazy does not server-render — it
 * suspends and emits the fallback — so all seven sections rendered as nothing
 * in the exported HTML. Combined with `useSearchParams` at this level, the live
 * homepage shipped 93 characters of visible text to every crawler while looking
 * complete in a browser.
 *
 * Next already code-splits per route, so lazy() bought very little here and cost
 * the entire page's readability to search engines and AI assistants. If a real
 * bundle problem shows up, fix it with a dynamic import that still SSRs
 * (`next/dynamic` with `ssr: true`), never by removing a section from the HTML.
 */
export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Order is deliberate: proof and the migration offer come before any
          feature talk. A visitor who leaves after two screens should have seen
          sellers vouching and "we move your shop free", not a feature grid.
          SitesPlaced puts testimonials at position 2 and its import offer at 3;
          ours used to sit at 7 and nowhere. */}
      <Navigation />
      <Hero />
      <SocialProofBar />
      <Testimonials />
      <ShopsWall />
      <MoveYourShop />
      <WhatItRuns />
      <Features />
      <HowItWorks />
      <WhoItIsFor />
      <PricingExplained />
      <Services />
      <FAQ />
      <CTA />
      <FeaturedOn />
      <Footer />
      <Suspense fallback={null}>
        <DownloadAppFromQuery />
      </Suspense>
    </div>
  );
}
