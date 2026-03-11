"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 pt-32 bg-white">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6b6b6b] mb-12">
            oapostrophe — Digital Studio
          </p>

          <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.9] tracking-tight text-[#0a0a0a] uppercase mb-12">
            Built for<br />
            your goals.<br />
            <span className="text-[#0047FF]">Not ours.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-[#e8e8e6] pt-10">
            <p className="body-copy text-lg md:text-xl text-[#6b6b6b] font-light">
              Boutique web development, full-stack engineering, and strategic consulting — 
              AI-assisted, fast turnaround, with the kind of attention a big agency can&apos;t afford to give you.
            </p>
            <div className="flex items-center gap-6 shrink-0">
              <a
                href="#contact"
                className="px-8 py-4 bg-[#0047FF] text-white text-sm font-semibold uppercase tracking-widest hover:bg-[#0035cc] transition-colors"
              >
                Start a project
              </a>
              <a href="#services" className="text-sm font-medium text-[#0a0a0a] underline underline-offset-4 hover:text-[#0047FF] transition-colors">
                See what we do
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
