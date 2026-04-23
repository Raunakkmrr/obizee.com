import React from "react";
import { Button } from "@/components/ui/button";
import { Globe, FileText, Smartphone, Truck, Zap, BarChart3, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const journeySteps = [
    {
      icon: Globe,
      step: "01",
      title: "Set Up Categories and Products",
      problem: "Product details are scattered in chats and notes, causing stock mistakes and missed sales.",
      description: "Create a clean catalog with categories, pricing, variants, and stock so your team works from one source of truth.",
      features: ["Category-wise catalog structure", "Price, variants, and stock in one view", "Ready product details for faster selling"],
      href: "/business-journey#step-01",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      step: "02",
      title: "Customize Your Order Form",
      problem: "Wrong or incomplete customer data leads to delays, rework, and delivery failures.",
      description: "Set required and optional fields based on your business process so every order comes with the right details.",
      features: ["Business-specific form fields", "Collect notes, address, and preferences", "Standardized error-free data capture"],
      href: "/business-journey#step-02",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Smartphone,
      step: "03",
      title: "Share Form and Manage Orders",
      problem: "Orders from Instagram/WhatsApp get lost when teams track them manually.",
      description: "Share your form instantly and manage every incoming order from one operational dashboard inside the app.",
      features: ["Shareable form link in one tap", "New/In Progress/Completed status flow", "No more scattered spreadsheet tracking"],
      href: "/business-journey#step-03",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Truck,
      step: "04",
      title: "Set Up Logistics Partners",
      problem: "Shipping setup is inconsistent when each order is processed manually.",
      description: "Integrate DTDC, Delhivery, and Amazon Shipping so dispatch operations become predictable and faster.",
      features: ["DTDC setup from app workflow", "Delhivery integration support", "Amazon Shipping setup support"],
      href: "/business-journey#step-04",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      step: "05",
      title: "Manage AWB, Pickup, and Cancellations",
      problem: "Fulfillment breaks when AWB creation, pickup, and cancellations are handled on separate tools.",
      description: "Generate AWB, request pickup, process cancellations, and monitor delivery movement from one place.",
      features: ["One-screen AWB generation", "Pickup + cancellation controls", "Customer-ready tracking updates"],
      href: "/business-journey#step-05",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: BarChart3,
      step: "06",
      title: "Track Financial Overview",
      problem: "Owners cannot take decisions quickly when revenue, expense, and profit numbers are unclear.",
      description: "Track daily, weekly, and monthly financial performance with clear revenue, expense, and net-profit views.",
      features: ["Daily/Weekly/Monthly financial tabs", "Revenue, expenses, and net profit", "Top products and category-level visibility"],
      href: "/business-journey#step-06",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Users,
      step: "07",
      title: "Manage Employees and Vendors",
      problem: "Operations become person-dependent without role clarity and owner-level tracking.",
      description: "Assign responsibility across team members and vendors to run daily business processes with accountability.",
      features: ["Role-wise team visibility", "Vendor coordination workflows", "Clear ownership of tasks and updates"],
      href: "/business-journey#step-07",
      color: "from-slate-600 to-slate-800",
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <header className="text-center mb-10 sm:mb-16 md:mb-20">
          <div
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200/50 mb-4 sm:mb-6"
            role="status"
            aria-label="Section badge"
          >
            <span className="text-orange-800 text-sm sm:text-base font-medium">What You Get Inside oBizee After Signup</span>
          </div>
          <h2 id="services-heading" className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Services That Help You
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"> Run Daily Business Operations</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Each service below is available in-platform to solve day-to-day merchant problems: catalog setup, order handling, shipping,
            finance visibility, and team operations.
          </p>
        </header>

        <div className="space-y-8 sm:space-y-14 md:space-y-16" role="list" aria-label="Success journey steps">
          {journeySteps.map((step, index) => (
            <article key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`} role="listitem">
              <div className="flex-1 w-full min-w-0">
                <div className={`bg-white rounded-3xl p-4 sm:p-8 md:p-10 shadow-lg border border-gray-100 ${index % 2 === 1 ? "lg:ml-8" : "lg:mr-8"}`}>
                  <header className="flex items-start sm:items-center mb-4 sm:mb-6 min-w-0">
                    <div
                      className={`w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mr-3 sm:mr-6 shrink-0`}
                      aria-hidden="true"
                    >
                      <step.icon className="h-6 w-6 sm:h-10 sm:w-10 text-white" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1">Step {step.step}</div>
                      <h3 className="text-xl sm:text-3xl font-bold text-gray-900 leading-tight break-words">{step.title}</h3>
                    </div>
                  </header>

                  <p className="text-sm sm:text-base text-orange-700 bg-orange-50 border border-orange-100 rounded-xl px-3 py-2 sm:px-4 sm:py-3 mb-4 sm:mb-5">
                    <span className="font-semibold">Problem it solves:</span> {step.problem}
                  </p>

                  <p className="text-sm sm:text-xl text-gray-600 mb-5 sm:mb-8 leading-relaxed">{step.description}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-5 sm:mb-8" role="list" aria-label={`Features for ${step.title}`}>
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start sm:items-center text-gray-700" role="listitem">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" aria-hidden="true"></div>
                        <span className="text-sm sm:text-base font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={step.href} aria-label={`Start ${step.title}`}>
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl">
                      View Service {step.step}
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Step indicator */}
              <div className="flex-shrink-0 relative order-first lg:order-none mb-4 sm:mb-6 lg:mb-0" aria-hidden="true">
                <div
                  className={`w-14 h-14 sm:w-24 sm:h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-bold shadow-xl`}
                >
                  {step.step}
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-gray-200 to-transparent"></div>
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
