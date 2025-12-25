import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-6 md:px-12 py-24 bg-white border-t border-gray-200 mt-12"
    >
      
      {/* Top Section: CTA + Grid */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
        
        {/* Left: Big Statement */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-8"
          >
            Let's create something <span className="text-gray-400">meaningful</span> together.
          </motion.h2>
          <motion.button 
             whileHover={{ x: 10 }}
             className="self-start text-lg font-medium border-b border-black pb-1 hover:opacity-60 transition-opacity flex items-center gap-1"
          >
            Start a project <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Right: Divider Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 pt-4 border-t border-gray-100 md:border-t-0 lg:border-l lg:pl-12"
        >
           
           <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Sitemap</span>
              <a href="#" className="text-base font-medium hover:text-gray-600 transition-colors">Home</a>
              <a href="#" className="text-base font-medium hover:text-gray-600 transition-colors">Work</a>
              <a href="#" className="text-base font-medium hover:text-gray-600 transition-colors">Agency</a>
              <a href="#" className="text-base font-medium hover:text-gray-600 transition-colors">Contact</a>
           </div>

           <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Socials</span>
              <a href="#" className="text-base font-medium hover:text-gray-600 transition-colors">Twitter</a>
              <a href="#" className="text-base font-medium hover:text-gray-600 transition-colors">LinkedIn</a>
              <a href="#" className="text-base font-medium hover:text-gray-600 transition-colors">Instagram</a>
              <a href="#" className="text-base font-medium hover:text-gray-600 transition-colors">Dribbble</a>
           </div>

           <div className="flex flex-col gap-4 col-span-2 md:col-span-1 border-t border-gray-100 pt-8 md:border-t-0 md:pt-0">
              <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Office</span>
              <p className="text-base font-medium text-gray-900">
                1209 Layman Avenue,<br />
                Fayetteville, NC
              </p>
           </div>
        </motion.div>
      </div>

      {/* Bottom Bar: Copyright + Time? */}
      <div className="flex flex-col md:flex-row justify-between items-end border-t border-black pt-6">
        <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-black select-none">
          AGENCY.
        </h1>
        <div className="flex gap-4 text-xs font-mono uppercase tracking-wide mb-2 md:mb-6">
           <span>© 2024</span>
           <span>All Rights Reserved</span>
           <span>Privacy Policy</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
