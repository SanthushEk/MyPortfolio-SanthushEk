import React from "react";
import { motion } from "framer-motion";
import { GiSchoolBag } from "react-icons/gi";
import school1 from "../../assets/MySelf/school01.jpeg";
import school2 from "../../assets/MySelf/school02.jpeg";
import school3 from "../../assets/MySelf/school03.jpeg";

/* ---------------- Framer Motion Variants ---------------- */

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ---------------- Component ---------------- */

const School = () => {
  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="relative flex flex-col md:flex-row items-start gap-6 py-10 md:py-20 px-6 md:px-16 bg-white text-gray-900 md:h-screen"
    >
      {/* ---------------- Left Side – Image Gallery ---------------- */}
      <motion.div
        variants={sectionVariant}
        className="md:w-1/2 flex flex-col gap-4 h-full"
      >
        <div className="grid grid-rows-3 gap-4 h-full">
          <motion.div
            variants={imageVariant}
            className="row-span-2 overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={school2}
              alt="School Life"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </motion.div>

          <div className="row-span-1 grid grid-cols-2 gap-4">
            <motion.div
              variants={imageVariant}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={school1}
                alt="School Activity"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </motion.div>

            <motion.div
              variants={imageVariant}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={school3}
                alt="School Event"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-gray-300" />

      {/* ---------------- Right Side – Content ---------------- */}
      <motion.div
        variants={sectionVariant}
        className="md:w-1/2 flex flex-col justify-center h-full md:p-10"
      >
        {/* Title */}
        <motion.h2
          variants={textVariant}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#33cdcc] flex items-center gap-3"
        >
          <GiSchoolBag className="w-8 h-8 sm:w-10 sm:h-10" />
          School Life
        </motion.h2>

        {/* Intro */}
        <motion.p
          variants={textVariant}
          className="text-base sm:text-lg md:text-sm lg:text-base leading-relaxed text-justify mb-6"
        >
          I completed my primary and secondary education at St. Sylvester’s
          College, where I developed a strong academic foundation, personal
          discipline, and leadership capabilities. The school environment played
          a vital role in shaping my analytical thinking, teamwork skills, and
          long-term interest in technology and continuous learning.
        </motion.p>

        {/* Academic Achievements */}
        <motion.div variants={textVariant} className="mb-6">
          <h3 className="font-bold text-lg mb-2 text-gray-900">
            Academic Achievements
          </h3>
          <ul className="list-disc list-inside space-y-2 text-justify marker:text-[#33cdcc]">
            <li>
              Successfully passed the{" "}
              <strong>Grade 5 Scholarship Examination</strong>, demonstrating
              early academic potential.
            </li>
            <li>
              Achieved more than <strong>six A grades</strong> at the General
              Certificate of Education Ordinary Level (
              <strong>G.C.E. O/L</strong>) examinations.
            </li>
            <li>
              Completed Advanced Level (A/L) studies in the{" "}
              <strong>Technology Stream</strong>, specializing in{" "}
              <strong>Information and Communication Technology (ICT)</strong>,{" "}
              <strong>Engineering Technology</strong>, and{" "}
              <strong>Science for Technology</strong>.
            </li>
            <li>
              Established a strong foundation in applied sciences, technology
              concepts, and analytical problem-solving.
            </li>
          </ul>
        </motion.div>

        {/* Leadership & Extracurricular */}
        <motion.div variants={textVariant}>
          <h3 className="font-bold text-lg mb-2 text-gray-900">
            Leadership & Extracurricular Involvement
          </h3>
          <ul className="list-disc list-inside space-y-2 text-justify marker:text-[#33cdcc]">
            <li>
              Represented the college in <strong>basketball</strong>,{" "}
              <strong>cricket</strong>, and <strong>wushu</strong>, developing
              discipline, teamwork, and resilience.
            </li>
            <li>
              Served as <strong>Deputy Secretary of the Technology Club</strong>,
              contributing to technical initiatives and coordination of club
              activities.
            </li>
            <li>
              Active member of the <strong>Information Technology Club</strong>,{" "}
              <strong>Astronomical Society</strong>, and{" "}
              <strong>History Club</strong>, strengthening interdisciplinary
              knowledge and analytical thinking.
            </li>
            <li>
              Member of the <strong>Junior Music Team</strong>, fostering
              creativity, collaboration, and performance discipline.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default School;
