import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", ...links.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#040814]/70 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="group flex items-center gap-2 font-outfit text-lg font-semibold tracking-tight"
          data-testid="nav-logo"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-[#040814] font-bold shadow-[0_0_20px_rgba(34,211,238,0.45)]">
            T
          </span>
          <span className="text-white">
            thanoj<span className="text-cyan-400">.</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                active === l.id ? "text-cyan-300" : "text-slate-300 hover:text-white"
              }`}
              data-testid={`nav-link-${l.id}`}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/[0.06] px-5 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-400/[0.12] hover:border-cyan-400/60 transition-all shadow-[0_0_15px_rgba(34,211,238,0.15)]"
          data-testid="nav-cta-hire"
        >
          Let's talk
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#040814]/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left px-3 py-3 rounded-lg text-slate-200 hover:bg-white/[0.04] hover:text-cyan-300 transition"
                  data-testid={`nav-mobile-link-${l.id}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
