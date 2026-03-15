"use client";

import { motion } from "framer-motion";
import Container from "./Container";

interface Plan {
  number: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    number: "01",
    name: "Starter",
    price: "$5,000",
    description: "Landing pages, small sites, and MVPs",
    features: [
      "Landing page or small web app",
      "Responsive design",
      "Basic SEO & deployment",
      "Email support",
    ],
    cta: "Get started",
  },
  {
    number: "02",
    name: "Professional",
    price: "$10,000",
    description: "For businesses that need more than a brochure",
    features: [
      "Full-featured web application",
      "API & database integration",
      "Auth, payments, and advanced features",
      "Slack support & post-launch optimization",
    ],
    cta: "Let's build",
    highlight: true,
  },
  {
    number: "03",
    name: "Enterprise",
    price: "Custom",
    description: "Complex systems and long-term engagements",
    features: [
      "Everything in Professional",
      "Custom architecture & integrations",
      "Ongoing retainer & priority support",
      "Quarterly strategy reviews",
    ],
    cta: "Let's talk",
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
          className="mb-32 px-6 md:px-6"
        >
          <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] text-[#111111]">
            Simple,<br />
            <em>predictable pricing.</em>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-[#e8e8e4]">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white flex flex-col gap-10 p-14"
            >
              {/* Number + badge */}
              <div className="flex items-start justify-between">
                <span className="label-text text-[#0070ad]">{plan.number}</span>
                {plan.highlight && (
                  <span className="label-text text-[#0070ad] border border-[#0070ad] px-3 py-1">
                    Popular
                  </span>
                )}
              </div>

              {/* Name + price */}
              <div className="flex flex-col gap-2">
                <h3 className="serif text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.1] text-[#111111]">
                  {plan.name}
                </h3>
                <p className={`serif text-[clamp(2rem,3.5vw,3rem)] leading-none ${
                  plan.highlight ? "text-[#0070ad]" : "text-[#111111]"
                }`}>
                  {plan.price}
                </p>
                <p className="body-copy text-sm text-[#888884] mt-1">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-[#0070ad] shrink-0 mt-0.5">✓</span>
                    <span className="body-copy text-sm text-[#6b6b6b] leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`flex items-center justify-center h-12 px-8 label-text transition-colors mt-auto ${
                  plan.highlight
                    ? "bg-[#0070ad] text-white hover:bg-[#005580]"
                    : "border border-[#e8e8e4] text-[#444440] hover:border-[#0070ad] hover:text-[#0070ad]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-px bg-[#f9f9f7] px-14 py-12"
        >
          <p className="body-copy text-sm text-[#888884] max-w-2xl">
            All projects include a discovery call, fixed price quote, weekly check-ins, and full handoff.
            No hourly billing — you know the cost upfront.
          </p>
        </motion.div>

      </Container>
    </section>
  );
}
