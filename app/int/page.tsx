import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Preview() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <About />
      <Pricing />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
