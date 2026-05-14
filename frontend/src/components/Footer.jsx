import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] py-10" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-[#040814] font-bold">
            T
          </span>
          <div className="font-outfit text-sm text-slate-300">
            Venkata Thanoj Varma Aturi
            <span className="ml-2 text-slate-600">© {year}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/thanojatluri0907" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition" data-testid="footer-linkedin">
            <Linkedin size={16} />
          </a>
          <a href="https://github.com/TJVarma" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition" data-testid="footer-github">
            <Github size={16} />
          </a>
          <a href="mailto:atluri.29@wright.edu" className="h-9 w-9 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition" data-testid="footer-email">
            <Mail size={16} />
          </a>
        </div>
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-600">
          Built with care · No templates
        </div>
      </div>
    </footer>
  );
}
