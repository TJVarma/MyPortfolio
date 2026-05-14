import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const items = [
  {
    role: "Site Reliability / DevOps Engineer",
    company: "Stealth Startup",
    date: "2024 — Present",
    bullets: [
      "Built a Kubernetes-based platform serving ML models with 99.9% uptime.",
      "Reduced cloud spend ~28% via right-sizing and autoscaling policies.",
      "Owned observability stack: Prometheus, Grafana, Loki.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Fintech Co.",
    date: "2023 — 2024",
    bullets: [
      "Designed CI/CD pipelines for 12+ microservices on AWS.",
      "Automated reconciliation jobs that previously ran manually each week.",
    ],
  },
  {
    role: "Research Assistant",
    company: "University Lab",
    date: "2022 — 2023",
    bullets: [
      "Worked on distributed ML training experiments using TensorFlow.",
      "Co-authored an internal whitepaper on model deployment patterns.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32" data-testid="experience-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {items.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={it.role}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    left ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                  data-testid={`experience-item-${i}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 z-10">
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" />
                      <span className="relative h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                    </span>
                  </div>

                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div
                      className={`inline-flex flex-col gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 md:p-7 hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-500 ${
                        left ? "md:items-end" : "md:items-start"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300">
                        <Briefcase size={12} />
                        {it.date}
                      </div>
                      <h3 className="font-outfit text-xl md:text-2xl font-semibold text-white tracking-tight">
                        {it.role}
                      </h3>
                      <div className="text-sm text-slate-400">{it.company}</div>
                      <ul className={`mt-3 space-y-2 text-sm text-slate-400 ${left ? "md:text-right" : ""}`}>
                        {it.bullets.map((b, k) => (
                          <li key={k} className="flex gap-2 md:items-start">
                            {left ? (
                              <>
                                <span className="md:order-2 md:ml-2 text-cyan-400 mt-1.5 h-1 w-1 rounded-full bg-cyan-400 shrink-0" />
                                <span className="md:order-1">{b}</span>
                              </>
                            ) : (
                              <>
                                <span className="text-cyan-400 mt-2 h-1 w-1 rounded-full bg-cyan-400 shrink-0" />
                                <span>{b}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty side for grid alignment */}
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
