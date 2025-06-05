import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Smartphone, CreditCard, Truck, BarChart3, Rocket, ArrowRight } from "lucide-react";

const Services = () => {
  const journeySteps = [
    {
      icon: Instagram,
      step: "01",
      title: "Connect Your Instagram",
      description: "Link your Instagram business account and start converting your followers into customers immediately.",
      features: ["Instant Instagram integration", "Follower insights", "Story & post optimization", "DM automation"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      step: "02",
      title: "Choose Your Template",
      description: "Select from our collection of stunning, mobile-optimized templates designed for maximum conversions.",
      features: ["50+ premium templates", "Mobile-first design", "Industry-specific layouts", "One-click customization"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: CreditCard,
      step: "03",
      title: "Set Up Payments",
      description: "Configure payment gateways and start accepting payments instantly with automated tracking.",
      features: ["Multiple payment options", "Automatic invoicing", "Payment reminders", "Secure transactions"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Truck,
      step: "04",
      title: "Manage Deliveries",
      description: "Compare delivery partners, track shipments, and provide customers with real-time updates.",
      features: ["Multi-partner comparison", "Bulk shipping", "Live tracking", "Customer notifications"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: BarChart3,
      step: "05",
      title: "Track & Optimize",
      description: "Monitor your business performance with detailed analytics and insights to drive growth.",
      features: ["Sales analytics", "Customer behavior", "Conversion tracking", "Growth insights"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Rocket,
      step: "06",
      title: "Scale Your Empire",
      description: "Expand your business with advanced features, team management, and automation tools.",
      features: ["Team collaboration", "Advanced automation", "API integrations", "Enterprise features"],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200/50 mb-6"
            role="status"
            aria-label="Section badge"
          >
            <span className="text-orange-800 font-medium">Your Success Journey</span>
          </div>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Instagram Post to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Business Empire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow the proven 6-step journey that thousands of Instagram businesses use to scale from side hustle to full-time success.
          </p>
        </header>

        <div className="space-y-16" role="list" aria-label="Success journey steps">
          {journeySteps.map((step, index) => (
            <article key={index} className={`flex items-center ${index % 2 === 1 ? "flex-row-reverse" : ""}`} role="listitem">
              <div className="flex-1">
                <div className={`bg-white rounded-3xl p-10 shadow-lg border border-gray-100 ${index % 2 === 1 ? "ml-8" : "mr-8"}`}>
                  <header className="flex items-center mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mr-6`}
                      aria-hidden="true"
                    >
                      <step.icon className="h-10 w-10 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Step {step.step}</div>
                      <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </header>

                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{step.description}</p>

                  <ul className="grid grid-cols-2 gap-4 mb-8" role="list" aria-label={`Features for ${step.title}`}>
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700" role="listitem">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" aria-hidden="true"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl"
                    aria-label={`Start ${step.title}`}
                  >
                    Start Step {step.step}
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>

              {/* Step indicator */}
              <div className="flex-shrink-0 relative" aria-hidden="true">
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl`}
                >
                  {step.step}
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-gray-200 to-transparent"></div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
