import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Classy/Minimalist Easing
const transition = { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] };
const quickTransition = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const textReveal = {
  hidden: { y: "100%" },
  visible: { 
    y: "0%",
    transition: transition
  }
};

const blurReveal = {
  hidden: { opacity: 0, filter: "blur(5px)", y: 20 },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    y: 0,
    transition: quickTransition 
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "circOut" }
  }
};

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center pt-24 lg:pt-3 pb-16 lg:pb-24 px-4 sm:px-6 md:px-20 lg:px-8 2xl:px-0 2xl:max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end w-full">
        {/* Left Column: Content */}
        <motion.div 
          className="lg:max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <div className="mb-6">
             <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 leading-[1.1]">
                {/* Line 1 */}
                <div className="overflow-hidden">
                    <motion.div variants={textReveal} className="flex gap-3" style={{ willChange: "transform" }}>
                         <span className="relative inline-block px-2">
                             <span className="absolute inset-0 bg-[#eefac8] rounded-xl -rotate-1"></span>
                             <span className="relative z-10">Lorem</span>
                         </span> 
                         <span>ipsum</span>
                    </motion.div>
                </div>
                {/* Line 2 */}
                <div className="overflow-hidden">
                    <motion.div variants={textReveal} style={{ willChange: "transform" }}>
                        dolor sit amet
                    </motion.div>
                </div>
             </h1>
          </div>
          
          <motion.p 
            variants={blurReveal}
            style={{ willChange: "transform, opacity, filter" }}
            className="text-xl lg:text-lg text-gray-500 mb-8 max-w-xl lg:max-w-lg leading-relaxed"
          >
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </motion.p>
          
          <motion.div 
            variants={blurReveal}
            style={{ willChange: "transform, opacity, filter" }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link to="#" className="px-8 py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center group">
              Get Started
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <button className="px-8 py-3.5 bg-[#eefac8] text-gray-900 rounded-full font-medium hover:bg-[#dbeaa5] transition-colors">
              Book Discovery Call
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={blurReveal} style={{ willChange: "transform, opacity, filter" }} className="hidden lg:flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                   <div className="w-full h-full bg-gray-300"></div>
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">5000+</p>
              <p className="text-gray-500 text-sm">happy customers</p>
            </div>
          </motion.div>
          
          <motion.div variants={blurReveal} style={{ willChange: "transform, opacity, filter" }} className="hidden lg:flex mt-8 items-center gap-3 text-gray-500 text-sm">
             <span className='bg-gray-100 px-3 py-1 rounded-full'>Interested in working with us?</span> 
             <button className="p-1 rounded-full bg-[#eefac8] text-gray-900 hover:bg-[#dbeaa5]">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
             </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Image Placeholder */}
        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Placeholder Image */}
          <motion.div 
             variants={imageReveal}
             style={{ willChange: "transform, opacity, filter" }}
             className="aspect-[4/6] md:aspect-[8/5] lg:aspect-[4/5] w-full max-h-[600px] rounded-3xl bg-gray-200 overflow-hidden relative shadow-2xl"
          >
             <img src="https://images.unsplash.com/photo-1761839271800-f44070ff0eb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-[600px] w-full object-cover' alt="" />
             
             {/* Mobile Overlay: Social Proof */}
             <motion.div 
               initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
               whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
               transition={{ delay: 0.6 }}
               className="lg:hidden absolute bottom-20 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg flex items-center gap-3 max-w-[90%]"
             >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                       <div className="w-full h-full bg-gray-300"></div>
                    </div>
                  ))}
                </div>
                <div>
                   <p className="font-bold text- gray-900 text-sm">1000+</p>
                   <p className="text-gray-500 text-xs">happy patients</p>
                </div>
             </motion.div>

             {/* Mobile Overlay: Interested Pill */}
             <motion.div 
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.7 }}
                className="lg:hidden sm:w-fit absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-1 text-xs md:text-base md:gap-5 md:justify-between text-sm text-gray-600"
             >
                <span>Interested in partnering with us?</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
             </motion.div>
          </motion.div>

          {/* Floating Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hidden lg:flex absolute bottom-24 -left-2 md:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-2xl items-center gap-4 max-w-[260px] border border-white/50"
          >
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex-shrink-0 bg-cover bg-center" style={{backgroundImage: 'url()' }}> 
               <div className="w-full h-full bg-gray-300 rounded-lg"></div>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">Quick Service lorem</p>
              <p className="text-gray-500 text-xs">For Everyone</p>
            </div>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div 
             initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
             whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
             transition={{ delay: 1, duration: 0.8 }}
             className="hidden lg:flex absolute bottom-8 left-10  md:right-auto md:left-12 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-2xl items-center gap-3 border border-white/50"
          >
             <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
             </div>
             <p className="font-semibold text-gray-900 text-sm">Automated Process</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
