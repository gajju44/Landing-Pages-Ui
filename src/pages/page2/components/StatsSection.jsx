import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const Counter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number and suffix (e.g., "500" from "500+")
  const numberMatch = value.match(/\d+/);
  const number = numberMatch ? parseInt(numberMatch[0]) : 0;
  const suffix = value.replace(/\d+/, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    }
  }, [isInView, number, motionValue]);

  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start text-center md:text-left">
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-black mb-2 tracking-tight">
        {displayValue}{suffix}
      </h3>
      <p className="text-gray-500 font-sans text-sm md:text-base font-medium uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10k+", label: "Active Users" },
    { value: "24/7", label: "Dedicated Support" },
  ];

  return (
    <section className="px-6 md:px-12 xl:px-24 py-24 bg-white border-t border-gray-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((stat, index) => (
          <Counter key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
