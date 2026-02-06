import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaAws, FaCode, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

// Image Imports
import profileImg from "../assets/Landing Page/Me.png";
import bgImg from "../assets/Landing Page/landingimage02.jpg";

/* ---------------- LIGHTNING EFFECT ---------------- */
const LightningStrike = () => {
  const [strike, setStrike] = useState(null);
  useEffect(() => {
    const trigger = () => {
      const x = Math.random() * window.innerWidth;
      const path = `M ${x} 0 L ${x + (Math.random() - 0.5) * 120} ${window.innerHeight / 2} L ${x + (Math.random() - 0.5) * 60} ${window.innerHeight}`;
      setStrike(path);
      setTimeout(() => setStrike(null), 150);
      setTimeout(trigger, Math.random() * 5000 + 2000);
    };
    trigger();
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <AnimatePresence>
        {strike && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.08 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#33cdcc]" />
            <svg className="absolute inset-0 w-full h-full">
              <motion.path d={strike} fill="none" stroke="#33cdcc" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} style={{ filter: "drop-shadow(0 0 15px #33cdcc)" }} />
            </svg>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const [time, setTime] = useState("");

  // Social Media Data
  const socials = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/santhush-ekanayake-606301224/", color: "hover:text-[#0077b5]" },
    { Icon: FaGithub, href: "https://github.com/", color: "hover:text-white" }, // Add your Github handle here
    { Icon: FaXTwitter, href: "http://x.com/Santhush_24", color: "hover:text-white" },
    { Icon: FaInstagram, href: "https://www.instagram.com/zid_essy/", color: "hover:text-[#e4405f]" },
    { Icon: FaFacebook, href: "https://www.facebook.com/santhush.ekanayake.75/", color: "hover:text-[#1877f2]" },
  ];

  useEffect(() => {
    const updateClock = () => {
      const options = { timeZone: 'Asia/Colombo', hour: '2-digit', minute: '2-digit', hour12: true };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col-reverse lg:flex-row">
      <LightningStrike />

      {/* LEFT MARGIN: DECOR (Desktop Only) */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-16 border-r border-white/5 flex-col justify-end items-center pb-12 z-50">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex flex-col items-center gap-8">
          <p className="text-[#33cdcc] text-[10px] tracking-[0.5em] font-bold vertical-text uppercase">EST — 2025</p>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#33cdcc]/40 to-transparent" />
          <p className="text-[#33cdcc] text-[10px] tracking-[0.3em] font-bold vertical-text uppercase whitespace-nowrap">Colombo, Sri Lanka</p>
        </motion.div>
      </div>

      {/* TOP BADGES */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.8 }}
        className="absolute top-6 left-6 lg:top-12 lg:left-24 z-40 flex flex-col gap-3 lg:gap-4"
      >
        <div className="flex items-center gap-3 lg:gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 p-2 lg:p-3 rounded-xl">
          <div className="flex -space-x-3">
             <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#232f3e] border-2 border-black flex items-center justify-center text-[#ff9900] shadow-xl"><FaAws size={16} /></div>
             <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#0a0a23] border-2 border-black flex items-center justify-center text-white shadow-xl"><FaCode size={14} /></div>
          </div>
          <div>
            <p className="text-[8px] lg:text-[9px] font-black text-[#33cdcc] tracking-[0.2em] uppercase leading-none mb-1">9x Certified Expert</p>
            <p className="text-white text-[10px] lg:text-[11px] font-medium opacity-80 uppercase tracking-tighter">AWS & freeCodeCamp</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 lg:gap-3 px-3 py-1.5 lg:px-4 lg:py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/5 w-fit">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33cdcc] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33cdcc]"></span>
            </span>
            <span className="text-[8px] lg:text-[9px] font-bold text-white/70 uppercase tracking-[0.15em]">Available for Hire & Projects</span>
        </div>
      </motion.div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-32 py-12 lg:py-20">
        <motion.div style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? textY : 0 }} className="space-y-6 lg:space-y-8 mt-16 lg:mt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] lg:leading-[0.85]">
              SANTHUSH <br />
              <span className="text-transparent border-text">EKANAYAKE</span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.5 }} className="text-white text-base lg:text-lg max-w-sm font-light leading-relaxed border-l border-[#33cdcc]/30 pl-6">
            <span className="text-[#33cdcc]">Cloud</span> | <span className="text-[#33cdcc]">DevOps</span> | <span className="text-[#33cdcc]">FullStack</span> Developer specialized in building scalable and secure ecosystems.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-4">
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              href="/myCV.pdf" 
              download 
              className="w-full sm:w-auto text-center px-10 py-5 bg-[#33cdcc] text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-sm shadow-[0_0_30px_rgba(51,205,204,0.15)]"
            >
              Get Resume
            </motion.a>
            <div className="flex flex-wrap gap-5 text-white/30 ml-2 sm:ml-0">
              {socials.map(({ Icon, href, color }, i) => (
                <motion.a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, opacity: 1 }}
                  className={`${color} transition-all text-xl lg:text-2xl transform`}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* IMAGE SIDE */}
      <div className="relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-screen p-4 md:p-6 lg:p-12 lg:pl-0">
        <motion.div style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? imgY : 0 }} className="relative w-full h-full">
          <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] border border-white/10 group">
            <img src={bgImg} alt="BG" className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl opacity-20" />
            <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} src={profileImg} className="relative z-10 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000" />
            
            <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-30 flex flex-col gap-0.5 lg:gap-1">
                <span className="text-[#33cdcc] font-mono text-[8px] lg:text-[10px] tracking-widest font-bold uppercase">Local Time (CMB)</span>
                <span className="text-white text-2xl lg:text-3xl font-bold tracking-tighter">{time}</span>
            </div>

            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .border-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
        .vertical-text { writing-mode: vertical-rl; transform: rotate(180deg); }
        @media (max-width: 1024px) {
          .border-text { -webkit-text-stroke: 0.5px rgba(255,255,255,0.3); color: white; opacity: 0.5; }
        }
      `}} />
    </section>
  );
};

export default Hero;