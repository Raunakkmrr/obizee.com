
import React from 'react';
import { Star, Instagram, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      title: "Fashion Instagram Influencer",
      followers: "125K",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c88b?w=150&h=150&fit=crop&crop=face",
      quote: "From 50 Instagram orders to 2000+ monthly! My followers love the seamless shopping experience. Revenue increased 10x in 6 months.",
      metrics: { orders: "2K+", revenue: "₹5L+", growth: "10x" },
      rating: 5
    },
    {
      name: "Arjun Mehta",
      title: "Home Baker & Food Entrepreneur",
      followers: "89K",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The templates are incredible! My cake business looks professional now. Custom order forms made it so easy for customers to specify requirements.",
      metrics: { orders: "500+", revenue: "₹2L+", growth: "5x" },
      rating: 5
    },
    {
      name: "Sneha Reddy",
      title: "Handmade Jewelry Creator",
      followers: "67K",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The Instagram integration is magical! I share product links in my stories and get orders instantly. The analytics help me understand my customers better.",
      metrics: { orders: "800+", revenue: "₹3L+", growth: "8x" },
      rating: 5
    },
    {
      name: "Rahul Singh",
      title: "Tech Accessories Seller",
      followers: "156K",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Scaling was never this easy! From managing 20 orders to 500+ daily orders. The delivery integration saved me hours of manual work every day.",
      metrics: { orders: "15K+", revenue: "₹12L+", growth: "25x" },
      rating: 5
    },
    {
      name: "Meera Joshi",
      title: "Organic Skincare Brand",
      followers: "203K",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      quote: "Built my entire business on Instagram and StreamFlow. The professional website templates helped me establish credibility and trust with customers.",
      metrics: { orders: "3K+", revenue: "₹8L+", growth: "15x" },
      rating: 5
    },
    {
      name: "Vikash Kumar",
      title: "Fashion Startup Founder",
      followers: "341K",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      quote: "From Instagram side hustle to full-time business! StreamFlow made the transition seamless. Now managing a team of 10 and growing rapidly.",
      metrics: { orders: "10K+", revenue: "₹25L+", growth: "50x" },
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200/50 mb-6">
            <Instagram className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-800 font-medium">Instagram Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Followers to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Customers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real Instagram businesses sharing their transformation stories. See how they turned their social media presence into thriving enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover mr-4 ring-2 ring-orange-100"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    <div className="flex items-center mt-1">
                      <Instagram className="w-4 h-4 text-orange-500 mr-1" />
                      <span className="text-orange-600 font-semibold text-sm">{testimonial.followers} followers</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="font-bold text-lg text-gray-900">{testimonial.metrics.orders}</div>
                    <div className="text-xs text-gray-500">Monthly Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-green-600">{testimonial.metrics.revenue}</div>
                    <div className="text-xs text-gray-500">Monthly Revenue</div>
                  </div>
                  <div className="text-center flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-orange-500 mr-1" />
                    <span className="font-bold text-lg text-orange-600">{testimonial.metrics.growth}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
