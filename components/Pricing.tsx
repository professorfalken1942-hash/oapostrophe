"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const plans = [
  {
    number: "01",
    name: "Starter",
    price: "$5,000",
    description: "Landing pages, small sites, and MVPs",
    features: ["Landing page or small web app", "Responsive design", "Basic SEO & deployment", "Email support"],
  },
  {
    number: "02",
    name: "Professional",
    price: "$10,000",
    description: "For businesses that need more than a brochure",
    features: ["Full-featured web application", "API & database integration", "Auth, payments & advanced features", "Slack support & post-launch optimization"],
    highlight: true,
  },
  {
    number: "03",
    name: "Enterprise",
    price: "Custom",
    description: "Complex systems and long-term engagements",
    features: ["Everything in Professional", "Custom architecture & integrations", "Ongoing retainer & priority support", "Quarterly strategy reviews"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-40 bg-white border-t border-[#e8e8e4]">
      <Container headingPadding={true}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-32 px-6"
        >
          <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] text-[#111111]">
            Simple,<br />
            <em>predictable pricing.</em>
          </h2>
        </motion.div>

        {/* Plans */}
        <div className="flex flex-col divide-y divide-[#e8e8e4]">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="grid md:grid-cols-12 gap-8 py-16 px-6 items-start"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="label-text text-[#0070ad]">{plan.number}</span>
              </div>

              {/* Name */}
              <div className="md:col-span-2">
                <h3 className="serif text-2xl text-[#111111]">{plan.name}</h3>
                <p className="body-copy text-sm text-[#888884] mt-2 max-w-none">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="md:col-span-5 flex flex-col gap-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-[#0070ad] shrink-0 mt-0.5">✓</span>
                    <span className="body-copy text-sm text-[#6b6b6b] leading-snug max-w-none">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6">
                <p className={`serif text-[clamp(2.5rem,4vw,3.5rem)] leading-none ${plan.highlight ? "text-[#0070ad]" : "text-[#111111]"}`}>
                  {plan.price}
                </p>
                <a
                  href="#contact"
                  className={`h-12 px-10 flex items-center label-text transition-colors ${
                    plan.highlight
                      ? "bg-[#0070ad] text-white hover:bg-[#005580]"
                      : "border border-[#e8e8e4] text-[#444440] hover:border-[#0070ad] hover:text-[#0070ad]"
                  }`}
                >
                  {plan.highlight ? "Let's build" : plan.number === "01" ? "Get started" : "Let's talk"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-10 border-t border-[#e8e8e4] px-6"
        >
          <p className="body-copy text-sm text-[#888884]">
            All projects include a discovery call, fixed price quote, weekly check-ins, and full handoff.
            No hourly billing — you know the cost upfront.
          </p>
        </motion.div>

      </Container>
    </section>
  );
}
