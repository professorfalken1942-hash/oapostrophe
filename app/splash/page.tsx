"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function SplashPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      // Placeholder for email service integration (Mailchimp, Resend, etc.)
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 sm:py-32">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={{ width: 80, height: 80 }}>
              <img src="/logo.jpg" alt="O'Apostrophe" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="serif mb-6"
            style={{
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Thoughtful Design. Solid Engineering.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="body-copy text-base sm:text-lg mb-12"
            style={{ color: "var(--text-muted)", maxWidth: "28rem", margin: "0 auto 3rem" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            A boutique studio building digital experiences for brands that stand out. We design thoughtfully and build to last.
          </motion.p>

          {/* Email Capture */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mb-16 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                minHeight: "48px",
                minWidth: "280px",
                padding: "0 16px",
                border: "1px solid var(--border)",
                background: "var(--bg)",
                color: "var(--text)",
                fontSize: "0.95rem",
                borderRadius: 0,
              }}
            />
            <button
              type="submit"
              style={{
                minHeight: "48px",
                minWidth: "160px",
                padding: "0 24px",
                background: "var(--text)",
                color: "var(--bg)",
                border: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                borderRadius: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              disabled={submitted}
            >
              {submitted ? "✓ Subscribed" : "Notify Me"}
            </button>
          </motion.form>

          {/* Feedback */}
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "#dc2626", fontSize: "0.9rem", marginBottom: "1.5rem" }}
            >
              {error}
            </motion.p>
          )}
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}
            >
              Thanks! We'll be in touch soon.
            </motion.p>
          )}

          {/* Spacer */}
          <div style={{ height: "2rem" }} />

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Link
              href="/"
              style={{
                display: "inline-block",
                minHeight: "48px",
                minWidth: "200px",
                padding: "0 24px",
                border: "1px solid var(--text)",
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                borderRadius: 0,
                transition: "all 0.2s",
                lineHeight: "48px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--text)";
                e.currentTarget.style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              Explore Our Work →
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        className="border-t"
        style={{
          borderColor: "var(--border)",
          padding: "2rem",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: "0.8rem",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <p style={{ marginBottom: "0.5rem" }}>
          <a href="https://oapostrophe.com" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>
            hello@oapostrophe.com
          </a>
        </p>
        <p>© 2026 O'Apostrophe. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
