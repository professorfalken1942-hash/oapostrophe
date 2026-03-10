"use client";

export default function Footer() {
  return (
    <footer className="px-12 py-12 border-t border-[#e5e5e3] max-w-6xl mx-auto flex items-center justify-between">
      <p className="text-sm text-[#6b6b6b]">
        © {new Date().getFullYear()} oapostrophe. All rights reserved.
      </p>
      <a
        href="mailto:hello@oapostrophe.com"
        className="text-sm text-[#6b6b6b] hover:text-[#111110] transition-colors"
      >
        hello@oapostrophe.com
      </a>
    </footer>
  );
}
