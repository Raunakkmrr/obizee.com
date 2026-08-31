"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShoppingBag, FileText, CreditCard, Truck, Megaphone, AlertTriangle, Lightbulb, Store } from "lucide-react";

const StepCard = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div className="not-prose bg-white rounded-2xl p-5 border border-gray-200 flex gap-4">
    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
      <span className="text-white font-bold text-lg">{number}</span>
    </div>
    <div>
      <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
      <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
    </div>
  </div>
);

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" }) => (
  <div className={`not-prose my-6 rounded-xl p-5 border ${type === "tip" ? "bg-green-50 border-green-200" : type === "warning" ? "bg-amber-50 border-amber-200" : "bg-blue-50 border-blue-200"}`}>
    <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${type === "tip" ? "text-green-700" : type === "warning" ? "text-amber-700" : "text-blue-700"}`}>
      {type === "tip" ? "Pro Tip" : type === "warning" ? "Watch Out" : "Good to Know"}
    </div>
    <div className={`text-sm leading-relaxed ${type === "tip" ? "text-green-800" : type === "warning" ? "text-amber-800" : "text-blue-800"}`}>{children}</div>
  </div>
);

const IconSection = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <div className="not-prose my-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-200">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
    </div>
    <div className="text-sm text-gray-600 leading-relaxed space-y-2">{children}</div>
  </div>
);

const TopFunnelPost1 = () => {
  return (
    <BlogPostLayout
      title="How to Start an Online Business in India: Complete Guide [2026]"
      description="Everything you need to know about starting an online business in India in 2026. From choosing a product to setting up your store, shipping, payments, and growing your customer base."
      date="2026-04-24"
      readTime="10 min read"
      author="Raunak Kumar"
      slug="how-to-start-online-business-india-2026"
    >
      <p>
        India's ecommerce market is projected to cross $160 billion by 2028. Millions of new buyers are shopping online
        every month — from metro cities to tier-3 towns. If you have ever thought about starting an online business,
        2026 is the best time to do it.
      </p>
      <p>
        This guide walks you through every step, from choosing what to sell to getting your first customer. No jargon,
        no fluff — just actionable steps you can follow this week.
      </p>

      <h2>Step 1: Choose What to Sell</h2>
      <p>
        The most important decision is your product. You do not need to invent something new — you need to find a
        category where demand exists and you can add value. Here are the most popular categories for Indian online sellers:
      </p>

      <div className="not-prose my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { emoji: "👗", label: "Fashion & Clothing" },
          { emoji: "🍯", label: "Food & Snacks" },
          { emoji: "🎨", label: "Handicrafts & Art" },
          { emoji: "💄", label: "Beauty & Skincare" },
          { emoji: "🏠", label: "Home Decor" },
          { emoji: "💍", label: "Jewellery" },
          { emoji: "🧸", label: "Kids & Baby" },
          { emoji: "🌿", label: "Eco-friendly" },
        ].map((cat) => (
          <div key={cat.label} className="bg-white rounded-xl p-3 border border-gray-200 text-center">
            <div className="text-2xl mb-1">{cat.emoji}</div>
            <div className="text-xs font-semibold text-gray-700">{cat.label}</div>
          </div>
        ))}
      </div>

      <Callout type="tip">
        Start with what you know. If you already make pickles at home, sell pickles online. If you are a good designer,
        sell custom prints. The best online businesses come from existing skills, not trend-chasing.
      </Callout>

      <p>
        Do some basic research before you commit. Check Instagram and Amazon to see what is selling in your category.
        Look at reviews to find what customers complain about — that is your opportunity to do better.
      </p>

      <h2>Step 2: Handle the Legal Basics</h2>

      <IconSection icon={FileText} title="Legal Requirements">
        <p>
          Good news: starting an online business in India does not require a special license for most products. Here is
          what you actually need:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>PAN Card</strong> — You already have this (or can get one quickly).</li>
          <li><strong>Bank Account</strong> — A current account is ideal, but savings works initially.</li>
          <li><strong>GST Registration</strong> — Required if your turnover exceeds ₹40 lakh for goods (₹20 lakh for services), or if you sell inter-state online. Many small sellers register early as it builds credibility.</li>
          <li><strong>FSSAI License</strong> — Only if you sell food products.</li>
        </ul>
      </IconSection>

      <Callout type="info">
        You do NOT need a company registration to start. You can begin as a sole proprietor with just your PAN and bank
        account. Register a company later when your business grows.
      </Callout>

      <h2>Step 3: Set Up Your Online Store</h2>
      <p>
        You have three main options for selling online in India:
      </p>

      <div className="not-prose my-6 space-y-3">
        {[
          {
            title: "Your own online store",
            desc: "Full control over branding, pricing, and customer relationships. Platforms like oBizee, Shopify, or WooCommerce let you create your own store. Best for building a long-term brand.",
            highlight: true,
          },
          {
            title: "Marketplaces (Amazon, Flipkart, Meesho)",
            desc: "Instant access to millions of buyers, but high commissions (15-30%), intense competition, and limited brand building. Good for volume, not for margins.",
            highlight: false,
          },
          {
            title: "Social selling (Instagram, WhatsApp)",
            desc: "Free and easy to start, but no payment integration, no order tracking, and very manual. Good for testing demand, not for scaling.",
            highlight: false,
          },
        ].map((option) => (
          <div key={option.title} className={`bg-white rounded-xl p-4 border-2 ${option.highlight ? "border-orange-300 bg-orange-50/30" : "border-gray-200"}`}>
            <div className="text-sm font-bold text-gray-900 mb-1">{option.title}</div>
            <div className="text-sm text-gray-600">{option.desc}</div>
          </div>
        ))}
      </div>

      <p>
        For most new sellers, we recommend starting with your own store. It costs very little (some platforms like oBizee
        are free to start with no monthly fees) and gives you full control. You can always add marketplace listings later.
      </p>

      <h2>Step 4: Set Up Payments</h2>

      <IconSection icon={CreditCard} title="Accept Every Payment Method">
        <p>
          Indian customers expect multiple payment options. Your store should support:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>UPI</strong> — By far the most popular method. Google Pay, PhonePe, Paytm all use UPI.</li>
          <li><strong>Credit/Debit Cards</strong> — Still important, especially for higher-value purchases.</li>
          <li><strong>Net Banking</strong> — Some customers prefer this, especially older demographics.</li>
          <li><strong>Cash on Delivery (COD)</strong> — Still accounts for 40-50% of Indian ecommerce orders. Offering COD significantly boosts conversion rates.</li>
        </ul>
        <p className="mt-2">
          Payment gateways like Cashfree, Razorpay, and PayU handle all of this. Most ecommerce platforms integrate them
          so you do not need to set up anything manually.
        </p>
      </IconSection>

      <h2>Step 5: Shipping and Logistics</h2>

      <IconSection icon={Truck} title="Getting Products to Customers">
        <p>
          Shipping is where many new sellers struggle. The key decisions:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>Delhivery</strong> — Largest network with 18,000+ serviceable pin codes. Great for light packages. Starting at ₹30-50 per shipment.</li>
          <li><strong>DTDC</strong> — Strong reach in tier-2 and tier-3 cities. Competitive surface rates starting at ₹35-55.</li>
          <li><strong>India Post</strong> — Cheapest option, reaches every corner of India, but slower. Good for low-value, non-urgent items.</li>
          <li><strong>BlueDart</strong> — Premium, fastest delivery. Best for high-value items. ₹60-100+ per shipment.</li>
        </ul>
        <p className="mt-2">
          Some ecommerce platforms (like oBizee) integrate shipping directly, so you can book, track, and manage
          deliveries from the same dashboard where you manage orders.
        </p>
      </IconSection>

      <Callout type="tip">
        Start with one courier partner and expand as you grow. Delhivery is a solid first choice for most sellers due to
        its coverage and pricing balance.
      </Callout>

      <h2>Step 6: Market Your Store</h2>

      <IconSection icon={Megaphone} title="Getting Your First Customers">
        <p>
          You do not need a big budget to start marketing. Here are the most effective channels for Indian sellers:
        </p>
      </IconSection>

      <div className="not-prose my-6 space-y-3">
        {[
          {
            title: "Instagram",
            desc: "Post product photos, reels, and stories. Use relevant hashtags. Engage with comments. Run small paid promotions (₹100-500/day) to test what works. Instagram is the #1 discovery channel for D2C brands in India.",
          },
          {
            title: "WhatsApp",
            desc: "Share your store link with friends, family, and contacts. Create a WhatsApp Business account with your catalog. Broadcast offers to interested customers. Word-of-mouth through WhatsApp is incredibly powerful in India.",
          },
          {
            title: "Google (SEO & Ads)",
            desc: "Optimize your store for search terms your customers use. Google Shopping ads can drive high-intent traffic. Start with a small budget of ₹200-500/day and measure ROI.",
          },
          {
            title: "Local Communities",
            desc: "Join Facebook groups, apartment communities, and local WhatsApp groups relevant to your product. Offer special deals for first-time customers. Build genuine relationships, not spam.",
          },
        ].map((channel) => (
          <div key={channel.title} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-bold text-gray-900">{channel.title}</div>
              <div className="text-sm text-gray-600">{channel.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>Common Mistakes to Avoid</h2>

      <div className="not-prose my-6 space-y-3">
        {[
          "Spending too much on a fancy website before validating demand. Start simple, improve later.",
          "Not offering COD. You will lose 40-50% of potential orders without it.",
          "Ignoring packaging. Good packaging creates repeat customers and social media shares.",
          "Pricing too low to compete. Compete on value and branding, not on being the cheapest.",
          "Not tracking expenses. Know your margins from day one — product cost, packaging, shipping, platform fees, and marketing.",
          "Trying to sell everything. Start with 5-10 products, do them well, then expand.",
        ].map((mistake, i) => (
          <div key={i} className="flex items-start gap-3 bg-amber-50 rounded-xl p-4 border border-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-900">{mistake}</div>
          </div>
        ))}
      </div>

      <h2>Your Action Plan: Start This Week</h2>

      <div className="not-prose my-6 space-y-3">
        <StepCard number={1} title="Today: Choose your product">
          Pick one category you know well. List 5-10 products you could sell. Check if similar products sell online.
        </StepCard>
        <StepCard number={2} title="Day 2-3: Set up your store">
          Create your online store on a platform that fits your budget. Add your products with good photos and descriptions.
        </StepCard>
        <StepCard number={3} title="Day 4-5: Configure payments and shipping">
          Set up payment acceptance and choose a shipping partner. Test the full flow with a sample order.
        </StepCard>
        <StepCard number={4} title="Day 6-7: Tell the world">
          Share your store on Instagram, WhatsApp, and with friends and family. Ask for honest feedback.
        </StepCard>
      </div>

      <Callout type="info">
        You do not need everything to be perfect to launch. Ship a good-enough version, learn from real customers, and
        improve as you go. Most successful online sellers started with a phone camera and a free platform.
      </Callout>

      <p>
        Starting an online business in India has never been easier or cheaper. The tools exist, the customers are
        online, and the logistics infrastructure is ready. The only thing missing is your decision to start.
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/how-to-create-online-store" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          Create Your Store in 5 Minutes <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/for/clothing-stores" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          For Clothing Stores <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/for/food-business" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          For Food Businesses <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default TopFunnelPost1;
