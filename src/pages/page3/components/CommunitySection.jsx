import React from "react";
import { motion } from "framer-motion";

// Reusing the SplitText logic
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

const images = [
  "https://i.pinimg.com/736x/b6/92/56/b6925629888c2b022371f523429e970f.jpg",
  "https://images.squarespace-cdn.com/content/v1/5dc88a8148e09348338cda70/1626454939120-Z779L2KP3DJZXW1CR4N5/image-asset.jpeg",
  "https://i.pinimg.com/736x/4f/05/9a/4f059a604610914c96264049e969c9b8.jpg",
  "https://i.pinimg.com/1200x/42/1e/03/421e03875083c3bda8d0a0eee4e67078.jpg",
  "https://i.pinimg.com/1200x/58/9a/58/589a584de7d11f85b16e234d6ccf2e3f.jpg",
  "https://i.pinimg.com/1200x/a4/3d/87/a43d87390609510f63a2a588e3e5db6d.jpg",
  "https://img.freepik.com/free-vector/modern-abstract-poster-template-with-3d-fluffy-wave-shape_60389-113.jpg",
  "https://i.pinimg.com/736x/1f/3e/87/1f3e87798987c6a1331a5ec1659fcfd8.jpg",
  "https://i.pinimg.com/736x/09/eb/99/09eb99339143f2ae30a80c6c44d06641.jpg",
  "https://i.audiomack.com/Jedah/740b75ebe3.webp",
];

const CommunitySection = ({ isDark }) => {
  const textColor = isDark ? "text-white" : "text-[#111]";
  const subTextColor = isDark ? "text-gray-400" : "text-gray-600";

  // Duplicate for seamless loop
  const marqueeImages = [...images, ...images, ...images];

  return (
    <section className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden gap-16">
      {/* Top Marquee: Left -> Right */}
        <div className="w-full relative overflow-visible flex z-0">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // Right to Left
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          <div className="flex gap-8 ">
            {marqueeImages.map((img, i) => (
              <motion.div
                key={i}
                className="w-24 h-24 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg shrink-0 transform scale-95"
                animate={{ y: [0, 50, 0] }} // Inverse wave or different timing
                transition={{
                  repeat: Infinity,
                  duration:4,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="flex gap-8 ">
            {marqueeImages.map((img, i) => (
              <motion.div
                key={`dup-${i}`}
                className="w-24 h-24 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg shrink-0 transform scale-95"
                animate={{ y: [0, 50, 0] }}
                transition={{
                  repeat: Infinity,
                duration:4,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Center Text */}
      <div className="text-center z-500 max-w-2xl px-6">
        <h2
          className={`text-4xl md:text-6xl font-bold tracking-tight my-8 text-black`}
        >
          <SplitText>You will find yourself</SplitText>
          <SplitText delay={0.1}>among us</SplitText>
        </h2>
        <div className={`text-lg md:text-xl leading-relaxed text-black`}>
          <SplitText delay={0.2} className={' text-black'}>
            Dive into a dynamic community where artists
          </SplitText>
          <SplitText delay={0.3}>and buyers seamlessly merge.</SplitText>
        </div>
      </div>

      {/* Bottom Marquee: Right -> Left */}
      <div className="w-full relative overflow-visible flex z-0">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // Right to Left
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          <div className="flex gap-8 ">
            {marqueeImages.map((img, i) => (
              <motion.div
                key={i}
                className="w-24 h-24 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg shrink-0 transform scale-95"
                animate={{ y: [0, 50, 0] }} // Inverse wave or different timing
                transition={{
                  repeat: Infinity,
                  duration:4,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="flex gap-8 ">
            {marqueeImages.map((img, i) => (
              <motion.div
                key={`dup-${i}`}
                className="w-24 h-24 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg shrink-0 transform scale-95"
                animate={{ y: [0, 50, 0] }}
                transition={{
                  repeat: Infinity,
                duration:4,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
