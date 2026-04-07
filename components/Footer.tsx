"use client";

import Container from "./Container";

export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer" style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
      <Container>
        <div className="site-footer__bar h-16 flex items-center justify-between">
        <span className="site-footer__logo serif italic text-lg" style={{ color: "var(--text)" }}>o&apos;</span>
        <p className="site-footer__copyright label-text" style={{ color: "var(--text-placeholder)" }}>
          © {new Date().getFullYear()} oapostrophe
        </p>
        <a
          href="mailto:hello@oapostrophe.com"
          className="site-footer__email label-text transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          hello@oapostrophe.com
        </a>
        </div>
      </Container>
    </footer>
  );
}
