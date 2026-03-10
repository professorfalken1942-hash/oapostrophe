"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <span className="text-2xl font-black text-white uppercase tracking-tight">o&apos;</span>
        <p className="text-sm text-white/40 font-light">
          © {new Date().getFullYear()} oapostrophe. All rights reserved.
        </p>
        <a
          href="mailto:hello@oapostrophe.com"
          className="text-sm font-semibold text-[#0047FF] hover:text-white transition-colors uppercase tracking-widest"
        >
          hello@oapostrophe.com
        </a>
      </div>
    </footer>
  );
}
