"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { IndianRupee, TrendingDown, Shield, Percent, ArrowRight, CheckCircle, XCircle } from "lucide-react";

const PriceRow = ({ order, fee, note }: { order: string; fee: string; note?: string }) => (
  <div className="flex items-center justify-between py-3 border-b border-orange-100 last:border-0">
    <span className="text-gray-700 text-sm">{order}</span>
    <div className="text-right">
      <span className="text-xl font-bold text-orange-600">{fee}</span>
      {note && <span className="block text-xs text-gray-500">{note}</span>}
    </div>
  </div>
);

const ComparisonRow = ({ scenario, obizee, shopify, dukaan }: { scenario: string; obizee: string; shopify: string; dukaan: string }) => (
  <tr className="border-b border-gray-100">
    <td className="py-3 pr-3 text-sm text-gray-700 font-medium">{scenario}</td>
    <td className="py-3 px-3 text-sm text-green-700 font-bold bg-green-50/50">{obizee}</td>
    <td className="py-3 px-3 text-sm text-gray-600">{shopify}</td>
    <td className="py-3 px-3 text-sm text-gray-600">{dukaan}</td>
  </tr>
);

const BlogPost2 = () => {
  return (
    <BlogPostLayout
      title="Why oBizee Charges Only 1% — And Why That Matters for Small Businesses"
      description="Understanding oBizee's pricing model: 1% per order capped at ₹10. How it compares to Shopify, Dukaan, and why it's the most affordable option for Indian sellers."
      date="2026-04-23"
      readTime="6 min read"
      author="Raunak Kumar"
      slug="why-obizee-charges-only-1-percent"
    >
      <p>
        If you have ever looked into selling online, you have probably been put off by the costs.
        Shopify starts at over ₹2,000 per month. Dukaan charges yearly plans. Marketplaces like Amazon take 10-30% of every sale. For a
        small business just starting out, these numbers feel like a wall.
      </p>
      <p>
        oBizee works differently. There is no monthly subscription. You pay{" "}
        <strong>1% per successful order, capped at ₹10</strong>. And every new merchant gets a <strong>3-month free trial</strong>.
      </p>

      {/* Visual pricing breakdown */}
      <div className="not-prose my-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
            <IndianRupee className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">How the 1% Model Works</h3>
        </div>
        <PriceRow order="₹200 order" fee="₹2" />
        <PriceRow order="₹500 order" fee="₹5" />
        <PriceRow order="₹1,000 order" fee="₹10" note="Cap reached" />
        <PriceRow order="₹5,000 order" fee="₹10" note="Still ₹10" />
        <PriceRow order="₹20,000 order" fee="₹10" note="Always ₹10" />
        <div className="mt-4 bg-white rounded-xl p-4 border border-orange-100">
          <p className="text-sm text-gray-700">
            <strong className="text-orange-600">The cap is the key.</strong> The more your business grows and the higher your order values, the less you pay as a percentage.
          </p>
        </div>
      </div>

      <h2>Real Cost Comparison: oBizee vs Others</h2>
      <p>Numbers speak louder than marketing claims. Here is what you would actually pay per month:</p>

      {/* Comparison table */}
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Scenario</th>
              <th className="py-3 px-3 text-left text-orange-600 font-semibold bg-green-50/50">oBizee</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Shopify</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Dukaan</th>
            </tr>
          </thead>
          <tbody>
            <ComparisonRow scenario="50 orders/month (avg ₹500)" obizee="₹250" shopify="₹2,000+" dukaan="₹417 + fees" />
            <ComparisonRow scenario="100 orders/month (avg ₹500)" obizee="₹500" shopify="₹2,000+" dukaan="₹417 + fees" />
            <ComparisonRow scenario="200 orders/month (avg ₹1,000)" obizee="₹2,000" shopify="₹2,000 + 2% fees" dukaan="₹833 + fees" />
            <ComparisonRow scenario="500 orders/month (avg ₹2,000)" obizee="₹5,000" shopify="₹2,000 + ₹20,000+" dukaan="Higher tier + fees" />
          </tbody>
        </table>
      </div>

      {/* Cap benefit highlight */}
      <div className="not-prose my-8 bg-green-50 rounded-2xl p-6 border border-green-200">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="w-8 h-8 text-green-600" />
          <h3 className="text-lg font-bold text-gray-900">Why the ₹10 Cap Matters for High-Value Sellers</h3>
        </div>
        <p className="text-gray-700 text-sm mb-4">
          Consider a boutique seller whose average order is ₹3,000. Without the cap: ₹30/order. With oBizee's cap: <strong>₹10/order</strong>.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-green-100 text-center">
            <div className="text-xs text-gray-500 mb-1">100 orders × ₹3,000</div>
            <div className="text-lg font-bold text-gray-900">Without cap: ₹3,000</div>
            <div className="text-2xl font-bold text-green-600">With oBizee: ₹1,000</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-green-100 text-center">
            <div className="text-xs text-gray-500 mb-1">Annual savings</div>
            <div className="text-3xl font-bold text-green-600">₹24,000</div>
            <div className="text-xs text-gray-500">back in your pocket</div>
          </div>
        </div>
      </div>

      <h2>Why No Subscription Helps Small Businesses</h2>
      <p>
        A monthly subscription is a fixed cost you pay regardless of sales. Spending ₹2,000/month on Shopify while making only ₹5,000 in revenue means 40% goes to your platform — before product costs and shipping.
      </p>
      <p>
        With oBizee, costs are tied to revenue. Slow month with 10 orders? You pay ₹30. Great month with 200 orders? You pay more — but only because you earned more. This removes the financial pressure that kills many small businesses.
      </p>

      {/* Swiggy comparison */}
      <div className="not-prose my-8 bg-red-50 rounded-2xl p-6 border border-red-200">
        <div className="flex items-center gap-3 mb-3">
          <TrendingDown className="w-8 h-8 text-red-500" />
          <h3 className="text-lg font-bold text-gray-900">vs Food Delivery Platforms (Swiggy/Zomato)</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div className="bg-white rounded-xl p-4 border border-red-100 text-center">
            <div className="text-xs text-gray-500 mb-1">₹500 food order on Swiggy</div>
            <div className="flex items-center justify-center gap-1">
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="text-xl font-bold text-red-600">₹125-150</span>
            </div>
            <div className="text-xs text-gray-500">25-30% commission</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-green-100 text-center">
            <div className="text-xs text-gray-500 mb-1">₹500 food order on oBizee</div>
            <div className="flex items-center justify-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-xl font-bold text-green-600">₹5</span>
            </div>
            <div className="text-xs text-gray-500">1% fee</div>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          If you already have customers via Instagram, WhatsApp, or word of mouth, there is no reason to give away 25% of your revenue.
        </p>
      </div>

      <h2>What You Get for That 1%</h2>
      <div className="not-prose my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          "Online store", "Order dashboard", "Inventory tracking", "Payment processing",
          "Delhivery + DTDC", "Custom forms", "Store templates", "Analytics",
        ].map((feature) => (
          <div key={feature} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200">
            <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-1" />
            <span className="text-xs font-medium text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      <p>On other platforms, several of these features cost extra. On oBizee, everything is built in.</p>

      <h2>The Bottom Line</h2>
      <p>
        Pricing should not be the reason a small business cannot go online. A crochet artist selling
        earrings for ₹300 should not pay ₹2,000/month for a store. A home baker doing 30 orders a month should not give 25% to an aggregator.
      </p>
      <p>
        oBizee's 1% model with the ₹10 cap solves this directly. It is the most affordable
        way to run an online store in India.
      </p>
      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          See Full Pricing <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/shopify-alternative" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          oBizee vs Shopify <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default BlogPost2;
