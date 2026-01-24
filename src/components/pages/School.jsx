import React from "react";
import { motion } from "framer-motion";
import { GiSchoolBag, GiAchievement, GiTrophyCup } from "react-icons/gi";

// ALL IMAGE IMPORTS
import school1 from "../../assets/MySelf/school01.jpeg";
import school2 from "../../assets/MySelf/school02.jpeg";
import school3 from "../../assets/MySelf/school03.jpeg";
import school4 from "../../assets/MySelf/SSCK.png";


/* ---------------- Framer Motion Variants ---------------- */

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageReveal = {
  hidden: { clipPath: "inset(10% 10% 10% 10% rounded 20px)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0% rounded 12px)",
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ---------------- Component ---------------- */

const School = () => {
  return (
    <motion.section
      id="school"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen flex flex-col lg:flex-row items-center gap-10 py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gray-50 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none text-black">
        <GiSchoolBag size={400} />
      </div>

      {/* ---------------- Left Side – Bento Image Gallery ---------------- */}
      <div className="w-full lg:w-1/2 h-full">
        <div className="grid grid-cols-12 grid-rows-6 gap-3 md:gap-4 h-[500px] md:h-[650px]">
          
          {/* Main Large Image */}
          <motion.div
            variants={imageReveal}
            className="col-span-8 row-span-4 overflow-hidden shadow-2xl relative group"
          >
            <img
              src={school1}
              alt="School Life"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Top Right Image */}
          <motion.div
            variants={imageReveal}
            className="col-span-4 row-span-3 overflow-hidden shadow-xl"
          >
            <img
              src={school3}
              alt="Activity"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* THE UPDATED TROPHY BLOCK WITH IMAGE IMPORT */}
          <motion.div
            variants={imageReveal}
            className="col-span-4 row-span-3 overflow-hidden shadow-xl relative group"
          >
            {/* Background Image for Trophy */}
            <img 
              src={school4} 
              alt="Achievement Background" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Teal Overlay with Content */}
            <div className="absolute inset-0 bg-[#33cdcc]/70 backdrop-blur-[2px] flex items-center justify-center p-6 text-white text-center">
              <div className="flex flex-col items-center">
                <GiTrophyCup className="text-4xl mb-2 drop-shadow-md animate-pulse" />
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] leading-tight">
                  St. Sylvester's <br /> College
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Image */}
          <motion.div
            variants={imageReveal}
            className="col-span-8 row-span-2 overflow-hidden shadow-xl"
          >
            <img
              src={school2} 
              alt="Event"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>

      {/* ---------------- Right Side – Content ---------------- */}
      <motion.div
        variants={itemVariant}
        className="w-full lg:w-1/2 flex flex-col justify-center z-10"
      >
        <div className="bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white shadow-2xl shadow-gray-200/50">
          <div className="mb-8">
            <motion.div variants={itemVariant} className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-12 bg-[#33cdcc]" />
              <span className="text-[#33cdcc] font-bold tracking-[0.3em] text-xs uppercase">Education Journey</span>
            </motion.div>
            <motion.h2 variants={itemVariant} className="text-4xl md:text-5xl font-black text-gray-900 leading-none">
              School Life<span className="text-[#33cdcc]">.</span>
            </motion.h2>
          </div>

          <motion.p variants={itemVariant} className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 border-l-4 border-[#33cdcc]/20 pl-4 text-justify">
            I completed my primary and secondary education at <strong>St. Sylvester’s College</strong>, 
            where I developed a strong academic foundation and leadership capabilities that 
            sparked my lifelong interest in technology.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariant} className="space-y-4">
              <div className="flex items-center gap-2 text-[#33cdcc]">
                <GiAchievement className="text-2xl" />
                <h3 className="font-black text-sm uppercase tracking-wider text-gray-800">Academics</h3>
              </div>
              <ul className="space-y-3">
                {["Grade 5 Scholarship Success", "6+ A Grades in G.C.E. O/L", "A/L Technology Stream", "ICT & Engineering"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#33cdcc] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariant} className="space-y-4">
              <div className="flex items-center gap-2 text-[#33cdcc]">
                <GiTrophyCup className="text-2xl" />
                <h3 className="font-black text-sm uppercase tracking-wider text-gray-800">Extracurricular</h3>
              </div>
              <ul className="space-y-3">
                {["Deputy Secretary - Tech Club", "Basketball, Cricket & Wushu", "Astronomical Society", "Junior Music Team"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#33cdcc] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default School;