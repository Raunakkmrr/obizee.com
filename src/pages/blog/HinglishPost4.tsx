"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, IndianRupee, Crown, Star, Truck, CreditCard, Smartphone, BarChart3, Zap } from "lucide-react";

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" }) => (
  <div className={`not-prose my-6 rounded-xl p-5 border ${type === "tip" ? "bg-green-50 border-green-200" : "bg-blue-50 border-blue-200"}`}>
    <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${type === "tip" ? "text-green-700" : "text-blue-700"}`}>
      {type === "tip" ? "Pro Tip" : "Good to Know"}
    </div>
    <div className={`text-sm leading-relaxed ${type === "tip" ? "text-green-800" : "text-blue-800"}`}>{children}</div>
  </div>
);

const PlatformCard = ({ name, monthlyFee, perOrderFee, shippingIntegration, mobileApp, freeTrialDays, winner, features }: {
  name: string; monthlyFee: string; perOrderFee: string; shippingIntegration: boolean; mobileApp: boolean; freeTrialDays: string; winner?: boolean; features: string[];
}) => (
  <div className={`not-prose rounded-2xl p-5 border-2 ${winner ? "bg-green-50 border-green-300 ring-2 ring-green-200" : "bg-white border-gray-200"}`}>
    <div className="flex items-center gap-2 mb-1">
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      {winner && <Crown className="w-5 h-5 text-green-600" />}
    </div>
    {winner && <div className="text-xs font-bold text-green-600 uppercase tracking-wide mb-3">Sabse Sasta & Best Value</div>}
    <div className="space-y-2 mb-4">
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Monthly Fee</span>
        <span className={`font-bold ${winner ? "text-green-700" : "text-gray-900"}`}>{monthlyFee}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Per Order</span>
        <span className={`font-bold ${winner ? "text-green-700" : "text-gray-900"}`}>{perOrderFee}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Free Trial</span>
        <span className="font-bold text-gray-900">{freeTrialDays}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Shipping Built-in</span>
        <span>{shippingIntegration ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-400" />}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Mobile App</span>
        <span>{mobileApp ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-400" />}</span>
      </div>
    </div>
    <div className="border-t border-gray-100 pt-3 space-y-1.5">
      {features.map((f) => (
        <div key={f} className="flex items-start gap-2">
          <Star className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
          <span className="text-xs text-gray-600">{f}</span>
        </div>
      ))}
    </div>
  </div>
);

const PricingExample = ({ orderValue, obizee, shopify, dukaan }: {
  orderValue: string; obizee: string; shopify: string; dukaan: string;
}) => (
  <div className="not-prose bg-white rounded-xl p-4 border border-gray-200">
    <div className="text-center mb-3">
      <div className="text-xs text-gray-500 uppercase tracking-wide">Order Value</div>
      <div className="text-xl font-bold text-gray-900">{orderValue}</div>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-center bg-green-50 rounded-lg p-2">
        <span className="text-xs font-medium text-gray-700">oBizee</span>
        <span className="text-sm font-bold text-green-700">{obizee}</span>
      </div>
      <div className="flex justify-between items-center bg-gray-50 rounded-lg p-2">
        <span className="text-xs font-medium text-gray-700">Shopify</span>
        <span className="text-sm font-bold text-gray-700">{shopify}</span>
      </div>
      <div className="flex justify-between items-center bg-gray-50 rounded-lg p-2">
        <span className="text-xs font-medium text-gray-700">Dukaan</span>
        <span className="text-sm font-bold text-gray-700">{dukaan}</span>
      </div>
    </div>
  </div>
);

const HinglishPost4 = () => {
  return (
    <BlogPostLayout
      title="India Mein Sabse Sasta Ecommerce Platform Kaun Sa Hai? [2026]"
      description="India ka sabse sasta ecommerce platform kaun sa hai? oBizee — 0 SUBSCRIPTION, 0 SETUP FEE. Shopify, Dukaan se comparison."
      date="2026-04-24"
      updatedDate="2026-08-31"
      readTime="6 min read"
      author="Raunak Kumar"
      slug="sabse-sasta-ecommerce-platform-india"
    >
      <p>
        Jab aap online selling shuru karna chahte hain, toh sabse pehla sawaal yeh aata hai — "Kaun
        sa platform use karein?" Aur uske turant baad doosra sawaal — "Kitna kharcha aayega?"
      </p>
      <p>
        India mein bahut saare ecommerce platforms hain — Shopify, Dukaan, Bikayi, DM2Buy, WooCommerce,
        aur ab <strong>oBizee</strong>. Har ek ki alag pricing hai, alag features hain. Is article mein
        hum sabki comparison karenge — <strong>Hinglish mein, seedha seedha</strong> — taaki aapko
        samajh aa jaye ki kaun sa platform aapke liye sabse sasta aur sabse acha hai.
      </p>

      <h2>Platform-by-Platform Comparison</h2>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <PlatformCard
          name="oBizee"
          monthlyFee="₹0"
          perOrderFee="Pricing page dekhein"
          shippingIntegration={true}
          mobileApp={true}
          freeTrialDays="3 Mahine Free"
          winner={true}
          features={[
            "Koi monthly ya yearly fees nahi",
            "Phone se poora setup aur manage",
            "Delhivery, DTDC, Blue Dart & same-day hyperlocal shipping built-in",
            "Payment gateway included",
            "Unlimited products",
          ]}
        />
        <PlatformCard
          name="Shopify"
          monthlyFee="₹2,000+/month"
          perOrderFee="2% + payment fees"
          shippingIntegration={false}
          mobileApp={true}
          freeTrialDays="3 Din Free"
          features={[
            "International platform — India focus kam",
            "Setup ke liye computer chahiye",
            "Shipping plugins alag se khareedne padte hain",
            "Theme customization complex",
            "₹24,000+ per year minimum",
          ]}
        />
        <PlatformCard
          name="Dukaan"
          monthlyFee="₹416/month"
          perOrderFee="Payment gateway extra"
          shippingIntegration={true}
          mobileApp={true}
          freeTrialDays="7 Din Free"
          features={[
            "India focused platform",
            "Mobile app available",
            "₹4,999/saal minimum plan",
            "Advanced features costly plans mein",
            "Per order charge alag se",
          ]}
        />
      </div>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PlatformCard
          name="Bikayi"
          monthlyFee="₹299+/month"
          perOrderFee="Platform fee extra"
          shippingIntegration={true}
          mobileApp={true}
          freeTrialDays="Limited Free"
          features={[
            "Hindi interface available",
            "WhatsApp integration",
            "Free plan bahut limited hai",
            "Paid plans ₹3,588+/saal",
            "Advanced features locked",
          ]}
        />
        <PlatformCard
          name="DM2Buy"
          monthlyFee="Varies"
          perOrderFee="Commission based"
          shippingIntegration={false}
          mobileApp={false}
          freeTrialDays="Limited Free"
          features={[
            "Social media se selling",
            "Instagram/WhatsApp focus",
            "Limited store features",
            "Shipping khud manage karna padta",
            "Scaling mushkil hai",
          ]}
        />
      </div>

      <h2>Real Example — Order Pe Kitna Charge Lagega?</h2>
      <p>
        Numbers se baat karte hain. Agar aap ek order lete hain toh har platform pe kitna charge lagega?
        Sirf platform fee dekh rahe hain (payment gateway charges alag hain):
      </p>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <PricingExample
          orderValue="₹500"
          obizee="0 SUBSCRIPTION"
          shopify="₹2,000+ monthly + 2%"
          dukaan="₹416+ monthly + fees"
        />
        <PricingExample
          orderValue="₹2,000"
          obizee="0 SETUP FEE"
          shopify="₹2,000+ monthly + ₹40"
          dukaan="₹416+ monthly + fees"
        />
        <PricingExample
          orderValue="₹5,000"
          obizee="See Pricing page"
          shopify="₹2,000+ monthly + ₹100"
          dukaan="₹416+ monthly + fees"
        />
      </div>

      <div className="not-prose my-6 bg-amber-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-5 h-5 text-amber-600" />
          <span className="text-xs font-bold uppercase tracking-wide text-amber-700">Samajhiye Fark</span>
        </div>
        <div className="text-sm text-amber-800 leading-relaxed">
          Shopify pe agar aapko poore mahine mein <strong>ek bhi order nahi aata</strong>, tab bhi aap
          <strong> ₹2,000+</strong> pay karenge. oBizee pe zero orders = <strong>₹0 charge</strong> —
          order aane ke baad ka structure <Link href="/pricing">Pricing page</Link> pe hai. Shopify pe
          50 orders (₹2,000 average) ka kharcha <strong>₹2,000 + ₹2,000 = ₹4,000+</strong>.
        </div>
      </div>

      <h2>1 Saal Ka Total Kharcha — Comparison</h2>
      <p>
        Maan lete hain ki aap ek small seller hain, 30 orders per month aate hain, average order
        value ₹1,000 hai. 1 saal mein aapka kharcha:
      </p>

      <div className="not-prose my-6 space-y-3">
        {[
          { platform: "oBizee", cost: "0 Subscription", detail: "Koi monthly fee nahi — Pricing page pe structure dekhein.", highlight: true },
          { platform: "Shopify Basic", cost: "₹24,000+/saal", detail: "₹2,000/month x 12 = ₹24,000 + per order charges.", highlight: false },
          { platform: "Dukaan", cost: "₹4,999+/saal", detail: "₹4,999 yearly plan + payment gateway charges alag.", highlight: false },
          { platform: "Bikayi", cost: "₹3,588+/saal", detail: "₹299/month x 12 = ₹3,588 + extra fees.", highlight: false },
        ].map((item) => (
          <div key={item.platform} className={`flex items-center justify-between rounded-xl p-4 border-2 ${item.highlight ? "bg-green-50 border-green-300" : "bg-white border-gray-200"}`}>
            <div>
              <div className="text-sm font-bold text-gray-900">{item.platform}</div>
              <div className="text-xs text-gray-500">{item.detail}</div>
            </div>
            <div className={`text-lg font-bold ${item.highlight ? "text-green-700" : "text-gray-900"}`}>{item.cost}</div>
          </div>
        ))}
      </div>

      <Callout type="tip">
        Agar aapke kam orders aate hain toh oBizee aur bhi sasta hai — 0 Subscription har volume pe.
        Shopify pe phir bhi <strong>₹24,000/saal</strong> chahe kitne bhi orders aayein.
      </Callout>

      <h2>Sirf Price Hi Nahi — Features Bhi Dekho</h2>
      <p>
        Sasta hona kaafi nahi hai agar features achhe na hon. Toh oBizee mein kya milta hai price ke
        saath:
      </p>

      <div className="not-prose my-6 space-y-3">
        {[
          { icon: Smartphone, text: "100% Mobile-First — poora business phone se chalayein, koi laptop nahi chahiye" },
          { icon: Truck, text: "Shipping Integration — Delhivery, DTDC se seedha app se ship karein" },
          { icon: CreditCard, text: "Payment Gateway — customers online pay kar sakte hain, UPI bhi supported" },
          { icon: BarChart3, text: "Analytics Dashboard — revenue, orders, popular products sab track karein" },
          { icon: IndianRupee, text: "India Ke Liye Bana — pricing INR mein, Indian courier partners, Indian payment methods" },
        ].map((item) => (
          <div key={item.text} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-gray-200">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <item.icon className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-sm text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>

      <h2>Toh Sabse Sasta Platform Kaun Sa Hai?</h2>
      <p>
        Seedha jawab — <strong>oBizee</strong>. Yeh India ka sabse sasta ecommerce platform hai kyunki:
      </p>
      <ul>
        <li><strong>0 SUBSCRIPTION</strong> — aap tab tak ₹0 pay karte hain jab tak order nahi aata</li>
        <li><strong>0 SETUP FEE</strong> — FREE mapped custom domain bhi milta hai</li>
        <li><strong>3 mahine free trial</strong> — pehle 3 mahine toh bilkul kuch nahi lagta</li>
        <li><strong>Koi hidden charges nahi</strong> — jo dikhta hai wahi lagta hai</li>
      </ul>
      <p>
        Agar aap ek small seller hain, ghar se business karte hain, ya abhi shuru kar rahe hain — toh
        oBizee aapke liye best hai. Koi risk nahi, koi upfront investment nahi. Try karein, agar pasand
        aaye toh continue karein.
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          oBizee Pricing Details <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/how-to-create-online-store" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Store Kaise Banayein <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/blog/online-dukaan-kaise-khole" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Online Dukaan Kaise Khole <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/blog/bina-paisa-online-business-kaise-shuru-kare" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Bina Paisa Business Shuru Karein <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default HinglishPost4;
