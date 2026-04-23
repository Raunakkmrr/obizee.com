import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Templates from "./pages/Templates";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import Help from "./pages/Help";
import SuccessStories from "./pages/SuccessStories";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FeaturesPage from "./pages/FeaturesPage";
import BusinessJourneyPage from "./pages/BusinessJourneyPage";
import CustomerTestimonialsPage from "./pages/CustomerTestimonialsPage";
import Compliance from "./pages/Compliance";
import NotFound from "./pages/NotFound";
import CompareShopify from "./pages/CompareShopify";
import CompareDM2buy from "./pages/CompareDM2buy";
import CompareDukaan from "./pages/CompareDukaan";
import CompareBikayi from "./pages/CompareBikayi";
import CompareInstamojo from "./pages/CompareInstamojo";
import CompareWoocommerce from "./pages/CompareWoocommerce";
import BestPlatforms2026 from "./pages/BestPlatforms2026";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/help" element={<Help />} />
            <Route path="/signin" element={<Navigate to="/?download_app=1" replace />} />
            <Route path="/signup" element={<Navigate to="/?download_app=1" replace />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/business-journey" element={<BusinessJourneyPage />} />
            <Route path="/customer-testimonials" element={<CustomerTestimonialsPage />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/compare/obizee-vs-shopify" element={<CompareShopify />} />
            <Route path="/compare/obizee-vs-dm2buy" element={<CompareDM2buy />} />
            <Route path="/compare/obizee-vs-dukaan" element={<CompareDukaan />} />
            <Route path="/compare/obizee-vs-bikayi" element={<CompareBikayi />} />
            <Route path="/compare/obizee-vs-instamojo" element={<CompareInstamojo />} />
            <Route path="/compare/obizee-vs-woocommerce" element={<CompareWoocommerce />} />
            <Route path="/compare/best-ecommerce-platforms-india-2026" element={<BestPlatforms2026 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
