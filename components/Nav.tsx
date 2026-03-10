"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8e8e6]"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex items-center justify-between">
        <a href="#" className="text-lg font-black tracking-tight text-[#0a0a0a] uppercase">
          o&apos;
        </a>
        <div className="flex items-center gap-10 text-sm font-medium text-[#6b6b6b]">
          <a href="#services" className="hover:text-[#0a0a0a] transition-colors">Services</a>
          <a href="#process" className="hover:text-[#0a0a0a] transition-colors">Process</a>
          <a href="#about" className="hover:text-[#0a0a0a] transition-colors">About</a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#0047FF] text-white text-sm font-semibold hover:bg-[#0035cc] transition-colors"
          >
            Start a project
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
