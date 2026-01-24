import React from "react";
import { motion } from "framer-motion";
import { GiBabyFace } from "react-icons/gi";
import { FaMicrochip, FaCompass } from "react-icons/fa6";
import fullBg from "../../assets/MySelf/childhoodBG.jpg";
import rightImg from "../../assets/MySelf/childhood.png";

/* ---------------- Framer Motion Variants ---------------- */

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const frameReveal = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

/* ---------------- Component ---------------- */

const Childhood = () => (
  <motion.section
    id="childhood"
    variants={containerVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    style={{
      backgroundImage: `url(${fullBg})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    {/* Dark Industrial Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/80 to-transparent" />
    
    {/* Floating Decorative Elements */}
    <div className="absolute top-20 right-20 text-[#33cdcc]/10 animate-pulse hidden lg:block">
      <FaMicrochip size={200} />
    </div>

    {/* LEFT CONTENT */}
    <motion.div
      variants={slideUp}
      className="relative z-10 w-full lg:w-3/5 flex flex-col justify-center"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-[#33cdcc]/10 rounded-xl border border-[#33cdcc]/30 text-[#33cdcc]">
          <GiBabyFace className="text-3xl md:text-4xl" />
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
            Early <span className="text-[#33cdcc]">Curiosity</span>
          </h2>
          <div className="h-1 w-20 bg-[#33cdcc] mt-1" />
        </div>
      </div>

      <div className="space-y-6 max-w-2xl">
        <motion.p
          variants={slideUp}
          className="text-gray-300 text-base md:text-lg leading-relaxed text-justify font-light"
        >
          Born in the early 2000s and raised in <span className="text-white font-bold">Mawanella, Sri Lanka</span>, 
          I demonstrated a natural curiosity for technology from a young age. Consistently drawn to the 
          inner workings of systems, I spent my formative years exploring gadgets and emerging digital 
          landscapes.
        </motion.p>

        <motion.div 
          variants={slideUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4"
        >
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <FaCompass className="text-[#33cdcc] mb-2 text-xl" />
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-1">Foundations</h4>
            <p className="text-gray-400 text-xs">Developed problem-solving and adaptability through independent experimentation.</p>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <FaMicrochip className="text-[#33cdcc] mb-2 text-xl" />
            <h4 className="text-white text-xs font-black uppercase tracking-widest mb-1">Aspiration</h4>
            <p className="text-gray-400 text-xs">Driven by a lifelong desire to design and build meaningful architectural solutions.</p>
          </div>
        </motion.div>

        <motion.p
          variants={slideUp}
          className="text-gray-400 text-sm md:text-base leading-relaxed text-justify italic border-l-2 border-[#33cdcc]/30 pl-6"
        >
          "These formative experiences laid the foundation for my long-term interest in computing, 
          innovation, and structured thinking."
        </motion.p>
      </div>
    </motion.div>

    {/* RIGHT IMAGE - "The Artifact" */}
    <motion.div
      variants={frameReveal}
      className="relative z-10 w-full lg:w-2/5 flex items-center justify-center mt-16 lg:mt-0"
    >
      <div className="relative group">
        {/* Animated Background Glow */}
        <div className="absolute -inset-4 bg-[#33cdcc]/20 rounded-[2rem] blur-2xl group-hover:bg-[#33cdcc]/30 transition-all duration-700" />
        
        {/* Image Container */}
        <div className="relative p-2 bg-[#0a0a0a] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden">
          <img
            src={rightImg}
            alt="Childhood Journey"
            className="w-full max-w-[320px] md:max-w-[400px] rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-1000 object-cover"
          />
          
          {/* Tech HUD overlays */}
          <div className="absolute top-6 right-6 flex flex-col gap-1">
             <div className="w-8 h-1 bg-[#33cdcc]" />
             <div className="w-4 h-1 bg-[#33cdcc]/50" />
          </div>
          <div className="absolute bottom-6 left-6">
             <p className="text-[#33cdcc] font-mono text-[10px] tracking-widest font-bold">EST. 2000s</p>
          </div>
        </div>

        {/* Floating Tag */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -right-6 bg-white px-6 py-3 rounded-xl shadow-xl hidden md:block"
        >
          <span className="text-black text-[10px] font-black uppercase tracking-tighter italic">Origins of Innovation</span>
        </motion.div>
      </div>
    </motion.div>
  </motion.section>
);

export default Childhood;