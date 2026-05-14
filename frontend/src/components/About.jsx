import React from "react";
import { motion } from "framer-motion";
import { Server, Brain, Cloud, Code2 } from "lucide-react";

const skillGroups = [
  {
    icon: Brain,
    title: "ML / AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "NLP", "Pandas", "NumPy"],
  },
  {
    icon: Cloud,
    title: "LLM & Gen AI",
    skills: ["RAG", "LangChain", "ChromaDB", "Embeddings", "Prompt Engineering", "Vector DBs"],
  },
  {
    icon: Code2,
    title: "Languages & Web",
    skills: ["Python", "C", "R", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Server,
    title: "Platforms & Databases",
    skills: ["Docker", "Linux", "Windows", "MySQL", "SQL Server"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
          className="mb-14 flex flex-col gap-3"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">01 / About</span>
          <h2 className="font-outfit text-3xl md:text-5xl font-semibold text-white tracking-tight">
            A bit about me<span className="text-cyan-400">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Bio card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            className="lg:col-span-5 relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 overflow-hidden"
            data-testid="about-bio-card"
          >
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 font-mono text-sm">
                  01
                </div>
                <span className="text-xs uppercase tracking-widest text-slate-500 font-mono">The story</span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm an aspiring{" "}
                <span className="text-cyan-300">ML Engineer</span> with a strong
                foundation in{" "}
                <span className="text-cyan-300">NLP</span> and{" "}
                <span className="text-cyan-300">Deep Learning</span>. I love
                building AI solutions that tackle real-world problems from
                RAG pipelines and LLM-based reasoning to computer vision and
                predictive modelling.
              </p>
              <p className="mt-5 text-slate-400 leading-relaxed">
                Graduated with Master's Degree in Computer Science at Wright State
                University. Outside academics I'm tinkering with side projects,
                reading ML papers, and presenting research at conferences.
              </p>
              <div className="mt-8 flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-slate-500">
                <div>
                  <div className="text-2xl text-white font-outfit font-semibold">4+</div>
                  <div className="mt-1">AI Projects</div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <div className="text-2xl text-white font-outfit font-semibold">2</div>
                  <div className="mt-1">Conferences</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  data-testid={`skill-group-${idx}`}
                >
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-2xl transition-all duration-700" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-10 w-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                        <Icon size={18} strokeWidth={1.6} />
                      </div>
                      <h3 className="font-outfit text-base font-semibold text-white">
                        {group.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((s, i) => (
                        <motion.span
                          key={s}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.08 + i * 0.05 }}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1 text-xs text-cyan-200 hover:border-cyan-400/50 hover:bg-cyan-400/[0.12] hover:-translate-y-0.5 transition-all cursor-default"
                          data-testid={`skill-pill-${idx}-${i}`}
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
