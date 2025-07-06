
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesCarousel from '@/components/CategoriesCarousel';
import ActiveLotteries from '@/components/ActiveLotteries';
import MarketplaceSection from '@/components/MarketplaceSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoriesCarousel />
      <ActiveLotteries />
      <MarketplaceSection />
      <Footer />
    </div>
  );
};

export default Index;
