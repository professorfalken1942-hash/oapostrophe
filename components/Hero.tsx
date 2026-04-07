"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="hero" className="hero min-h-screen flex flex-col justify-center py-24 pt-32" style={{ background: "var(--bg)" }}>
      <Container>
        <div className="hero__content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="hero__label label-text mb-8" style={{ color: "var(--text-secondary)" }}>
            oapostrophe — Digital Studio
          </p>

          <h1 className="hero__heading serif text-[clamp(3.5rem,8vw,8rem)] leading-[1.0] mb-12" style={{ color: "var(--text)" }}>
            Built for<br />
            your goals.<br />
            <em className="hero__heading-accent not-italic" style={{ color: "var(--accent)" }}>Not ours.</em>
          </h1>

          <div className="hero__footer flex flex-col md:flex-row md:items-end justify-between gap-12 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="hero__description body-copy text-lg" style={{ color: "var(--text-secondary)" }}>
              Boutique web development, full-stack engineering, and strategic consulting —
              AI-assisted, fast turnaround, with the kind of attention a big agency can&apos;t afford to give you.
            </p>
            <div className="hero__actions flex flex-col md:flex-row items-start md:items-center gap-6 shrink-0">
              <a
                href="#contact"
                className="cta-button cta-button--primary h-12 min-w-[48px] flex items-center label-text font-semibold transition-all hover:shadow-md"
                style={{ background: "var(--accent)", color: "var(--bg)", padding: "0 12px" }}
              >
                Start a project
              </a>
              <a href="#services" className="cta-link label-text transition-colors underline underline-offset-4" style={{ color: "var(--text-secondary)" }}>
                See what we do →
              </a>
            </div>
          </div>
        </motion.div>
        </div>
      </Container>
    </section>
  );
}
