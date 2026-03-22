"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 pt-32" style={{ background: "var(--bg)" }}>
      <Container>
        <div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-text mb-8" style={{ color: "var(--text-secondary)" }}>
            oapostrophe — Digital Studio
          </p>

          <h1 className="serif text-[clamp(3.5rem,8vw,8rem)] leading-[1.0] mb-12" style={{ color: "var(--text)" }}>
            Built for<br />
            your goals.<br />
            <em className="not-italic" style={{ color: "var(--accent)" }}>Not ours.</em>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="body-copy text-lg" style={{ color: "var(--text-secondary)" }}>
              Boutique web development, full-stack engineering, and strategic consulting —
              AI-assisted, fast turnaround, with the kind of attention a big agency can&apos;t afford to give you.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 shrink-0">
              <a
                href="#contact"
                className="h-12 min-w-[48px] py-3 px-8 flex items-center label-text font-semibold transition-all hover:shadow-md"
                style={{ background: "var(--accent)", color: "var(--bg)" }}
              >
                Start a project
              </a>
              <a href="#services" className="label-text transition-colors underline underline-offset-4" style={{ color: "var(--text-secondary)" }}>
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
