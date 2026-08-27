"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";

/**
 * The migration offer.
 *
 * It exists because of a number from our own data: 43% of merchants who sign up
 * never add a product. The barrier is not price and it is not features — it is
 * that moving a shop is work. So the offer is that a person here does the work.
 *
 * Kept above the feature sections deliberately: a visitor who leaves after two
 * screens should have seen this and the seller proof, not a feature grid.
 */
const steps = [
  { n: "1", title: "Send us your link", body: "Instagram, dm2buy, Dukaan — wherever you sell now." },
  { n: "2", title: "A person rebuilds it", body: "Not a bot. Usually done inside 24 hours." },
  { n: "3", title: "You check it over", body: "Nothing goes live until you say so." },
  { n: "4", title: "Switch when ready", body: "Keep your products, domain, Razorpay and buyers." },
];

const keeps = [
  "Every product, photo and price",
  "Your own domain",
  "Your Razorpay account",
  "Your customers and their history",
  "Your Delhivery and DTDC setup",
  "Your brand and the look buyers know",
];

export default function MoveYourShop() {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="move-shop-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gray-900 px-6 py-12 sm:px-12 sm:py-16">
          <ScrollReveal className="max-w-2xl">
            <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Already selling somewhere
            </p>
            <h2 id="move-shop-heading" className="text-3xl sm:text-5xl font-bold text-white mb-5">
              We move your shop for you.
              <span className="text-orange-400"> Free.</span>
            </h2>
            <p className="text-lg text-gray-300">
              Most sellers stall because moving is work. So we do the work.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map(({ n, title, body }) => (
              <div
                key={n}
                className="rounded-2xl bg-white/5 border border-white/10 p-5 transition-colors hover:bg-white/10"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500 text-white text-sm font-bold mb-3">
                  {n}
                </span>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-white font-semibold mb-4">You lose nothing by moving</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {keeps.map((k) => (
                <li key={k} className="flex items-start gap-2.5 text-gray-300 text-sm">
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-orange-400" aria-hidden="true" />
                  {k}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Send my shop link
            </Link>
            <Link
              href="/move-my-store"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              How the move works
            </Link>
            <WhatsAppCTA
              source="move_your_shop"
              label="Ask on WhatsApp"
              variant="light"
              message="Hi oBizee, I already sell online and I'd like you to move my shop across. Here's my link:"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
