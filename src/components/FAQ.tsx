"use client";

import React from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";

/**
 * The questions a seller asks before switching, answered plainly.
 *
 * This carries FAQPage structured data as well as the visible copy. 65% of
 * pages that AI assistants cite carry structured data, and a question-and-answer
 * pair is the shape those assistants quote most directly — it is the closest
 * thing on the page to an answer they can lift verbatim.
 *
 * Every figure here is real and was verified on 2026-08-27 against /admin/stats:
 * 165 merchants, 3,314 orders. Do not round them up.
 */
const faqs = [
  {
    q: "Does oBizee take a commission on my sales?",
    a: "No. oBizee takes 0% commission — you keep the full amount your customer pays you. There is no monthly fee and no setup fee either. The only per-order cost is the payment gateway, which is 1% capped at ₹10, and that is the gateway's charge, not ours.",
  },
  {
    q: "What does 1% capped at ₹10 actually mean?",
    a: "On a ₹500 order the gateway takes ₹5. On a ₹2,000 order it takes ₹10. On a ₹10,000 order it still takes ₹10, because the cap holds. You would pay a gateway fee on any platform; ours is among the lowest in India.",
  },
  {
    q: "Do I lose my products if I move from another platform?",
    a: "No. Send us your existing shop link — Instagram, dm2buy, Dukaan, anywhere — and we rebuild your catalogue for you before anything goes live. You keep your products, your domain, your Razorpay account and your customers. Nothing switches over until you have seen it and approved it.",
  },
  {
    q: "Can I use a domain I already own?",
    a: "Yes. Connect a domain you already have, or stay on the free yourname.obizee.com address that comes with every account. Both work the same way and neither costs extra.",
  },
  {
    q: "Do I need a laptop to run my shop?",
    a: "No. The whole thing runs from the Android app — orders, stock, shipping labels, payments and reports. Most oBizee sellers work entirely from their phone and never open a laptop.",
  },
  {
    q: "Can I take cash on delivery?",
    a: "Yes, and COD is still how a large share of India buys. Remittances are reconciled against your orders automatically, so you are not tracking who paid what in a separate spreadsheet.",
  },
  {
    q: "What can oBizee do that a website builder cannot?",
    a: "Track the raw materials a product is made from, so you know what it costs to make and not just what it sold for. Manage vendors and purchase lists. Record expenses and show real profit rather than turnover. Book Delhivery, DTDC and Blue Dart pickups, including same-day delivery inside your own city. Segment your customers and message them on WhatsApp.",
  },
  {
    q: "Is oBizee going to disappear?",
    a: "165 businesses run on oBizee and 3,314 orders have been processed through it. Because we charge nothing until an order is paid for, we only earn when our sellers sell — which keeps our interests and theirs pointed the same way.",
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Before you switch
          </p>
          <h2 id="faq-heading" className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
            The questions
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              {" "}everyone asks
            </span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <ScrollReveal key={q}>
              <details className="group rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 transition-colors hover:border-orange-300 open:border-orange-300">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-semibold text-gray-900 text-base sm:text-lg [&::-webkit-details-marker]:hidden">
                  {q}
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-orange-500 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
