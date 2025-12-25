import React from 'react';
import { motion } from 'framer-motion';

const ContentSection = () => {
  return (
    <section className="px-6 md:px-12 md:pr-0 xl:px-24 py-16 bg-white">
      <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[86%] xl:max-w-[80%] ">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl  xl:text-7xl font-normal leading-[1.1] tracking-tight text-gray-900"
        >
          To enhance the growth of your website, it's essential to expedite the release of new pages.
        </motion.h2>
      </div>
    </section>
  );
};

export default ContentSection;
