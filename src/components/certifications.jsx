import React, { useRef } from "react";
import { ExternalLink, Award, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// JSON Data
import certifications from "../data/certification.json";

// Images
import cloudOps from "../assets/AWS Certifications/01.Getting_Started_with_Cloud_Ops.png";
import compute from "../assets/AWS Certifications/02.AWS Educate Getting Started with Compute.png";
import databases from "../assets/AWS Certifications/03.AWS Educate Getting Started with Databases.png";
import networking from "../assets/AWS Certifications/04.AWS Educate Getting Started with Networking.png";
import security from "../assets/AWS Certifications/05.AWS Educate Getting Started with Security.png";

// Background Image
import certBg from "../assets/MySelf/certificatesBg.png";

// Image map
const imageMap = { cloudOps, compute, databases, networking, security };

const Certifications = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  /* ---------------- ANIMATIONS ---------------- */
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const hoverEffect = {
    scale: 1.04,
    y: -10,
    rotateX: 3,
    rotateY: -3,
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <section className="relative py-20 font-cairo">
      {/* ---------------- BACKGROUND ---------------- */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${certBg})`,
        backgroundAttachment: "fixed", 
        backgroundPosition: "center",
        backgroundSize: "cover", }}

      />

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* ---------------- CONTENT ---------------- */}
      <div
        className="relative max-w-7xl mx-auto px-6"
        ref={containerRef}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-widest text-[#33cdcc] uppercase">
            Professional Growth
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
            My Certifications
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.slice(0, 5).map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={hoverEffect}
              className="bg-gray-900/90 backdrop-blur rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden group transform-gpu"
            >
              {/* Image */}
              <div className="h-44 bg-gray-800 flex items-center justify-center overflow-hidden">
                <img
                  src={imageMap[cert.imageKey]}
                  alt={cert.title}
                  className="object-contain h-full w-full p-3 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={22} className="text-[#33cdcc]" />
                  <h3 className="text-lg font-semibold text-white">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-300 mb-4">
                  {cert.description}
                </p>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#33cdcc] hover:text-cyan-300 transition"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}

          {/* ---------------- VIEW MORE ---------------- */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.06, y: -8 }}
            onClick={() => navigate("/certifications")}
            className="flex items-center justify-center bg-white/90 backdrop-blur rounded-2xl border-2 border-dashed border-gray-300 hover:border-[#33cdcc] cursor-pointer transition shadow-sm hover:shadow-lg"
          >
            <div className="text-center p-10">
              <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-blue-50">
                <ArrowRight size={26} className="text-[#33cdcc]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                View More
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Explore all certifications
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
