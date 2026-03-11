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
    <section id="services" className="py-32 bg-white border-t border-[#e8e8e4]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 mb-24"
        >
          <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] text-[#111111]">
            What we do
          </h2>
          <div className="flex flex-col justify-end">
            <div className="body-copy flex flex-col gap-4 text-[#888884]">
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

        <div className="flex flex-col divide-y divide-[#e8e8e4]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid md:grid-cols-4 gap-8 py-10 items-start"
            >
              <span className="label-text text-[#0047FF]">{service.number}</span>
              <h3 className="serif text-2xl text-[#111111] md:col-span-1">{service.title}</h3>
              <p className="text-sm text-[#888884] leading-relaxed md:col-span-1">{service.description}</p>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {service.tags.map((tag) => (
                  <span key={tag} className="label-text text-[#888884] border border-[#e8e8e4] px-3 py-1">
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
