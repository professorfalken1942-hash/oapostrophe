"use client";

import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image?: string;
  imageAlt?: string;
  link?: string;
}

interface CaseStudyGallery extends CaseStudy {
  gallery?: Array<{ src: string; alt: string; caption?: string }>;
}

const caseStudies: CaseStudyGallery[] = [
  {
    slug: "pastel",
    title: "Pastel — Wedding Makeup Artist Portfolio",
    client: "Julianna, Makeup Artist",
    industry: "Beauty & Weddings",
    challenge:
      "A talented makeup artist with a thriving local business but no online presence. Needed a portfolio site that showcased work, built trust with brides, and integrated booking capabilities without the overhead of managing multiple platforms.",
    solution:
      "Built a clean, Scandinavian-inspired portfolio site on Next.js with Sanity CMS for content management. Integrated HoneyBook for seamless booking — brides can browse the portfolio, see availability, and book directly without leaving the site. Mobile-first design because couples research on their phones. Pink accent color (rgb(255, 174, 215)) drives brand recognition; Material Design micro-interactions enhance UX.",
    results: [
      "Portfolio went live in 2 weeks",
      "Integrated booking system (0 friction for clients)",
      "SEO-optimized for local wedding searches",
      "Mobile-first design → 60%+ traffic from phones",
      "Sanity CMS allows Julianna to update portfolio without developer help",
      "Micro-interactions (button hover, card lift) improve perceived polish",
    ],
    image: "/case-studies/pastel/pastel-hero.png",
    imageAlt: "Pastel makeup artist portfolio website",
    link: "https://pastelmakeupandstyle.com",
    gallery: [
      {
        src: "/case-studies/pastel/pastel-hero.png",
        alt: "Pastel homepage hero with pink accent",
        caption: "Homepage",
      },
      {
        src: "/case-studies/pastel/pastel-services.png",
        alt: "Services portfolio showcase",
        caption: "Services",
      },
      {
        src: "/case-studies/pastel/pastel-booking.png",
        alt: "HoneyBook booking integration",
        caption: "Booking",
      },
      {
        src: "/case-studies/pastel/pastel-details.png",
        alt: "Portfolio details and testimonials",
        caption: "Details",
      },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-[#f9f9f7] border-t border-[#e8e8e4]">
      <Container>
        <div className="mb-24">
          <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] text-[#111111]">
            Work we&apos;re proud of.
          </h2>
        </div>

        <div className="space-y-24">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="grid md:grid-cols-2 gap-16 items-start bg-white rounded border border-[#e8e8e4] overflow-hidden"
            >
              {/* Content */}
              <div className="p-12 md:p-16 flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <p className="label-text text-[#0070ad] font-semibold uppercase mb-2">
                      {study.industry}
                    </p>
                    <h3 className="serif text-2xl text-[#111111] mb-1">
                      {study.title}
                    </h3>
                    <p className="text-sm text-[#6b6b6b]">{study.client}</p>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="label-text text-[#0070ad] font-semibold uppercase mb-2">
                        Challenge
                      </p>
                      <p className="text-base text-[#6b6b6b] leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <p className="label-text text-[#0070ad] font-semibold uppercase mb-2">
                        Solution
                      </p>
                      <p className="text-base text-[#6b6b6b] leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <p className="label-text text-[#0070ad] font-semibold uppercase mb-2">
                        Results
                      </p>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-[#0070ad] font-bold mt-0.5">
                              ✓
                            </span>
                            <span className="text-sm text-[#6b6b6b]">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {study.link && (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-8 bg-[#0070ad] text-white font-semibold rounded hover:bg-[#005580] transition-colors w-fit"
                  >
                    View site →
                  </a>
                )}
              </div>

              {/* Gallery */}
              <div className="bg-[#f9f9f7] p-12 md:p-16 flex flex-col gap-8">
                {study.gallery && study.gallery.length > 0 ? (
                  <>
                    {/* Featured image */}
                    <div className="relative w-full h-64 bg-white rounded overflow-hidden">
                      <Image
                        src={study.gallery[0].src}
                        alt={study.gallery[0].alt}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Gallery grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {study.gallery.slice(1).map((img, idx) => (
                        <div
                          key={idx}
                          className="relative h-24 bg-white rounded overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                          />
                          {img.caption && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                              <p className="text-white text-xs font-semibold">
                                {img.caption}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : study.image ? (
                  <Image
                    src={study.image}
                    alt={study.imageAlt || study.title}
                    width={500}
                    height={400}
                    className="w-full rounded object-cover"
                  />
                ) : (
                  <div className="text-center py-16">
                    <p className="serif text-5xl italic text-[#0070ad] mb-4">P</p>
                    <p className="text-sm text-[#6b6b6b] max-w-xs mx-auto">
                      Clean, Scandinavian portfolio for a wedding makeup artist. Integrated booking, mobile-first design.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="body-copy text-[#6b6b6b] mb-8 max-w-2xl mx-auto">
            Have a project that needs the same treatment? Let&apos;s talk about what we can build for you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-12 bg-[#0070ad] text-white font-semibold rounded hover:bg-[#005580] transition-colors"
          >
            Start a project
          </a>
        </div>
      </Container>
    </section>
  );
}
