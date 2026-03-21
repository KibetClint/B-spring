import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Software from "./pages/products/Software";
import WeighingEquipment from "./pages/products/WeighingEquipment";
import Hardware from "./pages/products/Hardware";
import ProductDetail from "./pages/products/ProductDetail";
import Services from "./pages/Services";
import CybersecurityService from "./pages/services/CybersecurityService";
import WebDevelopmentService from "./pages/services/WebDevelopmentService";
import IntegrationService from "./pages/services/IntegrationService";
import CCTVService from "./pages/services/CCTVService";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import FAQ from "./pages/FAQ";
import SolutionsPage from "./pages/Solutions";
import Consultation from "./pages/Consultation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/software" element={<Software />} />
          <Route path="/products/weighing-equipment" element={<WeighingEquipment />} />
          <Route path="/products/hardware" element={<Hardware />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cybersecurity" element={<CybersecurityService />} />
          <Route path="/services/web-development" element={<WebDevelopmentService />} />
          <Route path="/services/integration" element={<IntegrationService />} />
          <Route path="/services/cctv-installation" element={<CCTVService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/consultation" element={<Consultation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
