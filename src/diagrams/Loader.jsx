import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 👉 Import your wallpaper image
import loaderBg from "../assets/Landing Page/loadingBG.png";

const ModernLoader = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Get all images in the document
    const images = document.querySelectorAll("img");
    const totalImages = images.length;
    let loadedCount = 0;

    if (totalImages === 0) {
      setProgress(100);
      setTimeout(() => setIsLoaded(true), 1000);
      return;
    }

    const updateProgress = () => {
      loadedCount++;
      const percentage = Math.floor((loadedCount / totalImages) * 100);
      setProgress(percentage);

      if (loadedCount === totalImages) {
        // Add a slight delay for smooth transition feel
        setTimeout(() => {
          setIsLoaded(true);
          if (onFinished) onFinished();
        }, 800);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        updateProgress();
      } else {
        img.addEventListener("load", updateProgress);
        img.addEventListener("error", updateProgress); // Count errors too so it doesn't stuck
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", updateProgress);
        img.removeEventListener("error", updateProgress);
      });
    };
  }, [onFinished]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
        >
          {/* -------------------- BACKGROUND WITH SLOW ZOOM -------------------- */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${loaderBg})` }}
          />

          {/* -------------------- MODERN MASK / OVERLAY -------------------- */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-b from-transparent via-black/40 to-black" />

          {/* -------------------- CONTENT -------------------- */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-xl px-10">
            
            {/* Minimalist Counter */}
            <div className="overflow-hidden mb-2">
              <motion.h1 
                className="text-8xl md:text-[12rem] font-bold tracking-tighter text-white/10"
                style={{ lineHeight: 0.8 }}
              >
                {progress}%
              </motion.h1>
            </div>

            {/* Premium Progress Line */}
            <div className="relative w-full h-[1px] bg-white/10 overflow-hidden mb-8">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#33cdcc]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                style={{
                    boxShadow: "0 0 20px #33cdcc"
                }}
              />
            </div>

            {/* Status Text & Message */}
            <div className="flex justify-between w-full uppercase text-[10px] tracking-[0.3em] font-light text-white/50">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                System Initializing
              </motion.span>
              <span>Est. 2026 Framework</span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-20 text-white/80 text-xs tracking-widest uppercase font-medium text-center"
            >
              Building the Experience
            </motion.p>
          </div>

          {/* Decorative Corner Accents (Cyberpunk/Modern Style) */}
          <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20" />
          <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/20" />
          <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/20" />
          <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModernLoader;