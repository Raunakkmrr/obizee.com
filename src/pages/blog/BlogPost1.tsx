"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { Download, UserPlus, ShoppingBag, Palette, Share2, IndianRupee, Rocket } from "lucide-react";

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

const BlogPost1 = () => {
  return (
    <BlogPostLayout
      title="How to Create Your Online Store in 5 Minutes with oBizee"
      description="A complete guide to setting up your online store on oBizee. From download to first sale — no coding, no monthly fees, no technical knowledge needed."
      date="2026-04-23"
      updatedDate="2026-08-20"
      readTime="5 min read"
      author="Raunak Kumar"
      slug="how-to-create-online-store-5-minutes"
    >
      <p>
        If you sell products on Instagram, WhatsApp, or from home, you have probably thought about
        creating your own online store. But then reality hits: platforms like Shopify charge thousands
        per month, building a website from scratch requires a developer, and marketplaces like Amazon
        take a huge cut from every sale.
      </p>
      <p>
        What if you could set up a fully functional online store in under five minutes, without
        spending a single rupee upfront? That is exactly what oBizee lets you do. No coding knowledge,
        no monthly subscription, and no technical skills required. Just your phone and your products.
      </p>

      <StepCard icon={Download} number="1" title="Download the oBizee App" />
      <p>
        oBizee is a mobile-first platform, which means you set up and manage everything from your
        phone. Head to the <strong>App Store</strong> (iPhone) or <strong>Google Play Store</strong> (Android)
        and search for "oBizee."
      </p>
      <div className="not-prose my-6 flex justify-center">
        <img src="/how-to/11.jpg" alt="oBizee welcome screen after downloading the app" className="rounded-2xl shadow-lg border border-gray-200 max-w-[240px] w-full" loading="lazy" />
      </div>
      <Callout type="info">The app is lightweight and works well even on older phones with limited storage. No laptop needed.</Callout>

      <StepCard icon={UserPlus} number="2" title="Create Your Account" />
      <p>
        When you open oBizee for the first time, you will be asked to create an account. You need to provide:
      </p>
      <ul>
        <li><strong>Your business name</strong> — this becomes the name of your online store</li>
        <li><strong>Your name</strong> — so customers know who they are buying from</li>
        <li><strong>Phone number and email</strong> — for verification and order notifications</li>
        <li><strong>Instagram or social media link</strong> — optional, but helpful for customers</li>
      </ul>
      <div className="not-prose my-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
        <img src="/how-to/13.jpg" alt="oBizee business information signup form" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
        <img src="/how-to/16.jpg" alt="oBizee account review before creating" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
      </div>
      <p>
        Once you fill in these details, your account is ready. oBizee automatically generates a
        unique store link — something like <strong>yourbrand.obizee.com</strong>.
      </p>

      <StepCard icon={ShoppingBag} number="3" title="Add Product Categories and Products" />
      <p>
        Now comes the part where your store starts taking shape. Tap on the option to add a
        category — this helps organize your products. For example, if you sell handmade
        jewellery, your categories might be "Earrings," "Necklaces," and "Bracelets."
      </p>
      <p>Inside each category, add individual products with:</p>
      <ul>
        <li>Product name and description</li>
        <li>Price (in INR)</li>
        <li>Product images — upload directly from your phone gallery</li>
        <li>Variants if applicable, such as size or color options</li>
      </ul>
      <div className="not-prose my-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
        <img src="/how-to/20.jpg" alt="Category created successfully with option to add products" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
        <img src="/how-to/22.jpg" alt="Adding a product with images, name, and price on oBizee" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
      </div>
      <Callout type="tip">Clear images and honest, detailed descriptions build trust. A well-lit photo from your phone works perfectly — no professional photography needed.</Callout>

      <StepCard icon={Palette} number="4" title="Customize Your Store Website" />
      <p>
        oBizee provides pre-built store templates that you can customize. Choose a template,
        set your brand colors, add your logo, and arrange how products appear on your storefront.
      </p>
      <div className="not-prose my-6 grid grid-cols-3 gap-3 max-w-lg mx-auto">
        <img src="/how-to/29.jpg" alt="oBizee settings with website customization options" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
        <img src="/how-to/30.jpg" alt="Website settings for template, content, and brand colors" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
        <img src="/how-to/31.jpg" alt="Store template selection on oBizee" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
      </div>
      <p>
        Everything happens within the app — no code, no complicated builders. Your store is automatically mobile-friendly. For the full visual walkthrough,
        check out our <Link href="/how-to-create-online-store">detailed store creation guide with screenshots</Link>.
      </p>

      <StepCard icon={Share2} number="5" title="Share Your Store Link and Start Selling" />
      <p>
        Once your products are uploaded and your store looks good, you are ready to sell. Copy your
        store link and share it everywhere:
      </p>
      <ul>
        <li>Add it to your <strong>Instagram bio</strong></li>
        <li>Share it in your <strong>WhatsApp status</strong> or groups</li>
        <li>Post it on <strong>Facebook, Twitter, or any social platform</strong></li>
        <li>Include it in your <strong>business card or marketing materials</strong></li>
      </ul>
      <div className="not-prose my-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
        <img src="/how-to/34.jpg" alt="Order link with QR code generated and ready to share" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
        <img src="/how-to/35.jpg" alt="What customers see when they open your oBizee store link" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
      </div>

      {/* Pricing highlight */}
      <div className="not-prose my-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
            <IndianRupee className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">What About Pricing?</h3>
        </div>
        <p className="text-gray-700 mb-4">
          oBizee has <strong>no monthly subscription</strong>. You pay just <strong>1% per successful order, capped at ₹10</strong>. Even a ₹5,000 order costs only ₹10 in fees.
        </p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 text-center border border-orange-100">
            <div className="text-xs text-gray-500 mb-1">₹500 order</div>
            <div className="text-lg font-bold text-orange-600">₹5</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-orange-100">
            <div className="text-xs text-gray-500 mb-1">₹2,000 order</div>
            <div className="text-lg font-bold text-orange-600">₹10</div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-orange-100">
            <div className="text-xs text-gray-500 mb-1">₹10,000 order</div>
            <div className="text-lg font-bold text-orange-600">₹10</div>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Plus a <strong>3-month free trial</strong> — no credit card required. <Link href="/pricing" className="text-orange-600 font-semibold hover:underline">See full pricing →</Link>
        </p>
      </div>

      <h2>What Happens After Setup?</h2>
      <p>
        Once your store is live, oBizee becomes your business dashboard. Track orders,
        manage inventory, communicate with customers, and handle shipping — all from the same app.
        The platform integrates with <strong>Delhivery, DTDC and Blue Dart</strong> so you can generate AWB numbers, schedule pickups, and provide live tracking to customers.
      </p>
      <div className="not-prose my-6 grid grid-cols-2 gap-3 max-w-md mx-auto">
        <img src="/how-to/39.jpg" alt="Orders dashboard showing pending and completed orders" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
        <img src="/how-to/41.jpg" alt="Creating a shipment with Delhivery integration" className="rounded-2xl shadow-lg border border-gray-200 w-full" loading="lazy" />
      </div>

      <div className="not-prose my-8 bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
        <Rocket className="w-10 h-10 text-orange-500 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Start?</h3>
        <p className="text-gray-600 text-sm mb-4">
          Setting up your store takes less than five minutes. No complicated onboarding, no waiting for approval.
        </p>
        <p className="text-sm text-gray-500">
          Want the full visual walkthrough? See our{" "}
          <Link href="/how-to-create-online-store" className="text-orange-600 font-semibold hover:underline">complete guide with screenshots</Link>.
          Have questions? Visit the <Link href="/help" className="text-orange-600 font-semibold hover:underline">help center</Link>.
        </p>
      </div>
    </BlogPostLayout>
  );
};

export default BlogPost1;
