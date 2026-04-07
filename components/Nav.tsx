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
      id="site-nav"
      className="site-nav fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ background: "var(--nav-bg)" }}
    >
      <div
        className="site-nav__bar max-w-8xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--border)", marginRight: 32 }}
      >
        <a href="#" className="site-nav__logo serif text-xl italic" style={{ color: "var(--text)" }}>
          o&apos;
        </a>

        {/* Desktop nav */}
        <div className="site-nav__links hidden md:flex items-center gap-10 label-text" style={{ color: "var(--text-secondary)" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-nav__link transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="site-nav__cta min-h-[48px] min-w-[48px] py-3 px-10 flex items-center label-text transition-colors"
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
        <div className="site-nav__mobile-controls flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            className="site-nav__hamburger w-12 h-12 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "var(--text)" }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="site-nav__hamburger-icon w-6 flex flex-col gap-1.5 relative">
              <span
                className="site-nav__hamburger-line block h-px w-full transition-all duration-300"
                style={{
                  background: "var(--text)",
                  transform: mobileOpen ? "rotate(45deg) translate(3.5px, 3.5px)" : "none",
                }}
              />
              <span
                className="site-nav__hamburger-line block h-px w-full transition-all duration-300"
                style={{
                  background: "var(--text)",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="site-nav__hamburger-line block h-px w-full transition-all duration-300"
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
            className="site-nav__mobile-menu md:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
          >
            <div className="site-nav__mobile-links flex flex-col px-8 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="site-nav__mobile-link label-text transition-colors"
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="site-nav__mobile-cta min-h-[48px] py-3 px-10 flex items-center justify-center label-text transition-colors mt-2"
                onClick={() => setMobileOpen(false)}
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
