import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Left side icons
import Left1 from "../assets/Skills/appscipt.png";
import Left2 from "../assets/Skills/aws.png";
import Left3 from "../assets/Skills/bash.png";
import Left4 from "../assets/Skills/canva.png";
import Left5 from "../assets/Skills/docker.png";
import Left6 from "../assets/Skills/expressjs.png";
import Left7 from "../assets/Skills/vscode.png";
import Left8 from "../assets/Skills/git.png";
import Left9 from "../assets/Skills/github.png";

// Right side icons
import Right1 from "../assets/Skills/java.png";
import Right2 from "../assets/Skills/javascirpt.png";
import Right3 from "../assets/Skills/laravel.png";
import Right4 from "../assets/Skills/mongodb.png";
import Right5 from "../assets/Skills/mysql.png";
import Right6 from "../assets/Skills/nodejs.png";
import Right7 from "../assets/Skills/postgress.png";
import Right8 from "../assets/Skills/wordpress.png";
import Right9 from "../assets/Skills/react.png";

// Background image import
import BackgroundImage from "../assets/Skills/bgImage.jpg";

const skillsData = [
  { category: "Web Development", skills: ["Laravel", "React", "WordPress", "Node.js", "Express.js"] },
  { category: "Programming Languages", skills: ["Python", "Java", "JavaScript"] },
  { category: "Cloud Platforms", skills: ["AWS"] },
  { category: "Databases", skills: ["MySQL", "MongoDB", "PostgreSQL"] },
  { category: "System Administration", skills: ["System Admin"] },
  { category: "Networking Fundamentals", skills: ["Networking"] },
  { category: "UI/UX & Design", skills: ["Figma", "Canva"] },
  { category: "Scripting/Automation", skills: ["PowerShell", "Bash"] },
];

const leftIcons = [Left1, Left2, Left3, Left4, Left5, Left6, Left7, Left8, Left9];
const rightIcons = [Right1, Right2, Right3, Right4, Right5, Right6, Right7, Right8, Right9];

const Skills = () => {
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: false, margin: "-100px" });

  // Animation variants
  const iconVariants = { hidden: { opacity: 0, y: 50, rotate: 0 }, visible: { opacity: 1, y: 0, rotate: 360, transition: { duration: 1.2, ease: "easeInOut" } } };
  const categoryVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut", staggerChildren: 0.2 } } };
  const skillVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } } };

  return (
    <div
      className="w-full min-h-screen relative flex flex-col items-center py-20 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundAttachment: "fixed", // <-- Hero-style fixed background
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Heading */}
        <div className="w-full mb-12 md:mb-16 px-2 md:px-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white text-center md:text-right leading-tight">
            My Professional <span className="text-[#33cdcc]">Skills</span>
          </h1>
        </div>

        {/* Main Container */}
        <div className="flex flex-col md:flex-row w-full max-w-6xl relative items-start md:items-center">

          {/* Left Icons */}
          <div className="hidden md:flex flex-col gap-6 mt-4">
            {leftIcons.map((icon, idx) => (
              <motion.div key={idx} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="w-28 h-28 md:w-32 md:h-32 rounded-md flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors">
                <img src={icon} alt={`Left ${idx}`} className="w-24 h-24 md:w-28 md:h-28 object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Skill Tree */}
          <div ref={skillRef} className="flex-1 flex flex-col items-center space-y-8 mx-0 md:mx-8">
            {skillsData.map((category, idx) => (
              <motion.div key={idx} variants={categoryVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col items-center relative w-full">
                <div className="bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg text-[#33cdcc] text-base sm:text-lg md:text-lg font-bold border border-gray-600">{category.category}</div>
                <div className="w-px h-4 sm:h-6 bg-[#33cdcc]"></div>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-2 sm:mt-4">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div key={sIdx} variants={skillVariants} className="bg-gray-700 px-3 sm:px-4 py-1 sm:py-2 rounded-md border border-gray-500 text-white text-xs sm:text-sm hover:bg-[#33cdcc] transition-colors">
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex flex-col gap-6 mt-4">
            {rightIcons.map((icon, idx) => (
              <motion.div key={idx} variants={iconVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="w-28 h-28 md:w-32 md:h-32 rounded-md flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors">
                <img src={icon} alt={`Right ${idx}`} className="w-24 h-24 md:w-28 md:h-28 object-cover" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
