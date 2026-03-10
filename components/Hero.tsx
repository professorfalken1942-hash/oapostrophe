"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-12 pt-40 pb-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-sm uppercase tracking-widest text-[#6b6b6b] mb-8">
          oapostrophe — Digital Studio
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight text-[#111110] mb-8">
          Built for<br />
          your goals.<br />
          <span className="text-[#6b6b6b]">Not ours.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#6b6b6b] max-w-xl mt-8 leading-relaxed">
          Boutique web development, full-stack engineering, and strategic consulting — 
          AI-assisted, fast turnaround, with the kind of attention a big agency can&apos;t afford to give you.
        </p>
        <div className="flex items-center gap-6 mt-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-[#111110] text-[#fafaf8] text-sm uppercase tracking-widest hover:bg-[#333] transition-colors"
          >
            Start a project
          </a>
          <a href="#services" className="text-sm text-[#6b6b6b] underline underline-offset-4 hover:text-[#111110] transition-colors">
            See what we do
          </a>
        </div>
      </motion.div>
    </section>
  );
}
