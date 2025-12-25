import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="width-full px-6 md:px-12 pt-5 pb-16 flex flex-col gap-8 bg-white">
      
      {/* Top Text Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 px-10 xl:px-20 ">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-6xl lg:text-6xl font-medium tracking-tight leading-[0.9]"
        >
          Plan.<br/>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Manage.
          </motion.span><br/>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Build
          </motion.span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-row justify-between items-center w-full md:w-auto md:justify-start gap-4 md:gap-12 lg:gap-24 mb-2"
        >
           <div className="flex items-center gap-2 md:gap-10 lg:gap-16 text-sm font-medium ">
              <span className=" text-5xl font-normal hidden md:block">/</span>
              <span className="max-w-40 w-full  leading-tight  lg:text-lg ">Our Difference Is In The Finishing</span>
           </div>
           
           <button className="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors whitespace-nowrap">
              Work 
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
           </button>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
        className="w-full h-[300px] md:h-[350px] rounded-[2rem] overflow-hidden bg-black relative"
      >
        <img 
          src={'https://ladob3d.com/wp-content/uploads/2024/04/PC-1.webp'} 
          alt="Abstract Fluid Shape" 
          className="w-full h-full object-top object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        {/* Overlay gradient to blend if needed, but image is black bg already */}
      </motion.div>

    </section>
  );
};

export default Hero;
