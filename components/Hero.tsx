"use client";

import { motion } from "framer-motion";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end py-24 bg-white">
      <Container>
        <div className="pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-text text-[#444440] mb-8">
            oapostrophe — Digital Studio
          </p>

          <h1 className="serif text-[clamp(3.5rem,8vw,8rem)] leading-[1.0] text-[#111111] mb-12">
            Built for<br />
            your goals.<br />
            <em className="not-italic text-[#0070ad]">Not ours.</em>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-[#e8e8e4] pt-10">
            <p className="body-copy text-lg text-[#444440]">
              Boutique web development, full-stack engineering, and strategic consulting — 
              AI-assisted, fast turnaround, with the kind of attention a big agency can&apos;t afford to give you.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 shrink-0">
              <a
                href="#contact"
                className="py-3 px-8 flex items-center bg-[#0070ad] text-white label-text font-semibold hover:bg-[#005580] transition-all hover:shadow-md"
              >
                Start a project
              </a>
              <a href="#services" className="label-text text-[#444440] hover:text-[#0070ad] transition-colors underline underline-offset-4">
                See what we do →
              </a>
            </div>
          </div>
        </motion.div>
        </div>
      </Container>
    </section>
  );
}
