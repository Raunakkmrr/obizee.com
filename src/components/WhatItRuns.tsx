"use client";

import React from "react";
import {
  Store,
  ClipboardList,
  Boxes,
  Building2,
  IndianRupee,
  Megaphone,
  FileText,
  Truck,
} from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";

/**
 * The positioning section: most platforms hand you a website and stop.
 *
 * The `only` flag marks the capabilities a storefront builder does not have —
 * raw materials, procurement, real profit, marketing, invoicing. Those are the
 * argument. The two unmarked cards are table stakes and are there so the
 * comparison is honest rather than a list of things only we do.
 */
const capabilities = [
  {
    icon: Store,
    tag: "Storefront",
    title: "Your shop at yourname.obizee.com",
    body: "Four templates, your own domain, live in minutes.",
    only: false,
  },
  {
    icon: ClipboardList,
    tag: "Orders",
    title: "Every order, placed to delivered",
    body: "Custom order forms and QR codes for counter sales.",
    only: false,
  },
  {
    icon: Boxes,
    tag: "Stock & materials",
    title: "Know what a product costs to make",
    body: "Track wool, boxes and thread — not just finished goods.",
    only: true,
  },
  {
    icon: Building2,
    tag: "Vendors",
    title: "Buy as carefully as you sell",
    body: "Suppliers, purchase lists and payment terms in one place.",
    only: true,
  },
  {
    icon: IndianRupee,
    tag: "Money",
    title: "Profit, not just turnover",
    body: "Expenses, revenue breakdown and price history.",
    only: true,
  },
  {
    icon: Megaphone,
    tag: "Marketing",
    title: "Bring customers back",
    body: "Customer segments, contact import and WhatsApp templates.",
    only: true,
  },
  {
    icon: FileText,
    tag: "Billing",
    title: "Invoices with proper numbering",
    body: "The paperwork a real business actually needs.",
    only: true,
  },
  {
    icon: Truck,
    tag: "Shipping",
    title: "Delhivery, DTDC and Blue Dart",
    body: "Live rates and pickups. Same-day inside your own city.",
    only: true,
  },
];

export default function WhatItRuns() {
  return (
    <section className="py-16 sm:py-24 bg-orange-50/40" aria-labelledby="what-it-runs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">
            What it runs
          </p>
          <h2 id="what-it-runs-heading" className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
            Most platforms give you a website and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              {" "}stop
            </span>
            .
          </h2>
          <p className="text-lg text-gray-600">
            oBizee runs the parts nobody else builds for — from the raw material you buy to
            the profit you keep.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map(({ icon: Icon, tag, title, body, only }) => (
            <StaggerItem key={tag}>
              <div
                className={`h-full rounded-2xl bg-white p-5 border border-gray-200 border-t-[3px] transition-all hover:-translate-y-1 hover:shadow-lg ${
                  only ? "border-t-orange-500" : "border-t-gray-300"
                }`}
              >
                <Icon
                  className={`h-6 w-6 mb-3 ${only ? "text-orange-500" : "text-gray-400"}`}
                  aria-hidden="true"
                />
                <p
                  className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${
                    only ? "text-orange-600" : "text-gray-500"
                  }`}
                >
                  {tag}
                </p>
                <h3 className="font-bold text-gray-900 leading-snug mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
