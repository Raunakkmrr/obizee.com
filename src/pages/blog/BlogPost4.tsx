"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, IndianRupee, Crown, TrendingUp, AlertTriangle } from "lucide-react";

const PlatformCard = ({ rank, name, monthlyCost, perOrderFee, strength, weakness, highlight }: {
  rank: number; name: string; monthlyCost: string; perOrderFee: string; strength: string; weakness: string; highlight?: boolean;
}) => (
  <div className={`not-prose my-4 rounded-2xl p-5 border-2 ${highlight ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-300" : "bg-white border-gray-200"}`}>
    <div className="flex items-center gap-3 mb-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm ${highlight ? "bg-gradient-to-br from-green-500 to-green-600" : rank <= 3 ? "bg-gradient-to-br from-orange-400 to-orange-500" : "bg-gray-400"}`}>
        #{rank}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        {highlight && <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Cheapest Option</span>}
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3 mb-3">
      <div className={`rounded-xl p-3 text-center ${highlight ? "bg-white border border-green-100" : "bg-gray-50 border border-gray-100"}`}>
        <div className="text-xs text-gray-500 mb-1">Monthly Cost</div>
        <div className={`text-lg font-bold ${highlight ? "text-green-600" : "text-gray-900"}`}>{monthlyCost}</div>
      </div>
      <div className={`rounded-xl p-3 text-center ${highlight ? "bg-white border border-green-100" : "bg-gray-50 border border-gray-100"}`}>
        <div className="text-xs text-gray-500 mb-1">Per-Order Fee</div>
        <div className={`text-lg font-bold ${highlight ? "text-green-600" : "text-gray-900"}`}>{perOrderFee}</div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
        <span className="text-sm text-gray-700">{strength}</span>
      </div>
      <div className="flex items-start gap-2">
        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
        <span className="text-sm text-gray-600">{weakness}</span>
      </div>
    </div>
  </div>
);

