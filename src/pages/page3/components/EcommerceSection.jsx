import React from 'react';
import { motion } from 'framer-motion';

const EcommerceSection = ({ isDark }) => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  
  React.useEffect(() => {
    const checkSize = () => setIsSmallScreen(window.innerWidth < 1272);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const textColor = isDark ? 'text-white' : 'text-[#111]';
  const subtextColor = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <section 
      id="ecommerce-section" 
      className={`w-full max-w-[1400px] mx-auto px-6 py-20 pb-64 flex flex-col items-center gap-16 overflow-hidden ${textColor} ${!isSmallScreen ? 'lg:flex-row lg:py-32 lg:px-20' : ''}`}
    >
      
      {/* Left Column: Text Content */}
      <div className={`flex-1 flex flex-col items-center max-w-xl ${!isSmallScreen ? 'lg:items-start' : ''}`}>
        <motion.span 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-xs font-bold tracking-widest uppercase opacity-60"
        >
            E-Commerce
        </motion.span>
        
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-5xl md:text-7xl font-semibold text-center leading-[1.1] mb-8 tracking-tight ${!isSmallScreen ? 'lg:text-start' : ''}`}
        >
            Showcase, Sell, <br/>
            <span className="text-[#b91c1c]">& acquire arts to</span> <br/>
            our marketplace.
        </motion.h2>
        
        <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className={`text-lg mb-10 text-center leading-relaxed max-w-xs ${subtextColor} ${!isSmallScreen ? 'lg:text-start' : ''}`}
        >
            Dynamic community where artists and buyers seamlessly merge. ArtFusion brings together creators and enthusiasts to share creativity.
        </motion.p>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap justify-center w-full lg:w-fit items-center gap-4"
        >
             <button className={`px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all ${isDark ? 'bg-white text-black' : 'bg-[#111] text-white'}`}>
                Join for $9.99/m
            </button>
            <button className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-[#e7e7e7] text-slate-900 hover:bg-[#d8d8d8]'}`}>
                Read more
            </button>
        </motion.div>
      </div>

      {/* Right Column: Animation Placeholder for UnifiedDeck */}
      <div className={`flex-1 w-full h-[400px] flex items-center justify-center ${!isSmallScreen ? 'lg:items-center' : ''}`}>
         {/* Animation Managed by Global UnifiedDeck */}
      </div>

    </section>
  );
};

export default EcommerceSection;
