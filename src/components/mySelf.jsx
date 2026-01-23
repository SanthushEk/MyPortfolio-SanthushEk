import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Childhood from "./pages/Childhood";
import School from "./pages/School";
import University from "./pages/University";
import Experience from "./pages/Experience";
import Future from "./pages/Future";

const sections = [
  { id: 1, Component: Childhood },
  { id: 2, Component: School },
  { id: 3, Component: University },
  { id: 4, Component: Experience },
  { id: 5, Component: Future },
];

const MySelf = () => {
  return (
    <div className="bg-[#0b0f1a] text-white">
      {sections.map(({ id, Component }) => (
        <StickySection key={id}>
          <Component />
        </StickySection>
      ))}
    </div>
  );
};

// Sticky section wrapper with animation
const StickySection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px", once: false });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default MySelf;
