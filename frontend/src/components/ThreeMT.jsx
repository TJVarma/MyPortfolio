import React from "react";
import { motion } from "framer-motion";
import { Mic, GraduationCap, Trophy, Clock, Users } from "lucide-react";

const milestones = [
  {
    photo: "/3mt.png",
    photoPosition: "35% 25%",
    tag: "3MT Competition · 2025",
    tagIcon: Mic,
    title: "Three Minute Thesis",
    subtitle: "Wright State University",
    description:
      "Distilled complex graduate research into a compelling 3-minute presentation for a non-specialist audience at WSU's College of Graduate Programs and Honors Studies.",
    pills: [
      { icon: Clock,  label: "3-Minute Pitch" },
      { icon: Mic,    label: "Public Research Talk" },
      { icon: Trophy, label: "Graduate Competition" },
    ],
  },
  {
    photo: "/defense.png",
    photoPosition: "50% 10%",
    tag: "Thesis Defense · 2025",
    tagIcon: GraduationCap,
    title: "Master's Thesis Defense",
    subtitle: "Advisor: Dr. Tomojit Ghosh",
    description:
      "Successfully defended thesis on 'Comparison of Clustering Algorithms for High-Dimensional Gene Expression Data Analysis' — examining multiple algorithms to support reliable biological discovery.",
    pills: [
      { icon: GraduationCap, label: "M.S. Computer Science" },
      { icon: Users,         label: "Dr. Tomojit Ghosh" },
      { icon: Trophy,        label: "Wright State University" },
    ],
  },
];

export default function ThreeMT() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
            Academic Milestones
          </span>
          <h2 className="mt-3 font-outfit text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Research Highlights<span className="text-cyan-400">.</span>
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan-500/0 via-cyan-500/70 to-cyan-500/0" />
        </motion.div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((m, i) => {
            const TagIcon = m.tagIcon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.02]
                           backdrop-blur-xl hover:border-cyan-400/40 hover:bg-white/[0.04]
                           transition-all duration-500 group"
              >
                {/* Photo */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={m.photo}
                    alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: m.photoPosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040814]/80 via-[#040814]/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md
                                  border border-cyan-400/30 rounded-full px-3 py-1.5 text-xs text-cyan-300 font-mono">
                    <TagIcon size={11} strokeWidth={2} />
                    {m.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-outfit text-xl font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-xs text-cyan-400/80 font-medium mb-3">{m.subtitle}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{m.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {m.pills.map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="flex items-center gap-1.5 rounded-full border border-cyan-400/20
                                   bg-cyan-400/[0.06] px-3 py-1 text-xs text-cyan-200"
                      >
                        <Icon size={11} strokeWidth={2} />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
