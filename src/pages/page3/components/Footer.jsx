import React from "react";
import {
  Twitter,
  Instagram,
  Globe,
  Dribbble,
  MessageCircle,
} from "lucide-react";

const Footer = ({ isDark }) => {
  const bgClass = isDark ? "bg-[#111]" : "bg-[#F5F5F7]"; // Using a light grey for light mode
  const textClass = isDark ? "text-white" : "text-[#1d1d1f]";
  const subTextClass = isDark ? "text-gray-400" : "text-[#86868b]";
  const iconBg = isDark
    ? "bg-white/10 hover:bg-white/20"
    : "bg-white hover:bg-gray-200";

  return (
    <footer
      className={`w-full py-20 px-6 lg:px-24 ${bgClass} transition-colors duration-500`}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Column 1: Brand & Social (Spans 5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="relative inline-block">
            <h2
              className={`text-4xl md:text-5xl font-bold tracking-tight ${textClass}`}
            >
              Our platform, your art.
            </h2>
            {/* Decorative Chat Bubble */}
            <div className="absolute -top-6 -right-8 bg-white shadow-sm p-2 rounded-xl hidden md:block">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <div className="w-1 h-1 bg-black rounded-full"></div>
              </div>
            </div>
          </div>

          <p className={`text-lg leading-relaxed max-w-md ${subTextClass}`}>
            In the realm of Artnesa, creativity knows no bounds. This eternal
            marketplace celebrates the timeless nature of art.
          </p>

          <div className="flex gap-4 mt-4">
            {[Twitter, Instagram, Globe, Dribbble].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 ${iconBg}`}
              >
                <Icon className={`w-5 h-5 ${textClass}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Get Started (Spans 2-3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <h3 className={`font-semibold ${subTextClass}`}>Get Started</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className={`flex items-center gap-2 font-medium ${textClass} hover:opacity-70 transition-opacity`}
              >
                <span className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white text-[8px]">
                  ▶
                </span>
                Create strategy
                <span className="bg-[#FF4F4F] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                  New
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`font-medium ${textClass} hover:opacity-70 transition-opacity`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`font-medium ${textClass} hover:opacity-70 transition-opacity`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`font-medium ${textClass} hover:opacity-70 transition-opacity`}
              >
                Solution
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`font-medium ${textClass} hover:opacity-70 transition-opacity`}
              >
                E-Commerce
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Your Story (Spans 2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h3 className={`font-semibold ${subTextClass}`}>Your Story</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className={`flex items-center gap-2 font-medium ${textClass} hover:opacity-70 transition-opacity`}
              >
                <span className="w-4 h-4 rounded-full bg-black flex items-center justify-center text-white text-[8px]">
                  ▶
                </span>
                Create Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center gap-2 font-medium ${textClass} hover:opacity-70 transition-opacity`}
              >
                Sell fast
                <span className="bg-[#E5E7EB] text-gray-500 text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                  Soon
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Privacy & Policy (Spans 2 cols) */}
        <div className="lg:col-span-2 flex flex-col justify-between h-full gap-6">
          <div>
            <h3 className={`font-semibold ${subTextClass} mb-6`}>
              Privacy & Policy
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className={`font-medium ${textClass} hover:opacity-70 transition-opacity`}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center gap-2 font-medium ${textClass} hover:opacity-70 transition-opacity`}
                >
                  Api
                  <span className="bg-[#FFE4E4] text-[#FF4F4F] text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                    New
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className={`text-sm ${subTextClass} mt-auto`}>
            © 2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
