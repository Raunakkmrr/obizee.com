import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/contact";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Add Categories & Products", href: "/business-journey#step-01" },
      { name: "Custom Order Forms", href: "/business-journey#step-02" },
      { name: "Share Form & Manage Orders", href: "/business-journey#step-03" },
      { name: "Logistics Integrations", href: "/business-journey#step-04" },
      { name: "AWB, Pickup & Cancellation", href: "/business-journey#step-05" },
      { name: "Financial Overview", href: "/business-journey#step-06" },
      { name: "Employees & Vendors", href: "/business-journey#step-07" },
    ],
    solutions: [
      { name: "For Clothing Stores", href: "/for/clothing-stores" },
      { name: "For Jewellery Sellers", href: "/for/jewellery-sellers" },
      { name: "For Food Business", href: "/for/food-business" },
      { name: "For Kirana Stores", href: "/for/kirana-stores" },
      { name: "For Handicrafts", href: "/for/handicrafts" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "How to Create Your Store", href: "/how-to-create-online-store" },
      { name: "How to Ship Products", href: "/how-to-ship-products-online-india" },
      { name: "Success Stories", href: "/customer-testimonials" },
      { name: "Platform Comparisons", href: "/compare/best-ecommerce-platforms-india-2026" },
      { name: "Help Center", href: "/help" },
      { name: "Medium Blog", href: "https://medium.com/@obizee.app", external: true },
      { name: "Product Hunt", href: "https://www.producthunt.com/products/obizee?launch=obizee", external: true },
    ],
    company: [
      { name: "About oBizee", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact Us", href: "/contact" },
      { name: "Compliance", href: "/compliance" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-conditions" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-5 sm:mb-6">
                <div className="w-12 h-12 mr-3">
                  <img
                    src="/lovable-uploads/logo-96.png"
                    alt="oBizee Logo"
                    className="w-full h-full object-contain"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                </div>
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  oBizee
                </span>
              </div>
              <p className="mb-4 text-base font-semibold leading-snug text-white sm:text-lg">
                0 subscription charges. Pay us when you get an order.
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Nothing monthly, nothing to set up, nothing hidden — when an order comes in you
                pay 1% of it, capped at ₹10. A month with no orders costs you nothing. Sell
                online, manage orders and stock, and ship across India from your phone.
              </p>
              <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-3 sm:p-4 mb-5 sm:mb-7">
                <p className="text-xs sm:text-sm text-gray-300">
                  <span className="font-semibold text-white">Legal Name:</span> Raunak Kumar (Proprietor)
                </p>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  <span className="font-semibold text-white">Trade Name:</span> SRN TECHNO
                </p>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  <span className="font-semibold text-white">GSTIN:</span> 07FXHPK5913D1ZI
                </p>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  <span className="font-semibold text-white">Office:</span> G-11, Hemkunt Chamber, Nehru Place, New Delhi, Delhi 110019, India
                </p>
              </div>
              <address className="space-y-3 sm:space-y-4 not-italic">
                <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Mail className="h-5 w-5 mr-3 sm:mr-4 text-orange-400 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm sm:text-lg break-all">
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Phone className="h-5 w-5 mr-3 sm:mr-4 text-orange-400 shrink-0" aria-hidden="true" />
                  <a href="tel:+918796971046" className="text-sm sm:text-lg">
                    +91 87969 71046
                  </a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <MapPin className="h-5 w-5 mr-3 sm:mr-4 text-orange-400 shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-lg">Nehru Place, New Delhi, India</span>
                </div>
              </address>
            </div>

            {/* Product links */}
            <nav aria-labelledby="footer-features">
              <h3 id="footer-features" className="text-lg sm:text-xl font-bold mb-4 sm:mb-8 text-white">
                Features
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-lg">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Solutions links */}
            <nav aria-labelledby="footer-solutions">
              <h3 id="footer-solutions" className="text-lg sm:text-xl font-bold mb-4 sm:mb-8 text-white">
                Solutions
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-lg">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Resources links */}
            <nav aria-labelledby="footer-resources">
              <h3 id="footer-resources" className="text-lg sm:text-xl font-bold mb-4 sm:mb-8 text-white">
                Resources
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-lg"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-lg">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Company links */}
            <nav aria-labelledby="footer-company">
              <h3 id="footer-company" className="text-lg sm:text-xl font-bold mb-4 sm:mb-8 text-white">
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-lg">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm sm:text-lg text-center md:text-left mb-5 sm:mb-6 md:mb-0">
              © {new Date().getFullYear()} oBizee. All rights reserved. Built for business owners with <span aria-label="love">❤️</span>
            </div>
            <nav aria-label="Social media links">
              <ul className="flex space-x-4 sm:space-x-8">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-orange-400/10"
                      aria-label={`Follow us on ${social.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
