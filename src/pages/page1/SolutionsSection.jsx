import React from 'react';
import dnaIcon from '../../assets/page1/dna.svg';
import { motion } from 'framer-motion';

const SolutionsSection = () => {
  return (
    <section className="bg-white py-16 px-4 font-sans border-t border-b border-gray-100">
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <span className="text-gray-300">Customized</span>
            <span className="flex items-center gap-2">
                vendor
                {/* Use the external SVG asset */}
                <img src={dnaIcon} alt="" className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
            </span>
            <span>onboarding</span>
        </h2>
        
        <p className="max-w-72 text-gray-300 text-sm md:text-base  mx-auto ">
          Discover ComRX's expertly crafted white-label solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default SolutionsSection;
