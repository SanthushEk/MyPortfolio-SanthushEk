import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

/* -------------------- Project Data -------------------- */
import projectsData from "../data/projects.json";

/* -------------------- Modal -------------------- */
import ProjectModal from "../components/pages/ProjectModel";

/* -------------------- Image Imports -------------------- */
import MPCHEM from "../assets/Projects/06.MPCHEM.png";
import HillCity from "../assets/Projects/07.HillCity.png";
import HMS from "../assets/Projects/08.HMS.png";

/* -------------------- Background -------------------- */
import ProjectsBg from "../assets/Skills/projectBG.jpg";

const projectImages = { MPCHEM, HillCity, HMS };

// --- KPI Stats Component ---
const ProjectStats = () => {
  const stats = [
    { label: "Total Projects", value: "44", color: "from-[#33cdcc] to-teal-400" },
    { label: "Mini Solutions", value: "36", color: "from-blue-400 to-indigo-500" },
    { label: "Enterprise Scale", value: "08", color: "from-purple-400 to-[#33cdcc]" },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 px-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden"
        >
          {/* Subtle Hover Glow */}
          <div className={`absolute -inset-px opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${stat.color}`} />
          
          <div className="relative">
            <h4 className="text-4xl font-bold text-white mb-1 tracking-tighter">
              {stat.value}
            </h4>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  const latestProjects = [...projectsData]
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 3);

  return (
    <section ref={sectionRef} className="w-full min-h-screen py-24 px-8 relative overflow-hidden bg-[#050505]">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
        style={{
          backgroundImage: `url(${ProjectsBg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          y,
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#33cdcc]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="text-[#33cdcc] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Portfolio Overview</span>
        <h2 className="text-5xl md:text-6xl font-cairo text-white tracking-tight">Latest Projects</h2>
      </motion.div>

      {/* KPI Section */}
      <ProjectStats />

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 relative z-10">
        {latestProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative rounded-3xl overflow-hidden bg-gray-900/40 backdrop-blur-xl border border-[#33cdcc] hover:border-[#33cdcc]/50  transition-all duration-500 shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={projectImages[project.imageKey]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="p-8">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#33cdcc]">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-2 group-hover:text-[#33cdcc] transition-colors">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed line-clamp-2">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[9px] px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10 uppercase font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Trigger */}
            <div
              onClick={() => setSelectedProject(project)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 cursor-pointer bg-black/60 backdrop-blur-sm"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#33cdcc] text-black font-bold uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(51,205,204,0.3)] transition"
              >
                Project Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex justify-center mt-24 relative z-10"
      >
        <button
          onClick={() => navigate("/projects")}
          className="group relative px-12 py-4 text-white text-sm font-bold font-cairo tracking-widest uppercase transition-all"
        >
          <span className="relative z-10 f">See all archives</span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 group-hover:bg-[#33cdcc] transition-all" />
        </button>
      </motion.div>

      <ProjectModal
        project={selectedProject}
        image={selectedProject ? projectImages[selectedProject.imageKey] : null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;