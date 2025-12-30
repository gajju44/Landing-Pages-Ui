import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const cards = [
  { id: 1, rotate: -8, z: 1, translate: 25, xOffset: -370, image: "https://i.pinimg.com/736x/09/eb/99/09eb99339143f2ae30a80c6c44d06641.jpg" },
  { id: 2, rotate: -5, z: 2, translate: -8, xOffset: -250, image: "https://i.pinimg.com/736x/1f/3e/87/1f3e87798987c6a1331a5ec1659fcfd8.jpg" },
  { id: 3, rotate: -4, z: 3, translate: 3, xOffset: -110, image: "https://i.pinimg.com/736x/1e/29/1a/1e291ae78b1d5eda81f65fa7286ece8c.jpg" },
  { id: 4, rotate: 1, z: 4, translate: 5, xOffset: 0, image: "https://i.audiomack.com/Jedah/740b75ebe3.webp" },
  { id: 5, rotate: 4, z: 5, translate: 5, xOffset: 110, image: "/image.png" },
  { id: 6, rotate: 8, z: 6, translate: 14, xOffset: 220, image: "https://i.pinimg.com/1200x/f0/b8/c7/f0b8c73cdb1600b2f03f6f73396ad306.jpg" },
  { id: 7, rotate: 7, z: 7, translate: 5, xOffset: 340, image: "/image2.png" },
];

const CardSpread = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
       // Phase 1: Enter as a group (clumped together)
       await controls.start({
          y: 60, // Start lower
          opacity: 1,
          scale: 1,
          rotate: 0,
          x: 0,
          transition: { 
            duration: 0.8, 
            ease: "backOut",
            delay: 0.3
          }
       });
       
       // Phase 2: Spread out
       await controls.start((i) => ({
          y: cards[i].translate,
          x: cards[i].xOffset,
          rotate: cards[i].rotate,
          transition: { 
            type: "spring",
            stiffness: 50,
            damping: 14,
            delay: 0.1 
          }
       }));
    };

    sequence();
  }, [controls]);

  return (
    <div className="relative h-[220px] w-full flex items-center justify-center  mb-16 perspective-1000">
      <div className="relative w-full max-w-5xl flex justify-center items-end h-full">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            custom={index}
            initial={{ y: 300, opacity: 0, rotate: 0, x: 0, scale: 0.8 }}
            animate={controls}
            // whileHover={{ 
            //     scale: 1.05, 
            //     zIndex: 50,
            //     transition: { duration: 0.2 }
            // }}
            // All cards are gray as requested
            className={`absolute w-40 h-40 md:w-48 md:h-48 shadow-2xl shadow-black/30  rounded-xl  bg-gray-200 flex flex-col items-center justify-center overflow-hidden origin-bottom`}
            style={{ 
                zIndex: card.z, 
            }}
          >
             {/* Image content */}
             <img 
               src={card.image}
               alt="Card artwork" 
               className="w-full h-full object-cover"
             />
          </motion.div>
        ))}

        {/* Floating Badge @coplin */}
        <motion.div
           initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
           animate={{ 
               opacity: 1, 
               scale: 1, 
               rotate:-4,
               x: -310, 
               y: -230,
               transition: { delay: 1.2, type: "spring" } 
           }}
           className="absolute z-20 flex flex-col items-center"
        >
            <div className="bg-[#2759ef] text-white flex items-start justify-center px-5 pt-1 pb-2 rounded-full shadow-xl text-lg relative">
                @coplin
                <div className="absolute -bottom-1 right-6 w-4 h-4 bg-[#2759ef] rotate-45" />
            </div>
        </motion.div>

        {/* Floating Badge @andrea */}
        <motion.div
           initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
           animate={{ 
               opacity: 1, 
               scale: 1, 
               x: 400, 
               rotate:8,
               y: -220,
               transition: { delay: 1.3, type: "spring" } 
            }}
           className="absolute z-20 flex flex-col items-center"
        >
            <div className="bg-[#6ca78b] text-white flex items-start justify-center px-5 pt-1 pb-2 rounded-full shadow-xl text-lg relative">
                @andrea
                <div className="absolute -bottom-1 left-6 w-4 h-4 bg-[#6ca78b] rotate-45" />
            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CardSpread;
