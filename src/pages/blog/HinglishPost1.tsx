"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { Download, UserPlus, ShoppingBag, Share2, Package, ArrowRight, IndianRupee, Smartphone, Rocket, CheckCircle } from "lucide-react";

const StepCard = ({ icon: Icon, number, title }: { icon: any; number: string; title: string }) => (
  <div className="flex items-center gap-4 bg-orange-50 rounded-xl p-4 border border-orange-100 not-prose my-6">
    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <div className="text-xs text-orange-600 font-semibold uppercase tracking-wide">Step {number}</div>
      <div className="text-lg font-bold text-gray-900">{title}</div>
    </div>
  </div>
);

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" }) => (
  <div className={`not-prose my-6 rounded-xl p-5 border ${type === "tip" ? "bg-green-50 border-green-200" : "bg-blue-50 border-blue-200"}`}>
    <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${type === "tip" ? "text-green-700" : "text-blue-700"}`}>
      {type === "tip" ? "Pro Tip" : "Good to Know"}
    </div>
    <div className={`text-sm leading-relaxed ${type === "tip" ? "text-green-800" : "text-blue-800"}`}>{children}</div>
  </div>
);

const PricingHighlight = () => (
  <div className="not-prose my-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
        <IndianRupee className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">oBizee Ki Pricing — Ekdum Simple</h3>
    </div>
    <div className="space-y-3">
      {[
        { label: "Monthly Fees", value: "₹0 — Bilkul Nahi" },
        { label: "Setup Fees", value: "₹0 — Kuch Nahi Lagta" },
        { label: "Per Order Charge", value: "Sirf 1% (Maximum ₹10)" },
        { label: "Free Trial", value: "3 Mahine Bilkul Free" },
      ].map((item) => (
        <div key={item.label} className="flex items-center justify-between bg-white rounded-xl p-3 border border-green-100">
          <span className="text-sm font-medium text-gray-700">{item.label}</span>
          <span className="text-sm font-bold text-green-700">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const HinglishPost1 = () => {
  return (
    <BlogPostLayout
      title="Online Dukaan Kaise Khole — Poori Jankari [2026 Guide]"
      description="Online dukaan kholne ka sabse aasan tarika. oBizee app se 2 minute mein apna online store banayein. Koi coding nahi, koi monthly fees nahi. Poori step-by-step guide."
      date="2026-04-24"
      readTime="6 min read"
      author="Raunak Kumar"
      slug="online-dukaan-kaise-khole"
    >
      <p>
        Aaj ke time mein agar aap koi bhi cheez bechte hain — chahe kapde hon, jewellery ho, homemade
        snacks hon, ya koi bhi product — toh aapko ek online dukaan ki zaroorat hai. Bahut log already
        Instagram aur WhatsApp se bech rahe hain, lekin ek proper online store hona bilkul alag baat hai.
      </p>
      <p>
        Sochiye — jab customer aapke Instagram pe aata hai, toh usse DM karna padta hai, price poochna
        padta hai, phir payment ka jhanjhat, phir address dena... itne saare steps mein bahut se
        customers chale jaate hain. Lekin agar aapke paas apna online store ho, toh customer khud
        product dekh sakta hai, price dekh sakta hai, aur order place kar sakta hai — bina kisi
        back-and-forth ke.
      </p>
      <p>
        Aur sabse achi baat? Ab online dukaan kholna mushkil nahi raha. <strong>oBizee app</strong> se aap
        sirf 2 minute mein apna pura online store bana sakte hain. Koi coding nahi chahiye, koi
        website developer nahi chahiye, aur koi monthly fees nahi. Chaliye, step by step dekhte hain
        kaise karna hai.
      </p>

      <StepCard icon={Download} number="1" title="oBizee App Download Karein" />
      <p>
        Sabse pehle, apne phone mein oBizee app download karein. Yeh <strong>App Store</strong> (iPhone ke
        liye) aur <strong>Google Play Store</strong> (Android ke liye) dono pe available hai. "oBizee"
        search karein aur install kar lein.
      </p>
      <div className="not-prose my-6 flex justify-center">
        <img src="/how-to/11.jpg" alt="oBizee app download screen" className="rounded-2xl shadow-lg border border-gray-200 max-w-[240px] w-full" loading="lazy" />
      </div>
      <Callout type="info">
        App bahut halka hai aur purane phones mein bhi smoothly chalta hai. Aapko sirf phone chahiye — laptop ya computer ki koi zaroorat nahi.
      </Callout>

      <StepCard icon={UserPlus} number="2" title="Account Banayein" />
      <p>
        App open karne ke baad, aapko apna account banana hoga. Yeh bahut simple hai — bas yeh details
        dein:
      </p>
      <ul>
        <li><strong>Business ka naam</strong> — yahi aapke store ka naam banega (jaise "Meera's Collection")</li>
        <li><strong>Aapka naam</strong> — taaki customers ko pata chale ki woh kisse khareed rahe hain</li>
        <li><strong>Phone number aur email</strong> — verification ke liye aur order notifications ke liye</li>
        <li><strong>Instagram ya social media link</strong> — optional hai, lekin dena acha rahega</li>
      </ul>
      <div className="not-prose my-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
        <img src="/how-to/13.jpg" alt="oBizee signup form" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
        <img src="/how-to/16.jpg" alt="oBizee account review" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
      </div>
      <p>
        Details bharne ke baad aapka account ready ho jaayega. oBizee automatically aapka ek unique
        store link bana dega — jaise <strong>yourbrand.obizee.com</strong>. Yahi link aap apne
        customers ko share karenge.
      </p>

      <StepCard icon={ShoppingBag} number="3" title="Products Add Karein" />
      <p>
        Ab aata hai sabse important part — apne products add karna. Pehle ek <strong>category</strong> banayein
        (jaise "Kurtis", "Earrings", "Snacks"). Phir har category mein apne products add karein.
      </p>
      <p>Har product ke liye yeh details dein:</p>
      <ul>
        <li><strong>Product ka naam</strong> aur description</li>
        <li><strong>Price</strong> (INR mein)</li>
        <li><strong>Photos</strong> — phone ki gallery se seedha upload karein</li>
        <li><strong>Variants</strong> — agar size ya color options hain toh woh bhi add karein</li>
      </ul>
      <div className="not-prose my-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
        <img src="/how-to/20.jpg" alt="oBizee mein category banana" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
        <img src="/how-to/22.jpg" alt="Product add karna oBizee mein" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
      </div>
      <Callout type="tip">
        Achi photos bahut zaroori hain — lekin professional camera ki zaroorat nahi. Phone se achi
        lighting mein photo lein, clear background rakhein, aur honest description likhein. Customers
        ka trust badhta hai.
      </Callout>

      <StepCard icon={Share2} number="4" title="Apna Store Link Share Karein" />
      <p>
        Products add karne ke baad aapka store ready hai! Ab bas apna store link share karna hai.
        Yeh link aap kahi bhi laga sakte hain:
      </p>
      <ul>
        <li><strong>Instagram bio</strong> mein — sabse zyada traffic yahan se aata hai</li>
        <li><strong>WhatsApp Status</strong> mein — apne contacts ko dikhayein</li>
        <li><strong>WhatsApp groups</strong> mein — jahan aap already bechte hain</li>
        <li><strong>Facebook page</strong> pe — agar aapka page hai toh wahan bhi</li>
      </ul>
      <p>
        Jab koi customer aapke link pe click karega, usse aapka poora store dikhega — saare products,
        prices, photos sab kuch. Woh khud select karega, cart mein daalega, aur order place karega.
        Aapko koi DM ka jawab nahi dena padega.
      </p>

      <StepCard icon={Package} number="5" title="Orders Manage Karein aur Ship Karein" />
      <p>
        Jaise hi koi customer order place karta hai, aapko oBizee app mein notification aa jaayega.
        Aap order details dekh sakte hain — kya order hua, kitne ka hua, customer ka address kya hai.
      </p>
      <p>
        Shipping ke liye oBizee mein <strong>Delhivery</strong> aur <strong>DTDC</strong> jaise courier
        partners integrated hain. Aap app se hi shipping label generate kar sakte hain aur pickup
        schedule kar sakte hain. Kisi alag courier ki website pe jaane ki zaroorat nahi.
      </p>
      <Callout type="info">
        AWB (Air Waybill) number automatically generate hota hai aur customer ko tracking link mil
        jaata hai. Aapko manually kuch share karne ki zaroorat nahi.
      </Callout>

      <PricingHighlight />

      <p>
        Agar aap compare karein toh — Shopify pe minimum <strong>₹2,000/month</strong> lagta hai.
        Dukaan app pe <strong>₹4,999/saal</strong>. Lekin oBizee pe aapko <strong>koi monthly fees nahi</strong> deni.
        Sirf jab order aaye tab 1% charge lagta hai, aur woh bhi maximum ₹10 hai. Matlab agar aap
        ₹5,000 ka order lete hain, toh bhi charge sirf ₹10 hoga. Aur pehle 3 mahine toh bilkul free hain!
      </p>

      <h2>Kyun Aaj Hi Shuru Karein?</h2>
      <p>
        Har din jo aap bina online store ke bechte hain, aap potential customers kho rahe hain. Jo
        log aapka Instagram dekh ke interested hote hain lekin DM nahi karte — unko ek store link do,
        woh khud order kar lenge.
      </p>
      <p>
        oBizee se online dukaan kholna utna hi aasan hai jitna WhatsApp pe status lagana. 2 minute,
        koi paisa nahi, koi technical knowledge nahi. Bas download karein aur shuru ho jaayein.
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/how-to-create-online-store" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          Store Kaise Banayein (English Guide) <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          oBizee Pricing <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/blog/bina-paisa-online-business-kaise-shuru-kare" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Bina Paisa Lagaye Business Shuru Karein <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/blog/mobile-se-online-store-kaise-banaye" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Mobile Se Store Banayein <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default HinglishPost1;
