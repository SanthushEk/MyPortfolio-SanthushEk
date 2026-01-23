import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const internship = {
    role: "Full Stack Developer Intern",
    company: "Silicon Radon Pvt Ltd, Kandy",
    period: "2024 - 2025",
    description: "Main developer for MP-Chem.lk website & LMS, handling frontend, backend, and database integration.",
    objectives: [
      "Gain industry exposure",
      "Apply academic knowledge to real projects",
      "Engage in software development lifecycle",
      "Contribute to business analysis & system design",
      "Strengthen full stack development skills",
      "Learn cloud deployment and management",
      "Improve team collaboration & communication",
      "Ensure quality and professional readiness"
    ],
    projects: [
      {
        name: "MP-Chem Website & LMS",
        link: "https://www.mpchem.lk/",
        description: "Led frontend & backend development with database integration, ensuring smooth functionality and user experience."
      },
      {
        name: "SMS Mobile App",
        description: "Assisted in database design and integration planning to support mobile functionality."
      },
      {
        name: "KandyBTL Website",
        description: "Developed a responsive frontend using React, focusing on modern UI/UX."
      },
      {
        name: "AZ Academy ERD Design",
        description: "Created efficient database structures and relationships for the academy system."
      },
      {
        name: "REM Solar",
        description: "Contributed to business analysis and system architecture for scalable solutions."
      }
    ]
  };

  return (
    <section className="bg-white text-[#33cdcc] py-20 px-6 md:px-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
          <FaBriefcase size={36} /> Experience
        </h1>
        <p className="text-black text-lg">Professional experience during my internship.</p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#33cdcc] hidden md:block"></div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          {/* Dot for desktop only */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#33cdcc] rounded-full border-4 z-10 hidden md:block"></div>

          {/* Left - Internship */}
          <div className="w-full md:w-1/2 md:pr-12">
            <h2 className="text-2xl font-bold text-[#33cdcc]">{internship.role}</h2>
            <h3 className="text-lg text-gray-900 mb-2">{internship.company} | {internship.period}</h3>
            <p className="text-gray-900 mb-4">{internship.description}</p>

            <h4 className="text-xl font-semibold mb-2 text-[#33cdcc]">Objectives</h4>
            <ul className="list-disc list-inside text-black space-y-1">
              {internship.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>
          </div>

          {/* Right - Projects as Paragraph */}
          <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h4 className="text-xl font-semibold mb-2 text-[#33cdcc]">Projects</h4>
            <div className="space-y-4 text-black">
              {internship.projects.map((proj, i) => (
                <p key={i}>
                  <strong>
                    {proj.link ? (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="underline text-[#33cdcc]">
                        {proj.name}
                      </a>
                    ) : (
                      proj.name
                    )}
                  </strong>: {proj.description}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
