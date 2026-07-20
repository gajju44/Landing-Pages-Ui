import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const cards = [
  { id: 1, image: "/image.png" },
  { id: 2, image: "https://i.pinimg.com/736x/1f/3e/87/1f3e87798987c6a1331a5ec1659fcfd8.jpg" },
  { id: 3, image: "https://i.pinimg.com/736x/09/eb/99/09eb99339143f2ae30a80c6c44d06641.jpg" },
  { id: 4, image: "https://i.audiomack.com/Jedah/740b75ebe3.webp" },
  { id: 5, image: "https://i.pinimg.com/736x/1e/29/1a/1e291ae78b1d5eda81f65fa7286ece8c.jpg" },
  { id: 6, image: "https://i.pinimg.com/1200x/f0/b8/c7/f0b8c73cdb1600b2f03f6f73396ad306.jpg" },
  { id: 7, image: "/image2.png" },
];

const UnifiedDeck = ({ isDark, scrollContainerRef }) => {
  const { scrollY } = useScroll({ container: scrollContainerRef });
  
  // Responsive check (Small/Medium screens < 1272px)
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkSize = () => setIsSmallScreen(window.innerWidth < 1272);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // "Viewport Height"
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;

  const [totalScrollableHeight, setTotalScrollableHeight] = useState(0);

  // Measure the specific height where EcommerceSection ends
  useEffect(() => {
    const updateHeight = () => {
      const ecom = document.getElementById('ecommerce-section');
      const container = scrollContainerRef.current;
      
      if (ecom && container) {
        const scrollPoint = ecom.offsetTop + ecom.offsetHeight - container.clientHeight;
        setTotalScrollableHeight(scrollPoint);
      }
    };

    setTimeout(updateHeight, 100); 
    window.addEventListener('resize', updateHeight);
    const observer = new ResizeObserver(updateHeight);
    if (scrollContainerRef.current) observer.observe(scrollContainerRef.current);
    const ecom = document.getElementById('ecommerce-section');
    if (ecom) observer.observe(ecom);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, [scrollContainerRef, vh]);

  // --- SCROLL TIMING CONTROLS ---
  const startScroll = 0;                  
  const groupScroll = vh * 0.3;           
  const endScroll = totalScrollableHeight; 
  const descentScroll = Math.max(groupScroll + 100, endScroll * 0.5); 

  return (
    <div 
        className="fixed inset-y-0 left-0 pointer-events-none z-20 flex justify-center"
        style={{ width: isSmallScreen ? '100%' : 'calc(100% - 12px)' }}
    >
      <div className="relative w-full max-w-[1400px] h-full">
         
        {cards.map((card, index) => {
            // --- 1. HERO FORMATION ---
            // On mobile/tablet, we keep the fan tighter
            const heroXOffset = isSmallScreen ? 0.4 : 1; 
            const heroX = ([ -480, -320, -160, 0, 160, 320, 480 ][index]) * heroXOffset;
            const heroRotate = ([ -12, -8, -4, 0, 4, 8, 12 ][index]);
            const heroY = ([ 15, 0, -5, -8, -5, 0, 15 ][index]) + (isSmallScreen ? 280 : 350); 

            // --- 2. CLUMP FORMATION ---
            const groupX = isSmallScreen ? -30 : 50;       
            const groupY = isSmallScreen ? 380 : 250;       
            const groupRotate = 0;    

            // --- 3. ECOMMERCE FORMATION ---
            // Tighter spread for mobile/tablet to stay within screen
            const ecomOffsetStepX = isSmallScreen ? 55 : 145; 
            const ecomOffsetStepY = isSmallScreen ? 30 : 50;  
            const cardHeight = isSmallScreen ? 160 : 224;      
            const maxSpreadY = (cards.length - 1) * ecomOffsetStepY; 

            // Offset from the 50% center anchor
            const ecomBaseX = isSmallScreen ? -105 : 100; 
            const ecomBaseY = vh - cardHeight - maxSpreadY + (isSmallScreen ? 90 : 170); 
            
            const ecomFinalX = ecomBaseX + (index * ecomOffsetStepX);
            const ecomFinalY = ecomBaseY + (index * ecomOffsetStepY);
            const ecomFinalRotate = 0;
            const ecomFinalOpacity = 1;

            // --- 4. THE ANIMATION ---
            const x = useTransform(
                scrollY,
                [startScroll, groupScroll, descentScroll, endScroll],
                [heroX, groupX, groupX, ecomFinalX],
                { clamp: true }
            );

            const y = useTransform(
                scrollY,
                [startScroll, groupScroll, descentScroll, endScroll, endScroll + 1000],
                [heroY, groupY, ecomBaseY, ecomFinalY, ecomFinalY - 1000],
                { clamp: false }
            );

            const rotate = useTransform(
                scrollY,
                [startScroll, groupScroll, descentScroll, endScroll],
                [heroRotate, groupRotate, groupRotate, ecomFinalRotate],
                { clamp: true }
            );

            const scale = useTransform(
                 scrollY,
                 [startScroll, groupScroll, descentScroll, endScroll],
                 [1, 0.8, 0.8, 1],
                 { clamp: true }
            );

            const cardOpacity = useTransform(
                scrollY,
                [descentScroll, endScroll],
                [1, ecomFinalOpacity],
                { clamp: true }
            );

            const globalFade = useTransform(scrollY, [0, 10], [0, 1]);
            
            const finalOpacity = useTransform(() => {
                return globalFade.get() * cardOpacity.get();
            });

            // Z-Index: Hero uses 1..7. Ecom uses 1..5. Matching is fine.
            const initialZ = index + 1;

            // Badge entrance animations (pop in when nearing the bottom)
            const badgeScale1 = useTransform(scrollY, [descentScroll, endScroll], [0, 1], { clamp: true });
            const badgeScale2 = useTransform(scrollY, [descentScroll + 50, endScroll], [0, 1], { clamp: true });

            return (
                <motion.div
                    key={card.id}
                    className={`absolute w-40 h-40 lg:w-56 lg:h-56 rounded-xl shadow-2xl ${isDark ? 'shadow-white/10' : 'shadow-black/30'} bg-gray-200 flex flex-col items-center justify-center origin-center`}
                    style={{
                        zIndex: initialZ,
                        x, 
                        y, 
                        rotate,
                        scale,
                        opacity: finalOpacity, // Use combined opacity
                        left: '50%',
                        marginLeft: isSmallScreen ? '-80px' : '-112px', 
                        top: 0
                    }}
                >
                    <img 
                       src={card.image}
                       alt="Card artwork" 
                       className="w-full h-full object-cover rounded-xl"
                    />

                    {/* Badge @howard for the 1st card */}
                    {index === 0 && (
                        <motion.div
                            style={{ scale: badgeScale1, opacity: badgeScale1, rotate:-2 }}
                            className="absolute -top-14 right-4 z-50  "
                        >
                             <div className="bg-[#b91c1c] text-white px-4 py-1.5 rounded-full shadow-lg font-bold text-sm relative whitespace-nowrap">
                                @howard
                                <div className="absolute -bottom-1 right-7 w-3 h-3 bg-[#b91c1c] rotate-45" />
                            </div>
                        </motion.div>
                    )}

                    {/* Badge @robin for the 3rd card */}
                    {index === 2 && (
                        <motion.div
                            style={{ scale: badgeScale2, opacity: badgeScale2, rotate:-3 }}
                            className="absolute -top-14 right-6 z-50"
                        >
                             <div className="bg-black text-white px-4 py-1.5 rounded-full shadow-lg font-bold text-sm relative whitespace-nowrap">
                                @robin
                                <div className="absolute -bottom-1 right-4 w-3 h-3 bg-black rotate-45" />
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            );
        })}
      </div>
    </div>
  );
};

export default UnifiedDeck;
