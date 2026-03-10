"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <Hero />
      <div className="border-t border-[#e5e5e3]" />
      <Services />
      <div className="border-t border-[#e5e5e3]" />
      <Process />
      <div className="border-t border-[#333]" />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
