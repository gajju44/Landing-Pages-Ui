import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CardSpread from './CardSpread';

const HeroSection = ({ isDark, scrollContainerRef }) => {
  const { scrollY } = useScroll({ container: scrollContainerRef });
  const cardSpreadOpacity = useTransform(scrollY, [0, 1], [1, 0]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2, // Start slightly earlier
      },
    },
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { 
        y: 0, 
        opacity: 1,
        transition: {
            ease: [0.16, 1, 0.3, 1],
            duration: 3
        }
    },
  };

  const line1 = "Lorem ipsum dolor".split(" ");
  const line2 = "sit consectetur.".split(" ");

  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  React.useEffect(() => {
    const checkSize = () => setIsSmallScreen(window.innerWidth < 1272);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div className={`flex flex-col items-center  justify-start pt-16 px-4 pb-20 overflow-hidden w-full max-w-[1400px] mx-auto ${!isSmallScreen ? 'lg:h-screen' : ''}`}>
      
      {/* Animated Title */}
      <div className="flex flex-col items-center mb-6 z-10 relative">
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className={`flex flex-wrap justify-center gap-x-3 ${!isSmallScreen ? 'lg:gap-x-4' : ''}`}
        >
          {line1.map((word, i) => (
            <div key={i} className="inline-block py-1">
                <motion.span 
                    variants={item} 
                    className={`inline-block origin-bottom text-4xl font-semibold tracking-tighter ${isDark ? 'text-white' : 'text-[#111]'} ${!isSmallScreen ? 'lg:text-7xl' : ''}`}
                >
                {word}
                </motion.span>
            </div>
          ))}
        </motion.div>
        
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className={`flex flex-wrap justify-center gap-x-3 -mt-1 md:-mt-2 ${!isSmallScreen ? 'lg:gap-x-4 lg:-mt-4' : ''}`}
        >
          {line2.map((word, i) => (
            <div key={i + 10} className="inline-block py-1">
                <motion.span 
                    variants={item} 
                    className={`inline-block origin-bottom text-4xl font-semibold tracking-tighter ${isDark ? 'text-white' : 'text-[#111]'} ${!isSmallScreen ? 'lg:text-7xl' : ''}`}
                >
                {word}
                </motion.span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cards Animation */}
      <motion.div style={{ opacity: cardSpreadOpacity }}>
        <CardSpread />
      </motion.div>
      
      {/* Subtext - Animated word by word with fade */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-2xl mb-10 flex flex-wrap justify-center gap-x-1.5"
      >
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.".split(" ").map((word, i) => (
           <div key={i} className="inline-block">
                <motion.span 
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        show: { 
                            y: 0, 
                            opacity: 1,
                            transition: {
                                ease: [0.16, 1, 0.3, 1],
                                duration: 1,
                                delay: 0.8 + (i * 0.02)
                            }
                        }
                    }}
                    className={`inline-block text-base leading-relaxed font-normal transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                >
                    {word}
                </motion.span>
           </div>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <button className={`px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all ${isDark ? 'bg-white text-black' : 'bg-[#111] text-white'}`}>
            Lorem Ipsum
        </button>
        <button className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-[#e7e7e7] text-slate-900 hover:bg-[#d8d8d8]'}`}>
            Dolor Sit
        </button>
      </motion.div>
      
    </div>
  );
};

export default HeroSection;
