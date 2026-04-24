import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — oBizee",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/2941a262-6754-4343-a36c-43a56c320d5d.png" alt="oBizee" className="w-10 h-10" width="40" height="40" />
            <span className="text-xl font-bold text-orange-600">oBizee</span>
          </Link>
          <Link href="/" className="text-sm text-gray-600 hover:text-orange-600">Go to Homepage</Link>
        </div>
      </nav>

      <div className="flex items-center justify-center py-24 sm:py-32 px-4">
        <div className="text-center max-w-lg">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-4">404 Error</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-10">
            The page you are looking for does not exist or has been moved. Let us help you find what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all">
              Go to Homepage
            </Link>
            <Link href="/help" className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-orange-400 hover:text-orange-600 transition-all">
              Help Center
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/pricing" className="text-sm text-orange-600 hover:underline">Pricing</Link>
              <span className="text-gray-300">·</span>
              <Link href="/features" className="text-sm text-orange-600 hover:underline">Features</Link>
              <span className="text-gray-300">·</span>
              <Link href="/blog" className="text-sm text-orange-600 hover:underline">Blog</Link>
              <span className="text-gray-300">·</span>
              <Link href="/how-to-create-online-store" className="text-sm text-orange-600 hover:underline">Store Guide</Link>
              <span className="text-gray-300">·</span>
              <Link href="/compare/best-ecommerce-platforms-india-2026" className="text-sm text-orange-600 hover:underline">Comparisons</Link>
              <span className="text-gray-300">·</span>
              <Link href="/contact" className="text-sm text-orange-600 hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
