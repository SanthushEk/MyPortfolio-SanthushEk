import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaLightbulb, FaRocket } from "react-icons/fa";
import bgImage from "../../assets/MySelf/FutureBG.jpg"; // Background image

const Future = () => {
  const currentSkills = [
    { name: "React / Laravel", level: 90 },
    { name: "AWS / Cloud Platforms", level: 80 },
    { name: "DevOps & CI/CD", level: 75 },
    { name: "UI/UX & Responsive Web Apps", level: 85 },
    { name: "AI / ML Basics", level: 60 },
  ];

  const futureSkills = [
    "Advanced AI & ML",
    "Multi-cloud Architecture (AWS, Azure, GCP)",
    "Mobile App Development",
    "Prompt Engineering",
    "System Design & Solution Architecture",
    "Advanced Networking & Security",
  ];

  const careerGoals = [
    "Lead software projects",
    "Mentor upcoming developers",
    "Deliver user-centric solutions",
    "Specialize in full-stack & cloud architecture",
    "Work on AI-driven applications",
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="relative min-h-screen py-20 px-6 md:px-20 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="relative z-10 max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#33cdcc]">
          My Skills & Career Vision
        </h2>
        <p className="text-lg md:text-xl text-gray-200">
          Current skills, skills I am developing, and my career goals.
        </p>
      </motion.div>

      {/* ---------------- Row 1: Skills ---------------- */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
        {/* Current Skills */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:bg-[#33cdcc]/60 hover:text-black transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6 text-[#33cdcc]">
            <FaLaptopCode size={32} />
            <h3 className="text-2xl md:text-3xl font-bold">Current Skills</h3>
          </div>
          <div className="space-y-4">
            {currentSkills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-500 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-2 bg-[#33cdcc] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills to Learn */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:bg-[#33cdcc]/60 hover:text-black transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6 text-[#33cdcc]">
            <FaLightbulb size={32} />
            <h3 className="text-2xl md:text-3xl font-bold">Skills to Learn</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-white marker:text-[#33cdcc] text-sm mb:text-base text-justify">
            {futureSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ---------------- Row 2: Career Goals ---------------- */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:bg-[#33cdcc]/60 hover:text-black transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6 text-[#33cdcc]">
            <FaRocket size={32} />
            <h3 className="text-2xl md:text-3xl font-bold">Career Goals</h3>
          </div>
          <ul className="list-disc list-inside space-y-2 text-white marker:text-[#33cdcc] text-sm mb:text-base text-justify">
            {careerGoals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Future;
