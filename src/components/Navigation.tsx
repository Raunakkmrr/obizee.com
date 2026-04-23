"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppDownloadTrigger from "@/components/AppDownloadTrigger";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const solutionsItems = [
    { name: "Add Categories & Products", href: "/business-journey#step-01", description: "Set up catalog, pricing, and stock in one place" },
    { name: "Custom Forms & Order Flow", href: "/business-journey#step-02", description: "Capture exact order data and manage order status" },
    { name: "Logistics & AWB Operations", href: "/business-journey#step-04", description: "Integrate shipping partners and run dispatch operations" },
    { name: "Financial Overview", href: "/business-journey#step-06", description: "Track revenue, expenses, and net profit with clarity" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center transition-transform hover:scale-105" aria-label="oBizee Home">
              <div className="w-12 h-12 mr-3">
                <img
                  src="/lovable-uploads/2941a262-6754-4343-a36c-43a56c320d5d.png"
                  alt="oBizee Logo"
                  className="w-full h-full object-contain"
                  width="48"
                  height="48"
                  loading="eager"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                oBizee
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/business-journey"
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  isActive("/business-journey")
                    ? "text-orange-600 bg-orange-50 border-b-2 border-orange-600"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
                aria-current={isActive("/business-journey") ? "page" : undefined}
              >
                Platform Services
              </Link>

              <div className="relative group" onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)}>
                <Link
                  href="/solutions"
                  className={`px-4 py-2 text-sm font-medium flex items-center transition-all rounded-lg ${
                    isActive("/solutions")
                      ? "text-orange-600 bg-orange-50 border-b-2 border-orange-600"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                  aria-current={isActive("/solutions") ? "page" : undefined}
                  aria-expanded={isSolutionsOpen}
                  aria-haspopup="true"
                >
                  Solutions <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>

                {/* Solutions Dropdown */}
                <div
                  className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-200 ${
                    isSolutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                  }`}
                  role="menu"
                  aria-label="Solutions menu"
                >
                  <div className="p-4">
                    {solutionsItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                        role="menuitem"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">{item.name}</div>
                        <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/pricing"
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  isActive("/pricing")
                    ? "text-orange-600 bg-orange-50 border-b-2 border-orange-600"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
                aria-current={isActive("/pricing") ? "page" : undefined}
              >
                Pricing
              </Link>

              <Link
                href="/success-stories"
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  isActive("/success-stories")
                    ? "text-orange-600 bg-orange-50 border-b-2 border-orange-600"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
                aria-current={isActive("/success-stories") ? "page" : undefined}
              >
                Success Stories
              </Link>

              <Link
                href="/help"
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  isActive("/help")
                    ? "text-orange-600 bg-orange-50 border-b-2 border-orange-600"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                }`}
                aria-current={isActive("/help") ? "page" : undefined}
              >
                Help
              </Link>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <AppDownloadTrigger>
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                aria-label="Download oBizee mobile app"
              >
                Download App
              </Button>
            </AppDownloadTrigger>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 p-1.5 sm:p-2 rounded-lg hover:bg-orange-50 transition-all"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in" id="mobile-menu" role="menu" aria-label="Mobile navigation menu">
          <div className="px-2 pt-1.5 pb-2.5 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-100">
            <Link
              href="/business-journey"
              className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive("/business-journey") ? "text-orange-400 bg-orange-500/10" : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
              role="menuitem"
              aria-current={isActive("/business-journey") ? "page" : undefined}
            >
              Platform Services
            </Link>
            <Link
              href="/solutions"
              className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive("/solutions") ? "text-orange-400 bg-orange-500/10" : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
              role="menuitem"
              aria-current={isActive("/solutions") ? "page" : undefined}
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive("/pricing") ? "text-orange-400 bg-orange-500/10" : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
              role="menuitem"
              aria-current={isActive("/pricing") ? "page" : undefined}
            >
              Pricing
            </Link>
            <Link
              href="/success-stories"
              className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive("/success-stories") ? "text-orange-400 bg-orange-500/10" : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
              role="menuitem"
              aria-current={isActive("/success-stories") ? "page" : undefined}
            >
              Success Stories
            </Link>
            <Link
              href="/help"
              className={`block px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                isActive("/help") ? "text-orange-400 bg-orange-500/10" : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              }`}
              role="menuitem"
              aria-current={isActive("/help") ? "page" : undefined}
            >
              Help
            </Link>
            <div className="pt-3 pb-2 border-t border-gray-200">
              <div className="flex flex-col space-y-2 px-3">
                <AppDownloadTrigger>
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white justify-start rounded-xl w-full transition-all"
                    role="menuitem"
                    aria-label="Download oBizee mobile app"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Download App
                  </Button>
                </AppDownloadTrigger>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
