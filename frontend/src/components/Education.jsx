import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const degrees = [
  {
    degree: "Master of Science in Computer Science",
    school: "Wright State University, Dayton, Ohio",
    year: "Expected May 2026",
    detail: "GPA 3.25 / 4.0 — focused on Machine Learning, NLP, and AI systems.",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "RMK College of Engineering & Technology, Tamil Nadu, India",
    year: "April 2024",
    detail: "CGPA 8.31 / 10 — strong foundation in algorithms, data structures, and software engineering.",
  },
];

const certs = [
  "AWS Certified Cloud Practitioner",
  "LLM Engineering — Udemy",
  "Python Certificate — Udemy",
  "Accenture: Data Analytics & Visualization Virtual Experience",
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32" data-testid="education-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">04 / Learning</span>
          <h2 className="mt-3 font-outfit text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Education & certs<span className="text-cyan-400">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {degrees.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-7 md:p-9 overflow-hidden hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-500"
              data-testid={`education-card-${i}`}
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700" />
              <div className="relative flex flex-col gap-3">
                <div className="h-12 w-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <GraduationCap size={22} strokeWidth={1.5} />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500">{e.year}</div>
                <h3 className="font-outfit text-xl md:text-2xl font-semibold text-white tracking-tight">{e.degree}</h3>
                <div className="text-sm text-cyan-300">{e.school}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{e.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-7 md:p-9"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
              <Award size={18} strokeWidth={1.5} />
            </div>
            <span className="font-outfit text-base font-semibold text-white">Certifications</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {certs.map((c) => (
              <span
                key={c}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-sm text-cyan-200 hover:border-cyan-400/50 hover:bg-cyan-400/[0.12] transition-all cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
