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
    <section id="process" className="process py-56" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}>
      <Container headingPadding={true}>

        <motion.div
          className="process__header mb-24"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="process__heading serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05]" style={{ color: "var(--text)" }}>
            How it works
          </h2>
        </motion.div>

        <div className="process__steps flex flex-col px-6 md:px-6" style={{ borderColor: "var(--border)" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="process-step grid md:grid-cols-4 gap-8 py-10 items-start"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span className="process-step__number label-text" style={{ color: "var(--accent)" }}>{step.number}</span>
              <h3 className="process-step__title serif text-2xl" style={{ color: "var(--text)" }}>{step.title}</h3>
              <p className="process-step__description text-base leading-relaxed md:col-span-2" style={{ color: "var(--text-secondary)" }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
