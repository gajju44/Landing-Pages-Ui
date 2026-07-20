import React from 'react';
import { motion } from 'framer-motion';

const BrandSection = ({ isDark }) => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  
  React.useEffect(() => {
    const checkSize = () => setIsSmallScreen(window.innerWidth < 1272);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const textColor = isDark ? 'text-white' : 'text-[#111]';
  const subtextColor = isDark ? 'text-gray-400' : 'text-gray-600';

  const brands = [
    "MERCURY", "Remote", "miro", "BB", "databricks", "Linear", "CIRCUS", "MERCURY", "Remote", "miro", "BB", "databricks", "Linear"
  ];

  const titleWords = ["Trusted", "by", "the", "best."];

  return (
    <section className={`w-full max-w-[1400px] mx-auto px-6  lg:px-20 flex flex-col items-center ${!isSmallScreen ? 'lg:items-start' : ''} gap-12 overflow-hidden`}>
      <div className={`flex flex-col items-center ${!isSmallScreen ? 'lg:items-start' : ''} gap-4`}>
        <h2 className={`text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-center ${!isSmallScreen ? 'lg:text-start' : ''} ${textColor}`}>
          <div className={`flex flex-wrap justify-center ${!isSmallScreen ? 'lg:justify-start' : ''} gap-x-[0.3em]`}>
            {titleWords.map((word, i) => (
              <div key={i} className="pb-1">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.2, 
                    delay: i * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={word === "best." ? "opacity-20" : ""}
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </div>
        </h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`text-lg transition-colors ${subtextColor} max-w-sm text-center ${!isSmallScreen ? 'lg:text-start' : ''}`}
        >
          Our growth hackers are experts in brand digital strategy across multiple segments.
        </motion.p>
      </div>

      {/* Logo Prompter (Infinite Carousel) */}
      <div className="w-full relative mt-8 overflow-hidden py-10">
        {/* Gradient Overlays */}
        <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r ${isDark ? 'from-[#0a0a0a]' : 'from-[#f7f7f7]'} to-transparent`} />
        <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l ${isDark ? 'from-[#0a0a0a]' : 'from-[#f7f7f7]'} to-transparent`} />

        <motion.div 
          className="flex whitespace-nowrap gap-20 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className={`text-2xl md:text-3xl font-bold tracking-tighter uppercase opacity-20 ${textColor} hover:opacity-50 transition-opacity cursor-default`}
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;
