"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, IndianRupee, Smartphone, Wallet, ShieldCheck, Zap, TrendingUp } from "lucide-react";

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" }) => (
  <div className={`not-prose my-6 rounded-xl p-5 border ${type === "tip" ? "bg-green-50 border-green-200" : "bg-blue-50 border-blue-200"}`}>
    <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${type === "tip" ? "text-green-700" : "text-blue-700"}`}>
      {type === "tip" ? "Pro Tip" : "Good to Know"}
    </div>
    <div className={`text-sm leading-relaxed ${type === "tip" ? "text-green-800" : "text-blue-800"}`}>{children}</div>
  </div>
);

const PricingCompareCard = ({ platform, monthlyFee, yearlyTotal, perOrderFee, highlight }: {
  platform: string; monthlyFee: string; yearlyTotal: string; perOrderFee: string; highlight?: boolean;
}) => (
  <div className={`not-prose rounded-2xl p-5 border-2 ${highlight ? "bg-green-50 border-green-300 ring-2 ring-green-200" : "bg-white border-gray-200"}`}>
    <div className="text-lg font-bold text-gray-900 mb-1">{platform}</div>
    {highlight && <div className="text-xs font-bold text-green-600 uppercase tracking-wide mb-3">Sabse Sasta!</div>}
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Monthly Fee</span>
        <span className={`font-bold ${highlight ? "text-green-700" : "text-gray-900"}`}>{monthlyFee}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">1 Saal Ka Total</span>
        <span className={`font-bold ${highlight ? "text-green-700" : "text-gray-900"}`}>{yearlyTotal}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Per Order Charge</span>
        <span className={`font-bold ${highlight ? "text-green-700" : "text-gray-900"}`}>{perOrderFee}</span>
      </div>
    </div>
  </div>
);

const RequirementCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="not-prose bg-white rounded-xl p-4 border border-gray-200">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-orange-600" />
      </div>
      <div className="text-sm font-bold text-gray-900">{title}</div>
    </div>
    <div className="text-sm text-gray-600">{desc}</div>
  </div>
);

const HinglishPost2 = () => {
  return (
    <BlogPostLayout
      title="Bina Paisa Lagaye Online Business Kaise Shuru Kare [2026]"
      description="Bina koi paisa lagaye online business shuru karne ka tarika. oBizee ke saath bilkul free mein apna online store banayein. 3 mahine free trial, koi setup fees nahi."
      date="2026-04-23"
      readTime="5 min read"
      author="oBizee Team"
      slug="bina-paisa-online-business-kaise-shuru-kare"
    >
      <p>
        "Online business shuru karna hai lekin paisa nahi hai" — yeh sabse common problem hai jo bahut
        saare log face karte hain. Aur sahi baat hai — jab aap Shopify jaisi websites dekhte hain jo
        ₹2,000 per month charge karti hain, toh lagta hai ki online selling sirf unke liye hai jinke
        paas pehle se paisa hai.
      </p>
      <p>
        Lekin yeh sach nahi hai. 2026 mein aap <strong>bilkul bina koi paisa lagaye</strong> apna online
        business shuru kar sakte hain. Koi website developer ki zaroorat nahi, koi hosting khareedne
        ki zaroorat nahi, koi monthly subscription nahi. Bas aapka phone aur aapke products — itna kaafi hai.
      </p>

      <h2>Kya Chahiye Online Business Shuru Karne Ke Liye?</h2>
      <p>
        Bahut log sochte hain ki online business ke liye laptop chahiye, website chahiye, domain chahiye,
        hosting chahiye. Sach yeh hai ki aapko sirf 2 cheezein chahiye:
      </p>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <RequirementCard
          icon={Smartphone}
          title="Ek Smartphone"
          desc="Android ho ya iPhone — koi bhi chalega. Purana phone bhi kaafi hai. Bas internet connection hona chahiye."
        />
        <RequirementCard
          icon={ShieldCheck}
          title="Products Jo Aap Bechna Chahte Hain"
          desc="Kapde, jewellery, homemade food, crafts, cosmetics — jo bhi bechna hai. Agar aap pehle se WhatsApp pe bech rahe hain toh aur bhi aasan hai."
        />
      </div>

      <Callout type="info">
        Laptop ya computer ki bilkul zaroorat nahi. oBizee app phone pe hi poora kaam karta hai — signup se lekar shipping tak.
      </Callout>

      <h2>oBizee Bilkul Free Kyun Hai?</h2>
      <p>
        oBizee ka business model bahut simple hai. Woh aapse <strong>koi monthly fees nahi</strong> lete.
        Koi setup charge nahi, koi hidden fees nahi. Aap tab tak ₹0 pay karte hain jab tak aapko
        koi order nahi aata.
      </p>
      <p>
        Jab order aata hai, tab sirf <strong>1% per order</strong> charge lagta hai — aur woh bhi
        <strong> maximum ₹10</strong>. Matlab agar aap ₹1,000 ka order lete hain toh ₹10 charge.
        ₹5,000 ka order lete hain toh bhi ₹10. ₹10,000 ka order? Phir bhi sirf ₹10.
      </p>
      <p>
        Aur pehle <strong>3 mahine toh bilkul free</strong> hain — koi charge nahi, koi limit nahi.
        3 mahine mein aap apna business set kar sakte hain bina ek bhi paisa kharche.
      </p>

      <h2>Doosre Platforms Kitna Charge Karte Hain?</h2>
      <p>
        Chaliye dekhte hain ki agar aap doosre platforms use karte toh kitna paisa lagta:
      </p>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <PricingCompareCard
          platform="oBizee"
          monthlyFee="₹0"
          yearlyTotal="₹0 fixed cost"
          perOrderFee="1% (max ₹10)"
          highlight={true}
        />
        <PricingCompareCard
          platform="Shopify"
          monthlyFee="₹2,000+"
          yearlyTotal="₹24,000+"
          perOrderFee="2% + payment gateway"
        />
        <PricingCompareCard
          platform="Dukaan App"
          monthlyFee="₹416/month"
          yearlyTotal="₹4,999/saal"
          perOrderFee="Payment gateway extra"
        />
      </div>

      <div className="not-prose my-6 bg-amber-50 rounded-xl p-5 border border-amber-200">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-5 h-5 text-amber-600" />
          <span className="text-xs font-bold uppercase tracking-wide text-amber-700">Sochiye Zara</span>
        </div>
        <div className="text-sm text-amber-800 leading-relaxed">
          Shopify pe 1 saal ka kharcha <strong>₹24,000+</strong> hai chahe aapko ek bhi order na aaye.
          oBizee pe agar aapko ek bhi order nahi aata toh aap <strong>₹0</strong> pay karte hain.
          Aur agar 100 orders aate hain toh bhi maximum <strong>₹1,000</strong> (100 x ₹10). Fark samajh aaya?
        </div>
      </div>

      <h2>Kya Kya Free Milta Hai oBizee Mein?</h2>

      <div className="not-prose my-6 space-y-3">
        {[
          "Apna branded online store — yourbrand.obizee.com",
          "Unlimited products add karein — koi limit nahi",
          "Product photos upload — phone se seedha",
          "Payment gateway — customers online pay kar sakte hain",
          "Order management dashboard — saare orders ek jagah",
          "Shipping integration — Delhivery, DTDC se direct ship karein",
          "Customer data — saare customers ka record",
          "Store customization — colors, logo, banner sab change karein",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-gray-200">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      <h2>Koi Website Developer Ki Zaroorat Nahi</h2>
      <p>
        Pehle agar aap online store banana chahte the toh aapko ek web developer dhundhna padta tha.
        Developer ki fees ₹15,000 se ₹50,000 tak hoti thi sirf ek basic website ke liye. Upar se
        hosting ka alag kharcha, domain ka alag kharcha, SSL certificate ka alag kharcha.
      </p>
      <p>
        oBizee pe yeh sab <strong>automatically ho jaata hai</strong>. Aap app download karte hain,
        details bharte hain, products add karte hain — aur aapka store ready. Koi coding nahi, koi
        technical knowledge nahi. Agar aap WhatsApp chala sakte hain toh aap oBizee bhi chala sakte hain.
      </p>

      <h2>Koi Hosting Khareedne Ki Zaroorat Nahi</h2>
      <p>
        Website hosting ka matlab hai ki aapki website ko internet pe rakhne ke liye server chahiye.
        Yeh monthly ₹200 se ₹2,000 tak ka kharcha hota hai. oBizee pe aapka store unke servers pe
        already hosted hai — aapko kuch khareedne ki zaroorat nahi.
      </p>

      <Callout type="tip">
        oBizee pe aapko free subdomain milta hai (yourbrand.obizee.com). Agar baad mein aap
        apna custom domain lagana chahein (jaise yourbrand.com) toh woh bhi kar sakte hain.
      </Callout>

      <h2>Zero Investment Se Kaise Shuru Karein — Quick Steps</h2>

      <div className="not-prose my-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
        <div className="space-y-3">
          {[
            { step: "1", title: "oBizee App Download Karein", desc: "App Store ya Google Play se free mein download karein." },
            { step: "2", title: "Account Banayein", desc: "Business name, phone number, email daalein — 1 minute ka kaam." },
            { step: "3", title: "Products Add Karein", desc: "Phone se photos upload karein, price set karein, description likhein." },
            { step: "4", title: "Store Link Share Karein", desc: "Instagram bio, WhatsApp status, Facebook page — jahan bhi aapke customers hain." },
            { step: "5", title: "Orders Aayein — Paisa Kamayein", desc: "Customers khud order karenge, aap shipping karein aur paisa kamayein!" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-orange-100">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-orange-600">{item.step}</span>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2>Sochna Band Karein, Shuru Karein</h2>
      <p>
        Bahut log sochte rehte hain — "pehle paisa jama karta hoon", "pehle laptop le leta hoon",
        "pehle website banana seekh leta hoon". Lekin ab inn sab ki zaroorat nahi hai. Aapke phone
        mein already woh sab hai jo chahiye.
      </p>
      <p>
        oBizee ke saath aap <strong>aaj, abhi, is waqt</strong> apna online business shuru kar sakte
        hain. Koi paisa nahi lagana, koi risk nahi. 3 mahine free trial mein dekh lein — agar kaam
        kare toh continue karein, nahi toh kuch nahi jaata.
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/how-to-create-online-store" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          Store Kaise Banayein <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          oBizee Pricing <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/blog/online-dukaan-kaise-khole" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Online Dukaan Kaise Khole <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/blog/sabse-sasta-ecommerce-platform-india" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Sabse Sasta Platform Kaun Sa? <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default HinglishPost2;
