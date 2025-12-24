import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4">Loved by innovators</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">See what our partners are saying about our white-label solutions.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
            {/* Review 1 */}
            <motion.div variants={item} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
               </div>
               <p className="text-gray-900 text-lg font-medium leading-relaxed mb-6">
                 "The level of customization and care provided by the team is unmatched. We launched 3x faster than expected."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Sarah Jenks</h4>
                     <p className="text-sm text-gray-500">CEO, HealthFirst</p>
                  </div>
               </div>
            </motion.div>

            {/* Review 2 - Highlighted */}
            <motion.div variants={item} className="bg-[#111827] p-8 rounded-[32px] shadow-xl md:scale-105 relative z-10 text-white">
                <div className="absolute top-8 right-8 text-[#eefac8]">
                    <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                </div>
               <div className="flex items-center gap-1 mb-4 text-[#eefac8]">
                  {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
               </div>
               <p className="text-white text-lg font-medium leading-relaxed mb-6">
                 "Absolutely a game changer for our telehealth practice. The platform scales effortlessly as we grow."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full overflow-hidden border-2 border-[#eefac8]">
                     <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h4 className="font-bold text-white">David Ross</h4>
                     <p className="text-sm text-gray-400">Founder, TeleDoc</p>
                  </div>
               </div>
            </motion.div>

             {/* Review 3 */}
             <motion.div variants={item} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
               </div>
               <p className="text-gray-900 text-lg font-medium leading-relaxed mb-6">
                 "Efficient, beautiful, and robust. Our patients love the interface and our doctors love the tools."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900">Emily Chen</h4>
                     <p className="text-sm text-gray-500">COO, MedFlow</p>
                  </div>
               </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
