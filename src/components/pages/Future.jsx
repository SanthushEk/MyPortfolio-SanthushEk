import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaLightbulb, FaRocket, FaShieldAlt } from "react-icons/fa";
import bgImage from "../../assets/MySelf/FutureBG.jpg";

/* ---------------- Framer Motion Variants ---------------- */

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

/* ---------------- Component ---------------- */

const Future = () => {
  const currentSkills = [
    { name: "React / Laravel", level: 90 },
    { name: "AWS / Cloud Architecture", level: 80 },
    { name: "DevOps & CI/CD Pipelines", level: 75 },
    { name: "UI/UX & Responsive Systems", level: 85 },
    { name: "AI / ML Foundations", level: 60 },
  ];

  const futureSkills = [
    { title: "Advanced AI", desc: "Deep Learning & Neural Networks" },
    { title: "Multi-cloud", desc: "Azure & GCP Integration" },
    { title: "Cyber-Security", desc: "Advanced Networking & SecOps" },
    { title: "Solution Arch", desc: "Enterprise System Design" },
  ];

  const careerGoals = [
    "Lead Technical Architect in Enterprise Cloud",
    "Founder of AI-driven Scalable Solutions",
    "Global Tech Mentor & Open Source Contributor",
    "Specialist in High-Availability Ecosystems",
  ];

  return (
    <section
      className="relative min-h-screen py-24 px-6 md:px-12 lg:px-24 text-white flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* High-Tech Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black/90 to-[#050505]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(51,205,204,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(51,205,204,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.div variants={cardVariant} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33cdcc]/10 border border-[#33cdcc]/30 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33cdcc] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33cdcc]"></span>
            </span>
            <span className="text-[#33cdcc] text-[10px] font-black uppercase tracking-[0.3em]">Trajectory & Growth</span>
          </motion.div>
          <motion.h2 variants={cardVariant} className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
            Vision <span className="text-transparent border-text">2026+</span>
          </motion.h2>
          <motion.div variants={cardVariant} className="w-24 h-1 bg-[#33cdcc] mx-auto rounded-full" />
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
          
          {/* CURRENT SKILLS - LEFT LARGE BLOCK */}
          <motion.div
            variants={cardVariant}
            className="lg:col-span-7 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <FaLaptopCode size={120} />
            </div>
            
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="p-2 bg-[#33cdcc]/20 rounded-lg text-[#33cdcc]"><FaLaptopCode /></span>
              Proficiency Matrix
            </h3>

            <div className="space-y-6">
              {currentSkills.map((skill, i) => (
                <div key={i} className="group/skill">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2 text-gray-400 group-hover/skill:text-[#33cdcc] transition-colors">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#33cdcc] to-blue-500 rounded-full shadow-[0_0_10px_#33cdcc]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SKILLS TO LEARN - RIGHT TOP */}
          <motion.div
            variants={cardVariant}
            className="lg:col-span-5 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] group"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="p-2 bg-yellow-500/20 rounded-lg text-yellow-500"><FaLightbulb /></span>
              Future Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {futureSkills.map((skill, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:border-[#33cdcc]/30 transition-all">
                  <p className="text-[#33cdcc] text-xs font-bold uppercase mb-1">{skill.title}</p>
                  <p className="text-gray-400 text-[10px] leading-tight">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CAREER GOALS - RIGHT BOTTOM */}
          <motion.div
            variants={cardVariant}
            className="lg:col-span-5 bg-gradient-to-br from-[#33cdcc]/20 to-blue-600/20 backdrop-blur-xl border border-[#33cdcc]/20 p-8 rounded-[2rem] group relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <span className="p-2 bg-white/20 rounded-lg text-white"><FaRocket /></span>
                Mission Objective
              </h3>
              <ul className="space-y-4">
                {careerGoals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <span className="h-5 w-5 rounded-md bg-[#33cdcc] text-black flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-200 group-hover/item:text-white transition-colors">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual Flare */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#33cdcc] blur-[100px] opacity-20" />
          </motion.div>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .border-text { -webkit-text-stroke: 1px #33cdcc; color: transparent; }
        @media (max-width: 1024px) {
          .border-text { -webkit-text-stroke: 1px #33cdcc; color: #33cdcc; }
        }
      `}} />
    </section>
  );
};

export default Future;