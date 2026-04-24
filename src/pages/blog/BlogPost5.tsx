"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, IndianRupee, Calculator, AlertTriangle, TrendingUp, Building2, Store } from "lucide-react";

const CostRow = ({ item, cost, note }: { item: string; cost: string; note?: string }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
    <span className="text-gray-700 text-sm">{item}</span>
    <div className="text-right">
      <span className="text-lg font-bold text-gray-900">{cost}</span>
      {note && <span className="block text-xs text-gray-500">{note}</span>}
    </div>
  </div>
);

const VolumeCard = ({ orders, avgOrder, shopifyCost, obizeeCost }: {
  orders: number; avgOrder: string; shopifyCost: string; obizeeCost: string;
}) => (
  <div className="not-prose bg-white rounded-xl p-4 border border-gray-200">
    <div className="text-center mb-3 pb-3 border-b border-gray-100">
      <div className="text-2xl font-bold text-gray-900">{orders}</div>
      <div className="text-xs text-gray-500">orders/month (avg {avgOrder})</div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">Shopify (real cost)</span>
        <span className="text-sm font-bold text-red-600">{shopifyCost}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">oBizee</span>
        <span className="text-sm font-bold text-green-600">{obizeeCost}</span>
      </div>
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

const BlogPost5 = () => {
  return (
    <BlogPostLayout
      title="Shopify India Pricing: Is It Worth It for Small Businesses?"
      description="A detailed breakdown of Shopify's real cost for Indian sellers — monthly plans, transaction fees, app costs, and how it compares to affordable alternatives like oBizee."
      date="2026-04-23"
      readTime="7 min read"
      author="oBizee Team"
      slug="shopify-india-pricing-review"
    >
      <p>
        Shopify is the world's most popular ecommerce platform, and for good reason. It is polished,
        reliable, and packed with features. But when Indian small business owners look at the actual
        cost of running a Shopify store, the numbers often tell a different story than the marketing page.
      </p>
      <p>
        This is not a hit piece on Shopify. It is genuinely a great platform — for the right business
        at the right scale. But if you are a small Indian seller doing 30-200 orders per month, you
        deserve to know the <strong>real cost</strong> before committing.
      </p>

      <h2>Shopify's Advertised Pricing</h2>
      <p>
        Shopify offers three main plans for Indian merchants. The prices listed on their website look
        straightforward, but they do not tell the whole story.
      </p>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 text-center">
          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Basic</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">₹2,000+</div>
          <div className="text-xs text-gray-500 mb-3">/month</div>
          <div className="text-sm text-gray-600">2% transaction fee on all third-party payment gateways</div>
        </div>
        <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 text-center">
          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Shopify</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">₹5,300+</div>
          <div className="text-xs text-gray-500 mb-3">/month</div>
          <div className="text-sm text-gray-600">1% transaction fee. Professional reports included.</div>
        </div>
        <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 text-center">
          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Advanced</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">₹21,000+</div>
          <div className="text-xs text-gray-500 mb-3">/month</div>
          <div className="text-sm text-gray-600">0.5% transaction fee. Advanced analytics and reporting.</div>
        </div>
      </div>

      <h2>The Hidden Costs Nobody Talks About</h2>
      <p>
        The monthly subscription is just the starting point. Here is what a typical Indian small
        business ends up paying on Shopify:
      </p>

      <div className="not-prose my-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-2 border-red-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Real Monthly Cost on Shopify Basic</h3>
        </div>
        <CostRow item="Shopify Basic plan" cost="₹2,000+" />
        <CostRow item="Transaction fees (2% on 100 orders × ₹800)" cost="₹1,600" note="Using third-party gateway" />
        <CostRow item="Shipping app (Shiprocket/Delhivery)" cost="₹500-1,000" note="Monthly subscription" />
        <CostRow item="Email marketing app (Klaviyo/Mailchimp)" cost="₹500-1,500" note="Most free tiers are limited" />
        <CostRow item="Reviews/social proof app" cost="₹0-500" />
        <CostRow item="Premium theme (amortized)" cost="₹400-800" note="₹5,000-10,000 one-time" />
        <div className="mt-4 bg-white rounded-xl p-4 border border-red-100 text-center">
          <div className="text-xs text-gray-500 mb-1">Realistic monthly total</div>
          <div className="text-3xl font-bold text-red-600">₹5,000 - ₹7,400</div>
          <div className="text-xs text-gray-500">for a small seller on Shopify Basic</div>
        </div>
      </div>

      <Callout type="warning">
        Shopify's app marketplace is both its greatest strength and its biggest cost trap. Many features that are built-in on other platforms (shipping, email, reviews) require paid apps on Shopify. A seller using 3-4 essential apps can easily add ₹2,000-4,000/month to their bill.
      </Callout>

      <h2>Cost at Different Order Volumes</h2>
      <p>
        Let us calculate the real cost for an Indian seller at different scales, comparing Shopify
        Basic (with essential apps) to oBizee:
      </p>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <VolumeCard orders={30} avgOrder="₹800" shopifyCost="₹4,480+" obizeeCost="₹240" />
        <VolumeCard orders={100} avgOrder="₹800" shopifyCost="₹5,600+" obizeeCost="₹800" />
        <VolumeCard orders={300} avgOrder="₹1,200" shopifyCost="₹9,200+" obizeeCost="₹3,000" />
      </div>

      <div className="not-prose my-6 bg-green-50 rounded-xl p-5 border border-green-200">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span className="text-xs font-bold uppercase tracking-wide text-green-700">The Break-Even Point</span>
        </div>
        <div className="text-sm text-green-800 leading-relaxed">
          Shopify starts making financial sense when you are doing <strong>500+ orders per month</strong> and need advanced features like multi-currency, international shipping, or a large app ecosystem. Below that threshold, you are paying a premium for features you may not use.
        </div>
      </div>

      <h2>Where Shopify Genuinely Wins</h2>
      <p>
        Being honest here — Shopify is the better choice in several scenarios. Ignoring these would
        make this article misleading:
      </p>

      <div className="not-prose my-6 space-y-3">
        {[
          { title: "International selling", desc: "Multi-currency, international shipping integrations, and global payment gateways are Shopify's strength." },
          { title: "App ecosystem", desc: "Thousands of apps for every conceivable need — from loyalty programs to subscription boxes." },
          { title: "Enterprise scaling", desc: "Shopify Plus handles millions of orders. If you are growing fast and need enterprise features, Shopify scales with you." },
          { title: "Advanced customization", desc: "Liquid templating, custom checkout experiences, headless commerce — Shopify offers deep technical customization." },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-bold text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>Where Shopify Falls Short for Indian Sellers</h2>

      <div className="not-prose my-6 space-y-3">
        {[
          { title: "No built-in shipping for India", desc: "You need a separate app (Shiprocket, Delhivery plugin) — adding cost and complexity." },
          { title: "Pricing in USD mindset", desc: "Many apps, themes, and integrations are priced in dollars. A $20/month app is ₹1,700+." },
          { title: "Overkill for small catalogs", desc: "If you sell 10-50 products via Instagram and WhatsApp, Shopify's feature set is far more than you need." },
          { title: "Monthly commitment regardless of sales", desc: "Even if you have zero sales in a month, you still pay the full subscription plus app fees." },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-100">
            <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-bold text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>Shopify vs oBizee: Side-by-Side</h2>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Feature</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Shopify Basic</th>
              <th className="py-3 px-3 text-left text-green-600 font-semibold bg-green-50/50">oBizee</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Monthly fee", "₹2,000+", "₹0"],
              ["Per-order fee", "2%", "1% (max ₹10)"],
              ["Shipping integration", "Paid apps needed", "Delhivery + DTDC built-in"],
              ["Free trial", "3 days", "3 months"],
              ["Mobile app management", "Yes", "Yes (mobile-first)"],
              ["Payment gateway", "Shopify Payments / 3rd party", "Cashfree (built-in)"],
              ["Best for", "Large/international businesses", "Small-medium Indian sellers"],
              ["App ecosystem", "Thousands of apps", "Core features built-in"],
            ].map(([feature, shopify, obizee]) => (
              <tr key={feature} className="border-b border-gray-100">
                <td className="py-3 px-3 text-sm text-gray-700 font-medium">{feature}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{shopify}</td>
                <td className="py-3 px-3 text-sm text-green-700 font-bold bg-green-50/50">{obizee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Our Honest Recommendation</h2>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border-2 border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-6 h-6 text-blue-600" />
            <h4 className="font-bold text-gray-900">Choose Shopify if:</h4>
          </div>
          <ul className="space-y-2">
            {["500+ orders/month", "Selling internationally", "Need advanced app integrations", "Have budget for ₹5,000+/month in platform costs"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <Store className="w-6 h-6 text-green-600" />
            <h4 className="font-bold text-gray-900">Choose oBizee if:</h4>
          </div>
          <ul className="space-y-2">
            {["Under 500 orders/month", "Selling to Indian customers", "Need built-in shipping", "Want zero upfront commitment", "Selling via Instagram/WhatsApp"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p>
        Shopify is an excellent platform that has earned its reputation. But excellence at a premium
        price does not make sense for every business. If you are a small or medium Indian seller, the
        math simply favors a platform built for your scale and market.
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/compare/obizee-vs-shopify" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          Full oBizee vs Shopify Comparison <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          oBizee Pricing <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/blog/cheapest-ecommerce-platforms-india-2026" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          10 Cheapest Platforms Ranked <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default BlogPost5;
