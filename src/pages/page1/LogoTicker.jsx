import React from 'react';
import { motion } from 'framer-motion';

const LogoTicker = () => {
  const logos = [
    { name: "Acme Corp", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" },
    { name: "Quantum", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" },
    { name: "Echo", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" },
    { name: "Celestial", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" },
    { name: "Pulse", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
            <div className="flex justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap">
              {logos.map((logo, index) => (
                 <img key={index} src={logo.src} alt={logo.name} className="h-8 md:h-10 object-contain" />
              ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoTicker;
