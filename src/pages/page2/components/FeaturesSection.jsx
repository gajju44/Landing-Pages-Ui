import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: "Design",
      description: "Crafting intuitive interfaces that delight users and drive engagement through pixel-perfect precision.",
      icon: (
        <svg className="w-8 h-8 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 12L16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 8L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Develop",
      description: "Building robust, scalable architectures using modern technologies that ensure speed and reliability.",
      icon: (
        <svg className="w-8 h-8 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Deploy",
      description: "Seamless automated deployment pipelines that get your product to market faster and safer.",
      icon: (
        <svg className="w-8 h-8 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.63605 9.36396L8.46448 12.1924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.364 9.36396L15.5356 12.1924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="px-6 md:px-12 xl:px-24 py-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-start group"
          >
            <div className="text-gray-900 group-hover:scale-110 transition-transform duration-300">
               {feature.icon}
            </div>
            <h3 className="text-2xl font-sans font-medium mb-3 text-black">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed font-sans text-sm md:text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
