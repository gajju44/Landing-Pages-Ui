import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const Page3 = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`h-screen overflow-y-auto blackWhiteScroll font-sans selection:bg-black selection:text-white transition-colors duration-300 ${
      isDark ? 'bg-[#0a0a0a] text-white selection:bg-white selection:text-black' : 'bg-[#f7f7f7] text-slate-900'
    }`}>
      <div className={`fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none ${isDark ? 'invert' : ''}`}></div>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <HeroSection isDark={isDark} />
    </div>
  );
};
  
export default Page3;
