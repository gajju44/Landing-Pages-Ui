import React from 'react';
import { motion } from 'framer-motion';
import { User2, SunDimIcon, Moon, Plus } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex items-center justify-between sticky top-0 z-50 px-16 pt-10 w-full max-w-[1400px] mx-auto bg-transparent transition-colors duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
         {/* Custom Icon mimicking the image */}
         <div className="w-6 h-6 bg-emerald-300 rounded-sm transform rotate-45 flex items-center justify-center">
             <div className="w-2 h-2 bg-white rounded-full" />
         </div>
        <span className={`font-bold text-xl tracking-tight ${isDark ? 'text-white' : 'text-slate-800'}`}>Pallet Ross</span>
      </div>

     

      {/* Right Icons */}
      <div className="flex items-center gap-2">

         {/* Center Links */}
      <div className={`hidden lg:flex items-center gap-3 text-[15px] font-medium mr-6`}>
       
       
        <a href="#" className={`flex items-center gap-2 ${isDark ? 'text-white bg-black/10 hover:bg-white/20' : 'text-black bg-gray-50/30 hover:bg-gray-100/50'} transition-colors group px-3 py-1 rounded-full backdrop-blur-md overflow-hidden`}>
          Get Started
        </a>
        
        <a href="#" className={`flex items-center gap-2 ${isDark ? 'text-white bg-black/10 hover:bg-white/20' : 'text-black bg-gray-50/30 hover:bg-gray-100/50'} transition-colors group px-3 py-1 rounded-full backdrop-blur-md overflow-hidden`}>
          <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <Plus size={10} strokeWidth={4} />
          </div>
          Create strategy
        </a>

       
        {[ 'Pricing', 'Contact', 'Solution', 'E-Commerce'].map((item) => (
             <a key={item} href="#" className={`${isDark ? 'text-white bg-black/10 hover:bg-white/20' : 'text-black bg-gray-50/30 hover:bg-gray-100/50'} transition-colors px-3 py-1 rounded-full backdrop-blur-md overflow-hidden`}>
                {item}
             </a>
        ))}
               
       
      </div>

        <button className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/20 bg-white/10 text-white' : 'hover:bg-black/5 bg-white text-slate-700'}`}>
            <User2 size={20} strokeWidth={2} />
        </button>
        <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/20 bg-white/10 text-white' : 'hover:bg-black/5 bg-white text-slate-700'}`}
        >
            {isDark ? <Moon size={20} strokeWidth={2} /> : <SunDimIcon size={20} strokeWidth={2} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

