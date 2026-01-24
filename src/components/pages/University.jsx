import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaLayerGroup } from "react-icons/fa";
import universityBg from "../../assets/Personal Images/5.jpg";
import curriculumData from "../../data/curriculum.json";

/* ---------------- Framer Motion Variants ---------------- */

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const leftReveal = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const rightReveal = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

/* ---------------- Component ---------------- */

const University = () => {
  const { description, courses } = curriculumData.university;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6 lg:px-24"
      style={{
        backgroundImage: `url(${universityBg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dynamic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-[#33cdcc]/10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-[1400px] flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        {/* LEFT SIDE - ACADEMIC GROWTH */}
        <motion.div variants={leftReveal} className="w-full lg:w-2/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33cdcc]/10 border border-[#33cdcc]/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#33cdcc] animate-pulse" />
            <span className="text-[#33cdcc] text-[10px] font-black uppercase tracking-widest">
              Higher Education
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[0.9]">
            ACADEMIC <br />
            <span className="text-transparent border-text-white">GROWTH</span>
          </h2>

          <div className="relative p-6 md:p-8 border-l-2 border-[#33cdcc]/50 bg-white/5 backdrop-blur-sm rounded-r-2xl">
            <FaGraduationCap className="text-[#33cdcc] text-4xl mb-4 opacity-50" />
            <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify font-light">
              {description}
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE - CURRICULUM CARD */}
        <motion.div variants={rightReveal} className="w-full lg:w-3/5">
          <div className="relative group">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#33cdcc] to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-3">
                  <FaBookOpen className="text-[#33cdcc]" />
                  <h3 className="text-xl font-bold text-white tracking-tight">Curriculum Structure</h3>
                </div>
                <div className="hidden sm:flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-white/10" />
                  ))}
                </div>
              </div>

              {/* Scrollable Course List */}
              <div className="p-6 md:p-10 max-h-[500px] md:max-h-[600px] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {courses.map((course, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 group/item"
                    >
                      <span className="text-[10px] font-mono text-[#33cdcc]/40 group-hover/item:text-[#33cdcc] transition-colors">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-white/5 group-hover/item:bg-[#33cdcc]/20 transition-colors" />
                      <span className="text-sm md:text-base text-gray-400 group-hover/item:text-white transition-colors">
                        {course.subject}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-[#33cdcc]/5 border-t border-white/5 flex justify-center">
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#33cdcc] font-bold">
                  Specialized in Cloud Computing
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Embedded Styles for custom features */}
      <style dangerouslySetInnerHTML={{ __html: `
        .border-text-white { -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #33cdcc;
          border-radius: 10px;
        }
        
        @media (max-width: 768px) {
          .custom-scrollbar {
            max-height: 400px;
          }
        }
      `}} />
    </section>
  );
};

export default University;