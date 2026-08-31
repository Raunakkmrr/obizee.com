"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { Instagram, Quote, MapPin, ArrowRight, Star, Truck, IndianRupee, Smartphone } from "lucide-react";

const MerchantCard = ({ name, brand, location, instagram, quote, store, image }: {
  name: string; brand: string; location: string; instagram: string; quote: string; store: string; image?: string;
}) => (
  <div className="not-prose my-8 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 sm:p-6 border-b border-orange-100">
      <div className="flex items-center gap-4">
        {image && (
          <img src={image} alt={`${brand} logo`} className="w-14 h-14 rounded-xl object-contain bg-white p-1 ring-2 ring-orange-200" />
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{brand}</h3>
          <p className="text-sm text-gray-600">by {name}</p>
          <div className="flex items-center gap-3 mt-1">
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <MapPin className="w-3 h-3" /> {location}
            </span>
            <a href={instagram} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-1 text-xs text-purple-600 hover:underline">
              <Instagram className="w-3 h-3" /> Instagram
            </a>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-orange-400 fill-current" />)}
        </div>
      </div>
    </div>
    {/* Quote */}
    <div className="p-5 sm:p-6">
      <div className="flex gap-3">
        <Quote className="w-8 h-8 text-orange-200 flex-shrink-0 mt-1" />
        <p className="text-gray-700 leading-relaxed italic">{quote}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-3 py-1 rounded-full">{store}</span>
      </div>
    </div>
  </div>
);

const ThemeCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="not-prose bg-gray-50 rounded-xl p-5 border border-gray-200">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-orange-600" />
      </div>
      <h4 className="font-bold text-gray-900">{title}</h4>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const BlogPost3 = () => {
  return (
    <BlogPostLayout
      title="oBizee Customer Success Stories: Real Merchants, Real Growth"
      description="How Indian Instagram sellers, crochet artists, and home businesses are scaling with oBizee's platform. Real stories from real merchants."
      date="2026-04-23"
      updatedDate="2026-08-20"
      readTime="7 min read"
      author="Raunak Kumar"
      slug="obizee-customer-success-stories"
    >
      <p>
        Behind every online store is a real person with a real business. Not a corporation with a
        marketing department — just someone with a product they believe in and customers they want to serve.
      </p>
      <p>
        These are not hypothetical case studies. These are real Indian merchants — their real names,
        real businesses, and real experiences with oBizee.
      </p>

      {/* Story 1 */}
      <h2>CrochetByPriya — From Instagram DMs to a Real Online Store</h2>
      <MerchantCard
        name="Priya Yadav"
        brand="CrochetByPriya"
        location="Haryana"
        instagram="https://www.instagram.com/crochet_by_priya_/"
        quote="A structured order process replaced manual tracking for day-to-day operations. What used to take hours of back-and-forth now happens automatically."
        store="crochetbypriya.obizee.com"
      />
      <p>
        Priya sells handmade crochet earrings, keychains, and bags — all made by hand, one piece at a time. Like many creative entrepreneurs, she started selling through Instagram DMs. Photos posted, customers DM'd, orders noted manually, payments confirmed one by one, shipping arranged separately.
      </p>
      <p>
        The problem was not finding customers — her following was growing. The problem was managing everything <em>after</em> someone said "I want to buy this." Order details got lost in DM threads. Payment tracking was chaotic. Every order meant juggling multiple apps.
      </p>
      <p>
        With oBizee, Priya now shares her store link instead of asking customers to DM. They browse, order, and pay — she gets notified and ships from the app. She spends less time managing orders and more time crocheting.
      </p>

      {/* Story 2 */}
      <h2>Rubber Band by Seerat Khera — Organizing an Instagram-Led Business</h2>
      <MerchantCard
        name="Seerat Khera"
        brand="Rubber Band"
        location="Rajasthan"
        instagram="https://www.instagram.com/rubberr_band_/"
        quote="Instagram-led business operations are now easier to track in one place with oBizee. Customer follow-ups that used to require searching through chat threads now take seconds."
        store="rubberband.obizee.com"
      />
      <p>
        Seerat's handmade accessories do incredibly well on Instagram — eye-catching, unique, and affordable. But behind the scenes was chaos: order confirmations in DMs, payment tracking on WhatsApp, delivery updates in notes. When a customer asked about their order, Seerat had to dig through multiple platforms.
      </p>
      <p>
        oBizee gave her a single dashboard. Orders flow through her store link, payments tracked automatically, order status visible at a glance. She still uses Instagram for marketing, but business operations all run through oBizee.
      </p>

      {/* Story 3 */}
      <h2>NuttyNibbles by Udeeta Dey — Scaling a Food Brand from Kolkata</h2>
      <MerchantCard
        name="Udeeta Dey"
        brand="NuttyNibbles"
        location="Kolkata, West Bengal"
        instagram="https://www.instagram.com/peanutbutter.kolkata/"
        quote="Operations are managed with better visibility across orders and customers. For a food business where timing and reliability matter, clear visibility at every stage is essential."
        store="nuttynibbles.obizee.com"
      />
      <p>
        Selling food online has extra challenges — shelf life, packaging, shipping perishables — on top of the usual order management headaches. Udeeta was checking messages across platforms, updating spreadsheets, coordinating shipping partners daily.
      </p>
      <p>
        With oBizee, her entire order flow is in one system. Customers order, payments process, and she tracks every order from placement to delivery. The integrated shipping tools eliminated the need for separate courier apps.
      </p>

      {/* Common themes */}
      <h2>What These Stories Have in Common</h2>
      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ThemeCard icon={Smartphone} title="No Technical Barrier" description="None of these merchants are technologists. They downloaded an app and started selling. Everything runs from the same phone they already use." />
        <ThemeCard icon={IndianRupee} title="Affordable Pricing" description="For businesses doing 30-100 orders/month, paying ₹2,000/month for Shopify doesn't make sense. oBizee's 1% fee capped at ₹10 is a fraction of the cost." />
        <ThemeCard icon={Truck} title="Built-In Shipping" description="Shipping is the biggest pain point for Indian sellers. oBizee integrates Delhivery, DTDC & Blue Dart directly — generate labels, schedule pickups, track deliveries." />
        <ThemeCard icon={Instagram} title="DMs to Storefront" description="All three still use Instagram for marketing. But transactions moved from messy DMs to a proper store link — better for customers and sellers." />
      </div>

      <h2>More Stories from the oBizee Community</h2>
      <p>
        These three are just the beginning. oBizee is used by merchants across India —
        jewellery sellers in Gujarat, beauty brands in Delhi, crochet artists in Chhattisgarh, clothing stores in Maharashtra. Each started with a simple download and a desire to sell better.
      </p>
      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/success-stories" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          Success Stories <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/customer-testimonials" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Customer Testimonials <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/for/handicrafts" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          For Handicraft Sellers <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <p>
        Every business in these stories started exactly where you might be right now: selling
        through DMs, managing orders manually, wondering if there is a better way. There is.
        And it costs less than a cup of chai per order.
      </p>
    </BlogPostLayout>
  );
};

export default BlogPost3;
