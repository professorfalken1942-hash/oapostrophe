"use client";

import Container from "./Container";
import Link from "next/link";

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image?: string;
  link?: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "pastel",
    title: "Pastel — Wedding Makeup Artist Portfolio",
    client: "Julianna, Makeup Artist",
    industry: "Beauty & Weddings",
    challenge:
      "A talented makeup artist with a thriving local business but no online presence. Needed a portfolio site that showcased work, built trust with brides, and integrated booking capabilities without the overhead of managing multiple platforms.",
    solution:
      "Built a clean, Scandinavian-inspired portfolio site on Next.js with Sanity CMS for content management. Integrated HoneyBook for seamless booking — brides can browse the portfolio, see availability, and book directly without leaving the site. Mobile-first design because couples research on their phones.",
    results: [
      "Portfolio went live in 2 weeks",
      "Integrated booking system (0 friction for clients)",
      "SEO-optimized for local wedding searches",
      "Mobile-first design → 60%+ traffic from phones",
      "Sanity CMS allows Julianna to update portfolio without developer help",
    ],
    link: "https://pastelmakeupandstyle.com",
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
              <div className="p-8 md:p-12 flex flex-col justify-between">
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
                    className="inline-flex items-center gap-2 h-12 px-12 bg-[#0070ad] text-white font-semibold rounded hover:bg-[#005580] transition-colors w-fit"
                  >
                    View site →
                  </a>
                )}
              </div>

              {/* Preview */}
              <div className="bg-[#f9f9f7] p-12 flex items-center justify-center min-h-80">
                <div className="text-center">
                  <p className="serif text-5xl italic text-[#0070ad] mb-4">P</p>
                  <p className="text-sm text-[#6b6b6b] max-w-xs">
                    Clean, Scandinavian portfolio for a wedding makeup artist. Integrated booking, mobile-first design.
                  </p>
                </div>
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
