"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white border-t border-[#e8e8e6]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-[#0a0a0a] uppercase">
              One<br />person.<br />
              <span className="text-[#0047FF]">Full<br />capability.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 pt-4"
          >
            <p className="text-lg text-[#6b6b6b] leading-relaxed font-light">
              oapostrophe is a solo studio — which means you get a senior engineer who&apos;s 
              personally invested in your project, not a rotating cast of junior developers 
              managed by someone who never looks at the code.
            </p>
            <p className="text-lg text-[#6b6b6b] leading-relaxed font-light">
              AI-assisted workflows let us move at a pace that used to require a full team. 
              The result: agency-quality output, boutique-level attention, at a price that 
              makes sense for businesses that aren&apos;t burning VC money.
            </p>
            <p className="text-lg text-[#6b6b6b] leading-relaxed font-light">
              We work with small businesses, founders, and anyone who needs something built 
              right and built fast — without the overhead.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#0047FF] uppercase tracking-widest hover:gap-4 transition-all"
            >
              Let&apos;s talk <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
