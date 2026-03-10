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
    <section id="services" className="py-32 bg-[#f7f7f5] border-t border-[#e8e8e6]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-[#0a0a0a] uppercase">
            What we<br />do
          </h2>
          <p className="text-[#6b6b6b] max-w-sm font-light leading-relaxed">
            Three core disciplines. One studio. Complete ownership of your project from first commit to final deploy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[#e8e8e6]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#f7f7f5] p-10 flex flex-col gap-6"
            >
              <span className="text-[#0047FF] text-sm font-bold tracking-widest uppercase">{service.number}</span>
              <h3 className="text-2xl font-black tracking-tight text-[#0a0a0a] uppercase">{service.title}</h3>
              <p className="text-[#6b6b6b] leading-relaxed font-light flex-1">{service.description}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e8e8e6]">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-white border border-[#e8e8e6] text-[#6b6b6b] font-medium">
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
