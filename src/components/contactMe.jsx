import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import ContactImg from "../assets/MySelf/photo01.jpeg";
import BgImage from "../assets/MySelf/ContactMeBg.png";

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const isSendingRef = useRef(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
  const REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Simplified intersection observer (using whileInView is cleaner for Framer Motion)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () =>
    form.name.trim() && form.email.trim() && form.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSendingRef.current) return;
    
    if (!validateForm()) {
      setStatus("error");
      return;
    }

    isSendingRef.current = true;
    setStatus("loading");

    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
      year: new Date().getFullYear(),
    };

    try {
      await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, templateParams, PUBLIC_KEY);
      await emailjs.send(SERVICE_ID, REPLY_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setShowModal(true);
    } catch (error) {
      console.error("EmailJS ERROR:", error);
      setStatus("error");
    } finally {
      isSendingRef.current = false;
    }
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Darker Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

      <div 
        ref={ref}
        className="relative max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center z-10"
      >
        {/* ---------- Form ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 bg-white/80 p-6 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                // FIXED: Explicit text color and bg color
                className="w-full p-4 bg-white border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#33cdcc] outline-none transition-all"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 bg-white border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#33cdcc] outline-none transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="How can I help you?"
                className="w-full p-4 bg-white border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#33cdcc] outline-none transition-all resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#33cdcc] hover:bg-[#2bb3b2] text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status === "error" && (
            <p className="text-red-500 font-medium mt-4 text-center">
              Please fill all fields correctly.
            </p>
          )}
        </motion.div>

        {/* ---------- Image ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#33cdcc] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={ContactImg}
              alt="Contact"
              className="relative rounded-2xl shadow-2xl w-full max-w-md lg:max-w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center text-center relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#33cdcc] transition-colors"
              >
                <AiOutlineCloseCircle size={28} />
              </button>

              <div className="w-16 h-16 bg-[#33cdcc]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-[#33cdcc] text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Success!</h3>
              <p className="text-gray-600">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactMe;