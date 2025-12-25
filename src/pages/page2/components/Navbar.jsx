import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky z-50 transition-all duration-500 ease-in-out md:px-12 ${
      isScrolled 
        ? 'top-4 w-[90%] md:w-[80%] mx-auto rounded-full py-3 px-8 bg-white/50 backdrop-blur-lg shadow-lg border border-white/20' 
        : 'top-0 w-full py-6 px-6 bg-white border-b border-transparent'
    } flex justify-between items-center`}>
      {/* Brand / Logo */}
      <div className="text-2xl font-bold flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center relative overflow-hidden">
             <div className="w-4 h-2 bg-white transform -rotate-45"></div>
             <div className="w-4 h-2 bg-white transform rotate-45"></div>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-3 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-black transition-colors">Product</a>
        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
        <a href="#" className="hover:text-black transition-colors">Solutions</a>
        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
        <a href="#" className="hover:text-black transition-colors">Pricing</a>
        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
        <a href="#" className="hover:text-black transition-colors">Developers</a>
      </div>

      {/* Right Side Actions */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">FAQ</a>
        <button className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors">
          Get Quote
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col gap-1.5 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-xl font-medium z-40">
           <a href="#" onClick={() => setIsOpen(false)}>Product</a>
           <a href="#" onClick={() => setIsOpen(false)}>Solutions</a>
           <a href="#" onClick={() => setIsOpen(false)}>Pricing</a>
           <a href="#" onClick={() => setIsOpen(false)}>Developers</a>
           <a href="#" onClick={() => setIsOpen(false)}>FAQ</a>
           <button className="bg-purple-100 text-purple-700 px-8 py-3 rounded-full text-lg font-semibold">
              Get Quote
           </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
