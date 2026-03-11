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
    <section id="process" className="py-32 bg-[#f9f9f7] border-t border-[#e8e8e4]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] text-[#111111]">
            How it works
          </h2>
        </motion.div>

        <div className="flex flex-col divide-y divide-[#e8e8e4]">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid md:grid-cols-4 gap-8 py-10 items-start"
            >
              <span className="label-text text-[#0047FF]">{step.number}</span>
              <h3 className="serif text-2xl text-[#111111]">{step.title}</h3>
              <p className="text-base text-[#444440] leading-relaxed md:col-span-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
