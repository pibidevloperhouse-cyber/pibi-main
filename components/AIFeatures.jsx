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
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-6 flex items-center justify-center cursor-pointer [perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-[1.3] mix-blend-multiply"
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
      Visual: () => <TiltImageVisual src="/rob.gif" alt="Physical AI" />,
    },
    {
      title: "Customer AI",
      description: "AI that powers customer experiences, engagement, and personalization.",
      Visual: () => <TiltImageVisual src="/csu.jpeg" alt="Customer AI" />,
    },
  ];

  const displayFeatures = [...features, ...features];

  return (
    <section className="py-20 bg-[#303030] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight pb-2">
          Sovereign AI Built for How Business Works
        </h2>
      </div>
      <div className="w-full">
        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {displayFeatures.map((feature, index) => (
            <div
              key={index}
              className="group mx-4 flex flex-col justify-between bg-[#f0f2f5] border-none rounded-[2rem] p-10 overflow-hidden w-[380px] h-[500px] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 bg-[linear-gradient(135deg,#1f6fb2,#2ec4b6)] bg-clip-text text-transparent leading-tight pb-1">
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
