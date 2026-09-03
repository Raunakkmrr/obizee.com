"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, IndianRupee, MessageSquare, TrendingUp, Star, Truck, CreditCard, Layers } from "lucide-react";

const ProConCard = ({ type, items }: { type: "pro" | "con"; items: string[] }) => (
  <div className={`not-prose rounded-2xl p-5 border-2 ${type === "pro" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
    <div className="flex items-center gap-2 mb-4">
      {type === "pro" ? <CheckCircle className="w-6 h-6 text-green-600" /> : <XCircle className="w-6 h-6 text-red-500" />}
      <h3 className="text-lg font-bold text-gray-900">{type === "pro" ? "What Dukaan Does Well" : "Where Dukaan Falls Short"}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          {type === "pro" ? (
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
          ) : (
            <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
          )}
          <span className="text-sm text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ComparisonRow = ({ feature, dukaan, obizee, winner }: {
  feature: string; dukaan: string; obizee: string; winner: "dukaan" | "obizee" | "tie";
}) => (
  <tr className="border-b border-gray-100">
    <td className="py-3 px-3 text-sm text-gray-700 font-medium">{feature}</td>
    <td className={`py-3 px-3 text-sm ${winner === "dukaan" ? "text-green-700 font-bold bg-green-50/50" : "text-gray-600"}`}>{dukaan}</td>
    <td className={`py-3 px-3 text-sm ${winner === "obizee" ? "text-green-700 font-bold bg-green-50/50" : "text-gray-600"}`}>{obizee}</td>
  </tr>
);

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" }) => (
  <div className={`not-prose my-6 rounded-xl p-5 border ${type === "tip" ? "bg-green-50 border-green-200" : "bg-blue-50 border-blue-200"}`}>
    <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${type === "tip" ? "text-green-700" : "text-blue-700"}`}>
      {type === "tip" ? "Pro Tip" : "Good to Know"}
    </div>
    <div className={`text-sm leading-relaxed ${type === "tip" ? "text-green-800" : "text-blue-800"}`}>{children}</div>
  </div>
);

