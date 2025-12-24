import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-[#111827] text-white pt-24 pb-12 rounded-t-[48px] mt-8"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#eefac8] rounded-full"></div>
                <span className="text-xl font-bold tracking-tight">ComRX</span>
             </div>
             <p className="text-gray-400 leading-relaxed">
               Empowering healthcare providers with seamless white-label solutions.
             </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-gray-400">
               <li><a href="#" className="hover:text-[#eefac8] transition-colors">Telemedicine</a></li>
               <li><a href="#" className="hover:text-[#eefac8] transition-colors">Staffing</a></li>
               <li><a href="#" className="hover:text-[#eefac8] transition-colors">Pharmacy</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold mb-6">Company</h4>
             <ul className="space-y-4 text-gray-400">
               <li><a href="#" className="hover:text-[#eefac8] transition-colors">About</a></li>
               <li><a href="#" className="hover:text-[#eefac8] transition-colors">Careers</a></li>
               <li><a href="#" className="hover:text-[#eefac8] transition-colors">Blog</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-semibold mb-6">Contact</h4>
             <ul className="space-y-4 text-gray-400">
               <li>support@comrx.io</li>
               <li>+1 (555) 123-4567</li>
               <li>123 Innovation Dr.<br/>Tech City, TC 94043</li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
           <p>© 2024 ComRX Inc. All rights reserved.</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
