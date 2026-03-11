"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-[#e8e8e6]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tight text-[#0a0a0a] uppercase">
              One<br />person.<br />
              <span className="text-[#0047FF]">Full<br />capability.</span>
            </h2>
          </motion.div>

          {/* body: gap-6=24px = 3×8pt, pt-2=8px aligns first line to heading cap-height */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="body-copy flex flex-col gap-6 pt-2"
          >
            <p className="text-lg text-[#6b6b6b] font-light" style={{ lineHeight: '32px' }}>
              oapostrophe is a solo studio — which means you get a senior engineer who&apos;s 
              personally invested in your project, not a rotating cast of junior developers 
              managed by someone who never looks at the code.
            </p>
            <p className="text-lg text-[#6b6b6b] font-light" style={{ lineHeight: '32px' }}>
              AI-assisted workflows let us move at a pace that used to require a full team. 
              The result: agency-quality output, boutique-level attention, at a price that 
              makes sense for businesses that aren&apos;t burning VC money.
            </p>
            <p className="text-lg text-[#6b6b6b] font-light" style={{ lineHeight: '32px' }}>
              We work with small businesses, founders, and anyone who needs something built 
              right and built fast — without the overhead.
            </p>
            {/* mt-2=8pt nudge to keep baseline rhythm after paragraphs */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-2 label-text text-[#0047FF] hover:gap-4 transition-all"
            >
              Let&apos;s talk <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
