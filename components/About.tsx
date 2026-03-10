"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto w-full px-8 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-[#6b6b6b] mb-4">About</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111110]">
              One person.<br />Full capability.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-[#6b6b6b] leading-relaxed"
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
              className="inline-block mt-4 text-sm text-[#111110] underline underline-offset-4 hover:text-[#6b6b6b] transition-colors"
            >
              Let&apos;s talk about your project →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
