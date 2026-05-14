import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const items = [
  {
    role: "Graduate Researcher",
    company: "Wright State University, Dayton, OH",
    date: "2024 — Present",
    bullets: [
      "Presented research on clustering methods for high-dimensional biological data, examining multiple algorithms to support reliable biological discovery.",
      "Exploring genomics and biomedical data analysis with a focus on improving interpretability of complex datasets.",
    ],
  },
  {
    role: "Research Presenter",
    company: "ICIoT 2023 National Conference",
    date: "2023",
    bullets: [
      "Presented 'Automatic Text Summarization Using NLTK', discussing NLP-based extractive summarization techniques.",
      "Focused on improving summary accuracy and efficiency using Python and NLP libraries.",
    ],
  },
  {
    role: "Intern",
    company: "Infidata Technologies, India",
    date: "May 2023",
    bullets: [
      "Built a Train Delay Prediction Model using Linear Regression on historical train operation data applied feature importance and probability estimation.",
      "Developed an Online Shopping Application with product catalogs, shopping carts, order processing, and payment integration using SQL.",
      "Built a Diabetes Prediction model using Logistic Regression, analyzing blood pressure, sugar levels, and BMI as input features.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32" data-testid="experience-section">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">03 / Journey</span>
          <h2 className="mt-3 font-outfit text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Where I've been<span className="text-cyan-400">.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />

          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={it.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14"
                data-testid={`experience-item-${i}`}
              >
                {/* Dot */}
                <div className="absolute left-5 top-6 -translate-x-1/2 z-10">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" />
                    <span className="relative h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                  </span>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 md:p-7 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2">
                    <Briefcase size={12} />
                    {it.date}
                  </div>
                  <h3 className="font-outfit text-xl md:text-2xl font-semibold text-white tracking-tight">
                    {it.role}
                  </h3>
                  <div className="text-sm text-slate-400 mt-1 mb-4">{it.company}</div>
                  <ul className="space-y-2">
                    {it.bullets.map((b, k) => (
                      <li key={k} className="flex gap-3 text-sm text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
