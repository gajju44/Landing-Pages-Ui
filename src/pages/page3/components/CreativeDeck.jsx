import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Exactly matching CreativePlatformSection cards
const deckCards = [
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
  },
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
];

const CreativeDeck = ({ isDark, scrollContainerRef }) => {
  const { scrollY } = useScroll({ container: scrollContainerRef });
  const [triggerPoint, setTriggerPoint] = useState(0);
  const [visionTriggers, setVisionTriggers] = useState({ start: 0, end: 0 });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsSmallScreen(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    const updateTrigger = () => {
      const creativeSection = document.getElementById(
        "creative-platform-section",
      );
      if (creativeSection && scrollContainerRef.current) {
        // Find position of the card container within the section
        // Note: The card container in CreativePlatformSection is roughly at bottom-[50px]
        // We want to sync when the user has scrolled past the main view
        const offset = creativeSection.offsetTop;
        const height = creativeSection.offsetHeight;

        // Trigger handoff when we are ~60% through the section (matching the fade out)
        setTriggerPoint(offset + height * 0.00001);
      }

      // 2. Vision Section Trigger (for Exit)
      const visionSection = document.getElementById("vision-section");
      if (visionSection && scrollContainerRef.current) {
        const visionOffset = visionSection.offsetTop;

        // Start exiting exactly when vision section enters viewport
        setVisionTriggers({
          start: visionOffset - window.innerHeight,
          end: visionOffset,
        });
      }
    };
    updateTrigger();
    setTimeout(updateTrigger, 500);
    const observer = new ResizeObserver(updateTrigger);
    if (scrollContainerRef.current)
      observer.observe(scrollContainerRef.current);

    return () => observer.disconnect();
  }, [scrollContainerRef]);

  // Scroll Timings
  const startHandoff = triggerPoint;
  const bunchPoint = triggerPoint + 200; // Cards bunch up
  const spreadPoint = triggerPoint + 600; // Cards spread diagonally

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full max-w-[1400px]">
        {deckCards.map((card, i) => {
          // ... (Phases 1-3 remain same)
          const startX = card.x;
          const startY = card.y;
          const startRotate = card.rotate;
          const bunchX = 0;
          const bunchY = i * 2;
          const bunchRotate = 0;
          const spreadStep = isSmallScreen ? 60 : 160;
          const diagonalX = (i - 3) * spreadStep;
          const diagonalY = (i - 3) * (spreadStep * 0.6) + 50;
          const diagonalRotate = 0;

          // Scroll Trigger Points for Phase 4 (Exit)
          const stopPoint =
            visionTriggers.start > 0 ? visionTriggers.start : spreadPoint + 400;

          const x = useTransform(
            scrollY,
            [startHandoff, bunchPoint, spreadPoint, stopPoint],
            [startX, bunchX, diagonalX, diagonalX],
            { clamp: true },
          );

          const y = useTransform(
            scrollY,
            [
              startHandoff,
              bunchPoint,
              spreadPoint,
              stopPoint,
              stopPoint + window.innerHeight-200, // Exit over exactly 1 viewport height of scroll
            ],
            [
              startY,
              bunchY,
              diagonalY,
              diagonalY,
              diagonalY - window.innerHeight,
            ], // Move UP by 1 viewport height
            { clamp: false },
          );

          const rotate = useTransform(
            scrollY,
            [startHandoff, bunchPoint, spreadPoint, stopPoint],
            [startRotate, bunchRotate, diagonalRotate, diagonalRotate],
            { clamp: true },
          );

          const scale = useTransform(
            scrollY,
            [startHandoff, bunchPoint, spreadPoint, stopPoint],
            [1, 0.9, 1, 1],
            { clamp: true },
          );

          // Opacity: Fade in quickly at handoff point.
          // Optional: Fade out as they scroll away if desired, or just let them scroll off.
          // Let's keep them visible so they scroll off naturally.
          const opacity = useTransform(
            scrollY,
            [startHandoff, startHandoff + 100],
            [0, 1],
            { clamp: true },
          );

          return (
            <motion.div
              key={card.id}
              style={{
                x,
                y,
                rotate,
                scale,
                opacity,
                top: "50%", // Centered viewport
                left: "50%",
                marginLeft: isSmallScreen ? "-4rem" : "-7rem",
                marginTop: "-1rem", // Adjust to match the visual center of CreativePlatformSection
              }}
              className="absolute w-36 h-48 md:w-52 md:h-64 bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden"
            >
              <img
                src={card.img}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CreativeDeck;
