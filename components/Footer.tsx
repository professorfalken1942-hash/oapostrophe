"use client";

import Container from "./Container";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
      <Container>
        <div className="h-16 flex items-center justify-between">
        <span className="serif italic text-lg" style={{ color: "var(--text)" }}>o&apos;</span>
        <p className="label-text" style={{ color: "var(--text-placeholder)" }}>
          © {new Date().getFullYear()} oapostrophe
        </p>
        <a
          href="mailto:hello@oapostrophe.com"
          className="label-text transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          hello@oapostrophe.com
        </a>
        </div>
      </Container>
    </footer>
  );
}
