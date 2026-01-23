import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import ContactImg from "../assets/MySelf/photo01.jpeg";
import BgImage from "../assets/MySelf/ContactMeBg.png"; // <-- BACKGROUND IMAGE

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [showModal, setShowModal] = useState(false);
  const isSendingRef = useRef(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
  const REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // ---------- Scroll Animations ----------
  const [refForm, inViewForm] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refImage, inViewImage] = useInView({ triggerOnce: true, threshold: 0.2 });
  const formControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (inViewForm) {
      formControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    } else {
      formControls.start({ opacity: 0, y: 50 });
    }
  }, [inViewForm, formControls]);

  useEffect(() => {
    if (inViewImage) {
      imageControls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
    } else {
      imageControls.start({ opacity: 0, x: 50 });
    }
  }, [inViewImage, imageControls]);

  // ---------- Form Handling ----------
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () =>
    form.name.trim() && form.email.trim() && form.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSendingRef.current) return;
    isSendingRef.current = true;

    if (!validateForm()) {
      setStatus("error");
      isSendingRef.current = false;
      return;
    }

    setStatus("loading");

    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
      year: new Date().getFullYear(),
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        CONTACT_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      await emailjs.send(
        SERVICE_ID,
        REPLY_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

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
      const timer = setTimeout(() => setShowModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-8 py-24"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundAttachment: "fixed", 
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative  max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center p-10">

        {/* ---------- Form ---------- */}
        <motion.div
          ref={refForm}
          initial={{ opacity: 0, y: 50 }}
          animate={formControls}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-5xl font-semibold mb-4 text-gray-900">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-500 rounded-lg"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-500 rounded-lg"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-500 rounded-lg"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#33cdcc] text-white py-3 rounded-lg disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 mt-4"
            >
              Message failed. Please check your details and try again.
            </motion.p>
          )}
        </motion.div>

        {/* ---------- Image ---------- */}
        <motion.img
          ref={refImage}
          src={ContactImg}
          alt="Contact"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={imageControls}
        />
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl p-6 w-80 md:w-[600px] flex flex-col items-center relative border-2 border-[#33cdcc]"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-[#33cdcc]"
              >
                <AiOutlineCloseCircle size={24} />
              </button>

              <h3 className="text-2xl font-semibold mb-2 text-[#33cdcc]">
                Thank you!
              </h3>
              <p className="text-gray-700 text-center">
                Your message has been sent successfully.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactMe;
