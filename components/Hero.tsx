"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    /* pt-16 = nav height, then 80px top padding, 80px bottom */
    <section className="min-h-screen flex flex-col justify-end pt-16 pb-20 bg-white">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* label: 48px bottom margin = 6×8pt */}
          <p className="label-text text-[#6b6b6b] mb-12">
            oapostrophe — Digital Studio
          </p>

          {/* display heading: line-height 0.9, mb 48px = 6×8pt */}
          <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.9] tracking-tight text-[#0a0a0a] uppercase mb-12">
            Built for<br />
            your goals.<br />
            <span className="text-[#0047FF]">Not ours.</span>
          </h1>

          {/* divider row: pt-8=32px */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-[#e8e8e6] pt-8">
            <p className="body-copy text-lg md:text-xl text-[#6b6b6b] font-light" style={{ lineHeight: '32px' }}>
              Boutique web development, full-stack engineering, and strategic consulting — 
              AI-assisted, fast turnaround, with the kind of attention a big agency can&apos;t afford to give you.
            </p>
            {/* gap-6=24px between buttons */}
            <div className="flex items-center gap-6 shrink-0">
              <a
                href="#contact"
                className="h-12 px-8 flex items-center bg-[#0047FF] text-white label-text hover:bg-[#0035cc] transition-colors"
              >
                Start a project
              </a>
              <a href="#services" className="label-text text-[#0a0a0a] underline underline-offset-4 hover:text-[#0047FF] transition-colors">
                See what we do
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
