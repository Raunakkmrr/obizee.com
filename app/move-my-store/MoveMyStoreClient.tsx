"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/motion/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { ArrowRight, Link2, PackageCheck, Eye, Rocket } from "lucide-react";

/**
 * The migration offer, given its own page.
 *
 * SitesPlaced puts their import offer at position 3 on the homepage, because
 * the hardest objection from someone already selling is not price — it is the
 * afternoon of re-uploading 200 products. This page exists to answer that
 * objection on its own, so it can be linked to directly from ads, DMs and the
 * comparison pages.
 *
 * Every fee figure here matches the billing code: 1% per order capped at ₹10,
 * nothing monthly, nothing on signup.
 */
const steps = [
  {
    icon: Link2,
    title: "Send us the link",
    body: "Your Dukaan, Shopify, Bikayi, Instamojo or Instagram store. One message on WhatsApp is enough.",
  },
  {
    icon: PackageCheck,
    title: "We move it across",
    body: "Products, images, prices, variants and categories. You do not re-upload anything.",
  },
  {
    icon: Eye,
    title: "You check it",
    body: "Your old store stays live the whole time. Look at yours on oBizee before anything changes.",
  },
  {
    icon: Rocket,
    title: "Switch when ready",
    body: "Point your domain over, or use your free obizee.com address. Your call, your timing.",
  },
];

const keeps = [
  "Your product photos, at full resolution",
  "Your prices, variants and categories",
  "Your own domain, or a free one from us",
  "Your customers — we do not touch your list",
  "Your Instagram and WhatsApp orders, now in one place",
  "Your existing store, running until you say otherwise",
];

export default function MoveMyStoreClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="bg-orange-50 py-16 sm:py-24" aria-labelledby="move-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-600">
              Already selling somewhere else
            </p>
            <h1 id="move-heading" className="mb-5 text-3xl font-bold text-gray-900 sm:text-5xl">
              We move your store across.{" "}
              <span className="text-orange-600">You do not re-upload anything</span>.
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Send us your store link. We move the products, images, prices and categories
              ourselves, and your existing store keeps running until you are happy with the new
              one. There is no charge for the move.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppCTA
                source="move_my_store_page"
                label="Send my store link"
                trailingIcon={<ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />}
                icon={null}
                className="!rounded-xl !px-8 !py-4 !text-base sm:!text-lg"
                message="Hi oBizee, I already sell online and I'd like you to move my store across. Here is my store link: "
              />
            </div>
            <p className="mt-5 font-mono text-[12px] text-gray-500">
              ₹0 for the move. 0 subscription charges after it — and nothing at all until your
              store has taken ₹50,000 in orders.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24" aria-labelledby="how-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10 max-w-xl">
            <h2 id="how-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Four steps, and three of them are ours
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <ScrollReveal key={title}>
                <div className="h-full rounded-2xl border-t-2 border-orange-500 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100">
                      <Icon className="h-5 w-5 text-orange-600" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-gray-400">0{i + 1}</span>
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16 sm:py-24" aria-labelledby="keep-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10 max-w-xl">
            <h2 id="keep-heading" className="text-3xl font-bold text-white sm:text-4xl">
              What you keep
            </h2>
          </ScrollReveal>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keeps.map((k) => (
              <li key={k} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500"
                />
                <span className="text-gray-200">{k}</span>
              </li>
            ))}
          </ul>
          <ScrollReveal className="mt-10">
            <WhatsAppCTA
              source="move_my_store_page_footer"
              label="Move my shop"
              variant="light"
              trailingIcon={<ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />}
              icon={null}
              className="!rounded-xl !px-8 !py-4"
              message="Hi oBizee, I'd like to move my store across. Here is my store link: "
            />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
