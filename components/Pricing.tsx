"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const plans = [
  {
    number: "01",
    name: "Starter",
    price: "$150",
    period: "/month",
    description: "Ongoing support for existing sites and apps",
    features: ["Performance monitoring & optimization", "Security updates & backups", "Bug fixes & minor tweaks", "Email support (48hr response)"],
  },
  {
    number: "02",
    name: "Professional",
    price: "$200",
    period: "/month",
    description: "Full maintenance with active development",
    features: ["Everything in Starter", "10 hours monthly dev & design", "Feature requests & enhancements", "Slack support (24hr response)"],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing py-56" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <Container headingPadding={true}>

        {/* Header */}
        <motion.div
          className="pricing__header mb-32 px-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="pricing__heading serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05]" style={{ color: "var(--text)" }}>
            Simple,<br />
            <em>predictable pricing.</em>
          </h2>
        </motion.div>

        {/* Plans */}
        <div className="pricing__plans flex flex-col">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.number}
              className={`pricing-plan grid md:grid-cols-12 gap-12 py-16 px-6 items-start ${plan.highlight ? "pricing-plan--featured" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="pricing-plan__number md:col-span-1">
                <span className="label-text" style={{ color: "var(--accent)" }}>{plan.number}</span>
              </div>

              <div className="pricing-plan__info md:col-span-2">
                <h3 className="pricing-plan__name serif text-2xl" style={{ color: "var(--text)" }}>{plan.name}</h3>
                <p className="pricing-plan__description body-copy text-sm mt-2 max-w-none" style={{ color: "var(--text-faint)" }}>{plan.description}</p>
              </div>

              <ul className="pricing-plan__features md:col-span-5 flex flex-col gap-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="pricing-plan__feature flex items-start gap-3">
                    <span className="shrink-0 mt-0.5" style={{ color: "var(--text-faint)" }}>·</span>
                    <span className="body-copy text-sm leading-snug max-w-none" style={{ color: "var(--text-muted)" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-plan__action md:col-span-4 flex flex-col items-start md:items-end gap-6">
                <div className="flex items-baseline gap-1">
                  <p
                    className="pricing-plan__price serif text-[clamp(2.5rem,4vw,3.5rem)] leading-none"
                    style={{ color: plan.highlight ? "var(--accent)" : "var(--text)" }}
                  >
                    {plan.price}
                  </p>
                  <span className="label-text text-sm" style={{ color: "var(--text-faint)" }}>
                    {plan.period}
                  </span>
                </div>
                <a
                  href="#contact"
                  className={`cta-button h-12 min-w-[48px] flex items-center label-text transition-colors ${plan.highlight ? "cta-button--primary" : "cta-button--outline"}`}
                  style={
                    plan.highlight
                      ? { background: "var(--accent)", color: "var(--bg)", padding: "0 12px" }
                      : { border: "1px solid var(--border)", color: "var(--text-secondary)", padding: "0 12px" }
                  }
                >
                  {plan.highlight ? "Subscribe" : "Subscribe"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="pricing__note mt-16 pt-10 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="body-copy text-sm" style={{ color: "var(--text-faint)" }}>
            Month-to-month commitment. Cancel anytime. All subscriptions include monitoring, security updates,
            priority email support, and peace of mind.
          </p>
        </motion.div>

      </Container>
    </section>
  );
}