const SummaryRow = ({ name, monthly, perOrder, shipping, best, highlight }: {
  name: string; monthly: string; perOrder: string; shipping: string; best: string; highlight?: boolean;
}) => (
  <tr className={`border-b border-gray-100 ${highlight ? "bg-green-50/60" : ""}`}>
    <td className={`py-3 px-3 text-sm font-medium ${highlight ? "text-green-700 font-bold" : "text-gray-700"}`}>{name}</td>
    <td className={`py-3 px-3 text-sm ${highlight ? "text-green-700 font-bold" : "text-gray-600"}`}>{monthly}</td>
    <td className={`py-3 px-3 text-sm ${highlight ? "text-green-700 font-bold" : "text-gray-600"}`}>{perOrder}</td>
    <td className={`py-3 px-3 text-sm ${highlight ? "text-green-700 font-bold" : "text-gray-600"}`}>{shipping}</td>
    <td className={`py-3 px-3 text-sm ${highlight ? "text-green-700 font-bold" : "text-gray-600"}`}>{best}</td>
  </tr>
);

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" }) => (
  <div className={`not-prose my-6 rounded-xl p-5 border ${type === "tip" ? "bg-green-50 border-green-200" : type === "warning" ? "bg-amber-50 border-amber-200" : "bg-blue-50 border-blue-200"}`}>
    <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${type === "tip" ? "text-green-700" : type === "warning" ? "text-amber-700" : "text-blue-700"}`}>
      {type === "tip" ? "Pro Tip" : type === "warning" ? "Watch Out" : "Good to Know"}
    </div>
    <div className={`text-sm leading-relaxed ${type === "tip" ? "text-green-800" : type === "warning" ? "text-amber-800" : "text-blue-800"}`}>{children}</div>
  </div>
);

const BlogPost4 = () => {
  return (
    <BlogPostLayout
      title="10 Cheapest Ecommerce Platforms in India [2026 Comparison]"
      description="A ranked comparison of the 10 most affordable ecommerce platforms for Indian sellers in 2026 — with real pricing, per-order fees, and honest pros and cons."
      date="2026-04-23"
      readTime="8 min read"
      author="oBizee Team"
      slug="cheapest-ecommerce-platforms-india-2026"
    >
      <p>
        Starting an online store in India should not cost a fortune. But with so many platforms
        available — each with different pricing models, hidden fees, and confusing tiers — it is
        genuinely hard to figure out which one is actually the cheapest.
      </p>
      <p>
        We ranked <strong>10 ecommerce platforms available in India</strong> from cheapest to most
        expensive, based on real costs: monthly subscription, per-order fees, and what you actually
        get included. No affiliate links, no bias — just numbers.
      </p>

      <Callout type="info">
        All prices are as of April 2026. We compared entry-level plans and calculated costs for a typical small seller doing 50-100 orders per month with an average order value of ₹800.
      </Callout>

      <h2>The Rankings: Cheapest to Most Expensive</h2>

      <PlatformCard
        rank={1}
        name="oBizee"
        monthlyCost="₹0"
        perOrderFee="1% (max ₹10)"
        strength="No subscription at all. Built-in Delhivery and DTDC shipping. 3-month free trial. Best value for small Indian sellers."
        weakness="Newer platform with a smaller app ecosystem compared to Shopify."
        highlight
      />

      <PlatformCard
        rank={2}
        name="Dukaan"
        monthlyCost="₹417/mo (billed yearly)"
        perOrderFee="Varies by plan"
        strength="Strong WhatsApp selling tools. Established brand in India with good marketing features."
        weakness="Annual billing only — you pay ₹4,999+ upfront. No built-in shipping integration."
      />

      <PlatformCard
        rank={3}
        name="Bikayi"
        monthlyCost="₹333/mo (billed yearly)"
        perOrderFee="None on paid plans"
        strength="Affordable entry point. WhatsApp catalog integration and basic store features."
        weakness="Limited design customization. Shipping must be handled separately."
      />

      <PlatformCard
        rank={4}
        name="DM2buy"
        monthlyCost="Free to start"
        perOrderFee="Commission-based (varies)"
        strength="Built for Instagram sellers. Strong seller community and IRL events."
        weakness="Instagram-only focus. Commission-based pricing (details vary). No logistics integration."
      />

      <PlatformCard
        rank={5}
        name="Instamojo"
        monthlyCost="₹0 (free plan)"
        perOrderFee="2-5% + payment gateway fees"
        strength="Good payment links. Works for digital products and services too."
        weakness="Per-order fees add up quickly. Store features are basic on the free plan."
      />

      <PlatformCard
        rank={6}
        name="WooCommerce"
        monthlyCost="₹300-800 (hosting)"
        perOrderFee="None (plugin costs vary)"
        strength="Open source with unlimited customization. Full ownership of your store."
        weakness="Requires technical knowledge. Hosting, security, and maintenance are your responsibility."
      />

      <PlatformCard
        rank={7}
        name="Ecwid"
        monthlyCost="₹0 (free plan) / ₹1,200+"
        perOrderFee="None"
        strength="Can embed into existing websites. Decent free tier for up to 10 products."
        weakness="Free plan is very limited. Paid plans get expensive for Indian sellers."
      />

      <PlatformCard
        rank={8}
        name="Shopify"
        monthlyCost="₹2,000+"
        perOrderFee="2% on Basic plan"
        strength="Best app ecosystem. Excellent for international selling and large catalogs."
        weakness="Expensive for small Indian sellers. Many essentials require paid apps."
      />

      <PlatformCard
        rank={9}
        name="Wix"
        monthlyCost="₹1,300+"
        perOrderFee="None"
        strength="Beautiful templates. Drag-and-drop builder is beginner-friendly."
        weakness="Not built for Indian market. No INR-native payment or shipping integrations."
      />

      <PlatformCard
        rank={10}
        name="Squarespace"
        monthlyCost="₹1,400+"
        perOrderFee="3% on Basic plan"
        strength="Stunning design. Great for portfolio-style stores and creative brands."
        weakness="Most expensive option. Poor India-specific payment and shipping support."
      />

      <h2>Summary Comparison Table</h2>
      <p>Here is the full picture at a glance for a seller doing 100 orders/month at ₹800 average order value:</p>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Platform</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Monthly Fee</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Per-Order Fee</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Shipping</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody>
            <SummaryRow name="oBizee" monthly="₹0" perOrder="1% (max ₹10)" shipping="Built-in" best="Small Indian sellers" highlight />
            <SummaryRow name="Dukaan" monthly="₹417+" perOrder="Varies" shipping="None" best="WhatsApp sellers" />
            <SummaryRow name="Bikayi" monthly="₹333+" perOrder="None" shipping="None" best="Basic WhatsApp stores" />
            <SummaryRow name="DM2buy" monthly="Free" perOrder="Commission" shipping="None" best="Instagram sellers" />
            <SummaryRow name="Instamojo" monthly="₹0" perOrder="2-5%" shipping="None" best="Digital products" />
            <SummaryRow name="WooCommerce" monthly="₹300-800" perOrder="None" shipping="Manual" best="Technical users" />
            <SummaryRow name="Ecwid" monthly="₹0-1,200+" perOrder="None" shipping="None" best="Adding store to website" />
            <SummaryRow name="Shopify" monthly="₹2,000+" perOrder="2%" shipping="Apps needed" best="Large businesses" />
            <SummaryRow name="Wix" monthly="₹1,300+" perOrder="None" shipping="Manual" best="Design-first brands" />
            <SummaryRow name="Squarespace" monthly="₹1,400+" perOrder="3%" shipping="Manual" best="Portfolio stores" />
          </tbody>
        </table>
      </div>

      <h2>What Makes a Platform Truly "Cheap"?</h2>
      <p>
        Monthly subscription is only part of the story. The real cost of running an online store
        includes per-order fees, payment gateway charges, shipping app subscriptions, and theme or
        plugin costs. A platform that looks free upfront can cost thousands once you add the essentials.
      </p>

      <div className="not-prose my-6 bg-amber-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <span className="text-xs font-bold uppercase tracking-wide text-amber-700">Hidden Cost Alert</span>
        </div>
        <div className="text-sm text-amber-800 leading-relaxed">
          Shopify's ₹2,000/month Basic plan does not include shipping (Shiprocket app: ₹500+/month), many essential apps cost ₹500-2,000/month each, and premium themes start at ₹5,000+. Your real monthly cost on Shopify can easily reach ₹5,000-8,000.
        </div>
      </div>

      <h2>Why oBizee Ranks First</h2>
      <p>
        oBizee is the only platform on this list that charges <strong>zero monthly subscription</strong> and
        includes shipping integration out of the box. The 1% per-order fee capped at ₹10 means your
        costs stay predictable as you scale. A seller doing 100 orders per month at ₹800 average
        would pay roughly ₹800-1,000 total — compared to ₹2,500+ on most alternatives.
      </p>

      <div className="not-prose my-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
            <IndianRupee className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Real Monthly Cost at 100 Orders</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 text-center border border-green-100">
            <div className="text-xs text-gray-500 mb-1">oBizee</div>
            <div className="text-2xl font-bold text-green-600">~₹1,000</div>
            <div className="text-xs text-gray-500">No hidden costs</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <div className="text-xs text-gray-500 mb-1">Dukaan</div>
            <div className="text-xl font-bold text-gray-700">~₹2,500</div>
            <div className="text-xs text-gray-500">Sub + fees</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <div className="text-xs text-gray-500 mb-1">Shopify</div>
            <div className="text-xl font-bold text-gray-700">~₹5,000+</div>
            <div className="text-xs text-gray-500">Sub + apps + fees</div>
          </div>
        </div>
      </div>

      <h2>How to Choose the Right Platform</h2>
      <p>
        The cheapest platform is only the right platform if it meets your needs. Here is a quick
        decision framework:
      </p>
      <ul>
        <li><strong>Selling primarily on Instagram/WhatsApp?</strong> oBizee, Dukaan, or DM2buy</li>
        <li><strong>Need built-in shipping?</strong> oBizee is the only budget option with it included</li>
        <li><strong>Selling internationally?</strong> Shopify or WooCommerce are better fits</li>
        <li><strong>Selling digital products?</strong> Instamojo or Gumroad may suit you better</li>
        <li><strong>Want full customization?</strong> WooCommerce if you have technical skills</li>
      </ul>

      <Callout type="tip">
        If you are an Indian seller doing under 500 orders per month and selling primarily to Indian customers, oBizee will almost certainly be your cheapest option — and it includes shipping that others charge extra for.
      </Callout>

      <h2>The Bottom Line</h2>
      <p>
        The ecommerce platform market in India has matured significantly. You no longer need to pay
        Shopify-level prices to run a professional store. For most small and medium Indian sellers,
        the combination of zero subscription, low per-order fees, and built-in logistics makes oBizee
        the most cost-effective choice in 2026.
      </p>
      <p>
        That said, every business is different. Use the comparison table above, calculate your expected
        costs at your order volume, and pick the platform that makes financial sense for your specific situation.
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/compare/best-ecommerce-platforms-india-2026" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          Full Platform Comparison <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          oBizee Pricing <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/blog/shopify-india-pricing-review" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Shopify India Pricing Deep Dive <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default BlogPost4;
