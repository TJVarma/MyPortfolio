import React from "react";

const certs = [
  {
    title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    issuer: "Udemy",
    date: "May 2026",
    icon: "🎓",
  },
  {
    title: "Paper Presentation – Automatic Text Summarization",
    issuer: "RMK College · NCCTTB '23",
    date: "May 2023",
    icon: "📄",
  },
  {
    title: "1st Prize – TWYSTRA'22 Technical Symposium",
    issuer: "RMK College · ECE Dept",
    date: "Oct 2022",
    icon: "🏆",
  },
  {
    title: "DST-SERB Seminar – Next-Gen Cyber Security Technologies",
    issuer: "RMK College · Dept of CSE",
    date: "Apr 2023",
    icon: "🔐",
  },
];

// Duplicate for seamless loop
const track = [...certs, ...certs];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Section heading */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-3">
          Achievements
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="mt-4 h-px w-24 mx-auto bg-gradient-to-r from-cyan-500/0 via-cyan-500/70 to-cyan-500/0" />
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#040814] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#040814] to-transparent" />

        <div className="flex w-max animate-marquee gap-6 px-6">
          {track.map((cert, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 rounded-2xl border border-cyan-500/20 bg-white/[0.03] backdrop-blur-sm p-6
                         shadow-lg hover:border-cyan-400/50 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <h3 className="text-sm font-semibold text-slate-100 leading-snug mb-2 group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-cyan-400/80 font-medium">{cert.issuer}</p>
              <p className="text-xs text-slate-500 mt-1">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
