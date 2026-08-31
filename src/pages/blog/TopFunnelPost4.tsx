"use client";

import React from "react";
import BlogPostLayout from "@/components/BlogPostLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle, FileText, Calculator, HelpCircle, ClipboardList, Shield, BookOpen } from "lucide-react";

const Callout = ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "tip" | "warning" }) => (
  <div className={`not-prose my-6 rounded-xl p-5 border ${type === "tip" ? "bg-green-50 border-green-200" : type === "warning" ? "bg-amber-50 border-amber-200" : "bg-blue-50 border-blue-200"}`}>
    <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${type === "tip" ? "text-green-700" : type === "warning" ? "text-amber-700" : "text-blue-700"}`}>
      {type === "tip" ? "Pro Tip" : type === "warning" ? "Watch Out" : "Good to Know"}
    </div>
    <div className={`text-sm leading-relaxed ${type === "tip" ? "text-green-800" : type === "warning" ? "text-amber-800" : "text-blue-800"}`}>{children}</div>
  </div>
);

const IconSection = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <div className="not-prose my-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 border border-gray-200">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
    </div>
    <div className="text-sm text-gray-600 leading-relaxed space-y-2">{children}</div>
  </div>
);

const TopFunnelPost4 = () => {
  return (
    <BlogPostLayout
      title="GST for Online Sellers in India: Everything You Need to Know [2026]"
      description="Complete guide to GST for online sellers in India. Registration threshold, rates, filing, invoicing, and common questions answered for ecommerce businesses."
      date="2026-04-24"
      readTime="8 min read"
      author="Raunak Kumar"
      slug="gst-for-online-sellers-india"
    >
      <p>
        GST is one of the most confusing topics for new online sellers in India. Do you need to register? What rate
        applies to your products? How do you file returns? This guide answers all of these questions in plain language.
      </p>

      <div className="not-prose my-6 bg-red-50 rounded-xl p-5 border border-red-200">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-red-600" />
          <span className="text-xs font-bold uppercase tracking-wide text-red-700">Important Disclaimer</span>
        </div>
        <div className="text-sm text-red-800 leading-relaxed">
          This article is for informational purposes only and does not constitute legal or tax advice. GST rules change
          frequently. Always consult a qualified Chartered Accountant (CA) for advice specific to your business situation.
        </div>
      </div>

      <h2>Do You Need GST Registration?</h2>

      <IconSection icon={HelpCircle} title="GST Registration Thresholds">
        <p>The general thresholds for GST registration in India are:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>₹40 lakh annual turnover</strong> — for sellers of goods (₹20 lakh in special category states like those in the North East)</li>
          <li><strong>₹20 lakh annual turnover</strong> — for service providers (₹10 lakh in special category states)</li>
        </ul>
        <p className="mt-3">
          <strong>However, there is an important catch for online sellers:</strong> If you sell on an ecommerce platform
          that collects tax at source (TCS) — which includes marketplaces like Amazon and Flipkart — you may need GST
          registration regardless of your turnover. For sellers on their own website using their own payment gateway,
          the standard thresholds apply.
        </p>
        <p className="mt-2">
          Additionally, if you sell inter-state (e.g., you are based in Delhi but ship to customers in Maharashtra),
          GST registration has historically been mandatory irrespective of turnover. Check with your CA for the latest
          rules on this, as exemptions for small sellers have been discussed.
        </p>
      </IconSection>

      <Callout type="tip">
        Even if you are below the threshold, voluntary GST registration has benefits. It builds credibility with
        business customers, lets you claim input tax credit on purchases, and signals professionalism. Many serious
        sellers register early.
      </Callout>

      <h2>GST Rates for Common Products</h2>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Product Category</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">GST Rate</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Clothing (up to ₹1,000)", "5%", "Most affordable clothing falls here"],
              ["Clothing (above ₹1,000)", "12%", "Higher rate for premium garments"],
              ["Footwear (up to ₹1,000)", "5%", "Value-based rate classification"],
              ["Footwear (above ₹1,000)", "12%", "Higher rate for premium footwear"],
              ["Food items (unprocessed)", "0%", "Fresh fruits, vegetables, grains"],
              ["Food items (processed/packaged)", "5-18%", "Depends on type of processing and branding"],
              ["Pickles, sauces, condiments", "12%", "Packaged and labelled food items"],
              ["Handmade crafts", "5%", "Most handcrafted goods"],
              ["Jewellery (gold, silver)", "3%", "Low rate for precious metals"],
              ["Artificial/fashion jewellery", "5%", "Imitation jewellery category"],
              ["Cosmetics and beauty", "18%", "Higher rate for beauty products"],
              ["Electronics accessories", "18%", "Covers most electronic items"],
              ["Home decor and furnishings", "12-18%", "Rate varies by specific product"],
              ["Candles", "12%", "Including decorative candles"],
              ["Bags and purses", "18%", "Leather and non-leather bags"],
            ].map(([product, rate, notes]) => (
              <tr key={product} className="border-b border-gray-100">
                <td className="py-3 px-3 text-sm text-gray-700 font-medium">{product}</td>
                <td className="py-3 px-3 text-sm font-bold text-orange-600">{rate}</td>
                <td className="py-3 px-3 text-sm text-gray-500">{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="warning">
        GST rates can change in budget sessions. The rates above are indicative as of early 2026. Always verify
        the current rate for your specific product using the HSN code on the official GST portal (cbic-gst.gov.in).
      </Callout>

      <h2>How to Register for GST</h2>

      <div className="not-prose my-6 space-y-3">
        {[
          { step: "1", title: "Visit the GST Portal", desc: "Go to gst.gov.in and click 'Register Now' under the Taxpayers section." },
          { step: "2", title: "Fill Part A", desc: "Enter your PAN, mobile number, and email. You will receive OTPs for verification." },
          { step: "3", title: "Fill Part B", desc: "Provide business details, bank account information, and upload required documents (PAN, Aadhaar, address proof, photos)." },
          { step: "4", title: "Verification", desc: "Sign using DSC (Digital Signature Certificate), e-Sign (Aadhaar-based), or EVC (Electronic Verification Code)." },
          { step: "5", title: "Receive GSTIN", desc: "Processing typically takes 3-7 working days. You will receive your 15-digit GSTIN upon approval." },
        ].map((item) => (
          <div key={item.step} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-orange-700 font-bold text-sm">{item.step}</span>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>What Must Be on Every Invoice</h2>

      <IconSection icon={FileText} title="GST Invoice Requirements">
        <p>Every GST-compliant invoice must include:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Your business name, address, and GSTIN</li>
          <li>Buyer's name and address (and GSTIN if B2B)</li>
          <li>Unique invoice number (sequential, no gaps)</li>
          <li>Date of issue</li>
          <li>HSN code for each product</li>
          <li>Description, quantity, and unit price</li>
          <li>GST rate and amount (CGST + SGST for intra-state, or IGST for inter-state)</li>
          <li>Total amount including tax</li>
          <li>Place of supply</li>
        </ul>
      </IconSection>

      <Callout type="info">
        Most ecommerce platforms generate GST-compliant invoices automatically. When choosing a platform, check that
        it supports HSN codes, auto-calculates CGST/SGST/IGST based on buyer location, and provides downloadable invoices.
      </Callout>

      <h2>Filing Schedule</h2>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Return</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">What It Covers</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Frequency</th>
              <th className="py-3 px-3 text-left text-gray-700 font-semibold">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["GSTR-1", "Outward supplies (your sales)", "Monthly or Quarterly*", "11th of next month"],
              ["GSTR-3B", "Summary of tax liability", "Monthly or Quarterly*", "20th of next month"],
              ["GSTR-9", "Annual return", "Yearly", "31st December"],
            ].map(([ret, covers, freq, due]) => (
              <tr key={ret} className="border-b border-gray-100">
                <td className="py-3 px-3 text-sm font-bold text-gray-900">{ret}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{covers}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{freq}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        <em>*Quarterly filing under the QRMP scheme is available for businesses with turnover up to ₹5 crore.
        This simplifies compliance significantly for small sellers.</em>
      </p>

      <h2>Composition Scheme: A Simpler Option for Small Businesses</h2>

      <IconSection icon={Calculator} title="GST Composition Scheme">
        <p>
          If your annual turnover is under ₹1.5 crore (₹75 lakh in special category states), you can opt for the
          Composition Scheme. Here is what it means:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li><strong>Lower tax rate</strong> — Pay 1% for manufacturers, 5% for restaurants, 6% for other service providers (of turnover, not on individual products)</li>
          <li><strong>Simpler filing</strong> — File quarterly returns instead of monthly</li>
          <li><strong>No input tax credit</strong> — You cannot claim GST paid on your purchases</li>
          <li><strong>No inter-state sales</strong> — You can only sell within your state under this scheme</li>
          <li><strong>No ecommerce platform sales</strong> — This scheme does not apply if you sell through ecommerce operators collecting TCS</li>
        </ul>
      </IconSection>

      <Callout type="warning">
        The Composition Scheme's restriction on inter-state sales and ecommerce platforms makes it unsuitable for most
        online sellers. If you ship across state lines (which most online businesses do), you will need regular GST
        registration.
      </Callout>

      <h2>Common GST Mistakes Online Sellers Make</h2>

      <div className="not-prose my-6 space-y-3">
        {[
          "Not registering for GST when selling inter-state. Even if your turnover is below ₹40 lakh, inter-state online selling may require registration.",
          "Using wrong HSN codes. Each product has a specific HSN code that determines the GST rate. Using the wrong code means paying the wrong tax.",
          "Not maintaining proper records. Keep all purchase invoices, sales records, and bank statements organized. You will need them for filing and audits.",
          "Missing filing deadlines. Late filing attracts a penalty of ₹50/day (₹20/day for NIL returns). This adds up quickly.",
          "Not separating business and personal expenses. Open a separate bank account for your business to make GST compliance and accounting much easier.",
          "Ignoring input tax credit. If you are on regular GST (not composition), claim credit for GST paid on raw materials, packaging, shipping, and other business expenses.",
        ].map((mistake, i) => (
          <div key={i} className="flex items-start gap-3 bg-amber-50 rounded-xl p-4 border border-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-900">{mistake}</div>
          </div>
        ))}
      </div>

      <h2>How oBizee Helps with GST Compliance</h2>
      <p>
        Managing GST manually — tracking every sale, calculating tax, generating invoices — is tedious. oBizee
        helps by automatically tracking your revenue and order history, making it easy to generate reports your CA
        needs for GST filing. Your dashboard shows total sales, state-wise breakdowns, and order details — all
        downloadable.
      </p>

      <Callout type="info">
        GST compliance sounds complicated, but once you set it up correctly with the right tools and a good CA,
        it runs smoothly. Do not let GST anxiety stop you from starting your online business. Millions of Indian
        sellers handle it every day.
      </Callout>

      <p>
        The best time to understand GST is before you start selling. The second best time is right now. Get your
        basics right, work with a qualified CA, and focus on what you do best — building a great business.
      </p>

      <div className="not-prose my-6 flex flex-wrap gap-3 justify-center">
        <Link href="/pricing" className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 hover:bg-orange-100 transition-colors">
          oBizee Pricing <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/blog/how-to-start-online-business-india-2026" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Complete Business Startup Guide <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/how-to-create-online-store" className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
          Create Your Store <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </BlogPostLayout>
  );
};

export default TopFunnelPost4;
