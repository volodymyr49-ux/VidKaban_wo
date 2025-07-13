import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RealEstate from "./pages/categories/RealEstate";
import Transport from "./pages/categories/Transport";
import Electronics from "./pages/categories/Electronics";
import Smartphones from "./pages/categories/Smartphones";
import Jewelry from "./pages/categories/Jewelry";
import Cosmetics from "./pages/categories/Cosmetics";
import Kids from "./pages/categories/Kids";
import Sports from "./pages/categories/Sports";
import Tools from "./pages/categories/Tools";
import Tourism from "./pages/categories/Tourism";
import Gifts from "./pages/categories/Gifts";
import Services from "./pages/categories/Services";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/real-estate" element={<RealEstate />} />
          <Route path="/category/transport" element={<Transport />} />
          <Route path="/category/electronics" element={<Electronics />} />
          <Route path="/category/smartphones" element={<Smartphones />} />
          <Route path="/category/jewelry" element={<Jewelry />} />
          <Route path="/category/cosmetics" element={<Cosmetics />} />
          <Route path="/category/kids" element={<Kids />} />
          <Route path="/category/sports" element={<Sports />} />
          <Route path="/category/tools" element={<Tools />} />
          <Route path="/category/tourism" element={<Tourism />} />
          <Route path="/category/gifts" element={<Gifts />} />
          <Route path="/category/services" element={<Services />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
