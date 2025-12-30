import React from 'react';
import { motion } from 'framer-motion';
import CardSpread from './CardSpread';

const HeroSection = ({ isDark }) => {
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
    hidden: { y: "100%", opacity: 0 },
    show: { 
        y: "0%", 
        opacity: 1,
        transition: {
            ease: [0.33, 1, 0.68, 1],
            duration: 0.8 
        }
    },
  };

  const line1 = "Lorem ipsum dolor".split(" ");
  const line2 = "sit consectetur.".split(" ");

  return (
    <div className="flex flex-col items-center justify-start pt-16 px-4 pb-20 overflow-hidden w-full max-w-[1400px] mx-auto">
      
      {/* Animated Title */}
      <div className="flex flex-col items-center mb-6 z-10 relative">
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 overflow-hidden"
        >
          {line1.map((word, i) => (
            <div key={i} className="overflow-hidden inline-block py-2">
                <motion.span 
                    variants={item} 
                    className={`inline-block origin-bottom text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter ${isDark ? 'text-white' : 'text-[#111]'}`}
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
            className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 overflow-hidden -mt-2 md:-mt-4"
        >
          {line2.map((word, i) => (
            <div key={i + 10} className="overflow-hidden inline-block py-2">
                <motion.span 
                    variants={item} 
                    className={`inline-block origin-bottom text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter ${isDark ? 'text-white' : 'text-[#111]'}`}
                >
                {word}
                </motion.span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cards Animation */}
      <CardSpread />

      {/* Subtext */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="text-center max-w-lg mb-8"
      >
        <p className={`text-base leading-relaxed font-medium transition-colors ${isDark ? 'text-gray-300' : 'text-black'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <button className={`px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-all ${isDark ? 'bg-white text-black' : 'bg-[#111] text-white'}`}>
            Lorem Ipsum
        </button>
        <button className={`px-8 py-3 rounded-full text-sm font-medium transition-colors ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-[#f0f0f0] text-slate-900 hover:bg-[#e5e5e5]'}`}>
            Dolor Sit
        </button>
      </motion.div>
      
    </div>
  );
};

export default HeroSection;
