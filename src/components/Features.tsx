
import React from 'react';
import { Instagram, Zap, Globe, Smartphone, CreditCard, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Instagram,
      title: "Instagram Business Ready",
      description: "Convert your Instagram followers instantly. Share product links in stories, posts, and DMs. Your followers become customers in seconds.",
      highlight: "For Instagram Sellers"
    },
    {
      icon: Globe,
      title: "Stunning Website Templates",
      description: "Choose from 50+ professionally designed templates. Mobile-optimized, conversion-focused, and ready to launch in minutes.",
      highlight: "50+ Templates"
    },
    {
      icon: Zap,
      title: "One-Click Product Sharing",
      description: "Generate beautiful product links with custom order forms. Share anywhere - WhatsApp, Facebook, Instagram, or your website.",
      highlight: "Share Everywhere"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Your customers order seamlessly on mobile. Optimized checkout flows reduce cart abandonment by 60%.",
      highlight: "60% Better Conversion"
    },
    {
      icon: CreditCard,
      title: "Smart Payment Tracking",
      description: "Automatic payment reminders, multiple gateway support, and instant payment confirmations. Never chase payments again.",
      highlight: "Auto Payments"
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Track your growth with detailed insights. See which products sell best, where your traffic comes from, and optimize for success.",
      highlight: "Data-Driven Growth"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200/50 mb-6">
            <span className="text-orange-800 font-medium">Everything You Need to Succeed</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Modern
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Instagram Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From your first Instagram sale to a thriving online business. Every feature designed to help you grow faster and serve customers better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Highlight badge */}
              <div className="absolute -top-3 left-6">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {feature.highlight}
                </span>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-100 transition-colors">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-orange-50/0 to-orange-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
