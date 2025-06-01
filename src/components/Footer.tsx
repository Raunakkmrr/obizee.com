
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Zap } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Website Templates', href: '#' },
      { name: 'Instagram Integration', href: '#' },
      { name: 'Order Management', href: '#' },
      { name: 'Payment Processing', href: '#' },
      { name: 'Delivery Partners', href: '#' },
      { name: 'Business Analytics', href: '#' }
    ],
    solutions: [
      { name: 'For Instagram Sellers', href: '#' },
      { name: 'For Startups', href: '#' },
      { name: 'For Small Business', href: '#' },
      { name: 'For E-commerce', href: '#' },
      { name: 'Enterprise Solutions', href: '#' }
    ],
    resources: [
      { name: 'Success Stories', href: '#' },
      { name: 'Instagram Business Guide', href: '#' },
      { name: 'Template Gallery', href: '#' },
      { name: 'Video Tutorials', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' }
    ],
    company: [
      { name: 'About StreamFlow', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
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
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  StreamFlow
                </span>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Empowering Instagram businesses and entrepreneurs to transform their social media presence into thriving online enterprises. 
                From first post to business empire.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors">
                  <Mail className="h-5 w-5 mr-4 text-orange-400" />
                  <span className="text-lg">hello@streamflow.com</span>
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
                    <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">
                      {link.name}
                    </a>
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
                    <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">
                      {link.name}
                    </a>
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
                    <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">
                      {link.name}
                    </a>
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
                    <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors text-lg">
                      {link.name}
                    </a>
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
              © 2025 StreamFlow. All rights reserved. Built for Instagram entrepreneurs with ❤️
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
