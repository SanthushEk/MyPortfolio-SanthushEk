import React, { useState, useEffect } from "react";
import { FaRocket } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const ScrollToTopRocket = () => {
  const [visible, setVisible] = useState(false);
  const [launch, setLaunch] = useState(false);
  
  // Framer Motion scroll progress tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after 400px scroll
      if (window.scrollY > 400) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setLaunch(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Reset after animation
    setTimeout(() => setLaunch(false), 1200);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-10 right-10 z-[999]"
        >
          <div className="relative group">
            
            {/* --- GLOWING AURA --- */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#33cdcc] to-blue-500 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-500" />

            {/* --- PROGRESS RING --- */}
            <svg className="absolute -inset-2 w-16 h-16 rotate-[-90deg]">
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-[#33cdcc]/10"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray="0 1"
                style={{ pathLength: scrollYProgress }}
                className="text-[#33cdcc] drop-shadow-[0_0_8px_rgba(51,205,204,0.8)]"
              />
            </svg>

            {/* --- THE ROCKET BUTTON --- */}
            <motion.button
              onClick={scrollToTop}
              className={`
                relative w-12 h-12 sm:w-14 sm:h-14
                bg-white/10 backdrop-blur-xl border border-white/20
                rounded-full text-[#33cdcc]
                flex items-center justify-center overflow-hidden
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                transition-all duration-300
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Internal Animated Grid Background */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]" />

              <motion.div
                animate={launch ? { 
                  y: [-10, -window.innerHeight], 
                  scale: [1, 1.5, 0.5],
                  rotate: [0, 15, -15, 0] 
                } : { 
                  y: [0, -3, 0], // Subtle hover float
                }}
                transition={launch 
                  ? { duration: 1, ease: "anticipate" } 
                  : { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }
                className="relative z-10"
              >
                <FaRocket className={`text-xl sm:text-2xl ${launch ? 'filter drop-shadow-[0_10px_10px_#33cdcc]' : ''}`} />
                
                {/* Launch Flame Particles */}
                {launch && (
                  <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, y: 20 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-transparent to-[#33cdcc] blur-sm"
                  />
                )}
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopRocket;