"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle, Truck, MapPin, Clock, IndianRupee, ShieldCheck, BarChart3, Package, Zap } from "lucide-react";

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" }) => (
  <div className={`not-prose my-6 rounded-xl p-5 border ${type === "tip" ? "bg-green-50 border-green-200" : type === "warning" ? "bg-amber-50 border-amber-200" : "bg-blue-50 border-blue-200"}`}>
    <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${type === "tip" ? "text-green-700" : type === "warning" ? "text-amber-700" : "text-blue-700"}`}>
      {type === "tip" ? "Pro Tip" : type === "warning" ? "Watch Out" : "Good to Know"}
    </div>
    <div className={`text-sm leading-relaxed ${type === "tip" ? "text-green-800" : type === "warning" ? "text-amber-800" : "text-blue-800"}`}>{children}</div>
  </div>
);

const CourierCard = ({ name, tagline, color, highlights }: { name: string; tagline: string; color: string; highlights: string[] }) => (
  <div className={`not-prose my-6 bg-gradient-to-br ${color} rounded-2xl p-5 border border-gray-200`}>
    <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
    <p className="text-sm text-gray-500 mb-4">{tagline}</p>
    <div className="space-y-2">
      {highlights.map((h) => (
        <div key={h} className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-gray-700">{h}</span>
        </div>
      ))}
    </div>
  </div>
);

const TopFunnelPost3 = () => {
  return (
    <BlogPostLayout
      title="Ecommerce Shipping in India: Delhivery vs DTDC vs BlueDart [2026 Guide]"
      description="Complete guide to ecommerce shipping in India. Compare Delhivery, DTDC, and BlueDart on pricing, coverage, speed, and reliability. Plus how to integrate shipping into your online store."
      date="2026-04-23"
      readTime="8 min read"
      author="oBizee Team"
      slug="ecommerce-shipping-india-delhivery-dtdc-bluedart"
    >
      <p>
        Shipping can make or break your online business. A great product with terrible delivery creates angry
        customers, bad reviews, and lost repeat sales. A smooth shipping experience — fast, trackable, affordable —
        turns first-time buyers into loyal fans.
      </p>
      <p>
        In this guide, we compare the three biggest courier partners for Indian ecommerce sellers: Delhivery, DTDC,
        and BlueDart. We will cover pricing, coverage, speed, and help you decide which one (or combination) works
        best for your business.
      </p>

      <h2>Why Shipping Matters More Than You Think</h2>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { icon: Clock, stat: "70%", label: "of customers check delivery time before ordering" },
          { icon: IndianRupee, stat: "56%", label: "abandon carts due to high shipping costs" },
          { icon: ShieldCheck, stat: "85%", label: "say tracking updates improve their experience" },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
            <item.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
            <div className="text-xs text-gray-500 mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      <h2>Delhivery</h2>

      <CourierCard
        name="Delhivery"
        tagline="India's largest ecommerce-focused courier network"
        color="from-red-50 to-orange-50"
        highlights={[
          "18,000+ serviceable pin codes across India",
          "Starting rates: ₹30-50 for packages up to 500g",
          "Strong metro and tier-1 coverage with fast delivery (2-4 days)",
          "Reliable real-time tracking with SMS and email updates",
          "COD support with weekly remittance to sellers",
          "API integration available — works with most ecommerce platforms",
          "Best for: Light packages, metro and tier-1 deliveries, sellers who want reliability at competitive rates",
        ]}
      />

      <h2>DTDC</h2>

      <CourierCard
        name="DTDC"
        tagline="Strong reach into tier-2 and tier-3 India"
        color="from-blue-50 to-indigo-50"
        highlights={[
          "14,000+ pin codes with excellent semi-urban and rural reach",
          "Starting rates: ₹35-55 for packages up to 500g",
          "Surface shipping option for heavy/bulk items at lower cost",
          "Good for tier-2 and tier-3 city deliveries where other couriers struggle",
          "COD support with competitive remittance cycles",
          "Extensive franchise network ensures last-mile reach",
          "Best for: Sellers shipping to smaller cities, heavy or bulky items, budget-conscious businesses",
        ]}
      />

      <h2>BlueDart</h2>

      <CourierCard
        name="BlueDart"
        tagline="Premium speed and reliability, backed by DHL"
        color="from-yellow-50 to-amber-50"
        highlights={[
          "35,000+ pin codes (including remote areas via DHL partnership)",
          "Starting rates: ₹60-100+ for packages up to 500g",
          "Fastest delivery times — often next-day in metros",
          "DHL-backed international shipping capabilities",
          "Excellent tracking and customer support",
          "Preferred for high-value and time-sensitive shipments",
          "Best for: Premium products, high-value items, customers who expect fast delivery and are willing to pay for it",
        ]}
      />

      <h2>Side-by-Side Comparison</h2>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Feature</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Delhivery</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">DTDC</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">BlueDart</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Pin code coverage", "18,000+", "14,000+", "35,000+"],
              ["Starting price (500g)", "₹30-50", "₹35-55", "₹60-100+"],
              ["Metro delivery speed", "2-4 days", "3-5 days", "1-2 days"],
              ["Tier-2/3 delivery", "Good", "Excellent", "Good"],
              ["COD support", "Yes", "Yes", "Yes"],
              ["Tracking quality", "Excellent", "Good", "Excellent"],
              ["Surface shipping", "Limited", "Yes (competitive)", "No"],
              ["International shipping", "No", "Limited", "Yes (DHL)"],
              ["Best for", "Light packages, metros", "Smaller cities, bulk", "Premium, high-value"],
            ].map(([feature, del_, dtdc, blue]) => (
              <tr key={feature} className="border-b border-gray-100">
                <td className="py-3 px-3 text-sm text-gray-700 font-medium">{feature}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{del_}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{dtdc}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{blue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>How to Choose the Right Courier</h2>

      <div className="not-prose my-6 space-y-3">
        {[
          {
            icon: Package,
            title: "Consider your product weight",
            desc: "Delhivery wins on light packages (under 1 kg). DTDC is more competitive for heavier items with surface shipping. BlueDart charges a premium regardless of weight.",
          },
          {
            icon: MapPin,
            title: "Where are your customers?",
            desc: "If most orders go to metros, Delhivery is your best bet. If you ship to tier-2 and tier-3 cities regularly, DTDC's reach is unmatched. BlueDart covers the most pin codes overall.",
          },
          {
            icon: Zap,
            title: "How fast do they need it?",
            desc: "For next-day delivery expectations, BlueDart is the only reliable choice. For standard 3-5 day delivery, Delhivery and DTDC both perform well.",
          },
          {
            icon: IndianRupee,
            title: "What is your budget?",
            desc: "If shipping cost is your top concern, Delhivery for light items and DTDC for heavy items give you the best rates. BlueDart is worth it only when speed or high-value handling matters.",
          },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <item.icon className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <Callout type="tip">
        Many successful sellers use two couriers — Delhivery for metros and light packages, DTDC for tier-2/3
        deliveries and heavier items. This gives you the best coverage at the lowest cost.
      </Callout>

      <h2>Integrating Shipping Into Your Store</h2>
      <p>
        The biggest headache for new sellers is not choosing a courier — it is integrating it. Manually copying
        order details, generating labels, and tracking shipments is tedious and error-prone.
      </p>
      <p>
        Some ecommerce platforms solve this by building shipping directly into the seller dashboard. oBizee, for
        example, integrates Delhivery and DTDC natively — you can book shipments, print labels, and track deliveries
        without leaving your order management screen. No third-party apps, no additional subscriptions, no API setup.
      </p>
      <p>
        If you are on a platform that does not include shipping, aggregators like Shiprocket or Shipway can
        connect you to multiple couriers through a single dashboard. These typically charge ₹500-1,000 per month
        plus per-shipment fees.
      </p>

      <Callout type="info">
        Whichever shipping solution you choose, make sure it supports COD, provides real-time tracking, and
        handles return shipments. These three features significantly impact customer satisfaction and your
        operational efficiency.
      </Callout>

      <p>
        Shipping is not the most glamorous part of running an online business, but getting it right is one of the
        highest-leverage things you can do. Choose your courier wisely, integrate it smoothly, and your customers
        will keep coming back.
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/blog/how-to-start-online-business-india-2026" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          How to Start an Online Business <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/how-to-create-online-store" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Create Your Store <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          oBizee Pricing <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default TopFunnelPost3;
