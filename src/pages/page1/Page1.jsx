import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SolutionsSection from './SolutionsSection';
import BentoGrid from './BentoGrid';
import LogoTicker from './LogoTicker';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Page1 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <LogoTicker />
      <SolutionsSection />
      <BentoGrid />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Page1;
