import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const cards = [
  { id: 1, z: 1, x: 0, y: 0, rotate: -5, image: "https://i.pinimg.com/564x/4d/72/97/4d7297dad94265f0485bbd7c9a72ad91.jpg" }, // Top Back
  { id: 2, z: 2, x: 80, y: 40, rotate: -2, image: "https://i.pinimg.com/564x/f3/d9/06/f3d90680cb703df7aec10043c7b82f6c.jpg" },
  { id: 3, z: 3, x: 160, y: 80, rotate: 2, image: "https://i.pinimg.com/564x/01/2b/23/012b23c914b18c50549c402c525f0e38.jpg" },
  { id: 4, z: 4, x: 240, y: 120, rotate: 5, image: "https://i.pinimg.com/564x/92/83/88/9283885d5622146f38df9d4351336c50.jpg" }, 
  { id: 5, z: 5, x: 320, y: 160, rotate: 8, image: "https://i.pinimg.com/564x/78/33/1b/78331b2fd8936f9711586550ea0ab7b0.jpg" }  // Front Bottom
];

const EcommerceCards = () => {
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
             // Phase 1: Drop down as a grouped deck
            await controls.start({
                y: 0,
                x: 0,
                rotate: 0,
                scale: 0.9,
                opacity: 1,
                transition: { duration: 0.8, ease: "backOut", delay: 0.2 }
            });

            // Phase 2: Spread out
            await controls.start((i) => ({
                x: cards[i].x,
                y: cards[i].y,
                rotate: cards[i].rotate,
                scale: 1,
                transition: { 
                    duration: 0.6, 
                    ease: "circOut",
                    delay: i * 0.1 // Stagger the spread
                }
            }));
        };
        // Trigger sequence when in view (we can use IntersectionObserver or just rely on parent viewport, but useAnimation needs manual trigger usually. 
        // For simplicity with useAnimation + Scroll, we can use <motion.div onViewportEnter> to trigger.
    }, [controls]);

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center">
            <motion.div 
                className="relative w-full max-w-lg h-full"
                onViewportEnter={() => {
                    // Re-trigger visual sequence if needed, but the useEffect above runs on mount. 
                    // To ensure it runs when scrolled into view, we should put the sequence logic here or use a state.
                    // Let's reset and run.
                }}
                whileInView={(async () => {
                     // Phase 1: Drop down as a grouped deck
                     await controls.start({
                        y: 80, // Drop to initial cluster center
                        x: 100, // Slightly right to center in the container
                        rotate: 0,
                        scale: 0.9,
                        opacity: 1,
                        transition: { duration: 0.8, ease: "backOut" }
                    });
        
                    // Phase 2: Spread out
                    await controls.start((i) => ({
                        x: cards[i].x,
                        y: cards[i].y,
                        rotate: cards[i].rotate,
                        scale: 1,
                        transition: { 
                            duration: 0.8, 
                            type: "spring",
                            bounce: 0.4,
                            delay: i * 0.05 
                        }
                    }));
                })}
                viewport={{ once: true, margin: "-100px" }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        custom={index}
                        initial={{ opacity: 0, x: 100, y: -200, scale: 0.8, rotate: 10 }} // Start High and Rotated
                        animate={controls}
                        className="absolute top-10 left-0 w-48 h-48 md:w-56 md:h-56 rounded-2xl shadow-2xl border-4 border-white overflow-hidden bg-gray-200 origin-center"
                        style={{ zIndex: card.z }}
                    >
                         <img src={card.image} alt="" className="w-full h-full object-cover" />
                    </motion.div>
                ))}

                {/* Badge @howard */}
                 <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="absolute top-0 left-[100px] z-20"
                >
                     <div className="bg-[#b91c1c] text-white px-4 py-1.5 rounded-full shadow-lg font-bold text-sm relative">
                        @howard
                        <div className="absolute -bottom-1 left-4 w-3 h-3 bg-[#b91c1c] rotate-45" />
                    </div>
                </motion.div>

                 {/* Badge @robin */}
                 <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.7, type: "spring" }}
                    className="absolute top-[100px] left-[300px] z-50"
                >
                     <div className="bg-black text-white px-4 py-1.5 rounded-full shadow-lg font-bold text-sm relative">
                        @robin
                        <div className="absolute -bottom-1 left-4 w-3 h-3 bg-black rotate-45" />
                    </div>
                </motion.div>
                 
               {/* Controls */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                     <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-800 hover:bg-gray-50 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                     </button>
                      <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-800 hover:bg-gray-50 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                     </button>
                </div>

            </motion.div>
        </div>
    );
};

export default EcommerceCards;
