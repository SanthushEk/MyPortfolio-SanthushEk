import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({ bgImage, children }) => {
  const ref = useRef(null);

  // Track scroll relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax movement (background moves slower)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Parallax background */}
      <motion.div
        style={{
          y,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 will-change-transform"
      />

      {/* Dark overlay (same as Hero) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Foreground content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
