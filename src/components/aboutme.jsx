import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Briefcase, ExternalLink, MapPin } from "lucide-react";

// Images
import profilePic from "../assets/Personal Images/14.jpg";
import schoolLogo from "../assets/SSCK.png";
import campusLogo from "../assets/SLTC.png";
import companyLogo from "../assets/Silicon_radon_logo.jfif";
import aboutBg from "../assets/MySelf/certificatesBg.png";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen bg-[#fafafa] text-slate-900 selection:bg-[#33cdcc]/30">
      {/* ---------------- FLUID BACKGROUND ---------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aboutBg})`,        
          backgroundAttachment: "fixed", 
          backgroundPosition: "center",
          backgroundSize: "cover", }}
          
        />
      
      </div>

      {/* ---------------- RESPONSIVE CONTAINER ---------------- */}
      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-[5vw] py-[8vh]">
        
        {/* Header Section: Fluid Typography */}
        <header className="mb-[6vh] text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-[#33cdcc] font-bold tracking-[0.2em] uppercase text-[clamp(0.7rem,1vw,0.9rem)] mb-2 block"
          >
            Full Stack | Cloud Engineer | DevOps
          </motion.span>
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.9] tracking-tighter font-medium">
            About <span className="text-[#33cdcc]">Me.</span>
          </h1>
        </header>

        {/* ---------------- MAIN BENTO GRID ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1rem,2vw,2.5rem)] items-start">
          
          {/* LEFT COLUMN: Profile Info (Span 4) */}
          <motion.div 
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl bg-white p-3">
              <img 
                src={profilePic} 
                alt="Profile" 
                className="w-full aspect-[4/5] object-cover rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" 
              />
              <div className="absolute bottom-8 left-8 right-8 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center gap-3">
                <div className="p-2 bg-[#33cdcc]/10 rounded-full text-[#33cdcc]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">Location</p>
                  <p className="text-sm font-bold">Kandy, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-[2rem] border border-slate-700 shadow-sm">
              <p className="text-slate-600 leading-relaxed text-[clamp(1rem,1.1vw,1.2rem)] italic">
                "Building the bridge between <span className="text-[#33cdcc] font-semibold">robust cloud architecture</span> and intuitive user experiences."
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Journey (Span 8) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Intro Paragraph */}
            <motion.p 
              className="text-slate-700 text-[clamp(1.1rem,1.4vw,1.5rem)] leading-snug max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Passionate about building scalable, secure, and user-centric digital solutions. I specialize in 
              <span className="font-bold text-slate-900 px-1">modern cloud-native architectures</span> 
              and CI/CD automation, ensuring production-ready engineering workflows.
            </motion.p>

            {/* Education Bento */}
            <section className="space-y-6">
              <div className="flex items-center gap-4 text-slate-400">
                <GraduationCap size={20} />
                <h2 className="text-xs font-bold uppercase tracking-widest">Academic Foundation</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[ 
                  { logo: campusLogo, title: "SLTC Research University", date: "2021 – 2025", desc: "BSc (Honours) in Cloud Computing. Mastered AWS, DevOps, and Full-Stack Engineering." },
                  { logo: schoolLogo, title: "St. Sylvester’s College", date: "2010 – 2018", desc: "Solidified primary & secondary foundations with a focus on problem-solving and leadership." }
                ].map((edu, i) => (
                  <div key={i} className="group bg-white p-8 rounded-[2rem] border border-[#33cdcc] hover:border-[#33cdcc]/40 hover:shadow-xl transition-all duration-500">
                    <div className="flex justify-between items-center mb-6">
                      <img src={edu.logo} alt="Logo" className="h-12 w-12 object-contain grayscale group-hover:grayscale-0 transition-all" />
                      <span className="text-[10px] font-black bg-slate-50 px-3 py-1 rounded-full text-slate-400 uppercase tracking-tighter">{edu.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#33cdcc] transition-colors">{edu.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Experience Box */}
            <section className="space-y-6">
              <div className="flex items-center gap-4 text-slate-400">
                <Briefcase size={20} />
                <h2 className="text-xs font-bold uppercase tracking-widest">Professional Journey</h2>
              </div>

              <div className="relative group bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] overflow-hidden shadow-2xl">
                {/* Accent Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#33cdcc]/10 blur-[80px] -mr-20 -mt-20 group-hover:bg-[#33cdcc]/20 transition-colors duration-700" />
                
                <div className="relative z-10 flex flex-col xl:flex-row gap-10">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#33cdcc]/20 text-[#33cdcc] text-[10px] font-bold uppercase mb-4 tracking-wider">Internship</span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 italic">Full Stack Engineer Intern</h3>
                    <p className="text-slate-400 font-medium mb-6">Silicon Radon Networks (Pvt) Ltd</p>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
                      Developed high-performance React/Laravel applications. I collaborated across teams to translate complex functional requirements into production-ready technical solutions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Fluid CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <button
                onClick={() => { navigate("/myself"); window.scrollTo({ top: 0, behavior: "instant" }); }}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#33cdcc] text-white rounded-full font-bold shadow-lg shadow-[#33cdcc]/20 hover:scale-105 transition-all active:scale-95"
              >
                Detailed Portfolio <ExternalLink size={18} />
              </button>
              <button className="px-8 py-4 rounded-full border-2 border-slate-200 font-bold hover:bg-slate-50 transition-colors">
                Download CV
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;