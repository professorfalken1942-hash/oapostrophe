"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8e4] bg-white">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 h-16 flex items-center justify-between">
        <span className="serif italic text-lg text-[#111111]">o&apos;</span>
        <p className="label-text text-[#bbb]">
          © {new Date().getFullYear()} oapostrophe
        </p>
        <a
          href="mailto:hello@oapostrophe.com"
          className="label-text text-[#888884] hover:text-[#0047FF] transition-colors"
        >
          hello@oapostrophe.com
        </a>
      </div>
    </footer>
  );
}
