"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import HeroComposition from "@/components/HeroComposition";

/**
 * Two columns on desktop: the argument on the left, the product on the right.
 *
 * This was centred, with the app screens stacked underneath — which pushed the
 * proof a full screen down and made the hero read as a poster rather than a
 * product. Side by side, a visitor sees the claim and the thing making the claim
 * in the same glance. Stacks to one column below lg, where side-by-side would
 * leave both halves too narrow to read.
 */
const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-orange-50"
      aria-label="Hero section"
    >
      {/* Static gradient orbs — pure CSS, no animation to avoid repaints */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full sm:h-[700px] sm:w-[700px]"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full sm:h-[700px] sm:w-[700px]"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          {/* ---- the argument ---- */}
          <div className="text-center lg:text-left">
            {/* Reads as a spec strip rather than a marketing pill: the monospace
                and the separators let it list what you actually get without
                turning into a sentence. */}
            <div className="mb-8 inline-block rounded-xl bg-orange-100/70 px-4 py-2.5">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-orange-700 sm:text-xs">
                0% commission &middot; Store &middot; Orders &middot; Stock &middot; Shipping
              </span>
            </div>

            {/* Two-tone: the brand colour lands on the words carrying the offer,
                not on a whole line. */}
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-[3rem] lg:text-[3.2rem]">
              <span className="text-gray-900">Keep the </span>
              <span className="text-orange-600">whole sale.</span>
              <br />
              <span className="text-gray-900">Run the </span>
              <span className="text-orange-600">whole business.</span>
            </h1>

            {/* "Platform fee 1% per order" used to sit here, which stated the
                payment gateway's rate as ours — the opposite of the model, on
                the most-read line of the site. */}
            <p className="mx-auto mb-9 max-w-xl text-lg leading-relaxed text-gray-700 sm:text-xl lg:mx-0">
              We take no commission — not a rupee of what your customer pays you. Sell online,
              track stock, ship with Delhivery and see your real profit.
            </p>

            <div className="mb-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <AppDownloadTrigger>
                <Button
                  size="lg"
                  className="w-full rounded-xl bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/20 transition-all duration-300 hover:bg-orange-700 hover:shadow-xl hover:shadow-orange-600/25 sm:w-auto sm:text-lg"
                  aria-label="Start free — no card"
                >
                  Start free — no card
                </Button>
              </AppDownloadTrigger>
              <WhatsAppCTA
                source="hero"
                label="Move my shop"
                variant="outline"
                icon={null}
                trailingIcon={<ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />}
                className="!rounded-xl !border-gray-300 !bg-white !px-8 !py-4 !text-base !text-gray-900 hover:!border-orange-400 hover:!bg-white hover:!text-orange-700 sm:!text-lg"
                message="Hi oBizee, I found you on your website. I sell online and I'd like to understand how oBizee works."
              />
            </div>

            {/* Monospace, because it is a list of costs — it should read as a
                figure you can check, not as more marketing copy. */}
            <p className="font-mono text-[12px] leading-relaxed text-gray-500 sm:text-[13px]">
              No commission. No monthly fee. Only the payment gateway, 1% capped at ₹10.
            </p>

          </div>

          {/* ---- the product ---- */}
          <div className="lg:pl-4">
            <HeroComposition />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
