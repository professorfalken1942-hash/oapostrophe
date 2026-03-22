"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--bg)" }}>
      <div className="text-center max-w-2xl">
        <h1 className="serif text-[clamp(3rem,8vw,6rem)] leading-[1.05] mb-6" style={{ color: "var(--text)" }}>
          Coming soon.
        </h1>
        <p className="text-lg mb-2" style={{ color: "var(--text-muted)" }}>2026</p>
        <p className="body-copy max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
          We&apos;re building something thoughtful. Check back soon.
        </p>
      </div>
    </main>
  );
}
