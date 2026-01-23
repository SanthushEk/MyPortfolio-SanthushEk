import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

// 1. IMPORT YOUR IMAGE HERE
import SideImage from "../assets/MySelf/photo02.jpeg"; 

const navItems = [
  { label: "HOME", id: "home" },
  { label: "CERTIFICATIONS", id: "certifications" },
  { label: "PROJECTS", id: "projects" },
  { label: "CONTACT", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 z-50 p-3 bg-black/10 backdrop-blur-md rounded-lg text-[#33cdcc] hover:bg-gray-400 transition"
      >
        <FaBars className="text-xl" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/40 flex flex-col md:flex-row overflow-hidden"
          >
            {/* LEFT SIDE: IMPORTED IMAGE */}
            <div className="relative hidden md:block w-[30%] lg:w-[25%] h-full overflow-hidden">
              <img 
                src={SideImage} // 2. USE THE IMPORTED VARIABLE HERE
                alt="Navigation Feature"
                className="h-full w-full object-cover"
              />
              {/* Overlay to match the bottom-left text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 text-white font-semibold text-3xl tracking-tight">
                SanthushEk
              </div>
            </div>

            {/* RIGHT SIDE: NAV CONTENT */}
            <div className="flex-1 flex flex-col justify-between p-8 md:p-16 lg:p-24 bg-white text-black">
              
              {/* TOP BAR */}
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-900 uppercase">
                  2026© Santhush Ekanayake
                </span>
                <button 
                  onClick={() => setOpen(false)}
                  className="p-1 hover:rotate-90 transition-transform duration-300"
                >
                  <FaTimes className="text-5xl text-[#33cdcc]" />
                </button>
              </div>

              {/* NAV LINKS */}
              <nav className="flex flex-col space-y-2 md:space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 12 }}
                    onClick={() => handleClick(item.id)}
                    className="group cursor-pointer w-fit"
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-none transition-colors group-hover:text-[#33cdcc]">
                      {item.label}
                    </h2>
                    {/* The subtle underline from your photo */}
                    <div className="h-[1.5px] bg-[#33cdcc] w-6 group-hover:w-full transition-all duration-500 mt-2" />
                  </motion.div>
                ))}
              </nav>

              {/* FOOTER INFO */}
              <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="flex flex-col space-y-1">
                  <a href="mailto:hello@yourdomain.com" className="text-sm font-semibold border-b border-black w-fit hover:text-gray-500 transition-colors">
                    santhushekanayake.official@gmail.com
                  </a>
                  <a href="tel:+971501234567" className="text-sm font-semibold border-b border-black w-fit hover:text-gray-500 transition-colors">
                    +975 034 3513
                  </a>
                </div>
                
                <div className="flex gap-6 text-[2px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <a href="#" className="hover:text-black transition-colors">Instagram</a>
                  <a href="#" className="hover:text-black transition-colors">X / Twitter</a>
                  <a href="#" className="hover:text-black transition-colors">Facebook</a>
                  <a href="#" className="hover:text-black transition-colors">Github</a>
                  <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;