import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const BentoGrid = () => {
  return (
    <section className="bg-white pb-24 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header / Toggles */}
        <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
        >
            {/* Left Toggle - Provider Staffing */}
            <motion.div variants={item} className="lg:col-span-8 bg-[#f4fce3] rounded-2xl p-2 flex justify-center gap-3 items-center relative">
                 <div className="w-fit text-center text-gray-500 font-medium z-10">Virtual</div>
                 <div className="w-fit bg-white/80 rounded-xl shadow-sm text-center px-4 py-2.5 font-semibold text-gray-900 z-10 mx-1">
                    Provider staffing
                 </div>
            </motion.div>

             {/* Right Toggle - Platform */}
            <motion.div variants={item} className="lg:col-span-4 bg-gray-50 rounded-2xl p-2 flex justify-center gap-3 items-center">
                 <div className="w-fit bg-white rounded-xl shadow-sm text-center px-4 py-2.5 font-semibold text-gray-900 z-10 mx-1">
                    Telemedicine
                 </div>
                 <div className="w-fit text-center text-gray-500 font-medium z-10">Platform</div>
            </motion.div>
        </motion.div>

        {/* Main Grid Area */}
        <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={container}
        >
            
            {/* LEFT SECTION (8 Cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* 1. Doctor Card (Tall) */}
                <motion.div variants={item} className="md:col-span-1 md:row-span-2 rounded-[32px] overflow-hidden relative min-h-[340px] group">
                    <img 
                      src="https://images.unsplash.com/photo-1766425597359-08c8f7585ba4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="image" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-sm">
                        <h3 className="font-semibold text-gray-900 leading-snug">Overflow Virtual Providers Staffing Solutions</h3>
                    </div>
                </motion.div>

                {/* 2. Middle Column Stack */}
                <div className="flex flex-col gap-5">
                    {/* Brick & Mortar */}
                    <motion.div variants={item} className="bg-[#f8f9fa] p-6 rounded-[32px] flex flex-col justify-between h-[160px] hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                        <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-900 leading-tight">Virtual Solutions For Brick And Mortar</span>
                    </motion.div>
                    {/* Specialized Care */}
                    <motion.div variants={item} className="bg-[#eefac8] p-6 rounded-[32px] flex flex-col justify-between h-[160px] transition-transform hover:-translate-y-1">
                        <div className="w-10 h-10 bg-white/50 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-900 leading-tight">Specialized Care</span>
                    </motion.div>
                     {/* Prescription Refills */}
                     <motion.div variants={item} className="bg-[#f8f9fa] p-6 rounded-[32px] flex items-center gap-4 h-[100px] hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                        <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-900 leading-tight">Prescription Refills</span>
                    </motion.div>
                </div>

                {/* 3. Right Column Stack (Provider side) */}
                 <div className="flex flex-col gap-5">
                    {/* 50 State Coverage */}
                    <motion.div variants={item} className="bg-gradient-to-br from-[#f4fce3] to-[#eefac8] p-6 rounded-[32px] flex flex-col justify-between h-[160px] relative overflow-hidden">
                        {/* Decorative background lines */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="w-10 h-10 bg-white/60 rounded-xl flex items-center justify-center z-10">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-900 leading-tight z-10">50 State Coverage</span>
                    </motion.div>

                    {/* Full Service */}
                    <motion.div variants={item} className="bg-white border border-gray-100 p-6 rounded-[32px] flex flex-col justify-between h-[160px] shadow-sm hover:shadow-md transition-all">
                        <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center">
                           <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-900 leading-tight">Full Service Primary Care</span>
                    </motion.div>

                     {/* Pharmacy */}
                    <motion.div variants={item} className="bg-[#e0e7ff] p-0 rounded-[32px] flex items-center justify-between h-[100px] relative overflow-hidden group">
                        <img 
                           src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1469&auto=format&fit=crop" 
                           alt="Pharmacy" 
                           className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                         <div className="absolute inset-0 bg-blue-900/10"></div>
                        <span className="font-medium text-indigo-900 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-xl ml-4 shadow-sm">Pharmacy</span>
                        <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center z-10 backdrop-blur-sm mr-4 shadow-sm">
                             <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                             </svg>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* RIGHT SECTION (4 Cols) - Telemedicine */}
            <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-5 h-min content-start">
                  {/* EHR/EMR */}
                  <motion.div variants={item} className="bg-[#cbd5e1] p-6 rounded-[32px] flex flex-col justify-between aspect-square hover:bg-[#bfdbfe] transition-colors">
                        <div className="w-10 h-10 bg-white/50 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-900">EHR/EMR</span>
                  </motion.div>

                  {/* E-Prescribe */}
                   <motion.div variants={item} className="bg-white border border-gray-100 p-6 rounded-[32px] flex flex-col justify-between aspect-square shadow-sm">
                        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="font-medium text-gray-900">E-Prescribe</span>
                  </motion.div>
                  
                  {/* Bottom Row Spanning */}
                   <motion.div variants={item} className="col-span-1 md:col-span-2 bg-[#f8f9fa] rounded-[32px] overflow-hidden relative min-h-[160px] group">
                        <img 
                           src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop" 
                           alt="Practice Management" 
                           className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4">
                             <div className="bg-white px-4 py-2 rounded-xl shadow-sm">
                                <span className="font-medium text-gray-900">Practice Management</span>
                             </div>
                        </div>
                  </motion.div>
                   <motion.div variants={item} className="col-span-1 md:col-span-2 flex gap-4">
                       <div className="flex-1 bg-[#f8f9fa] p-5 rounded-[24px] flex items-center justify-center text-center">
                            <span className="font-medium text-gray-900 text-sm">Lab Orders</span>
                       </div>
                       <div className="flex-1 bg-[#f8f9fa] p-5 rounded-[24px] flex items-center justify-center text-center">
                            <span className="font-medium text-gray-900 text-sm">Doctors Notes</span>
                       </div>
                  </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
