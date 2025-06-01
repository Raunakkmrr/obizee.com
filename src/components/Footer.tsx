
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Website Templates', href: '/templates' },
      { name: 'Mobile Apps', href: '/solutions#mobile' },
      { name: 'Web Dashboard', href: '/solutions#dashboard' },
      { name: 'E-commerce Tools', href: '/solutions' },
      { name: 'Payment Processing', href: '/solutions' },
      { name: 'Business Analytics', href: '/solutions' }
    ],
    solutions: [
      { name: 'For Small Business', href: '/solutions' },
      { name: 'For E-commerce', href: '/solutions' },
      { name: 'For Restaurants', href: '/templates' },
      { name: 'For Service Providers', href: '/templates' },
      { name: 'For Retailers', href: '/templates' }
    ],
    resources: [
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Help Center', href: '/help' },
      { name: 'Video Tutorials', href: '/help' },
      { name: 'Template Gallery', href: '/templates' },
      { name: 'Contact Support', href: '/help' }
    ],
    company: [
      { name: 'About Obizee', href: '/help' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact Us', href: '/help' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-conditions' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 mr-3">
                  <img 
                    src="/lovable-uploads/2941a262-6754-4343-a36c-43a56c320d5d.png" 
                    alt="Obizee Logo" 
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  Obizee
                </span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Empowering businesses to build professional websites, manage operations, and grow their online presence. 
                From startup to success story - we've got you covered.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Mail className="h-5 w-5 mr-4 text-orange-400" />
                  <span className="text-lg">hello@obizee.com</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Phone className="h-5 w-5 mr-4 text-orange-400" />
                  <span className="text-lg">+91 98765 43210</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <MapPin className="h-5 w-5 mr-4 text-orange-400" />
                  <span className="text-lg">Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Product links */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Features</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions links */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources links */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-lg mb-6 md:mb-0">
              © 2025 Obizee. All rights reserved. Built for business owners with ❤️
            </div>
            <div className="flex space-x-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-orange-400/10"
                  aria-label={social.name}
                >
                  <social.icon className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
