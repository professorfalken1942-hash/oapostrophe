"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-7 bg-[#fafaf8]/90 backdrop-blur-sm border-b border-[#e5e5e3]"
    >
      <a href="#" className="text-xl font-bold tracking-tight text-[#111110]">
        o&apos;
      </a>
      <div className="flex items-center gap-8 text-sm text-[#6b6b6b]">
        <a href="#services" className="hover:text-[#111110] transition-colors">Services</a>
        <a href="#process" className="hover:text-[#111110] transition-colors">Process</a>
        <a href="#about" className="hover:text-[#111110] transition-colors">About</a>
        <a
          href="#contact"
          className="px-4 py-2 bg-[#111110] text-[#fafaf8] text-sm hover:bg-[#333] transition-colors"
        >
          Start a project
        </a>
      </div>
    </motion.nav>
  );
}
