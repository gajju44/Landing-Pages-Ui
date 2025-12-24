import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Landing Page Repository
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            A collection of beautiful, high-converting hero sections and landing pages.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {/* Card for Page 1 */}
          <Link to="/page1" className="group block">
            <div className="relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
              <div className="h-48 bg-[#eefac8] flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
                 <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                    <span className="text-2xl font-bold text-gray-900">ComRX</span>
                 </div>
              </div>
              <div className="p-8 flex-1">
                
                <h3 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  Page1
                </h3>
                <p className="mt-2 text-gray-500">
                  A clean, rounded aesthetic with lime accents, bento grids, and responsive mobile menus.
                </p>
                <div className="mt-6 flex items-center text-indigo-600 font-medium">
                  View Page 
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Placeholder for Page 2 */}
          <div className="relative bg-white rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col opacity-60">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                 <span className="text-gray-400 font-medium">Coming Soon</span>
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-gray-400">
                  Next Layout
                </h3>
                <p className="mt-2 text-gray-400">
                  More designs coming soon...
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
