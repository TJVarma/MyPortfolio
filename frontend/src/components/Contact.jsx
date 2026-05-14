import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#", testid: "contact-social-linkedin" },
  { icon: Github, label: "GitHub", href: "#", testid: "contact-social-github" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com", testid: "contact-social-email" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Couldn't send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">05 / Contact</span>
          <h2 className="mt-3 font-outfit text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Let's build something good<span className="text-cyan-400">.</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
            Got a project, role, or wild idea you want a second pair of hands on?
            Drop a note — I read every message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
          {/* Socials & info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all hover:-translate-y-0.5"
                  data-testid={s.testid}
                >
                  <div className="h-12 w-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400/20 transition">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-500">{s.label}</span>
                    <span className="text-white font-medium">Connect with me</span>
                  </div>
                  <span className="ml-auto text-cyan-300 opacity-0 group-hover:opacity-100 transition">→</span>
                </a>
              );
            })}

            <div className="mt-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] backdrop-blur-xl p-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                Currently
              </div>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                Open to full-time roles in SRE / Platform / MLOps and interesting freelance gigs.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-7 md:p-9 flex flex-col gap-5"
            data-testid="contact-form"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Ada Lovelace"
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition"
                  data-testid="contact-input-name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-widest text-slate-400">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@domain.com"
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition"
                  data-testid="contact-input-email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-widest text-slate-400">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={6}
                placeholder="Tell me about the project, role or idea..."
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition resize-none"
                data-testid="contact-input-message"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="self-start inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-3.5 text-sm font-semibold text-[#040814] shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_45px_rgba(34,211,238,0.7)] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              data-testid="contact-submit-btn"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Sending…" : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
