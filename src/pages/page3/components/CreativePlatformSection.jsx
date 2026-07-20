import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Pointer, LayoutGrid, Waves, PaintBucket, Tag } from "lucide-react";
import CreativeDeck from "./CreativeDeck";
const CreativePlatformSection = ({ isDark, scrollContainerRef }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const controls = useAnimation(); // Kept for consistency if needed, but mainly using variants now

  const { scrollY } = useScroll({ container: scrollContainerRef });
  const [triggerPoint, setTriggerPoint] = useState(0);

  useEffect(() => {
    const updateTrigger = () => {
      if (containerRef.current && scrollContainerRef.current) {
        const offset = containerRef.current.offsetTop;
        const height = containerRef.current.offsetHeight;
        // MUST MATCH CreativeDeck.jsx: offset + height * 0.00001
        setTriggerPoint(offset + height * 0.00001);
      }
    };
    updateTrigger();
    const observer = new ResizeObserver(updateTrigger);
    if (scrollContainerRef.current)
      observer.observe(scrollContainerRef.current);
    return () => observer.disconnect();
  }, [scrollContainerRef]);

  // Fades out exactly as CreativeDeck fades in
  const handoffOpacity = useTransform(
    scrollY,
    [triggerPoint, triggerPoint + 10],
    [1, 0],
    { clamp: true },
  );

  const [cards, setcards] = useState([
    {
      id: 1,
      rotate: -22,
      x: 0,
      y: 0,
      img: "https://i.pinimg.com/736x/b6/92/56/b6925629888c2b022371f523429e970f.jpg",
    },
    {
      id: 2,
      rotate: -15,
      x: -10,
      y: -1,
      img: "https://images.squarespace-cdn.com/content/v1/5dc88a8148e09348338cda70/1626454939120-Z779L2KP3DJZXW1CR4N5/image-asset.jpeg",
    },
    {
      id: 3,
      rotate: -12,
      x: 5,
      y: -2,
      img: "https://i.pinimg.com/736x/4f/05/9a/4f059a604610914c96264049e969c9b8.jpg",
    },
    {
      id: 4,
      rotate: -10,
      x: 15,
      y: -3,
      img: "https://i.pinimg.com/1200x/42/1e/03/421e03875083c3bda8d0a0eee4e67078.jpg",
    }, // Center
    {
      id: 5,
      rotate: -4,
      x: 10,
      y: -4,
      img: "https://i.pinimg.com/1200x/58/9a/58/589a584de7d11f85b16e234d6ccf2e3f.jpg",
    },
    {
      id: 6,
      rotate: 6,
      x: 7,
      y: -5,
      img: "https://i.pinimg.com/1200x/a4/3d/87/a43d87390609510f63a2a588e3e5db6d.jpg",
    },
    {
      id: 7,
      rotate: 15,
      x: -5,
      y: -6,
      img: "https://img.freepik.com/free-vector/modern-abstract-poster-template-with-3d-fluffy-wave-shape_60389-113.jpg",
    },
  ]);

  const textColor = isDark ? "text-white" : "text-[#111]";

  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        // Phase 1: Serve cards (Right -> Left, Grow, Stack)
        await controls.start("served");

        // Pause to show the clean stack
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Phase 2: Fan out to preset positions
        controls.start("fanned");
      };
      sequence();
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      x: 100, // Start from right
      rotate: 0,
      scale: 0.5, // Start small
    },
    served: (i) => {
      return {
        opacity: 1,
        y: i * 15, // +3 on y axis for each from previous
        x: -i * 10, // Center horizontally
        rotate: 0,
        scale: 1, // Get big (normal size)
        transition: {
          delay: i * 0.1, // "first back cards then front"
          duration: 0.6,
          ease: "backOut",
        },
      };
    },
    fanned: (i) => ({
      x: cards[i].x,
      y: cards[i].y,
      rotate: cards[i].rotate,
      scale: 1,
      transition: {
        delay: i * 0.005,
        duration: 0.5,

        bounce: 0.5,
      },
    }),
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const SplitWord = ({ children, delayIndex, className = "" }) => (
    <span className="inline-block align-bottom pb-1">
      <motion.span
        custom={delayIndex}
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`inline-block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );

  return (
    <>
      {" "}
      <CreativeDeck isDark={isDark} scrollContainerRef={scrollContainerRef} />
      <section
        id="creative-platform-section"
        ref={containerRef}
        className="relative w-full py-32 flex flex-col items-center justify-start overflow-hidden "
      >
        {/* Heading Text - Centered vertically, cards will animate ON it */}
        <div className="max-w-6xl text-center mt-52 z-10 relative pointer-events-none px-6">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-tight ${textColor} flex flex-wrap justify-center gap-x-2 gap-y-1`}
          >
            {"Whether you're an artist looking to sell your work"
              .split(" ")
              .map((word, i) => (
                <SplitWord key={i} delayIndex={i}>
                  {word}
                </SplitWord>
              ))}
          </h2>

          {/* Cards Animation Anchor - Positioned relative to text flow */}
          <motion.div
            style={{ opacity: handoffOpacity }}
            className="relative w-full h-0 flex justify-center z-40 pointer-events-none"
          >
            <div className="absolute bottom-[50px] w-full max-w-lg h-[400px] flex items-center justify-center">
              {cards.map((card, index) => {
                return (
                  <motion.div
                    key={card.id}
                    custom={index}
                    initial="hidden"
                    animate={controls}
                    variants={cardVariants}
                    style={{
                      zIndex: index, // Keeps original stacking: 0(back) to 6(front)
                      transformOrigin: "bottom center",
                    }}
                    className={`absolute bottom-0 lg:-bottom-16 w-36 h-48 md:w-52 md:h-64 rounded-2xl shadow-2xl overflow-hidden bg-white border border-black/5 `}
                  >
                    <img
                      src={card.img}
                      alt="Creative piece"
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                );
              })}

              {/* Background Badge 1 - Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ delay: 2.0, type: "spring" }}
                className="absolute bottom-10 lg:bottom-10 xl:bottom-2 left-0 lg:left-[-15%] md:left-[-15%] z-50"
              >
                <div className="bg-black -rotate-6 text-white px-4 py-1.5 rounded-full text-sm font-semibold relative mb-1">
                  @alician
                  <div className="absolute -bottom-1 right-4 w-2 h-2 bg-black rotate-45" />
                </div>
              </motion.div>

              {/* Background Badge 2 - Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ delay: 2.2, type: "spring" }}
                className="absolute bottom-10 lg:bottom-10 xl:bottom-2 right-0 lg:right-[-45%] z-50"
              >
                <div className="bg-[#0055FF] rotate-6 text-white px-4 py-1.5 rounded-full text-sm font-semibold relative mb-1">
                  @andrea
                  <div className="absolute -bottom-1 left-4 w-2 h-2 bg-[#0055FF] rotate-45" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-6 ${textColor} flex flex-wrap items-center justify-center gap-x-2 gap-y-1`}
          >
            <SplitWord delayIndex={10}>/ or</SplitWord>
            <SplitWord delayIndex={11}>buyer</SplitWord>
            <SplitWord delayIndex={12}>seeking</SplitWord>

            <span className="inline-block align-bottom pb-1">
              <motion.span
                custom={13}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-block text-[#2dd4bf]"
              >
                unique
              </motion.span>
            </span>

            <SplitWord delayIndex={14}>pieces</SplitWord>

            <span className="inline-block align-bottom pb-1">
              <motion.div
                custom={15}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-flex items-center justify-center"
              >
                <PaintBucket className="w-6 h-6 md:w-10 md:h-10 text-black mx-2" />
              </motion.div>
            </span>

            <span className="inline-block align-bottom pb-1">
              <motion.span
                custom={16}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-block opacity-20 lowercase"
              >
                connects
              </motion.span>
            </span>
          </div>

          <div
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mt-6 ${textColor} flex flex-wrap items-center justify-center gap-x-2 gap-y-1`}
          >
            <span className="inline-block align-bottom pb-1">
              <motion.span
                custom={17}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-block opacity-20"
              >
                you to world of creativity
              </motion.span>
            </span>

            <span className="inline-block align-bottom pb-1">
              <motion.div
                custom={18}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-flex items-center justify-center"
              >
                <Tag className="w-6 h-6 md:w-10 md:h-10 text-orange-600 mx-2" />
              </motion.div>
            </span>

            <span className="inline-block align-bottom pb-1">
              <motion.span
                custom={19}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-block opacity-20"
              >
                & commerce.
              </motion.span>
            </span>
          </div>
        </div>

        {/* Bottom Floating Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-10 backdrop-blur-xl rounded-full p-2 flex items-center gap-4  z-30"
        >
          <div className="p-3 border-2 rounded-full shadow-sm hover:scale-110 transition-transform ">
            <Pointer className="w-5 h-5 text-gray-800" />
          </div>
          <div className="p-3 hover:scale-110 border-2 rounded-full transition-transform ">
            <LayoutGrid className="w-5 h-5 text-gray-800" />
          </div>
          <div className="p-3 hover:scale-110 border-2 rounded-full transition-transform ">
            <Waves className="w-5 h-5 text-gray-800" />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CreativePlatformSection;
