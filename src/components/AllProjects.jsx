import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react"; // Modern Icons
import projectsData from "../data/projects.json";
import ProjectModal from "../components/pages/ProjectModel";

/* --- Image Imports --- */
import VisitCeylon from "../assets/Projects/01.VistSrilanka.png";
import IMS from "../assets/Projects/02.Inventory Management System.png";
import MyWebSite from "../assets/Projects/03.MyWebSite.png";
import POManagementSystem from "../assets/Projects/04.POManagamentSystem.png";
import TodoList from "../assets/Projects/05.TodoLIst.png";
import MPCHEM from "../assets/Projects/06.MPCHEM.png";
import HillCity from "../assets/Projects/07.HillCity.png";
import HMS from "../assets/Projects/08.HMS.png";
import ProjectsBg from "../assets/Skills/moreProjects.jpg";

const projectImages = {
  VisitCeylon, IMS, MyWebSite, POManagementSystem, TodoList, MPCHEM, HillCity, HMS,
};

const AllProjects = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(() => ["All", ...new Set(projectsData.map((p) => p.category))], []);
  
  const filteredProjects = useMemo(() => {
    return [...projectsData]
      .sort((a, b) => b.id - a.id)
      .filter((project) =>
        (category === "All" || project.category === category) &&
        project.title.toLowerCase().includes(search.toLowerCase())
      );
  }, [category, search]);

  return (
    <section className="relative w-full min-h-screen py-24 px-6 md:px-12 bg-[#050505] text-white overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-[#33cdcc]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-cairo  tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-[#33cdcc] mb-6"
          >
            Projects.
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A collection of research projects, web applications, and automation tools built with modern tech stacks.</p>
        </header>

        {/* Filters */}
        <div className="flex flex-col items-center gap-8 mb-20">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  category === cat 
                  ? "bg-[#33cdcc] border-[#33cdcc] text-black shadow-[0_0_25px_rgba(51,205,204,0.4)]" 
                  : "bg-white/5 border-white/10 text-gray-500 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 focus:border-[#33cdcc]/50 focus:ring-1 focus:ring-[#33cdcc]/50 outline-none transition-all pl-14 text-white"
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group flex flex-col bg-[#0f0f0f] border border-white/10 rounded-[2rem] overflow-hidden hover:border-[#33cdcc]/40 transition-all duration-500"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={projectImages[project.imageKey]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-80" />
                  
                  {/* Overlay Info Trigger */}
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-4 right-4 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-[#33cdcc] hover:text-black transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Info size={18} />
                  </button>
                </div>

                {/* Body */}
                <div className="p-8 flex-grow flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#33cdcc] uppercase mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#33cdcc] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Footer Action Bar */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-4">
                      {project.github !== "#" && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={16} /> Code
                        </a>
                      )}
                      {project.demo !== "#" && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-[#33cdcc] hover:brightness-125 transition-all"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:text-white transition-colors"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-32 text-center opacity-50">
            <p className="text-xl">No projects found in this category.</p>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        image={selectedProject ? projectImages[selectedProject.imageKey] : null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default AllProjects;