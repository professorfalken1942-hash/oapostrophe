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

  /* input height: 48px = 6×8pt */
  const inputClass =
    "w-full h-12 bg-white border border-[#e8e8e6] px-4 text-sm text-[#0a0a0a] placeholder-[#aaa] focus:outline-none focus:border-[#0047FF] transition-colors font-medium leading-[20px]";

  return (
    <section id="contact" className="py-24 bg-[#f7f7f5] border-t border-[#e8e8e6]">
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* mb-8=32px = 4×8pt */}
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tight text-[#0a0a0a] uppercase mb-8">
              Start a<br />project.
            </h2>
            <p className="body-copy text-[#6b6b6b] font-light" style={{ lineHeight: '28px' }}>
              Tell us what you&apos;re building. We&apos;ll get back to you within one business day 
              with thoughts, questions, and next steps.
            </p>
          </motion.div>

          {/* form gap: 16px = 2×8pt */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required className={inputClass} />
              <input type="email" placeholder="Email address" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required className={inputClass} />
            </div>
            <select value={form.projectType}
              onChange={(e) => setForm({ ...form, projectType: e.target.value })}
              required className={inputClass + " cursor-pointer"}>
              <option value="" disabled>Project type</option>
              <option value="web">Web Development</option>
              <option value="fullstack">Full-Stack Engineering</option>
              <option value="consulting">Consulting</option>
              <option value="other">Something else</option>
            </select>
            <select value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className={inputClass + " cursor-pointer"}>
              <option value="" disabled>Budget range (optional)</option>
              <option value="under5k">Under $5k</option>
              <option value="5k-15k">$5k – $15k</option>
              <option value="15k-50k">$15k – $50k</option>
              <option value="50k+">$50k+</option>
            </select>
            {/* textarea: 160px = 20×8pt */}
            <textarea placeholder="Tell us about your project" value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required rows={5}
              className="w-full bg-white border border-[#e8e8e6] px-4 py-4 text-sm text-[#0a0a0a] placeholder-[#aaa] focus:outline-none focus:border-[#0047FF] transition-colors font-medium leading-[20px] resize-none" />
            {/* button: h-12=48px = 6×8pt */}
            <button type="submit" disabled={status === "loading"}
              className="h-12 w-full px-8 bg-[#0047FF] text-white label-text hover:bg-[#0035cc] transition-colors disabled:opacity-50">
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p className="text-sm font-medium text-green-600 leading-[20px]">Got it — we&apos;ll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-500 leading-[20px]">Something went wrong. Try again or email us directly.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
