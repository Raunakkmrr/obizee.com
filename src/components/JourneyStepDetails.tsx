import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

type JourneyStepDetail = {
  id: string;
  step: string;
  title: string;
  summary: string;
  points: string[];
};

type StepMediaSlide = {
  src: string;
  alt: string;
  label: string;
  note: string;
  fit?: "contain" | "cover";
  objectPosition?: string;
};

const stepDetails: JourneyStepDetail[] = [
  {
    id: "step-01",
    step: "01",
    title: "Add Category and Products",
    summary: "Start with a clean catalog so customers can order correctly from day one.",
    points: [
      "Create product categories based on your business type",
      "Add products with pricing, stock, and variant details",
      "Keep inventory setup structured before sharing to customers",
    ],
  },
  {
    id: "step-02",
    step: "02",
    title: "Customize Your Form",
    summary: "Configure required and optional fields according to your exact business process.",
    points: [
      "Collect only relevant customer details",
      "Set required vs optional form inputs",
      "Reduce order mistakes with standardized data capture",
    ],
  },
  {
    id: "step-03",
    step: "03",
    title: "Share Form and Manage Orders",
    summary: "Share your form instantly and manage incoming orders from one compact operations view.",
    points: [
      "Copy and share the form link in one tap",
      "Track New, In Progress, and Completed order states",
      "Operate daily order flow without chat-based confusion",
    ],
  },
  {
    id: "step-04",
    step: "04",
    title: "Setup Logistics with DTDC, Delhivery, Amazon Shipping",
    summary: "Connect logistics partners and route every order through a reliable shipping workflow.",
    points: [
      "Switch between partners by order needs",
      "Track pending, in-progress, completed, and priority buckets",
      "Move from manual shipping follow-up to systemized dispatch",
    ],
  },
  {
    id: "step-05",
    step: "05",
    title: "Manage AWB, Pickup, Cancellation, and Delivery",
    summary: "Control shipping execution from AWB generation to pickup and delivery updates.",
    points: [
      "Generate AWB directly from order details",
      "Track payment, shipment, and cancellation status in one screen",
      "Share tracking links with customers from inside the app",
    ],
  },
  {
    id: "step-06",
    step: "06",
    title: "Check Financial Overview",
    summary: "Use daily, weekly, and monthly snapshots to monitor revenue, expenses, and profits.",
    points: [
      "View business totals with period filters",
      "Track categories, product count, and top sellers",
      "Make clearer decisions using actual business data",
    ],
  },
  {
    id: "step-07",
    step: "07",
    title: "Manage Employees and Vendors",
    summary: "Keep profile, owner, vendor, and team settings centralized for smoother operations.",
    points: [
      "Update business and owner information from one profile",
      "Manage payment and form settings for your workflow",
      "Run teams and vendors with better accountability",
    ],
  },
];

