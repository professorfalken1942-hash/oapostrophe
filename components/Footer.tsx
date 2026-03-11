"use client";

export default function Footer() {
  return (
    /* h-16=64px = 8×8pt footer */
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 h-16 flex items-center justify-between">
        <span className="text-lg font-black text-white uppercase tracking-tight leading-[16px]">o&apos;</span>
        <p className="text-xs text-white/40 font-light leading-[16px]">
          © {new Date().getFullYear()} oapostrophe
        </p>
        <a
          href="mailto:hello@oapostrophe.com"
          className="label-text text-[#0047FF] hover:text-white transition-colors"
        >
          hello@oapostrophe.com
        </a>
      </div>
    </footer>
  );
}
