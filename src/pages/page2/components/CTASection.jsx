import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="px-2 md:px-6 py-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-black rounded-[3rem] text-white px-8 md:px-20 py-24 flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-[1.1]">
          Ready to transform <br className="hidden md:block"/> your digital presence?
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
          Join hundreds of fast-growing companies that trust us to build their products.
        </p>

        <button className="bg-white text-black px-10 py-4 rounded-full text-base font-semibold hover:bg-gray-200 transition-colors">
          Start Project
        </button>
      </motion.div>
    </section>
  );
};

export default CTASection;
