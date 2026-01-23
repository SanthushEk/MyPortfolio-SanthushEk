import React, { useState, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";

// Data
import certifications from "../data/certification.json";

// Images
import cloudOps from "../assets/AWS Certifications/01.Getting_Started_with_Cloud_Ops.png";
import compute from "../assets/AWS Certifications/02.AWS Educate Getting Started with Compute.png";
import databases from "../assets/AWS Certifications/03.AWS Educate Getting Started with Databases.png";
import networking from "../assets/AWS Certifications/04.AWS Educate Getting Started with Networking.png";
import security from "../assets/AWS Certifications/05.AWS Educate Getting Started with Security.png";
import serverless from "../assets/AWS Certifications/06.AWS Educate Getting Started with Serverless .png";
import storage from "../assets/AWS Certifications/07.AWS Educate Getting Started with Storage.png";
import cloud101 from "../assets/AWS Certifications/08.AWS Educate Introduction to Cloud 101 .png";
import IBMdocker from "../assets/AWS Certifications/09.Docker Essentials.png";
import FCCresponsive from "../assets/FreeCodeCamp/01.Legacy Resposive Web Design.png";
import FCCFrontend from "../assets/FreeCodeCamp/02.FrontEnd Development.png";
import FCCdv from "../assets/FreeCodeCamp/03.Data Visualization.png";
import FCCrdb from "../assets/FreeCodeCamp/04.Relational DataBases.png";
import FCCbackend from "../assets/FreeCodeCamp/05.Back End Development.png";
import UOMWebDesign from "../assets/UnivercityOfMoratuwa/01.Web Designing For Biginners.png";
import UOMFrontEnd from "../assets/UnivercityOfMoratuwa/02.FrontEnd Development.png";
import InnovMind from "../assets/UnivercityOfMoratuwa/03.Innomind.png";
import skillupCC from "../assets/OtherCertifications/01.Introduction to Cloud Computing.png";
import skillupHTML from "../assets/OtherCertifications/02.Introduction to HTML.png";
import skillupAzure from "../assets/OtherCertifications/03.Azure Foundamentals.png";
import Microsoft from "../assets/OtherCertifications/04.Microsoft Azure cloud Streak 3.0.png";

// Image map
const imageMap = {
  cloudOps,
  compute,
  databases,
  networking,
  security,
  serverless,
  storage,
  cloud101,
  IBMdocker,
  FCCresponsive,
  FCCFrontend,
  FCCdv,
  FCCrdb,
  FCCbackend,
  UOMWebDesign,
  UOMFrontEnd,
  InnovMind,
  skillupCC,
  skillupHTML,
  skillupAzure,
  Microsoft,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const MoreCertifications = () => {
  const [search] = useState("");
  const [filter] = useState("All");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  const filteredData = certifications.filter((cert) => {
    const matchesSearch = cert.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || cert.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <motion.section
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative bg-white py-24"
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900">
            Certifications & Achievements
          </h1>
          <p className="text-[#33cdcc] mt-4 max-w-2xl font-semibold mx-auto">
            A curated collection of professional certifications and academic accomplishments
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredData.map((cert, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl overflow-hidden bg-gray-900 shadow-xl border border-white/10"
            >
              {/* Image */}
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <img
                  src={imageMap[cert.imageKey]}
                  alt={cert.title}
                  className="h-full w-full object-contain p-4"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-300 mb-1">
                  <span className="font-medium">Provider:</span> {cert.provider}
                </p>

                <p className="text-sm text-gray-300 mb-3">
                  <span className="font-medium">Category:</span> {cert.category}
                </p>

                <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                  {cert.description}
                </p>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#33cdcc] text-sm font-semibold hover:underline"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MoreCertifications;
