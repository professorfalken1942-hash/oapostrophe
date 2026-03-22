"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "./Container";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", projectType: "", budget: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    borderBottom: "1px solid var(--border)",
    color: "var(--text)",
    background: "transparent",
  };

  return (
    <section id="contact" className="py-56" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}>
      <Container headingPadding={true}>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="px-6 md:px-6"
          >
            <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] mb-8" style={{ color: "var(--text)" }}>
              Start a project.
            </h2>
            <p className="body-copy" style={{ color: "var(--text-secondary)" }}>
              Tell us what you&apos;re building. We&apos;ll get back to you within one business day
              with thoughts, questions, and next steps.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6 px-6 md:px-6"
          >
            <div className="grid grid-cols-2 gap-8">
              <input type="text" placeholder="Your name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full h-12 px-0 py-3 text-sm placeholder-[color:var(--text-placeholder)] focus:outline-none transition-colors font-light"
                style={inputStyle} />
              <input type="email" placeholder="Email address" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full h-12 px-0 py-3 text-sm placeholder-[color:var(--text-placeholder)] focus:outline-none transition-colors font-light"
                style={inputStyle} />
            </div>
            <select value={form.projectType}
              onChange={(e) => setForm({ ...form, projectType: e.target.value })}
              required
              className="w-full h-12 px-0 py-3 text-sm focus:outline-none transition-colors font-light cursor-pointer"
              style={inputStyle}>
              <option value="" disabled>Project type</option>
              <option value="web">Web Development</option>
              <option value="fullstack">Full-Stack Engineering</option>
              <option value="consulting">Consulting</option>
              <option value="other">Something else</option>
            </select>
            <select value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="w-full h-12 px-0 py-3 text-sm focus:outline-none transition-colors font-light cursor-pointer"
              style={inputStyle}>
              <option value="" disabled>Budget range (optional)</option>
              <option value="under5k">Under $5k</option>
              <option value="5k-15k">$5k – $15k</option>
              <option value="15k-50k">$15k – $50k</option>
              <option value="50k+">$50k+</option>
            </select>
            <textarea placeholder="Tell us about your project" value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required rows={4}
              className="w-full px-0 py-3 text-sm placeholder-[color:var(--text-placeholder)] focus:outline-none transition-colors font-light resize-none"
              style={inputStyle} />
            <button type="submit" disabled={status === "loading"}
              className="mt-2 h-12 min-w-[48px] px-12 w-full label-text transition-colors disabled:opacity-50"
              style={{ background: "var(--accent)", color: "var(--bg)" }}>
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && <p className="text-sm font-light" style={{ color: "var(--accent)" }}>Got it — we&apos;ll be in touch soon.</p>}
            {status === "error" && <p className="text-sm text-red-500 font-light">Something went wrong. Try again or email us directly.</p>}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
