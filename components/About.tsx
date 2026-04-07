"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function About() {
  return (
    <section id="about" className="about py-56" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <Container headingPadding={true}>
        <div className="about__layout grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            className="about__header px-6 md:px-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="about__heading serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05]" style={{ color: "var(--text)" }}>
              One person.<br />
              <em>Full capability.</em>
            </h2>
          </motion.div>

          <motion.div
            className="about__body body-copy flex flex-col gap-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              oapostrophe is a solo studio — which means you get a senior engineer who&apos;s
              personally invested in your project, not a rotating cast of junior developers
              managed by someone who never looks at the code.
            </p>
            <p>
              AI-assisted workflows let us move at a pace that used to require a full team.
              The result: agency-quality output, boutique-level attention, at a price that
              makes sense for businesses that aren&apos;t burning VC money.
            </p>
            <p>
              We work with small businesses, founders, and anyone who needs something built
              right and built fast — without the overhead.
            </p>
            <a
              href="#contact"
              className="cta-link inline-flex items-center gap-2 mt-2 label-text hover:gap-4 transition-all"
              style={{ color: "var(--accent)" }}
            >
              Let&apos;s talk <span>→</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
