"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// --- 3D Hover Tilt Effect for User's Images ---
const TiltImageVisual = ({ src, alt }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto mt-2 md:mt-6 flex items-center justify-center cursor-pointer [perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-[1.1] mix-blend-multiply"
        style={{
          rotateX,
          rotateY,
          WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
          maskImage: 'radial-gradient(circle, black 40%, transparent 80%)'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};

export default function AIFeatures() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.firstElementChild?.offsetWidth || scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.firstElementChild?.offsetWidth || scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const features = [
    {
      title: "Physical AI",
      description: "Intelligence for machines, robotics, sensors, and the physical world.",
      Visual: () => <TiltImageVisual src="/rob.gif" alt="Physical AI" />,
    },
    {
      title: "Enterprise AI",
      description: "Intelligence for business operations, decisions, and workflows.",
      Visual: () => <TiltImageVisual src="/enterprise-ai.gif" alt="Enterprise AI" />,
    },
    {
      title: "Industrial AI",
      description: "AI for manufacturing, operations, quality, and industrial systems.",
      Visual: () => <TiltImageVisual src="/industrial-ai.gif" alt="Industrial AI" />,
    },
    {
      title: "Customer AI",
      description: "AI that powers customer experiences, engagement, and personalization.",
      Visual: () => <TiltImageVisual src="/customer-ai.gif" alt="Customer AI" />,
    },
  ];

  return (
    <section className="py-20 bg-[#303030] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight pb-2">
          Sovereign AI Built for How Business Works
        </h2>
      </div>
      <div className="max-w-7xl mx-auto w-full relative group/slider">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/20 bg-[#1f1f1f]/80 backdrop-blur-sm text-white hover:bg-white/10 transition-colors"
          onClick={scrollLeft}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-white/20 bg-[#1f1f1f]/80 backdrop-blur-sm text-white hover:bg-white/10 transition-colors"
          onClick={scrollRight}
        >
          <ArrowRight className="w-5 h-5" />
        </button>
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-8 md:gap-8 px-0 md:px-4 snap-x snap-mandatory scroll-smooth w-full" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-auto shrink-0 flex justify-center snap-center px-4 md:px-0">
              <div
                className="group flex flex-col justify-between bg-[#f0f2f5] border-none rounded-[2rem] p-6 md:p-10 overflow-hidden w-full sm:w-[320px] md:w-[380px] h-[400px] sm:h-[450px] md:h-[500px] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent leading-tight pb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-lg leading-snug">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 flex justify-center items-center relative z-0 flex-1">
                  <feature.Visual />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