const stepMediaById: Record<string, StepMediaSlide[]> = {
  "step-01": [
    {
      src: "/step-media/Quick_actions.jpg",
      alt: "Quick actions screen showing add category and add product",
      label: "Quick Actions",
      note: "Choose Add Category or Add Product from one dashboard.",
    },
    {
      src: "/step-media/Add_category.jpg",
      alt: "Add category form in app",
      label: "Add Category",
      note: "Create category details with required validation.",
    },
    {
      src: "/step-media/Add_product.jpg",
      alt: "Add product form in app",
      label: "Add Product",
      note: "Add product image, category, name, and price.",
    },
    {
      src: "/step-media/Inventory.jpg",
      alt: "Product inventory listing in app",
      label: "Catalog View",
      note: "See products with pricing and availability status.",
    },
  ],
  "step-02": [
    {
      src: "/step-media/Form_fields.jpg",
      alt: "Form fields settings screen",
      label: "Form Fields",
      note: "Mark required and optional fields for customer orders.",
    },
    {
      src: "/step-media/Products_for_form_creation.jpg",
      alt: "Product selection for form creation",
      label: "Select Products",
      note: "Attach selected products to each shareable form.",
    },
    {
      src: "/step-media/Form_creation_step2.jpg",
      alt: "Generate form link screen",
      label: "Generate Form Link",
      note: "Configure payment fields before generating the link.",
    },
  ],
  "step-03": [
    {
      src: "/step-media/Form_link_created.jpg",
      alt: "Form link generated with QR",
      label: "Form Ready",
      note: "Share QR/payment link instantly with customers.",
    },
    {
      src: "/step-media/Form_filling_by_customer.png",
      alt: "Customer order success and status tracking screen",
      label: "Customer Flow",
      note: "Customers receive clear order status after submission.",
    },
    {
      src: "/step-media/Obizee_lifetime_order_and_finance.jpg",
      alt: "Orders and finance overview card",
      label: "Order Dashboard",
      note: "Track high-level order and revenue metrics in one place.",
      fit: "contain",
    },
  ],
  "step-04": [
    {
      src: "/step-media/Shipping_integration.jpg",
      alt: "Shipping partner integration screen",
      label: "Shipping Partners",
      note: "Connect logistics providers for dispatch workflows.",
    },
    {
      src: "/step-media/Order_card.jpg",
      alt: "Order card with actions",
      label: "Dispatch Workflow",
      note: "Move order through in-progress and delivery actions.",
      fit: "contain",
    },
    {
      src: "/step-media/order_tracking_by_customer.png",
      alt: "Customer tracking page",
      label: "Delivery Status",
      note: "Customers can monitor order progress in real time.",
    },
  ],
  "step-05": [
    {
      src: "/step-media/Order_card.jpg",
      alt: "Order details card with status and dates",
      label: "Order Detail Actions",
      note: "Review amount, timeline, and execution state in one card.",
      fit: "contain",
    },
    {
      src: "/step-media/order_tracking_by_customer.png",
      alt: "Customer tracking and pending status",
      label: "Tracking View",
      note: "Share status visibility directly with your customer.",
    },
    {
      src: "/step-media/Payment_settings.PNG",
      alt: "Payment settings screen",
      label: "Payment Controls",
      note: "Configure payment handling for order settlement.",
    },
  ],
  "step-06": [
    {
      src: "/step-media/daily_finance.jpg",
      alt: "Daily financial overview card",
      label: "Financial Overview",
      note: "Track revenue, expenses, and net profit by period.",
      fit: "contain",
    },
    {
      src: "/step-media/track_expenses.PNG",
      alt: "Expense tracking screen",
      label: "Expense Tracking",
      note: "Monitor and manage transaction-level expenses.",
    },
    {
      src: "/step-media/Inventory_tracking.jpg",
      alt: "Inventory management analytics screen",
      label: "Inventory Metrics",
      note: "Use stock insights to improve profitability decisions.",
    },
  ],
  "step-07": [
    {
      src: "/step-media/obizee_settings.PNG",
      alt: "App settings screen",
      label: "Settings Center",
      note: "Manage account, policy, and app preferences.",
    },
    {
      src: "/step-media/Payment_settings.PNG",
      alt: "Payment settings panel",
      label: "Payment Settings",
      note: "Control how amounts are calculated in operations.",
    },
    {
      src: "/step-media/Website_edit.PNG",
      alt: "Website settings and editing screen",
      label: "Website Controls",
      note: "Manage storefront sections, categories, and website status.",
    },
  ],
};

const DeviceFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-[430px] rounded-[2.8rem] border border-[#F3DEC4] bg-[#F5F6F8] p-4 shadow-[0_20px_42px_rgba(30,30,30,0.16)] sm:p-5">
    <div className="mb-3 flex justify-center">
      <div className="h-3.5 w-24 rounded-full bg-black" />
    </div>
    <div className="overflow-hidden rounded-[2rem] bg-[#D7D9DE] p-3 sm:p-4">{children}</div>
  </div>
);