const BlogPost6 = () => {
  return (
    <BlogPostLayout
      title="Dukaan App Review 2026: Pros, Cons, and Better Alternatives"
      description="An honest review of Dukaan in 2026 — what it does well, where it falls short, pricing breakdown, and how it compares to alternatives like oBizee for Indian sellers."
      date="2026-04-24"
      updatedDate="2026-08-31"
      readTime="7 min read"
      author="Raunak Kumar"
      slug="dukaan-app-review-2026"
    >
      <p>
        Dukaan has been one of the most talked-about ecommerce platforms in India since its launch.
        With heavy marketing, a recognizable brand, and a focus on helping small businesses sell
        online, it has carved out a significant share of the Indian D2C market.
      </p>
      <p>
        But is Dukaan the right platform for your business in 2026? In this review, we will look at
        what Dukaan does well, where it genuinely falls short, and whether there are better
        alternatives depending on your needs.
      </p>

      <h2>What Is Dukaan?</h2>
      <p>
        Dukaan is an Indian ecommerce platform that lets sellers create an online store, accept
        payments, and manage orders. It positions itself as an easy-to-use alternative to Shopify,
        specifically designed for Indian merchants. The platform is available as a mobile app and
        offers WhatsApp-based selling tools.
      </p>

      <Callout type="info">
        Dukaan was founded in 2020 and has grown rapidly. It is a legitimate, well-funded platform with thousands of active merchants.
        This review is based on publicly available information and user feedback as of April 2026.
      </Callout>

      <h2>The Good: Where Dukaan Shines</h2>

      <ProConCard
        type="pro"
        items={[
          "Strong WhatsApp integration — share catalogs, send order updates, and manage customers through WhatsApp natively",
          "Marketing tools built in — discount codes, abandoned cart recovery, and basic CRM features",
          "Established brand — well-known in the Indian market with active customer support",
          "Easy onboarding — store setup is quick and does not require technical knowledge",
          "Multiple payment gateways — supports Razorpay and other Indian payment providers",
          "Plugin marketplace — growing ecosystem of add-ons for extra functionality",
        ]}
      />

      <h2>The Not-So-Good: Where Dukaan Falls Short</h2>

      <ProConCard
        type="con"
        items={[
          "No built-in shipping integration — you need to arrange your own courier partners or use separate shipping apps",
          "Annual subscription only — plans start at ₹4,999/year (no monthly option), meaning significant upfront commitment",
          "Higher per-order fees on lower plans — the fee structure can eat into margins for small sellers",
          "Limited free plan — the free tier is very restricted, pushing you toward paid plans quickly",
          "Template customization is basic — store design options are limited compared to platforms like Shopify or Wix",
          "No integrated logistics tracking — customers and sellers lack a unified shipping dashboard",
        ]}
      />

      <h2>Dukaan Pricing Breakdown</h2>
      <p>
        Dukaan uses an annual subscription model. Here is what the plans look like in 2026:
      </p>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border-2 border-gray-200 text-center">
          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Starter</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">₹4,999</div>
          <div className="text-xs text-gray-500 mb-2">/year (~₹417/month)</div>
          <div className="text-sm text-gray-600">Basic store + limited products + per-order fees</div>
        </div>
        <div className="bg-white rounded-2xl p-5 border-2 border-blue-200 text-center">
          <div className="text-xs text-blue-600 uppercase tracking-wide mb-1">Business</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">₹9,999</div>
          <div className="text-xs text-gray-500 mb-2">/year (~₹833/month)</div>
          <div className="text-sm text-gray-600">More products + marketing tools + lower per-order fees</div>
        </div>
        <div className="bg-white rounded-2xl p-5 border-2 border-purple-200 text-center">
          <div className="text-xs text-purple-600 uppercase tracking-wide mb-1">Enterprise</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">₹24,999+</div>
          <div className="text-xs text-gray-500 mb-2">/year (~₹2,083/month)</div>
          <div className="text-sm text-gray-600">Unlimited products + priority support + advanced features</div>
        </div>
      </div>

      <div className="not-prose my-6 bg-amber-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-center gap-2 mb-2">
          <CreditCard className="w-5 h-5 text-amber-600" />
          <span className="text-xs font-bold uppercase tracking-wide text-amber-700">Annual Lock-In</span>
        </div>
        <div className="text-sm text-amber-800 leading-relaxed">
          Unlike platforms that offer monthly billing, Dukaan requires annual payment upfront. If you are a new seller unsure whether online selling will work, committing ₹5,000-25,000 before your first sale is a significant risk.
        </div>
      </div>

      <h2>Cost Comparison: Dukaan vs oBizee at Different Volumes</h2>
      <p>
        Let us compare real costs for a seller at different order volumes. oBizee has 0 SUBSCRIPTION
        and 0 SETUP FEE (see <Link href="/pricing">Pricing</Link> for the structure). Dukaan charges a
        yearly subscription plus per-order fees.
      </p>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Monthly Volume</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Dukaan (Starter)</th>
              <th className="py-3 px-3 text-left text-green-600 font-semibold bg-green-50/50">oBizee</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">You Save</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["30 orders (avg ₹600)", "₹417 + fees", "₹180", "₹250+/mo"],
              ["80 orders (avg ₹800)", "₹417 + fees", "₹640", "Variable"],
              ["150 orders (avg ₹1,000)", "₹833 + fees", "₹1,500", "Depends on Dukaan fees"],
              ["300 orders (avg ₹1,500)", "₹833 + fees", "₹3,000", "Dukaan may be cheaper"],
            ].map(([volume, dukaan, obizee, save]) => (
              <tr key={volume} className="border-b border-gray-100">
                <td className="py-3 px-3 text-sm text-gray-700 font-medium">{volume}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{dukaan}</td>
                <td className="py-3 px-3 text-sm text-green-700 font-bold bg-green-50/50">{obizee}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{save}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="tip">
        At lower volumes (under 100 orders/month), oBizee is almost always cheaper because there is no subscription. At higher volumes, Dukaan's fixed subscription can sometimes work out to a lower per-order cost — but remember to factor in that oBizee includes shipping integration that Dukaan does not.
      </Callout>

      <h2>The Shipping Gap</h2>
      <p>
        This is arguably the biggest difference between Dukaan and oBizee, and it deserves its own section. Shipping is the single biggest operational headache for Indian online sellers.
      </p>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-red-50 rounded-2xl p-5 border-2 border-red-200">
          <div className="flex items-center gap-2 mb-3">
            <Truck className="w-6 h-6 text-red-500" />
            <h4 className="font-bold text-gray-900">Dukaan Shipping</h4>
          </div>
          <ul className="space-y-2">
            {["No built-in courier integration", "Must use third-party shipping apps", "Extra monthly cost for shipping software", "Separate tracking management", "Label generation requires additional setup"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-50 rounded-2xl p-5 border-2 border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <Truck className="w-6 h-6 text-green-600" />
            <h4 className="font-bold text-gray-900">oBizee Shipping</h4>
          </div>
          <ul className="space-y-2">
            {["Delhivery + DTDC built in", "Generate AWB from the app", "Schedule pickups directly", "Live tracking for customers", "No extra cost for shipping tools"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Feature-by-Feature Comparison</h2>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Feature</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Dukaan</th>
              <th className="py-3 px-3 text-left text-green-600 font-semibold bg-green-50/50">oBizee</th>
            </tr>
          </thead>
          <tbody>
            <ComparisonRow feature="Monthly subscription" dukaan="₹417+ (annual billing)" obizee="₹0" winner="obizee" />
            <ComparisonRow feature="Setup / website-creation fee" dukaan="₹0 on free plan" obizee="₹0" winner="tie" />
            <ComparisonRow feature="Free until" dukaan="Limited free plan" obizee="₹50,000 in orders" winner="obizee" />
            <ComparisonRow feature="WhatsApp selling" dukaan="Excellent" obizee="Share store/order links" winner="dukaan" />
            <ComparisonRow feature="Marketing tools" dukaan="Discount codes, CRM" obizee="Basic (growing)" winner="dukaan" />
            <ComparisonRow feature="Shipping integration" dukaan="Not built-in" obizee="Delhivery + DTDC" winner="obizee" />
            <ComparisonRow feature="Payment processing" dukaan="Razorpay + others" obizee="Razorpay + Paytm built in" winner="obizee" />
            <ComparisonRow feature="Mobile-first" dukaan="Yes" obizee="Yes" winner="tie" />
          </tbody>
        </table>
      </div>

      <h2>Who Should Use Dukaan?</h2>
      <p>
        Dukaan is a solid choice if you primarily sell through WhatsApp, need marketing tools like
        abandoned cart recovery and discount codes, and are willing to handle shipping separately. It
        works well for sellers who have a steady order volume and can commit to an annual plan.
      </p>

      <h2>Who Should Choose oBizee Instead?</h2>
      <p>
        oBizee is the better fit if you want zero upfront commitment, need built-in shipping
        (Delhivery, DTDC and Blue Dart), or are just starting out and want to test online selling without
        financial risk. The pay-per-order model means you never pay more than you earn.
      </p>

      <div className="not-prose my-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">The Bottom Line</h3>
        </div>
        <p className="text-gray-700 text-sm mb-2">
          Dukaan is a <strong>good platform</strong> with clear strengths in WhatsApp selling and marketing. But for sellers who need integrated shipping, flexible pricing, and zero upfront risk, oBizee offers a more complete package at a lower cost.
        </p>
      </div>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/compare/obizee-vs-dukaan" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          Full oBizee vs Dukaan Comparison <ArrowRight className="w-4 h-4" />
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

export default BlogPost6;
