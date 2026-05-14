import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] py-10" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-[#040814] font-bold">
            T
          </span>
          <div className="font-outfit text-sm text-slate-300">
            Venkata Thanoj Varma Atluri
          </div>
        </div>
      
      </div>
    </footer>
  );
}
