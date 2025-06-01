
import React from 'react';
import { Button } from '@/components/ui/button';
import { Building, Zap, Globe, Smartphone, CreditCard, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: Building,
      title: "Business Management Ready",
      description: "Complete business operations in one platform. Manage inventory, track sales, handle finances, and grow your business efficiently.",
      highlight: "All-in-One Platform"
    },
    {
      icon: Globe,
      title: "Professional Templates",
      description: "Choose from 50+ professionally designed templates for invoices, reports, and business documents. Mobile-optimized and ready to use.",
      highlight: "50+ Templates"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Automate repetitive tasks like inventory alerts, payment reminders, and report generation. Save hours every day.",
      highlight: "Save 80% Time"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your business dashboard anywhere. Optimized mobile experience ensures you stay connected to your business 24/7.",
      highlight: "100% Mobile Ready"
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
      description: "Track your growth with detailed insights. See which products sell best, where your revenue comes from, and optimize for success.",
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Business Operations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From your first business process to a thriving operation. Every feature designed to help you streamline operations and grow faster.
          </p>
          <Link to="/templates">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all">
              View All Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
