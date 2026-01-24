import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // UPDATED: Actual Social Links
  const socialIcons = [
    { 
      icon: <FaGithub />, 
      href: "https://github.com/", // Add your github link here
      color: "hover:text-white" 
    },
    { 
      icon: <FaLinkedin />, 
      href: "https://www.linkedin.com/in/santhush-ekanayake-606301224/", 
      color: "hover:text-[#0077B5]" 
    },
    { 
      icon: <FaXTwitter />, 
      href: "http://x.com/Santhush_24", 
      color: "hover:text-white" 
    },
    { 
      icon: <FaInstagram />, 
      href: "https://www.instagram.com/zid_essy/", 
      color: "hover:text-[#E4405F]" 
    },
    { 
      icon: <FaFacebook />, 
      href: "https://www.facebook.com/santhush.ekanayake.75/", 
      color: "hover:text-[#1877F2]" 
    },
    { 
      icon: <FaWhatsapp />, 
      href: "https://wa.me/94740645355",
      color: "hover:text-[#25D366]" 
    },
  ];

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 py-6">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* LEFT: Branding & Copyright */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#33cdcc] shadow-[0_0_8px_#33cdcc]" />
              <span className="text-[11px] font-black text-white uppercase tracking-widest">
                Santhush <span className="text-gray-500">Ekanayake</span>
              </span>
            </div>
            <span className="hidden md:block h-3 w-[1px] bg-white/10" />
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-tighter">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* CENTER: Ultra-Slim Social Dock */}
          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1 rounded-full backdrop-blur-md">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(51, 205, 204, 0.1)" 
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 text-gray-400 text-sm transition-all rounded-full ${item.color}`}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* RIGHT: Status Tag */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[#33cdcc]/5 rounded-full border border-[#33cdcc]/20">
             <div className="w-1.5 h-1.5 rounded-full bg-[#33cdcc] animate-pulse" />
             <span className="text-[9px] font-black text-[#33cdcc] uppercase tracking-tighter">
               System Active V.01
             </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;