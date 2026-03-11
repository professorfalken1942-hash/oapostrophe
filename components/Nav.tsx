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
      {/* height: 64px = 8×8pt */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-black tracking-tight text-[#0a0a0a] uppercase leading-[16px]">
          o&apos;
        </a>
        <div className="flex items-center gap-8 label-text text-[#6b6b6b]">
          <a href="#services" className="hover:text-[#0a0a0a] transition-colors">Services</a>
          <a href="#process" className="hover:text-[#0a0a0a] transition-colors">Process</a>
          <a href="#about" className="hover:text-[#0a0a0a] transition-colors">About</a>
          {/* button: 40px tall = 5×8pt, px-6=24px */}
          <a
            href="#contact"
            className="h-10 px-6 flex items-center bg-[#0047FF] text-white label-text hover:bg-[#0035cc] transition-colors"
          >
            Start a project
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
