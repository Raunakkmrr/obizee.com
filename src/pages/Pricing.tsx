
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Shield, HeadphonesIcon, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter Plan',
      originalPrice: 'Free',
      bonusOffer: '₹500 Bonus Credit',
      alternativeOffer: '2 Months Free',
      description: 'Perfect for small businesses getting started',
      features: [
        'Website template access',
        'Basic customization tools',
        'Mobile responsive design',
        'SSL certificate included',
        'Basic analytics',
        'Email support'
      ],
      popular: false,
      buttonText: 'Get Started Free',
      afterPeriod: 'After bonus period: 1% per transaction (max ₹10)',
      recommended: false
    },
    {
      name: 'Growth Plan',
      originalPrice: '₹1,000/month',
      bonusOffer: '₹500 Bonus Credit',
      alternativeOffer: '2 Months Free',
      description: 'Ideal for growing businesses with moderate volume',
      features: [
        'All Starter features',
        'Premium website templates',
        'Advanced customization',
        'SEO optimization tools',
        'Social media integration',
        'Priority email support',
        'Basic e-commerce features',
        'Payment gateway integration'
      ],
      popular: true,
      buttonText: 'Claim Your Bonus',
      afterPeriod: 'After bonus period: 1% per transaction (max ₹10)',
      recommended: true
    },
    {
      name: 'Pro Plan',
      originalPrice: '₹2,500/month',
      bonusOffer: '₹500 Bonus Credit',
      alternativeOffer: '2 Months Free',
      description: 'For established businesses with high volume',
      features: [
        'All Growth features',
        'Unlimited website templates',
        'White-label solutions',
        'Advanced e-commerce features',
        'Multi-language support',
        'Phone & email support',
        'Custom domain included',
        'Advanced analytics & reports',
        'API access'
      ],
      popular: false,
      buttonText: 'Claim Your Bonus',
      afterPeriod: 'After bonus period: 1% per transaction (max ₹10)',
      recommended: false
    }
  ];

  const faqs = [
    {
      question: 'How does the ₹500 bonus credit work?',
      answer: 'When you sign up for any plan, you receive ₹500 credited to your account. This credit can be used towards transaction fees, website customizations, or premium features. The credit typically covers your first 50-100 transactions.'
    },
    {
      question: 'What happens after the bonus period ends?',
      answer: 'After your ₹500 bonus is used up or the 2-month free period ends, you pay only 1% per successful transaction, capped at ₹10 maximum per transaction. No monthly subscription fees required.'
    },
    {
      question: 'Can I choose between bonus credit and free months?',
      answer: 'Yes! When signing up, you can choose either ₹500 bonus credit OR 2 months of completely free usage. This is a one-time choice that cannot be changed later.'
    },
    {
      question: 'Are there any hidden fees or setup costs?',
      answer: 'Absolutely not! We have zero setup fees, no monthly minimums, and no hidden charges. You only pay the 1% transaction fee (max ₹10) after your promotional period ends.'
    },
    {
      question: 'What payment methods are supported?',
      answer: 'We support all major Indian payment methods including UPI, credit/debit cards, net banking, and popular digital wallets like Paytm, PhonePe, Google Pay, and Amazon Pay.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Special Offer Banner */}
      <section className="py-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-2">
              <Gift className="h-5 w-5 mr-2" />
              <span className="text-lg font-bold">🎉 Limited Time Launch Offer!</span>
              <Gift className="h-5 w-5 ml-2" />
            </div>
            <p className="text-base">
              Choose Your Welcome Gift: <span className="font-bold text-yellow-200">₹500 Bonus Credit OR 2 Months Completely Free!</span>
            </p>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple & Transparent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Pricing Plans
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with our generous welcome offer, then pay only when you succeed. 
            No monthly fees, no contracts - just 1% per transaction with a ₹10 maximum cap.
          </p>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 border border-green-200">
            <Shield className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">No Setup Fees • No Monthly Minimums • No Long-term Contracts</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-orange-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-orange-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  
                  {/* Pricing Display */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 line-through mb-1">Regular: {plan.originalPrice}</div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">{plan.bonusOffer}</div>
                    <div className="text-lg text-orange-500 mb-2">OR {plan.alternativeOffer}</div>
                    <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      <strong>After promotion:</strong><br />
                      {plan.afterPeriod}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/signup">
                    <Button 
                      className={`w-full py-3 rounded-xl text-lg font-semibold transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl'
                          : 'bg-white text-orange-600 border-2 border-orange-500 hover:bg-orange-50'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How Our Pricing Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Gift className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">1. Choose Your Gift</h3>
              <p className="text-gray-600">Select either ₹500 bonus credit or 2 months completely free when you sign up.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">2. Build & Launch</h3>
              <p className="text-gray-600">Create your website, start selling, and grow your business using your free period.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-orange-500 mx-auto mb-4">1% Only</div>
              <h3 className="text-xl font-semibold mb-3">3. Pay As You Succeed</h3>
              <p className="text-gray-600">After your promotional period, pay only 1% per transaction (max ₹10).</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Online Business?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of businesses already using Obizee to build their online presence and grow their sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl">
                Start Your Free Trial
              </Button>
            </Link>
            <Link to="/help">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold rounded-xl">
                <HeadphonesIcon className="mr-2 h-5 w-5" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
