"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white border-t border-[#e8e8e4]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] text-[#111111]">
              One person.<br />
              <em>Full capability.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="body-copy flex flex-col gap-6 text-[#444440]"
          >
            <p>
              oapostrophe is a solo studio — which means you get a senior engineer who&apos;s 
              personally invested in your project, not a rotating cast of junior developers 
              managed by someone who never looks at the code.
            </p>
            <p>
              AI-assisted workflows let us move at a pace that used to require a full team. 
              The result: agency-quality output, boutique-level attention, at a price that 
              makes sense for businesses that aren&apos;t burning VC money.
            </p>
            <p>
              We work with small businesses, founders, and anyone who needs something built 
              right and built fast — without the overhead.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-2 label-text text-[#0070ad] hover:gap-4 transition-all"
            >
              Let&apos;s talk <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
