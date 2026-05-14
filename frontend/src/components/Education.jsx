import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Your University",
    year: "2020 — 2024",
    detail: "Specialised in distributed systems & machine learning. Graduated with distinction.",
  },
  {
    degree: "AWS Certified Solutions Architect",
    school: "Amazon Web Services",
    year: "2024",
    detail: "Associate level — designing resilient, cost-optimised cloud systems.",
  },
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
          {education.map((e, i) => {
            const Icon = i === 0 ? GraduationCap : Award;
            return (
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
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-slate-500">{e.year}</div>
                  <h3 className="font-outfit text-xl md:text-2xl font-semibold text-white tracking-tight">{e.degree}</h3>
                  <div className="text-sm text-cyan-300">{e.school}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{e.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
