"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#process", label: "Process" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#case-studies", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/journal", label: "Journal" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ background: "var(--nav-bg)" }}
    >
      <div
        className="max-w-8xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--border)", marginRight: 32 }}
      >
        <a href="#" className="serif text-xl italic" style={{ color: "var(--text)" }}>
          o&apos;
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 label-text" style={{ color: "var(--text-secondary)" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="min-h-[48px] min-w-[48px] py-3 px-10 flex items-center label-text transition-colors"
            style={{
              border: "1px solid var(--text)",
              color: "var(--text)",
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
            Start a project
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-12 h-12 flex items-center justify-center"
            style={{ color: "var(--text)" }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 flex flex-col gap-1.5 relative">
              <span
                className="block h-px w-full transition-all duration-300"
                style={{
                  background: "var(--text)",
                  transform: mobileOpen ? "rotate(45deg) translate(3.5px, 3.5px)" : "none",
                }}
              />
              <span
                className="block h-px w-full transition-all duration-300"
                style={{
                  background: "var(--text)",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-px w-full transition-all duration-300"
                style={{
                  background: "var(--text)",
                  transform: mobileOpen ? "rotate(-45deg) translate(3.5px, -3.5px)" : "none",
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
          >
            <div className="flex flex-col px-8 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="label-text transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="min-h-[48px] py-3 px-10 flex items-center justify-center label-text transition-colors mt-2"
                style={{
                  border: "1px solid var(--text)",
                  color: "var(--text)",
                }}
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
