import React from 'react';

const LogoStrip = () => {
  const logos = [
    { name: 'Rakuten', font: 'font-sans' },
    { name: 'NCR', font: 'font-serif' },
    { name: 'monday.com', font: 'font-bold' },
    { name: 'Disney', font: 'font-serif italic' },
    { name: 'Dropbox', font: 'font-sans font-bold text-blue-800' }, // Dropbox usually colored but distinct
  ];

  return (
    <section className="px-6 md:px-12 py-12 bg-white">
      <div className="flex flex-wrap justify-center  lg:justify-between items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Simulating logos with text for now as we don't have SVGs */}
        <h3 className="text-2xl font-bold tracking-tight">Rakuten</h3>
        <h3 className="text-2xl font-serif font-bold flex items-center gap-1">
            <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center text-xs">C</div>
            NCR
        </h3>
        <h3 className="text-2xl font-extrabold tracking-tighter flex items-center gap-1">
            <span className="text-3xl">II.</span>monday<span className="font-normal text-sm">.com</span>
        </h3>
        <h3 className="text-4xl font-serif italic relative top-1">Disney</h3>
        <h3 className="text-2xl font-bold flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600"></div>
            Dropbox
        </h3>
      </div>
    </section>
  );
};

export default LogoStrip;
