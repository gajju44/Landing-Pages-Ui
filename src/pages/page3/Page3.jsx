import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EcommerceSection from "./components/EcommerceSection";
import UnifiedDeck from "./components/UnifiedDeck";
import ArtistSection from "./components/ArtistSection";
import CreativePlatformSection from "./components/CreativePlatformSection";
import CreativeDeck from "./components/CreativeDeck";
import BrandSection from "./components/BrandSection";
import VisionSection from "./components/VisionSection";
import CommunitySection from "./components/CommunitySection";
import Footer from "./components/Footer";

const Page3 = () => {
  const [isDark, setIsDark] = useState(false);
  const scrollRef = useRef(null);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      className={`h-screen  overflow-hidden relative font-sans selection:bg-black selection:text-white transition-colors duration-300 ${
        isDark
          ? "bg-[#0a0a0a] text-white selection:bg-white selection:text-black"
          : "bg-[#f7f7f7] text-slate-900"
      }`}
    >
      {/* Background Noise - Fixed to screen */}
      <div
        className={`absolute inset-0 bg-[url('/noise.svg')] opacity-20 pointer-events-none ${isDark ? "invert" : ""}`}
      ></div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="h-full overflow-y-auto blackWhiteScroll relative"
      >
        {/* Global Deck - Inside scrollable container to play nice with Navbar stacking */}
        <UnifiedDeck isDark={isDark} scrollContainerRef={scrollRef} />
        <CreativeDeck isDark={isDark} scrollContainerRef={scrollRef} />

        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <HeroSection isDark={isDark} scrollContainerRef={scrollRef} />
        <EcommerceSection isDark={isDark} />
        <ArtistSection isDark={isDark} />
        <BrandSection isDark={isDark} />
        <CreativePlatformSection
          isDark={isDark}
          scrollContainerRef={scrollRef}
        />

        {/* Spacer for CreativeDeck diagonal scroll effect */}
        <div className="h-[100vh] max-h-[900px]" />

        <VisionSection isDark={isDark} scrollContainerRef={scrollRef} />
        <CommunitySection isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
};

export default Page3;
