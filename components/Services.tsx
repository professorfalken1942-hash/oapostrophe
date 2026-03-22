"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Pixel-perfect, performant websites built with modern frameworks. From landing pages to complex web apps — designed to convert and built to scale.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    number: "02",
    title: "Full-Stack Engineering",
    description:
      "End-to-end product development. APIs, databases, auth, deployments — the complete stack handled by one person who cares about every layer.",
    tags: ["Node.js", "PostgreSQL", "Vercel", "AWS"],
  },
  {
    number: "03",
      title: "Consulting",
    description:
      "Strategic technical guidance without the overhead. Architecture reviews, tech stack decisions, team augmentation, or a second opinion when it matters most.",
    tags: ["Architecture", "Code Review", "Strategy", "AI Integration"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-56" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <Container headingPadding={true}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 mb-32 px-6 md:px-6"
        >
          <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05]" style={{ color: "var(--text)" }}>
            What we do
          </h2>
          <div className="flex flex-col justify-end">
            <div className="body-copy flex flex-col gap-4" style={{ color: "var(--text-secondary)" }}>
              <p>
                Most agencies hand you off. Strategists to designers to developers to account managers —
                each one a little further from your actual problem. By the time it ships, nobody&apos;s
                sure who made what decision or why.
              </p>
              <p>
                We work differently. One senior engineer owns the entire engagement — the strategy,
                the architecture, the code, the deployment. No handoffs. No translation loss.
                No junior developers quietly doing the work while a director takes the credit.
              </p>
              <p>
                The result is faster, tighter, and built by someone who will still be accountable
                after the invoice clears.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-px" style={{ background: "var(--border)", border: "1px solid var(--border)" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-12 p-12"
              style={{ background: "var(--bg)" }}
            >
              {/* Number */}
              <span className="label-text" style={{ color: "var(--accent)" }}>{service.number}</span>

              {/* Title */}
              <h3 className="serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1]" style={{ color: "var(--text)" }}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="body-copy leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label-text px-3 py-1"
                    style={{ color: "var(--text-secondary)", background: "var(--tag-bg)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
