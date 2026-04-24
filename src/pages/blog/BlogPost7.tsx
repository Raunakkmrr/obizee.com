"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, Instagram, Truck, CreditCard, Globe, Users, BarChart3, Eye, ShieldAlert } from "lucide-react";

const FeatureRow = ({ feature, dm2buy, obizee, winner }: {
  feature: string; dm2buy: string; obizee: string; winner: "dm2buy" | "obizee" | "tie";
}) => (
  <tr className="border-b border-gray-100">
    <td className="py-3 px-3 text-sm text-gray-700 font-medium">{feature}</td>
    <td className={`py-3 px-3 text-sm ${winner === "dm2buy" ? "text-green-700 font-bold bg-green-50/50" : "text-gray-600"}`}>{dm2buy}</td>
    <td className={`py-3 px-3 text-sm ${winner === "obizee" ? "text-green-700 font-bold bg-green-50/50" : "text-gray-600"}`}>{obizee}</td>
  </tr>
);

const IconSection = ({ icon: Icon, title, children, color = "orange" }: {
  icon: any; title: string; children: React.ReactNode; color?: "orange" | "green" | "red" | "blue" | "purple";
}) => {
  const colors = {
    orange: "bg-orange-100 text-orange-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
  };
  return (
    <div className="not-prose my-6 bg-gray-50 rounded-xl p-5 border border-gray-200">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${colors[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
      </div>
      <div className="text-sm text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
};

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" }) => (
  <div className={`not-prose my-6 rounded-xl p-5 border ${type === "tip" ? "bg-green-50 border-green-200" : type === "warning" ? "bg-amber-50 border-amber-200" : "bg-blue-50 border-blue-200"}`}>
    <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${type === "tip" ? "text-green-700" : type === "warning" ? "text-amber-700" : "text-blue-700"}`}>
      {type === "tip" ? "Pro Tip" : type === "warning" ? "Worth Noting" : "Good to Know"}
    </div>
    <div className={`text-sm leading-relaxed ${type === "tip" ? "text-green-800" : type === "warning" ? "text-amber-800" : "text-blue-800"}`}>{children}</div>
  </div>
);

const BlogPost7 = () => {
  return (
    <BlogPostLayout
      title="DM2buy vs oBizee: Which Platform Should Indian Sellers Choose?"
      description="A detailed comparison of DM2buy and oBizee — features, pricing, shipping, multi-channel support, and which platform is better for Indian online sellers."
      date="2026-04-23"
      readTime="7 min read"
      author="oBizee Team"
      slug="dm2buy-vs-obizee-comparison"
    >
      <p>
        DM2buy and oBizee both serve Indian online sellers, but they take fundamentally different
        approaches. DM2buy is built around Instagram selling — turning DMs into orders. oBizee is
        a broader ecommerce platform with a store builder, integrated shipping, and multi-channel support.
      </p>
      <p>
        If you are an Indian seller trying to decide between these two, this comparison will help you
        make an informed choice based on features, pricing, shipping, and overall value.
      </p>

      <h2>DM2buy: What It Does Well</h2>

      <IconSection icon={Instagram} title="Built for Instagram Sellers" color="purple">
        <p>DM2buy was designed specifically for Instagram-native sellers. If your entire business runs
        through Instagram DMs — product discovery, customer communication, and sales — DM2buy streamlines
        that workflow. It converts DM conversations into structured orders.</p>
      </IconSection>

      <IconSection icon={Users} title="Seller Community and IRL Events" color="blue">
        <p>One of DM2buy's genuine strengths is its seller community. They organize in-real-life (IRL)
        meetups, seller workshops, and community events. For many solo entrepreneurs, this sense of
        community and networking is genuinely valuable and hard to find elsewhere.</p>
      </IconSection>

      <Callout type="info">
        DM2buy has built a loyal following among Instagram sellers. Its community-first approach is
        something most ecommerce platforms overlook, and it deserves credit for that.
      </Callout>

      <h2>DM2buy: Where It Falls Short</h2>

      <div className="not-prose my-6 space-y-3">
        {[
          { icon: Instagram, title: "Instagram-only focus", desc: "DM2buy is built exclusively around Instagram. If you sell on WhatsApp, have a website, or want to share a standalone store link, DM2buy does not support that. Your business is tied to one platform.", color: "text-red-500" },
          { icon: Truck, title: "No logistics integration", desc: "DM2buy does not offer built-in shipping. You need to arrange your own courier partners, generate labels separately, and manage tracking outside the platform.", color: "text-red-500" },
          { icon: Eye, title: "Opaque pricing structure", desc: "DM2buy's pricing is not always clearly listed on their website. Commission-based models can be hard to predict, and some sellers have reported confusion about what they are being charged.", color: "text-red-500" },
          { icon: CreditCard, title: "Payment delay complaints", desc: "Some sellers in the community have reported delays in receiving their payment settlements from DM2buy. While this may not be universal, it is a concern worth researching before committing.", color: "text-red-500" },
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

      <h2>oBizee: What It Offers</h2>

      <div className="not-prose my-6 space-y-3">
        {[
          { icon: Globe, title: "Multi-channel selling", desc: "oBizee gives you a standalone store link that works everywhere — Instagram bio, WhatsApp status, Facebook, email, or even a physical business card. You are not locked into any single social platform." },
          { icon: Truck, title: "Built-in shipping (Delhivery + DTDC)", desc: "Generate AWB numbers, schedule pickups, and provide live tracking to customers — all from within the oBizee app. No third-party shipping software needed." },
          { icon: CreditCard, title: "Transparent pricing", desc: "1% per successful order, capped at ₹10. No subscription, no hidden fees. 3-month free trial to test everything before paying anything." },
          { icon: BarChart3, title: "Complete business dashboard", desc: "Order management, inventory tracking, customer data, payment processing, and shipping — all in one mobile app." },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-100">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-bold text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>Feature-by-Feature Comparison</h2>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Feature</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">DM2buy</th>
              <th className="py-3 px-3 text-left text-green-600 font-semibold bg-green-50/50">oBizee</th>
            </tr>
          </thead>
          <tbody>
            <FeatureRow feature="Online store link" dm2buy="No (Instagram only)" obizee="Yes (shareable link)" winner="obizee" />
            <FeatureRow feature="Instagram selling" dm2buy="Excellent (core focus)" obizee="Via store link in bio" winner="dm2buy" />
            <FeatureRow feature="WhatsApp selling" dm2buy="Not supported" obizee="Share store/order links" winner="obizee" />
            <FeatureRow feature="Shipping integration" dm2buy="Not built-in" obizee="Delhivery + DTDC" winner="obizee" />
            <FeatureRow feature="AWB generation" dm2buy="Manual/external" obizee="In-app" winner="obizee" />
            <FeatureRow feature="Pickup scheduling" dm2buy="Manual/external" obizee="In-app" winner="obizee" />
            <FeatureRow feature="Live tracking" dm2buy="Not available" obizee="Built-in" winner="obizee" />
            <FeatureRow feature="Payment processing" dm2buy="Available" obizee="Cashfree (built-in)" winner="tie" />
            <FeatureRow feature="Pricing transparency" dm2buy="Commission-based (variable)" obizee="1% capped at ₹10" winner="obizee" />
            <FeatureRow feature="Free trial" dm2buy="Free to start" obizee="3 months free" winner="obizee" />
            <FeatureRow feature="Seller community" dm2buy="Strong (IRL events)" obizee="Growing" winner="dm2buy" />
            <FeatureRow feature="Order dashboard" dm2buy="Basic" obizee="Full dashboard" winner="obizee" />
            <FeatureRow feature="Inventory management" dm2buy="Limited" obizee="Built-in" winner="obizee" />
            <FeatureRow feature="Store customization" dm2buy="Not applicable" obizee="Templates + branding" winner="obizee" />
            <FeatureRow feature="Custom order forms" dm2buy="Not available" obizee="Available" winner="obizee" />
            <FeatureRow feature="Analytics" dm2buy="Basic Instagram metrics" obizee="Order + revenue analytics" winner="obizee" />
            <FeatureRow feature="Multi-device" dm2buy="Mobile" obizee="Mobile-first" winner="tie" />
            <FeatureRow feature="Customer data ownership" dm2buy="Limited (Instagram-dependent)" obizee="Full ownership" winner="obizee" />
            <FeatureRow feature="Product variants" dm2buy="Limited" obizee="Supported" winner="obizee" />
          </tbody>
        </table>
      </div>

      <div className="not-prose my-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Feature Score</h3>
        </div>
        <p className="text-gray-700 text-sm mb-4">
          Out of 19 features compared, oBizee leads in <strong>14</strong>, DM2buy leads in <strong>2</strong>, and <strong>3</strong> are tied.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 text-center border border-green-100">
            <div className="text-3xl font-bold text-green-600">14</div>
            <div className="text-xs text-gray-500">oBizee wins</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <div className="text-3xl font-bold text-gray-600">2</div>
            <div className="text-xs text-gray-500">DM2buy wins</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <div className="text-3xl font-bold text-gray-400">3</div>
            <div className="text-xs text-gray-500">Tied</div>
          </div>
        </div>
      </div>

      <h2>The Instagram Dependency Risk</h2>
      <p>
        Building your entire business on Instagram is convenient but risky. If Instagram changes its
        algorithm, restricts business accounts, or goes down for a day, your business stops. With
        DM2buy, you are doubly dependent — on Instagram for customer reach AND on DM2buy for order processing.
      </p>
      <p>
        oBizee gives you a standalone store that works independently of any social platform. You can
        still use Instagram for marketing — post your products, run reels, engage with followers —
        but your sales infrastructure is not tied to it.
      </p>

      <Callout type="warning">
        Several sellers have reported that Instagram algorithm changes significantly impacted their
        DM2buy sales because the platform depends entirely on Instagram's DM system. Having a
        standalone store link provides a safety net.
      </Callout>

      <h2>Our Recommendation</h2>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-purple-50 rounded-2xl p-5 border-2 border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <Instagram className="w-6 h-6 text-purple-600" />
            <h4 className="font-bold text-gray-900">Choose DM2buy if:</h4>
          </div>
          <ul className="space-y-2">
            {["100% of your sales come from Instagram DMs", "You value community and IRL events", "You handle your own shipping", "Instagram dependency is acceptable"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-50 rounded-2xl p-5 border-2 border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-6 h-6 text-green-600" />
            <h4 className="font-bold text-gray-900">Choose oBizee if:</h4>
          </div>
          <ul className="space-y-2">
            {["You sell on multiple channels", "You need built-in shipping", "You want transparent pricing", "You want a standalone online store", "You want full customer data ownership"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p>
        Both platforms serve Indian sellers, but they solve different problems. DM2buy is a good
        tool for Instagram-native sellers who want to formalize their DM-based sales. oBizee is a
        more complete platform for sellers who want to build a sustainable, multi-channel online business
        with integrated logistics.
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/compare/obizee-vs-dm2buy" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          Full oBizee vs DM2buy Comparison <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          oBizee Pricing <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/blog/dukaan-app-review-2026" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Dukaan Review 2026 <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default BlogPost7;
