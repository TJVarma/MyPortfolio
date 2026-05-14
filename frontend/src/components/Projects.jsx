import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Boxes, LineChart, DollarSign, Wand2 } from "lucide-react";

const projects = [
  {
    icon: Boxes,
    title: "ML Model Serving Pipeline",
    description:
      "Scalable end-to-end model serving with autoscaling, blue-green deploys and observability on Kubernetes.",
    stack: ["Docker", "Kubernetes", "FastAPI", "TensorFlow"],
    github: "#",
    demo: "#",
    accent: "from-cyan-400/30 to-blue-500/20",
  },
  {
    icon: LineChart,
    title: "Distributed Monitoring Dashboard",
    description:
      "Real-time system-health observability across services with intelligent anomaly detection and alerting.",
    stack: ["Prometheus", "Grafana", "Python", "React"],
    github: "#",
    demo: "#",
    accent: "from-blue-500/30 to-indigo-500/20",
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimizer",
    description:
      "Python tool that analyses AWS spend, surfaces idle resources and recommends right-sizing — quietly saving dollars.",
    stack: ["Python", "AWS", "Boto3", "Pandas"],
    github: "#",
    demo: "#",
    accent: "from-emerald-400/25 to-cyan-400/20",
  },
  {
    icon: Wand2,
    title: "Automation Toolkit",
    description:
      "A growing collection of scripts and CLIs that cut manual ops work dramatically — because life is too short for repetition.",
    stack: ["Bash", "Python", "GitHub Actions"],
    github: "#",
    demo: "#",
    accent: "from-fuchsia-400/25 to-cyan-400/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end justify-between flex-wrap gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
              02 / Selected work
            </span>
            <h2 className="mt-3 font-outfit text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Things I've built<span className="text-cyan-400">.</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-sm md:text-base">
            A handful of projects that I'm proud of — built to be reliable, fast,
            and a bit fun to maintain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2"
                data-testid={`project-card-${i}`}
              >
                {/* Decorative header */}
                <div className={`relative h-40 bg-gradient-to-br ${p.accent} overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/95 via-[#040814]/30 to-transparent" />
                  <div className="absolute top-4 left-5 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                    Project {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute right-5 bottom-5 h-14 w-14 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <h3 className="font-outfit text-xl md:text-2xl font-semibold text-white tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300 font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-200 hover:border-cyan-400/40 hover:text-cyan-200 hover:bg-cyan-400/[0.06] transition-all"
                      data-testid={`project-github-${i}`}
                    >
                      <Github size={14} /> Source
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-4 py-2 text-xs font-semibold text-[#040814] shadow-[0_0_18px_rgba(34,211,238,0.35)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all"
                      data-testid={`project-demo-${i}`}
                    >
                      <ExternalLink size={14} /> Live demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
