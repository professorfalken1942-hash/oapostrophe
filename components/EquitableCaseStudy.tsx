"use client";

import { motion } from "framer-motion";

export default function EquitableCaseStudy() {
  return (
    <section id="case-study-equitable" className="py-56" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Case Study Header Row */}
        <motion.div
          className="grid md:grid-cols-12 gap-12 py-16 px-6 items-start"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {/* Number */}
          <div className="md:col-span-1">
            <span className="label-text" style={{ color: "var(--accent)" }}>
              02
            </span>
          </div>

          {/* Info */}
          <div className="md:col-span-3">
            <h3 className="serif text-2xl" style={{ color: "var(--text)" }}>
              Equitable
            </h3>
            <p className="body-copy text-sm mt-3" style={{ color: "var(--text-faint)" }}>
              Account Summary Redesign
            </p>
          </div>

          {/* Description */}
          <p className="md:col-span-5 body-copy text-sm leading-snug max-w-none" style={{ color: "var(--text-muted)" }}>
            Redesigned the account summary experience for a major financial services platform. Improved usability, visual hierarchy, and transparency across account details, values, and financial professional visibility.
          </p>

          {/* Tags */}
          <div className="md:col-span-3 flex flex-wrap gap-2">
            {["UX Design", "UI Redesign", "Financial Services", "Accessibility"].map((tag, i) => (
              <span key={i} className="tag inline-block px-3 py-1 text-xs border border-gray-300 rounded" style={{ color: "var(--text-muted)" }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Full Case Study */}
        <motion.div
          className="mt-32 space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Challenge */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>
              The Challenge
            </h3>
            <p className="body-copy text-base leading-relaxed max-w-3xl" style={{ color: "var(--text-muted)" }}>
              The existing account summary lacked structure and transparency. Account values weren't prominent, financial professional information was missing, and closed accounts cluttered the view alongside active ones. Users had to navigate externally to find basic details like registration info and addresses.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>
              The Solution
            </h3>
            <div className="space-y-6 max-w-3xl">
              <p className="body-copy text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                A comprehensive usability and design overhaul focused on clarity, hierarchy, and confidence.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
                    Structured Account Details
                  </p>
                  <p className="body-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Added open date, registration info, and address directly into the account view. Users get full context without navigating away.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
                    Financial Professional Visibility
                  </p>
                  <p className="body-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Surfaced the "My financial professional" field prominently in account sections — previously absent, now immediately accessible so users know where to seek support.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
                    Prominent Account Values
                  </p>
                  <p className="body-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Elevated account values from buried data to a primary visual element, increasing transparency and user confidence at a glance.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
                    Smart Account Prioritization
                  </p>
                  <p className="body-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Closed accounts are deprioritized — always grayed out and pushed to the bottom — keeping the focus on active holdings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>
              Outcome
            </h3>
            <p className="body-copy text-base leading-relaxed mb-6 max-w-3xl" style={{ color: "var(--text-muted)" }}>
              The redesigned account summary delivers a cleaner, more transparent experience:
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mb-8">
              <div style={{ borderLeft: "2px solid var(--text)" }} className="pl-6">
                <p className="text-xl serif font-light mb-2" style={{ color: "var(--text)" }}>
                  Visual hierarchy
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Updated typography with mixed sizes and weights creates clear information hierarchy and improved readability.
                </p>
              </div>

              <div style={{ borderLeft: "2px solid var(--text)" }} className="pl-6">
                <p className="text-xl serif font-light mb-2" style={{ color: "var(--text)" }}>
                  Modern design language
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Rounded content cards, generous whitespace, and standardized layouts create a spacious, approachable interface.
                </p>
              </div>

              <div style={{ borderLeft: "2px solid var(--text)" }} className="pl-6">
                <p className="text-xl serif font-light mb-2" style={{ color: "var(--text)" }}>
                  Consistency
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Standardized account layouts ensure every product and category is presented in the same clear format.
                </p>
              </div>

              <div style={{ borderLeft: "2px solid var(--text)" }} className="pl-6">
                <p className="text-xl serif font-light mb-2" style={{ color: "var(--text)" }}>
                  Reduced clutter
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Better spacing, visual separation, and smart prioritization reduce noise and guide focus to what matters.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-lg max-w-3xl">
              <p className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--text)" }}>
                Further Recommendations
              </p>
              <p className="body-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Proposed actionable error messaging (replacing generic alerts with context-specific guidance) and help icons with tooltips for unfamiliar fields like "My financial professional" — reducing support friction and improving self-service confidence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
