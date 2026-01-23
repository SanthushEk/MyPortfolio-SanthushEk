import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import universityBg from "../../assets/Personal Images/5.jpg";
import curriculumData from "../../data/curriculum.json";

const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const University = () => {
  const { description, courses } = curriculumData.university;

  // Split courses into two columns
  const mid = Math.ceil(courses.length / 2);
  const leftCourses = courses.slice(0, mid);
  const rightCourses = courses.slice(mid);

  return (
    <section
      className="min-h-screen bg-cover bg-center text-white flex items-center relative"
      style={{
        backgroundImage: `url(${universityBg})`,
        backgroundAttachment: "fixed", 
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-10 py-20 gap-12">
        {/* Left Side - Academic Growth */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={leftVariant}
          className="md:w-1/2 self-center md:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3 text-[#33cdcc]">
            <FaGraduationCap size={32} /> Academic Growth
          </h2>
          <p className="text-gray-300 text-base text-justify leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Right Side - Curriculum */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={rightVariant}
          className="md:w-1/2 bg-black/20 p-6 rounded-2xl shadow-xl max-h-[850px] overflow-y-auto self-center border-2 border-[#33cdcc]"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#33cdcc]">
            Curriculum
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-200">
            <ul className="list-disc list-inside space-y-2">
              {leftCourses.map((course, index) => (
                <li key={index}>{course.subject}</li>
              ))}
            </ul>
            <ul className="list-disc list-inside space-y-2">
              {rightCourses.map((course, index) => (
                <li key={index}>{course.subject}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default University;
