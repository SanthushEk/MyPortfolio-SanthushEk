import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: <FaGithub />, href: "#", color: "hover:text-white" },
    { icon: <FaLinkedin />, href: "#", color: "hover:text-[#0077B5]" },
    { icon: <FaTwitter />, href: "#", color: "hover:text-[#1DA1F2]" },
    { icon: <FaInstagram />, href: "#", color: "hover:text-[#E4405F]" },
    { icon: <FaWhatsapp />, href: "#", color: "hover:text-[#25D366]" },
  ];

  return (
    <footer className="w-full bg-gray-900 border-t border-white/5 py-4">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* LEFT: Branding & Copyright */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#33cdcc] shadow-[0_0_8px_#33cdcc]" />
              <span className="text-[11px] font-black text-white uppercase tracking-widest">
                Santhush <span className="text-gray-500">Ekanayake</span>
              </span>
            </div>
            <span className="hidden md:block h-3 w-[1px] bg-white/10" />
            <p className="text-[10px] text-[#33cdcc] font-medium uppercase tracking-tighter">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* CENTER/RIGHT: Ultra-Slim Social Dock */}
          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1 rounded-full backdrop-blur-md">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 text-gray-400 text-sm transition-colors rounded-full ${item.color}`}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* RIGHT: Status Tag */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#33cdcc]/10 rounded-full border border-[#33cdcc]/20">
             <span className="text-[9px] font-black text-[#33cdcc] uppercase tracking-tighter">
               SanthushEk V.01
             </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;