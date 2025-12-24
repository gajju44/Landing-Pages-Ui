import React, { useState, useEffect } from 'react';
import corner from '../../assets/page1/corner.svg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full right-0 z-50 bg-transparent ">
      <div className="2xl:max-w-7xl pr-4 sm:pr-10 lg:pr-14 2xl:mx-auto relative ">
        <div className="flex justify-between items-start">
          {/* Logo & Left Menu */}
          <div className={`relative flex-shrink-0 pl-4 sm:pl-6 lg:pl-8 2xl:pl-0 z-20 transition-all duration-300 `}>
             {/* Background Extension Layer */}
             <div className={`absolute right-0 top-0 h-full w-[100vw] ${scrolled ? 'bg-[#eefac8]' : ''}  rounded-br-2xl -z-10`}></div>
             
             <div className="px-4 pl-0 p-4 pr-6 pt-6 pb-5  gap-20 flex items-center">
                <a href="#" className="text-2xl font-bold text-gray-900 tracking-tight">
                  ComRX
                </a>

                {/* Desktop Menu - Centered relative to this box? No, keep it here */}
                <div className="hidden lg:flex items-center space-x-8">
                  <a href="#" className={` ${scrolled ? 'text-[#111827] hover:text-[#535a69]' : 'text-gray-500 hover:text-gray-900'} font-medium  transition-colors flex items-center gap-2`}>
                    
                    Home
                  </a>
                  <a href="#" className={`${scrolled ? 'text-[#111827] hover:text-[#535a69]' : 'text-gray-500 hover:text-gray-900'} font-medium  transition-colors flex items-center gap-2`}>Platform</a>
                  <a href="#" className={`${scrolled ? 'text-[#111827] hover:text-[#535a69]' : 'text-gray-500 hover:text-gray-900'} font-medium  transition-colors flex items-center gap-2`}>Services</a>
                  <a href="#" className={`${scrolled ? 'text-[#111827] hover:text-[#535a69]' : 'text-gray-500 hover:text-gray-900'} font-medium  transition-colors flex items-center gap-2`}>Contact us</a>
                </div>
             </div>
             {/* Corner on the right */}
             {scrolled ? <img src={corner} alt="" className="absolute -right-[30px] top-0 w-[30px] h-[30px]" /> : ''}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-3 pt-6">
            <button className="p-2.5 text-gray-500 hover:text-gray-900 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <a href="#" className="bg-[#eefac8] text-gray-900 px-5 py-2.5 rounded-full font-medium hover:bg-[#dbeaa5] transition-colors flex items-center text-sm">
              Join us
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden pt-6 flex items-center space-x-4">
            <a href="#" className="bg-[#eefac8] text-gray-900 px-4 py-2 rounded-full font-medium text-sm">
             Join us
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Creative Rounded Drawer */}
      <div className={`fixed inset-0 z-[60] flex justify-end transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Animated Panel */}
        <div 
          className={`relative ml-2 w-full max-w-[400px] md:max-w-[480px] bg-[#eefac8] h-full shadow-2xl p-8 pt-12 flex flex-col transform transition-transform duration-500  rounded-tl-[80px] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header / Close */}
          <div className="absolute top-8 right-8">
             <button 
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-center w-12 h-12 bg-black/5 rounded-full hover:bg-black/10 transition-colors"
                aria-label="Close menu"
             >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
          </div>

          <div className="flex flex-col justify-center h-full space-y-8 pl-4">
             <div className="space-y-6">
                <a href="#" className="block text-5xl md:text-6xl font-black text-gray-900 hover:text-gray-600 transition-colors tracking-tight">
                   Home
                </a>
                <a href="#" className="block text-5xl md:text-6xl font-black text-gray-900 hover:text-gray-600 transition-colors tracking-tight">
                   Platform
                </a>
                <a href="#" className="block text-5xl md:text-6xl font-black text-gray-900 hover:text-gray-600 transition-colors tracking-tight">
                   Services
                </a>
                <a href="#" className="block text-5xl md:text-6xl font-black text-gray-900 hover:text-gray-600 transition-colors tracking-tight">
                   Contact
                </a>
             </div>
             
             <div className="pt-12 border-t border-gray-900/10 mt-8">
                 <a href="#" className="inline-flex items-center text-2xl font-bold text-gray-900 hover:text-gray-700">
                    Join us &rarr;
                 </a>
                 <div className="mt-8 text-gray-900/60 text-sm font-medium">
                    <p>hello@ComRX.com</p>
                    <p>+1 (555) 123-4567</p>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
