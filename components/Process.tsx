"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start with a conversation — your goals, constraints, and what success looks like. No templates, no assumptions.",
  },
  {
    number: "02",
    title: "Proposal",
    description: "A clear scope, timeline, and fixed price. No hourly billing surprises. You know exactly what you're getting.",
  },
  {
    number: "03",
    title: "Build",
    description: "Fast, iterative development with regular check-ins. AI-assisted workflows mean we move quicker without cutting corners.",
  },
  {
    number: "04",
    title: "Launch & Beyond",
    description: "Deployment, handoff, and documentation. Plus ongoing support if you need it — we don't disappear after launch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-[#0047FF] border-t border-[#0035cc]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-white uppercase">
            How it<br />works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-px bg-[#0035cc]">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#0047FF] p-10 flex flex-col gap-6"
            >
              <span className="text-white/40 text-sm font-bold tracking-widest uppercase">{step.number}</span>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">{step.title}</h3>
              <p className="body-copy text-white/70 font-light text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
