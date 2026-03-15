"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const services = [
  {
    number: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="28" height="20" rx="2" stroke="#0070ad" strokeWidth="1.5" fill="none"/>
        <path d="M2 10h28" stroke="#0070ad" strokeWidth="1.5"/>
        <path d="M8 28h16" stroke="#0070ad" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 24v4" stroke="#0070ad" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 15l3 3-3 3" stroke="#0070ad" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 21h5" stroke="#0070ad" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Web Development",
    description:
      "Pixel-perfect, performant websites built with modern frameworks. From landing pages to complex web apps — designed to convert and built to scale.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    number: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8h20M6 16h20M6 24h12" stroke="#0070ad" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="25" cy="24" r="4" stroke="#0070ad" strokeWidth="1.5" fill="none"/>
        <path d="M28 27l2 2" stroke="#0070ad" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Full-Stack Engineering",
    description:
      "End-to-end product development. APIs, databases, auth, deployments — the complete stack handled by one person who cares about every layer.",
    tags: ["Node.js", "PostgreSQL", "Vercel", "AWS"],
  },
  {
    number: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" stroke="#0070ad" strokeWidth="1.5" fill="none"/>
        <path d="M16 10v6l4 2" stroke="#0070ad" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 5.5C8 7.5 6.5 10 6.5 13" stroke="#0070ad" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Consulting",
    description:
      "Strategic technical guidance without the overhead. Architecture reviews, tech stack decisions, team augmentation, or a second opinion when it matters most.",
    tags: ["Architecture", "Code Review", "Strategy", "AI Integration"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-white border-t border-[#e8e8e4]">
      <Container headingPadding={true}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 mb-32 px-6 md:px-6"
        >
          <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] text-[#111111]">
            What we do
          </h2>
          <div className="flex flex-col justify-end">
            <div className="body-copy flex flex-col gap-4 text-[#444440]">
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
        <div className="grid md:grid-cols-3 gap-px bg-[#e8e8e4] border border-[#e8e8e4]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white flex flex-col gap-10 p-12"
            >
              {/* Top row: number + icon */}
              <div className="flex items-start justify-between">
                <span className="label-text text-[#0070ad]">{service.number}</span>
                <div className="opacity-80">{service.icon}</div>
              </div>

              {/* Title */}
              <h3 className="serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] text-[#111111]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="body-copy text-[#444440] leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e8e8e4]">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label-text text-[#444440] bg-[#f5f5f3] px-3 py-1"
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
