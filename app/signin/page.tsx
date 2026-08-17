import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign In to oBizee | Merchant Login",
  description:
    "Sign in to your oBizee merchant account. Open the oBizee app to manage your orders, products and shipping.",
  alternates: { canonical: "https://www.obizee.com/signin" },
};

/**
 * Replaces a `redirect("/?download_app=1")` stub — see the note on the signup page.
 *
 * Existing merchants searching "obizee login" were being bounced to a marketing
 * modal. They now get a page that acknowledges they are already a customer and
 * routes them to support if they are locked out.
 */
export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Sign in to oBizee
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
            Your store runs from the oBizee app. Open it on your phone to manage orders,
            products and shipping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <AppDownloadTrigger>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg font-semibold rounded-2xl shadow-lg shadow-orange-500/25 transition-shadow duration-300"
              >
                Open the oBizee app
                <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
              </Button>
            </AppDownloadTrigger>
            <WhatsAppCTA
              source="signin_page"
              variant="outline"
              label="I need help signing in"
              message="Hi oBizee, I'm an existing merchant and I need help signing in to my account."
            />
          </div>

          <p className="text-gray-500">
            Don&apos;t have a store yet?{" "}
            <Link href="/signup" className="text-orange-600 font-semibold hover:underline">
              Get started
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
