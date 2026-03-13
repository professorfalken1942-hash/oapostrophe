"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between border-b border-[#e8e8e4]">
        <a href="#" className="serif text-xl italic text-[#111111]">
          o&apos;
        </a>
        <div className="flex items-center gap-10 label-text text-[#444440]">
          <a href="/#services" className="hover:text-[#111111] transition-colors">Services</a>
          <a href="/#process" className="hover:text-[#111111] transition-colors">Process</a>
          <a href="/#pricing" className="hover:text-[#111111] transition-colors">Pricing</a>
          <a href="/#about" className="hover:text-[#111111] transition-colors">About</a>
          <a href="/journal" className="hover:text-[#111111] transition-colors">Journal</a>
          <a
            href="#contact"
            className="h-9 px-6 flex items-center border border-[#111111] text-[#111111] label-text hover:bg-[#111111] hover:text-white transition-colors"
          >
            Start a project
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