const AppJourneyViewer = ({ stepId }: { stepId: string }) => {
  const slides = useMemo(() => stepMediaById[stepId] ?? [], [stepId]);
  const [index, setIndex] = useState(0);
  const [failedSrcSet, setFailedSrcSet] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIndex(0);
  }, [stepId]);

  const hasSlides = slides.length > 0;
  const current = hasSlides ? slides[index] : null;

  const goPrev = () => {
    if (!hasSlides) return;
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    if (!hasSlides) return;
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <DeviceFrame>
      <div className="relative overflow-hidden rounded-[1.6rem] bg-[#ECEDEF]">
        <div className="h-[clamp(360px,60vh,700px)] w-full">
          {current ? (
            failedSrcSet[current.src] ? (
              <div className="flex h-full items-center justify-center bg-[#ECEDEF] p-6 text-center">
                <p className="text-sm font-semibold text-[#6B7385]">Snapshot unavailable</p>
              </div>
            ) : (
              <img
                src={current.src}
                alt={current.alt}
                className="h-full w-full"
                style={{
                  objectFit: current.fit ?? "contain",
                  objectPosition: current.objectPosition ?? "center center",
                }}
                loading="lazy"
                onError={() => {
                  setFailedSrcSet((prev) => ({ ...prev, [current.src]: true }));
                }}
              />
            )
          ) : (
            <div className="flex h-full items-center justify-center bg-[#ECEDEF] p-6 text-center">
              <p className="text-sm font-semibold text-[#6B7385]">No snapshot configured for this step</p>
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[8%] bg-gradient-to-b from-[#D7D9DE]/90 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-t from-[#D7D9DE]/90 to-transparent" />

        {current && (
          <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
            <div className="rounded-xl bg-white/92 p-2.5 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold text-[#CD7C45]">{current.label}</p>
              <p className="text-xs text-[#374256]">{current.note}</p>
            </div>
          </div>
        )}

        {hasSlides && slides.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/90 p-1.5 text-[#374256] shadow-sm"
              aria-label="Previous snapshot"
              type="button"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/90 p-1.5 text-[#374256] shadow-sm"
              aria-label="Next snapshot"
              type="button"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {hasSlides && slides.length > 1 && (
        <div className="mt-3 flex items-center justify-between gap-2">
          <p className="text-xs font-medium text-[#6B7385]">
            Snapshot {index + 1} of {slides.length}
          </p>
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Step snapshots">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-[#CD7C45]" : "w-2.5 bg-[#C8CCD6]"}`}
                role="tab"
                aria-label={`View ${slide.label}`}
                aria-selected={i === index}
                type="button"
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-3 rounded-full bg-[#977838] px-4 py-2.5">
        <div className="grid grid-cols-4 items-center">
          <div className="mx-auto h-2.5 w-2.5 rounded-full bg-white/85" />
          <div className="mx-auto h-2.5 w-2.5 rounded-full bg-white/85" />
          <div className="mx-auto h-2.5 w-2.5 rounded-full bg-white/85" />
          <div className="mx-auto h-2.5 w-2.5 rounded-full bg-white/85" />
        </div>
      </div>
    </DeviceFrame>
  );
};

const JourneyStepDetails = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50/40 to-white py-14 sm:py-20" aria-labelledby="step-detail-heading">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <header className="mb-10 text-center sm:mb-14">
          <h2 id="step-detail-heading" className="mb-4 text-2xl font-bold text-gray-900 sm:text-4xl">
            Step-Wise Screens and Data Flow
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-gray-600 sm:text-lg">
            Real oBizee app snapshots, shown as a guided feature journey so users understand the full workflow clearly.
          </p>
        </header>

        <div className="space-y-8 sm:space-y-12">
          {stepDetails.map((detail, index) => (
            <article
              id={detail.id}
              key={detail.id}
              className="scroll-mt-24 overflow-hidden rounded-3xl border border-orange-100 bg-white p-4 shadow-sm sm:p-7"
              aria-labelledby={`${detail.id}-title`}
            >
              <div className={`grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="min-w-0">
                  <div className="mb-3 inline-flex items-center rounded-full bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-700 sm:text-sm">
                    Step {detail.step}
                  </div>
                  <h3 id={`${detail.id}-title`} className="mb-3 break-words text-xl font-bold text-gray-900 sm:text-3xl">
                    {detail.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-gray-600 sm:text-base">{detail.summary}</p>
                  <ul className="mb-5 space-y-2.5">
                    {detail.points.map((point) => (
                      <li key={point} className="flex items-start text-sm text-gray-700 sm:text-base">
                        <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center text-sm font-semibold text-orange-600 sm:text-base">
                    Designed for real operational problems
                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-3 sm:p-5">
                  <AppJourneyViewer stepId={detail.id} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyStepDetails;
