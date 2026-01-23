import React, { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const RocketCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  
  // Spring physics for buttery smooth movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    let moveTimeout;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Detection for "propulsion" effect
      setIsMoving(true);
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    const handleHover = (e) => {
      const isInteractive = e.target.closest("a, button, input, .interactive");
      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleHover);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHover);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden hidden lg:block">
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="relative flex items-center justify-center"
      >
        {/* Main Rocket Body */}
        <motion.div
          animate={{
            scale: hovered ? 1.5 : 1,
            rotate: hovered ? -45 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative text-[#33cdcc] drop-shadow-[0_0_10px_rgba(51,205,204,0.5)]"
        >
          <FaRocket size={hovered ? 32 : 24} />

          {/* Dynamic Propulsion Flame */}
          <AnimatePresence>
            {isMoving && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2"
              >
                <div className="h-4 w-1 bg-gradient-to-t from-transparent via-[#33cdcc] to-white rounded-full blur-[1px]" />
                <motion.div 
                   animate={{ opacity: [0.4, 0.8, 0.4] }}
                   transition={{ repeat: Infinity, duration: 0.2 }}
                   className="h-2 w-2 bg-[#33cdcc] rounded-full blur-sm -mt-1 mx-auto" 
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Outer Halo (Visible on Hover) */}
        <motion.div
          animate={{
            width: hovered ? 80 : 0,
            height: hovered ? 80 : 0,
            opacity: hovered ? 1 : 0,
          }}
          className="absolute border border-[#33cdcc]/30 rounded-full bg-[#33cdcc]/5 backdrop-blur-[2px]"
        />

        {/* Trail Particles */}
        {isMoving && !hovered && (
          <motion.div
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="absolute h-1 w-1 bg-[#33cdcc] rounded-full"
          />
        )}
      </motion.div>
    </div>
  );
};

export default RocketCursor;