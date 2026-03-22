"use client";

import { motion } from "framer-motion";
import Container from "./Container";

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
    <section id="process" className="py-56" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}>
      <Container headingPadding={true}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05]" style={{ color: "var(--text)" }}>
            How it works
          </h2>
        </motion.div>

        <div className="flex flex-col px-6 md:px-6" style={{ borderColor: "var(--border)" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid md:grid-cols-4 gap-8 py-10 items-start"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span className="label-text" style={{ color: "var(--accent)" }}>{step.number}</span>
              <h3 className="serif text-2xl" style={{ color: "var(--text)" }}>{step.title}</h3>
              <p className="text-base leading-relaxed md:col-span-2" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
