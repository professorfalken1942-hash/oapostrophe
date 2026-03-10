"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e3]">
      <div className="max-w-6xl mx-auto w-full px-8 md:px-16 lg:px-24 py-12 flex items-center justify-between">
        <p className="text-sm text-[#6b6b6b]">
          © {new Date().getFullYear()} oapostrophe. All rights reserved.
        </p>
        <a
          href="mailto:hello@oapostrophe.com"
          className="text-sm text-[#6b6b6b] hover:text-[#111110] transition-colors"
        >
          hello@oapostrophe.com
        </a>
      </div>
    </footer>
  );
}
