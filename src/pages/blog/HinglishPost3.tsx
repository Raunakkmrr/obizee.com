"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, Smartphone, Download, ShoppingBag, CreditCard, Package, Camera, Palette, Share2 } from "lucide-react";

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

const CompareCard = ({ platform, mobile, items }: {
  platform: string; mobile: boolean; items: string[];
}) => (
  <div className={`not-prose rounded-2xl p-5 border-2 ${mobile ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
    <div className="flex items-center gap-2 mb-4">
      <Smartphone className={`w-6 h-6 ${mobile ? "text-green-600" : "text-red-500"}`} />
      <h3 className="text-lg font-bold text-gray-900">{platform}</h3>
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${mobile ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
        {mobile ? "100% Mobile" : "Computer Chahiye"}
      </span>
    </div>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          {mobile ? (
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

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
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

const HinglishPost3 = () => {
  return (
    <BlogPostLayout
      title="Mobile Se Online Store Kaise Banaye — Sirf Phone Se [2026]"
      description="Sirf apne mobile phone se online store banayein. Koi laptop ya computer ki zaroorat nahi. oBizee app se 2 minute mein store ready. Step-by-step guide."
      date="2026-04-23"
      readTime="5 min read"
      author="oBizee Team"
      slug="mobile-se-online-store-kaise-banaye"
    >
      <p>
        India mein bahut saare small sellers hain jo ghar se business karte hain — kapde bechte hain,
        jewellery banate hain, homemade khana bechte hain, mehndi ka kaam karte hain. Inn mein se
        bahut logon ke paas laptop ya computer nahi hai. Unke paas hai sirf ek smartphone.
      </p>
      <p>
        Aur yahi woh cheez hai jo bahut logon ko rokti hai online store banane se. Woh sochte hain ki
        "online store ke liye computer chahiye, coding aani chahiye, website banana padega." Lekin ab
        2026 mein yeh sab purani baatein hain.
      </p>
      <p>
        <strong>oBizee app</strong> ke saath aap <strong>sirf apne phone se</strong> poora online store
        bana sakte hain — signup se lekar shipping tak, sab kuch phone se. Koi laptop nahi chahiye,
        koi computer nahi chahiye, koi technical knowledge nahi chahiye.
      </p>

      <h2>Phone Se Kya Kya Kar Sakte Hain?</h2>
      <p>
        oBizee 100% mobile-first platform hai. Iska matlab yeh hai ki app ko pehle phone ke liye
        banaya gaya hai. Laptop version baad mein aaya. Toh phone pe experience sabse acha hai.
      </p>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <FeatureCard
          icon={Download}
          title="App Download & Signup"
          desc="Google Play ya App Store se download karein aur 1 minute mein account banayein."
        />
        <FeatureCard
          icon={Camera}
          title="Product Photos Upload"
          desc="Phone ke camera se photo lein aur seedha app mein upload karein. Gallery se bhi upload hota hai."
        />
        <FeatureCard
          icon={ShoppingBag}
          title="Products & Categories Manage"
          desc="Naye products add karein, prices change karein, stock update karein — sab phone se."
        />
        <FeatureCard
          icon={Palette}
          title="Store Customize Karein"
          desc="Colors change karein, logo lagayein, banner set karein — sab app ke andar."
        />
        <FeatureCard
          icon={CreditCard}
          title="Payments Receive Karein"
          desc="Customers online pay kar sakte hain. Payment seedha aapke account mein aata hai."
        />
        <FeatureCard
          icon={Package}
          title="Shipping & Tracking"
          desc="Delhivery, DTDC & Blue Dart se shipping book karein, label print karein, tracking share karein — phone se."
        />
      </div>

      <StepCard icon={Download} number="1" title="oBizee App Download Karein" />
      <p>
        Google Play Store ya App Store kholein aur "oBizee" search karein. App free hai aur bahut
        halka hai — purane Android phones mein bhi smooth chalta hai. Download karein aur open karein.
      </p>
      <div className="not-prose my-6 flex justify-center">
        <img src="/how-to/11.jpg" alt="oBizee app download screen" className="rounded-2xl shadow-lg border border-gray-200 max-w-[240px] w-full" loading="lazy" />
      </div>

      <StepCard icon={Smartphone} number="2" title="Phone Se Account Banayein" />
      <p>
        App open karte hi aapko signup form milega. Yahan apna business name, apna naam, phone number
        aur email daalein. <strong>2-3 minute mein account ready</strong>. Aapko ek unique store
        link milega — jaise <strong>meristore.obizee.com</strong>.
      </p>
      <div className="not-prose my-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
        <img src="/how-to/13.jpg" alt="oBizee mobile signup" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
        <img src="/how-to/16.jpg" alt="oBizee account review" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
      </div>

      <StepCard icon={Camera} number="3" title="Phone Se Product Photos Lein Aur Upload Karein" />
      <p>
        Yeh sabse acha part hai — aap apne phone ke camera se seedha product photos le sakte hain aur
        app mein upload kar sakte hain. Koi DSLR camera nahi chahiye, koi photo editing software nahi
        chahiye.
      </p>
      <ul>
        <li>Phone se photo lein — achi lighting mein, safed background pe</li>
        <li>App mein product add karein — naam, price, description likhein</li>
        <li>Photo select karein — gallery se ya camera se seedha</li>
        <li>Variants add karein — size, color jo bhi applicable ho</li>
      </ul>
      <div className="not-prose my-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
        <img src="/how-to/20.jpg" alt="Category banana phone se" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
        <img src="/how-to/22.jpg" alt="Product add karna mobile se" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
      </div>
      <Callout type="tip">
        Photo tip: Natural lighting (window ke paas) mein best photos aate hain. White bedsheet ya
        chart paper ko background mein rakhein. Phone ka portrait mode use karein — professional
        lagega bina kisi extra kharche ke.
      </Callout>

      <StepCard icon={Share2} number="4" title="Link Share Karein — Dukaan Ready!" />
      <p>
        Products add karne ke baad aapka store live hai! Ab apna store link share karein:
      </p>
      <ul>
        <li><strong>WhatsApp Status</strong> pe lagayein — sabse zyada views yahan milte hain</li>
        <li><strong>Instagram bio</strong> mein daalein — "Shop Now" ka link lagayein</li>
        <li><strong>WhatsApp groups</strong> mein share karein</li>
        <li><strong>Facebook</strong> pe post karein</li>
      </ul>
      <p>
        Jab koi customer link pe click karega, usse aapka poora store dikhega. Woh khud browse
        karega, product select karega, aur order place karega. Aapko koi DM ka reply nahi karna padega.
      </p>

      <StepCard icon={Package} number="5" title="Orders Manage Karein — Phone Se Hi" />
      <p>
        Order aane pe notification aayega. App mein order details dekhein — kya order hua, customer ka
        address, payment status. Shipping bhi app se hi book karein — Delhivery ya DTDC se pickup
        schedule karein. AWB number automatic generate hota hai.
      </p>

      <h2>Shopify/WooCommerce Se Comparison — Kyun Phone Se Nahi Hota?</h2>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CompareCard
          platform="oBizee"
          mobile={true}
          items={[
            "Phone se signup — 2 minute mein",
            "Phone se products add — camera se seedha upload",
            "Phone se orders manage — notifications aate hain",
            "Phone se shipping — label generate, pickup schedule",
            "Phone se store customize — colors, logo, banner",
            "Phone se payments track — sab kuch ek app mein",
          ]}
        />
        <CompareCard
          platform="Shopify / WooCommerce"
          mobile={false}
          items={[
            "Setup ke liye computer chahiye — mobile pe mushkil hai",
            "Theme customize karna phone pe almost impossible",
            "Plugins install karne ke liye desktop browser chahiye",
            "WooCommerce mein hosting setup phone se nahi hota",
            "Dashboard complex hai — chhoti screen pe navigate karna mushkil",
            "Code editing kabhi kabhi zaroori hoti hai — phone pe kaise karein?",
          ]}
        />
      </div>

      <Callout type="info">
        India mein <strong>75% internet users</strong> sirf phone se internet use karte hain. Agar
        aapka ecommerce platform phone-friendly nahi hai, toh woh India ke liye nahi bana.
      </Callout>

      <h2>Aaj Hi Phone Se Shuru Karein</h2>
      <p>
        Agar aap already WhatsApp aur Instagram chala lete hain, toh aap oBizee bhi chala lenge.
        Interface utna hi simple hai. <strong>2 minute mein signup, 5 minute mein products add,
        aur aapka online store ready</strong>.
      </p>
      <p>
        Koi paisa nahi lagta. Koi laptop nahi chahiye. Koi coding nahi aani chahiye. Sirf aapka
        phone aur aapke products — bas itna kaafi hai. Toh aaj hi try karein!
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/how-to-create-online-store" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          Store Banane Ki Guide <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          oBizee Pricing <ArrowRight className="w-4 h-4" />
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

export default HinglishPost3;
