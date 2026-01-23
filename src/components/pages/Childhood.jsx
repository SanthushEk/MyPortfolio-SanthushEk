import React from "react";
import { motion } from "framer-motion";
import { GiBabyFace } from "react-icons/gi";
import fullBg from "../../assets/MySelf/childhoodBG.jpg";
import rightImg from "../../assets/MySelf/childhood.png";

/* ================== Variants ================== */

// Parent container (controls stagger)
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

// Section slide-up
const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// Text slide from left
const textVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Image slide from right
const imageVariant = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* ================== Component ================== */

const Childhood = () => (
  <motion.section
    variants={containerVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.3 }} // triggers again on scroll up/down
    className="relative flex flex-col md:flex-row items-stretch h-screen px-4 md:px-16 lg:px-32 overflow-hidden"
    style={{
      backgroundImage: `url(${fullBg})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/70" />

    {/* Left - Text */}
    <motion.div
      variants={sectionVariant}
      className="relative md:w-1/2 flex flex-col justify-center p-6 md:p-10 z-10"
    >
      <motion.h2
        variants={textVariant}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#33cdcc] flex items-center gap-3"
      >
        <GiBabyFace className="w-8 h-8 md:w-10 md:h-10" />
        Early Curiosity
      </motion.h2>

      <motion.p
        variants={textVariant}
        className="text-gray-200 leading-relaxed text-justify text-sm md:text-lg"
      >
        Born in the early 2000s and raised in Mawanella, Sri Lanka, I
        demonstrated a natural curiosity and early interest in technology from a
        young age. I was consistently drawn to understanding how systems and
        devices function, spending time exploring computers, gadgets, and
        emerging technologies. This early exposure fostered a strong aspiration
        to pursue a professional career in the technology domain, driven by a
        desire to design and build meaningful digital solutions.
        <br />
        <br />
        My childhood was shaped by a balance of exploration, creativity, and
        continuous learning. Through everyday experiences ranging from
        collaborative play to independent experimentation.I developed
        problem-solving abilities, adaptability, and a strong learning mindset.
        These formative experiences laid the foundation for my long-term
        interest in computing, innovation, and structured thinking, which
        continue to influence my academic and professional development.
      </motion.p>
    </motion.div>

    {/* Right - Image */}
    <motion.div
      variants={imageVariant}
      className="relative md:w-1/2 flex items-center justify-center  md:mt-0 z-10 "
    >
      <img
        src={rightImg}
        alt="Childhood"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-2xl object-cover border-2 border-[#33cdcc]"
      />
    </motion.div>
  </motion.section>
);

export default Childhood;
