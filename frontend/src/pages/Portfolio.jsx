import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import ThreeMT from "../components/ThreeMT";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-[#040814] text-slate-100" data-testid="portfolio-root">
      {/* Ambient global aurora */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px] blob-anim" />
        <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px] blob-anim-delay" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[120px] blob-anim" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <ThreeMT />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
