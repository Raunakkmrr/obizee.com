import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Start Selling on oBizee | Create Your Online Store",
  description:
    "Start your online store on oBizee. Talk to us on WhatsApp and we'll set you up, or download the app and launch in 2 minutes.",
  alternates: { canonical: "https://www.obizee.com/signup" },
};

const benefits = [
  "Your own store at yourname.obizee.com",
  "Delhivery, DTDC & Blue Dart shipping built in",
  "Take orders from Instagram and WhatsApp",
  "Nothing until ₹50,000 in orders, then 1% per order capped at ₹10",
];

/**
 * Previously this route was a five-line `redirect("/?download_app=1")` stub.
 *
 * "obizee signup" and "obizee login" are the highest-intent queries the site can
 * receive, and both were being thrown into an app-store modal with no way to
 * capture the visitor. This page gives that intent somewhere to land — WhatsApp
 * first, because it needs no install and reaches a human.
 */
export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Start selling in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              {" "}
              2 minutes
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Message us on WhatsApp and we&apos;ll help you set up your store, add your first
            products and take your first order. No cost to get started.
          </p>

          <div className="mb-10">
            <LeadForm />
          </div>

          <ul className="inline-flex flex-col gap-3 text-left mb-10">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center">
            <AppDownloadTrigger>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg font-semibold rounded-2xl border-2 border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300"
              >
                Or download the app
                <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
              </Button>
            </AppDownloadTrigger>
          </div>

          <p className="mt-12 text-gray-500">
            Already selling with oBizee?{" "}
            <Link href="/signin" className="text-orange-600 font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
