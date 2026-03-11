"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pt-16 bg-white">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-text text-[#444440] mb-16">
            oapostrophe — Digital Studio
          </p>

          <h1 className="serif text-[clamp(3.5rem,8vw,8rem)] leading-[1.0] text-[#111111] mb-16">
            Built for<br />
            your goals.<br />
            <em className="not-italic text-[#0070ad]">Not ours.</em>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-[#e8e8e4] pt-10">
            <p className="body-copy text-lg text-[#444440]">
              Boutique web development, full-stack engineering, and strategic consulting — 
              AI-assisted, fast turnaround, with the kind of attention a big agency can&apos;t afford to give you.
            </p>
            <div className="flex items-center gap-8 shrink-0">
              <a
                href="#contact"
                className="h-12 px-8 flex items-center bg-[#0070ad] text-white label-text hover:bg-[#005580] transition-colors"
              >
                Start a project
              </a>
              <a href="#services" className="label-text text-[#444440] hover:text-[#111111] transition-colors underline underline-offset-4">
                See what we do
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
