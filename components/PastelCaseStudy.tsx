"use client";

import { motion } from "framer-motion";

export default function PastelCaseStudy() {
  return (
    <section id="case-studies" className="py-56" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] mb-6" style={{ color: "var(--text)" }}>
            Our Work.
          </h2>
          <p className="body-copy text-sm max-w-2xl" style={{ color: "var(--text-muted)" }}>
            Real projects. Real results. Each one a reflection of our commitment to thoughtful design and execution.
          </p>
        </motion.div>

        {/* Pastel Case Study */}
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
              01
            </span>
          </div>

          {/* Info */}
          <div className="md:col-span-3">
            <h3 className="serif text-2xl" style={{ color: "var(--text)" }}>
              Pastel Makeup Studio
            </h3>
            <p className="body-copy text-sm mt-3" style={{ color: "var(--text-faint)" }}>
              Julianna / Pastel Studio
            </p>
          </div>

          {/* Description */}
          <p className="md:col-span-5 body-copy text-sm leading-snug max-w-none" style={{ color: "var(--text-muted)" }}>
            Built a luxury wedding makeup booking platform. Designed a refined Scandinavian aesthetic, integrated HoneyBook for seamless client bookings, and created a dynamic portfolio CMS—transforming her site into her primary lead source.
          </p>

          {/* Tags */}
          <div className="md:col-span-3 flex flex-wrap gap-2">
            {["Next.js", "HoneyBook", "Sanity CMS", "Mobile-First"].map((tag, i) => (
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
              Pastel, a luxury wedding makeup studio, had outgrown its original portfolio site. Julianna needed a platform that did more than showcase her work—she needed to convert browsers into clients. The old site lacked professional booking integration, had limited portfolio flexibility, and didn't communicate the premium nature of her services.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>
              The Solution
            </h3>
            <div className="space-y-6 max-w-3xl">
              <p className="body-copy text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                A complete platform redesign built on Next.js with Sanity CMS backend. Every interaction designed to convert browsers into booked clients.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
                    Luxury Aesthetic & Brand Presence
                  </p>
                  <p className="body-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Designed a Scandinavian-minimal interface with sophisticated color palette (cream, forest green, refined pink). High-quality imagery dominates—Julianna's work is the hero. Every element reinforces premium positioning.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
                    Frictionless Booking Integration
                  </p>
                  <p className="body-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Integrated HoneyBook as the booking engine. Clients view availability, book consultations, and secure deposits without leaving the site. The integration is invisible—they simply experience a seamless flow from portfolio to booking.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
                    Dynamic Portfolio with Sanity CMS
                  </p>
                  <p className="body-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Built a backend CMS that lets Julianna manage her portfolio independently. She can add new lookbooks, organize by style or season, and feature client testimonials—all without touching code.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
                    Mobile-First Responsiveness
                  </p>
                  <p className="body-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    Brides research makeup on their phones. The site was built mobile-first: fast loading, beautiful on all devices, with touch-friendly booking buttons. No friction—just conversion.
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
              The new Pastel platform transformed how Julianna connects with clients:
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mb-8">
              <div style={{ borderLeft: "2px solid var(--text)" }} className="pl-6">
                <p className="text-xl serif font-light mb-2" style={{ color: "var(--text)" }}>
                  Booking integration
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  HoneyBook now handles all inquiry-to-booking workflow. Zero manual back-and-forth.
                </p>
              </div>

              <div style={{ borderLeft: "2px solid var(--text)" }} className="pl-6">
                <p className="text-xl serif font-light mb-2" style={{ color: "var(--text)" }}>
                  Brand elevation
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  The refined aesthetic immediately communicates luxury and professionalism to potential clients.
                </p>
              </div>

              <div style={{ borderLeft: "2px solid var(--text)" }} className="pl-6">
                <p className="text-xl serif font-light mb-2" style={{ color: "var(--text)" }}>
                  Self-service portfolio
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Julianna now owns her portfolio updates. New looks and testimonials go live instantly.
                </p>
              </div>

              <div style={{ borderLeft: "2px solid var(--text)" }} className="pl-6">
                <p className="text-xl serif font-light mb-2" style={{ color: "var(--text)" }}>
                  Mobile conversion
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Fast, beautiful site that turns phone browsers into booked clients. Every interaction counts.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-lg max-w-3xl">
              <p className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--text)" }}>
                Impact
              </p>
              <p className="body-copy text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                The platform has become Julianna's primary lead source. Client inquiries route directly through the site, booking conflicts are eliminated by HoneyBook automation, and her portfolio now showcases her evolving aesthetic—keeping the site fresh and driving repeat traffic from past clients and referrals.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-16 pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="body-copy text-sm" style={{ color: "var(--text-faint)" }}>
            Each project is an opportunity to solve real problems. We focus on the work that matters — thoughtful design paired with solid engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
