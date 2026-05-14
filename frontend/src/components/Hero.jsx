import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

function ParticleNetwork() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h, particles;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = Math.min(110, Math.floor((w * h) / 14000));
      particles = Array.from({ length: density }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.4,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // draw lines first
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      // draw dots
      for (const p of particles) {
        ctx.fillStyle = "rgba(103, 232, 249, 0.85)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      data-testid="hero-section"
    >
      {/* Particle network */}
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>

      {/* Subtle grid + vignette */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040814]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.05] px-3 py-1.5 text-xs font-medium text-cyan-200 backdrop-blur-md"
              data-testid="hero-badge"
            >
              <Sparkles size={12} className="text-cyan-300" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              variants={item}
              className="font-outfit mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white"
              data-testid="hero-headline"
            >
              Hi, I'm{" "}
              <span className="text-gradient-cyan inline-block">Thanoj.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg md:text-xl text-slate-400 leading-relaxed"
              data-testid="hero-subtext"
            >
              Aspiring ML Engineer passionate about Python, NLP, and Deep Learning —
              building AI solutions that solve real-world problems, from RAG pipelines
              to computer vision systems.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-3.5 text-sm font-semibold text-[#040814] shadow-[0_0_30px_rgba(34,211,238,0.45)] hover:shadow-[0_0_45px_rgba(34,211,238,0.75)] transition-all hover:-translate-y-0.5"
                data-testid="hero-cta-primary"
              >
                See My Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.08] hover:border-cyan-400/40 transition-all"
                data-testid="hero-cta-secondary"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div variants={item} className="mt-12 flex items-center gap-6 text-xs text-slate-500 font-mono uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                Online
              </div>
              <div>Dayton, OH / Remote</div>
            </motion.div>
          </motion.div>

          {/* Profile orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative justify-self-center lg:justify-self-end"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-transparent blur-2xl" />
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full glow-ring border border-white/10 bg-gradient-to-br from-[#0b1224] to-[#040814] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_60%)]" />
                {/* Orbiting dots */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4"
                >
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
                </motion.div>

                {/* Initials placeholder */}
                <div className="absolute inset-6 rounded-full border border-white/5 flex items-center justify-center">
                  <span className="font-outfit text-7xl font-light text-white/90 tracking-tight" data-testid="hero-profile-initials">
                    TA
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-mono">
                Venkata Thanoj Varma Aturi
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-mono">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />
      </motion.div>
    </section>
  );
}
