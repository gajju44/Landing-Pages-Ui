import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import ContentSection from './components/ContentSection';
import Testimonial from './components/Testimonial';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';

const Page2 = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-purple-100 selection:text-purple-900">
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <Hero />
        <LogoStrip />
        <ContentSection />
        <Testimonial />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Page2;
