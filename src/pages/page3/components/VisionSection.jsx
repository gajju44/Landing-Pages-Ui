import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  PenTool,
  Palette,
  Layers,
  Wand2,
  MousePointer2,
  Box,
} from "lucide-react";

const SplitText = ({ children, className, delay = 0 }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const VisionSection = ({ isDark, scrollContainerRef }) => {
  const containerRef = useRef(null);
  const textColor = isDark ? "text-white" : "text-[#111]";
  const subTextColor = isDark ? "text-gray-400" : "text-gray-600";
  const buttonBorder = isDark
    ? "border-white/20 hover:bg-white/10"
    : "border-black/10 hover:bg-black/5";

  const icons = [
    { Icon: PenTool, label: "Design" },
    { Icon: Palette, label: "Color" },
    { Icon: Box, label: "Product" },
    { Icon: Layers, label: "Stack" },
    { Icon: Wand2, label: "Magic" },
    { Icon: MousePointer2, label: "Interact" },
  ];

  return (
    <section
      id="vision-section"
      ref={containerRef}
      className="relative  py-24 flex flex-col lg:flex-row items-center justify-center gap-16 px-6 lg:px-24 overflow-hidden"
    >
      {/* Left Column: Text & Icons */}
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 z-10">
        <div className="flex flex-col items-start">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${textColor}`}
          >
            <SplitText>Our vision</SplitText>
            <SplitText delay={0.1}>for any art technology.</SplitText>
          </h2>

          <div
            className={`mt-6 text-lg md:text-xl max-w-md leading-relaxed ${subTextColor}`}
          >
            <SplitText delay={0.2}>
              Every piece of art tells a story. Echoes of
            </SplitText>
            <SplitText delay={0.25}>
              Expression allows artists to showcase their
            </SplitText>
            <SplitText delay={0.3}>
              personal journeys through their work.
            </SplitText>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`px-8 py-3 rounded-full border ${buttonBorder} transition-all duration-300 ${textColor} font-medium mt-8`}
          >
            Read more
          </motion.button>
        </div>

        {/* Circular Icons Grid */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {icons.map(({ Icon, label }, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 group cursor-pointer"
              initial={{ y: -100, opacity: 0, rotate: -20 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + i * 0.1,
                type: "spring",
                bounce: 0.5,
                damping: 10,
                stiffness: 100,
              }}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 
                        ${isDark ? "bg-white/5 group-hover:bg-white/10" : "bg-gray-100 group-hover:bg-gray-200"}`}
              >
                <Icon className={`w-6 h-6 ${textColor}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Column: Tabs & Grid */}
      <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
        {/* Business Tab (Background) */}
        <div
          className={`absolute top-0 right-10 w-[90%] h-[550px] rounded-3xl p-6 transform scale-95 opacity-50 z-0 origin-bottom-right
            ${isDark ? "bg-zinc-800" : "bg-gray-100"} border border-black/5`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className={`text-xl font-medium ${textColor}`}>Business</span>
            <button
              className={`px-4 py-1.5 rounded-full text-sm bg-white shadow-sm flex items-center gap-2 ${isDark ? "text-black" : "text-black"}`}
            >
              <span className="text-lg font-bold">+</span> Create
            </button>
          </div>
        </div>

        {/* Personal Tab (Foreground - Target for Deck Cards) */}
        <div
          className={`absolute top-12 right-0 w-[90%] h-[550px] rounded-3xl p-8 z-10 shadow-2xl
             ${isDark ? "bg-zinc-900 border-zinc-700" : "bg-black"} border border-white/10`}
        >
          {/* Tab Header */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-medium text-white">Personal</span>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black bg-gray-300"
                />
              ))}
            </div>
          </div>

          {/* The Grid - This is where we want the deck cards to visually land */}
          <div
            id="vision-grid-container"
            className="grid grid-cols-3 gap-4 h-[400px]"
          >
            {/* Actual Cards to match CreativeDeck */}
            {[
              "https://i.pinimg.com/736x/b6/92/56/b6925629888c2b022371f523429e970f.jpg",
              "https://images.squarespace-cdn.com/content/v1/5dc88a8148e09348338cda70/1626454939120-Z779L2KP3DJZXW1CR4N5/image-asset.jpeg",
              "https://i.pinimg.com/736x/4f/05/9a/4f059a604610914c96264049e969c9b8.jpg",
              "https://i.pinimg.com/1200x/42/1e/03/421e03875083c3bda8d0a0eee4e67078.jpg",
              "https://i.pinimg.com/1200x/58/9a/58/589a584de7d11f85b16e234d6ccf2e3f.jpg",
              "https://i.pinimg.com/1200x/a4/3d/87/a43d87390609510f63a2a588e3e5db6d.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden relative shadow-md bg-white`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
