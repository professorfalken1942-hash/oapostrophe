"use client";

import { motion } from "framer-motion";

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
    <section id="services" className="px-12 py-32 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-widest text-[#6b6b6b] mb-4">Services</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111110] mb-16">
          What we do
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-0 border-t border-[#e5e5e3]">
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="py-14 pr-12 border-b md:border-b-0 md:border-r border-[#e5e5e3] last:border-r-0 first:pl-0 pl-12"
          >
            <p className="text-sm text-[#6b6b6b] mb-4">{service.number}</p>
            <h3 className="text-xl font-bold text-[#111110] mb-4">{service.title}</h3>
            <p className="text-[#6b6b6b] leading-relaxed mb-6">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 border border-[#e5e5e3] text-[#6b6b6b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
