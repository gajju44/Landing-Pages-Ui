import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const carouselImages = [
  "https://convergence-london.com/wp-content/uploads/2025/05/Young-Woman-with-Gold-Rimmed-Sunglasses.jpeg",
  "https://convergence-london.com/wp-content/uploads/2025/05/Young-Woman-with-Gold-Rimmed-Sunglasses.jpeg",
  "https://convergence-london.com/wp-content/uploads/2025/05/Young-Woman-with-Gold-Rimmed-Sunglasses.jpeg",
  "https://convergence-london.com/wp-content/uploads/2025/05/Young-Woman-with-Gold-Rimmed-Sunglasses.jpeg"
];

const ArtistSection = ({ isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const textColor = isDark ? 'text-white' : 'text-[#111]';
  const labelColor = isDark ? 'text-white/60' : 'text-black/60';

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.6, ease: "easeOut" }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-24 md:py-32 flex flex-col items-center">
      {/* Header Area */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative">
        <div className="flex flex-col">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 ${labelColor}`}
          >
            CLASS BY REATHA C. PHELAN
          </motion.span>
          <h2 className={`text-5xl md:text-7xl font-semibold tracking-tight max-w-2xl leading-[1.1] ${textColor}`}>
            <div className="flex flex-wrap gap-x-[0.3em]">
              {["Gateway", "to"].map((word, i) => (
                <div key={i} className="pb-1">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 2, 
                      delay: i * 0.1, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    {word}
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-[0.3em]">
              {["artist", "people."].map((word, i) => (
                <div key={i}>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.2 + (i * 0.1), 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className={i === 0 ? "opacity-30" : ""}
                  >
                    {word}
                  </motion.div>
                </div>
              ))}
            </div>
          </h2>
        </div>

        {/* Floating Badge */}
        <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring" }}
            className="hidden md:flex absolute right-20 top-32"
        >
            <div className="bg-[#202020] text-white px-6 py-2 rounded-full shadow-2xl text-lg font-medium relative">
                @reatha
                <div className="absolute -bottom-1 left-8 w-4 h-4 bg-[#202020] rotate-45" />
            </div>
        </motion.div>
      </div>

      {/* Main Feature Carousel Card - Delayed Entrance */}
      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full aspect-[9/14] md:aspect-[16/6] lg:aspect-[16/6] 2xl:aspect-[21/9] rounded-2xl overflow-hidden relative group bg-[#ff6b35]"
      >
        {/* Images Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img 
               key={currentIndex}
               src={carouselImages[currentIndex]}
               custom={direction}
               variants={slideVariants}
               initial="enter"
               animate="center"
               exit="exit"
               alt="Artist portrait" 
               className="w-full h-full object-cover object-top opacity-90"
            />
          </AnimatePresence>
        </div>

        {/* Overlay UI elements */}
        
        {/* Top Left: Color Selection Pill (White/Black) - Remains Fixed */}
        <div className="absolute top-6 left-6 flex flex-col shadow-2xl overflow-hidden gap-1 rounded-2xl z-10">
            <div className="bg-white aspect-[6.2/6] h-[44px] flex items-center justify-center rounded-bl-2xl">
            </div>
            <div className="bg-[#1a1a1a] aspect-[6.2/6] h-[44px] flex items-center rounded-tl-2xl justify-center">
            </div>
        </div>

        {/* Top Right: Progress Dots & Options - Remains Fixed */}
        <div className="absolute top-6 right-6 flex  items-center gap-6 z-10">
            {/* Carousel Dots */}
            <div className="flex gap-1.5 px-3 py-2 rounded-full">
              {carouselImages.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-white w-4' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
         
        </div>

        {/* Bottom Left: Watch Button - Remains Fixed */}
        
        <div className='absolute bottom-6  px-6 w-full flex-wrap gap-5 flex justify-center md:justify-between items-center'>
        <button className=" p-1.5 rounded-full border border-gray-200 text-[13px] tracking-wider uppercase shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 z-10">
        <div className="  px-6 py-1.5 rounded-full bg-white text-black  font-semibold text-[13px] tracking-wider uppercase shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 z-10">
            Watch
        </div>
        </button>

        {/* Bottom Right: Navigation Circles - Remains Fixed */}
        <div className=" flex gap-2 z-10">
            <button 
              onClick={prevSlide}
              className="w-[42px] h-[42px] rounded-full bg-white/90 text-black flex items-center justify-center shadow-xl hover:scale-110 active:scale-90 transition-all cursor-pointer backdrop-blur-sm"
            >
                <ChevronLeft size={26} strokeWidth={1.5} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-[42px] h-[42px] rounded-full bg-white/90 text-black flex items-center justify-center shadow-xl hover:scale-110 active:scale-90 transition-all cursor-pointer backdrop-blur-sm"
            >
                <ChevronRight size={26} strokeWidth={1.5} />
            </button>
        </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ArtistSection;
