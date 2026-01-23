import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Loader from "./diagrams/Loader";

import Navbar from "./components/navbar";
import Hero from "./components/heroPage";
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import Certifications from "./components/certifications";
import Projects from "./components/projects";
import ContactMe from "./components/contactMe";
import Footer from "./components/footer";
import MoreCertifications from "./components/moreCertifications";
import AllProjects from "./components/allProjects";
import Cursor from "./diagrams/curser";
import MySelf from "./components/mySelf";
import ScrollToTop from "./diagrams/scrollToTop";

/* -------------------- HOME PAGE LAYOUT -------------------- */
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to section if redirected with state
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.state]);

  return (
    <>
      <Toaster position="top-right" />
      <Cursor />
      <Navbar />
      {/* Hero Section */}
      <section id="home"><Hero /></section>
      {/* About Me Section */}
      <section id="about"><AboutMe /></section>
      {/* Skills Section */}
      <section id="skills"><Skills /></section>
      {/* Certifications Section */}
      <section id="certifications"><Certifications /></section>
      {/* Projects Section */}
      <section id="projects"><Projects /></section>
      {/* Contact Section */}
      <section id="contact"><ContactMe /></section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

/* -------------------- APP CONTENT -------------------- */
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 1500); // 1.5s loader
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => setLoading(false), 800); // 0.8s loader
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  if (loading) return <Loader />;

  return (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/projects"
        element={
          <>
            <Navbar />
            <AllProjects />
            <Footer />
          </>
        }
      />

      <Route
        path="/certifications"
        element={
          <>
            <Navbar />
            <MoreCertifications />
            <Footer />
          </>
        }
      />

      <Route
        path="/myself"
        element={
          <>
            <Navbar />
            <MySelf />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

/* -------------------- APP WRAPPER -------------------- */
export default function App() {
  return <AppContent />;
}
