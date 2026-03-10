"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
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

  const inputClass =
    "w-full bg-white border border-[#e8e8e6] px-5 py-4 text-sm text-[#0a0a0a] placeholder-[#aaa] focus:outline-none focus:border-[#0047FF] transition-colors font-medium";

  return (
    <section id="contact" className="py-32 bg-[#f7f7f5] border-t border-[#e8e8e6]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-[#0a0a0a] uppercase mb-8">
              Start a<br />project.
            </h2>
            <p className="text-[#6b6b6b] leading-relaxed font-light max-w-sm">
              Tell us what you&apos;re building. We&apos;ll get back to you within one business day 
              with thoughts, questions, and next steps.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className={inputClass}
              />
            </div>
            <select
              value={form.projectType}
              onChange={(e) => setForm({ ...form, projectType: e.target.value })}
              required
              className={inputClass + " cursor-pointer"}
            >
              <option value="" disabled>Project type</option>
              <option value="web">Web Development</option>
              <option value="fullstack">Full-Stack Engineering</option>
              <option value="consulting">Consulting</option>
              <option value="other">Something else</option>
            </select>
            <select
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className={inputClass + " cursor-pointer"}
            >
              <option value="" disabled>Budget range (optional)</option>
              <option value="under5k">Under $5k</option>
              <option value="5k-15k">$5k – $15k</option>
              <option value="15k-50k">$15k – $50k</option>
              <option value="50k+">$50k+</option>
            </select>
            <textarea
              placeholder="Tell us about your project"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className={inputClass + " resize-none"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-8 py-5 bg-[#0047FF] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#0035cc] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-sm font-medium text-green-600">Got it — we&apos;ll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-500">Something went wrong. Try again or email us directly.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
