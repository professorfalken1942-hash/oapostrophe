"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Pixel-perfect, performant websites built with modern frameworks. From landing pages to complex web apps — designed to convert and built to scale.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    number: "02",
    title: "Full-Stack Engineering",
    description: "End-to-end product development. APIs, databases, auth, deployments — the complete stack handled by one person who cares about every layer.",
    tags: ["Node.js", "PostgreSQL", "Vercel", "AWS"],
  },
  {
    number: "03",
    title: "Consulting",
    description: "Strategic technical guidance without the overhead. Architecture reviews, tech stack decisions, team augmentation, or a second opinion when it matters most.",
    tags: ["Architecture", "Code Review", "Strategy", "AI Integration"],
  },
];

export default function Services() {
  return (
    /* py-24 = 96px = 12×8pt */
    <section id="services" className="py-24 bg-[#f7f7f5] border-t border-[#e8e8e6]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">

        {/* header row: mb-16=64px = 8×8pt */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tight text-[#0a0a0a] uppercase">
            What we<br />do
          </h2>
          <div className="body-copy flex flex-col gap-4 text-[#6b6b6b] font-light" style={{ lineHeight: '28px' }}>
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
        </motion.div>

        {/* cards: gap-px grid, each card p-8=32px = 4×8pt */}
        <div className="grid md:grid-cols-3 gap-px bg-[#e8e8e6]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#f7f7f5] p-8 flex flex-col gap-4"
            >
              {/* number: mb snaps to 4pt baseline via gap-4=16px */}
              <span className="label-text text-[#0047FF]">{service.number}</span>
              <h3 className="text-xl font-black tracking-tight text-[#0a0a0a] uppercase leading-[24px]">
                {service.title}
              </h3>
              <p className="body-copy text-[#6b6b6b] font-light flex-1 text-sm" style={{ lineHeight: '20px' }}>
                {service.description}
              </p>
              {/* tag row: pt-4=16px border top */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e8e8e6]">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs leading-[16px] px-3 py-1 bg-white border border-[#e8e8e6] text-[#6b6b6b] font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
