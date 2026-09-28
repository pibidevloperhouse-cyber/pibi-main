"use client";

import Marquee from "react-fast-marquee";
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
      className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center mix-blend-multiply cursor-pointer [perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-2xl"
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};

export default function AIFeatures() {
  const features = [
    {
      title: "Enterprise AI",
      description: "Intelligence for business operations, decisions, and workflows.",
      Visual: () => <TiltImageVisual src="/inter.jpeg" alt="Enterprise AI" />,
    },
    {
      title: "Industrial AI",
      description: "AI for manufacturing, operations, quality, and industrial systems.",
      Visual: () => <TiltImageVisual src="/int.jpg" alt="Industrial AI" />,
    },
    {
      title: "Physical AI",
      description: "Intelligence for machines, robotics, sensors, and the physical world.",
      Visual: () => <TiltImageVisual src="/pyh.jpeg" alt="Physical AI" />,
    },
    {
      title: "Customer AI",
      description: "AI that powers customer experiences, engagement, and personalization.",
      Visual: () => <TiltImageVisual src="/csu.jpeg" alt="Customer AI" />,
    },
  ];

  const displayFeatures = [...features, ...features];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#000052] tracking-tight">
          Sovereign AI Built for How Business Works
        </h2>
      </div>
      <div className="w-full">
        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {displayFeatures.map((feature, index) => (
            <div
              key={index}
              className="group mx-4 flex flex-col justify-between bg-[#f8f9fa] border border-gray-200/80 rounded-[2rem] p-10 overflow-hidden w-[380px] h-[500px] hover:shadow-2xl hover:bg-white transition-all duration-500"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-snug">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 flex justify-center items-center relative z-0 flex-1">
                <feature.Visual />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
