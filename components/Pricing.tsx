"use client";

import Container from "./Container";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$5,000",
    description: "Perfect for small projects and MVPs",
    features: [
      "Landing page or small web app",
      "3 rounds of revisions",
      "Responsive design",
      "Basic SEO setup",
      "Deployment & hosting",
      "Email support",
    ],
    cta: "Get started",
  },
  {
    name: "Professional",
    price: "$15,000",
    description: "For businesses that need more than a brochure",
    features: [
      "Full-featured web application",
      "API integration (up to 3 services)",
      "Database setup & optimization",
      "Advanced features (auth, payments, etc.)",
      "5 rounds of revisions",
      "Unlimited email + Slack support",
      "Post-launch optimization",
    ],
    cta: "Let's build",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Complex systems, custom requirements, long-term engagement",
    features: [
      "Everything in Professional",
      "Custom integrations & APIs",
      "Complex database architecture",
      "Advanced security & compliance",
      "Dedicated Slack channel",
      "Ongoing maintenance retainer",
      "Quarterly strategy reviews",
      "Priority support",
    ],
    cta: "Let's talk",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-[#e8e8e4]">
      <Container>
        <div className="mb-24">
          <h2 className="serif text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] text-[#111111]">
            Simple,
            <br />
            <em>predictable pricing.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded border transition-all p-16 ${
                plan.highlight
                  ? "border-[#0070ad] bg-[#f9f9f7] ring-2 ring-[#0070ad] ring-offset-2"
                  : "border-[#e8e8e4] bg-white hover:border-[#0070ad]"
              }`}
            >
              {/* Header */}
              <div className="mb-8">
                <h3 className="serif text-2xl text-[#111111] mb-3">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-[#0070ad] mb-4">
                  {plan.price}
                </p>
                <p className="text-sm text-[#6b6b6b]">{plan.description}</p>
              </div>

              {/* CTA Button */}
              <div className="mb-8">
                <a
                  href="#contact"
                  className={`block text-center h-12 px-12 flex items-center justify-center rounded font-semibold transition-colors w-full ${
                    plan.highlight
                      ? "bg-[#0070ad] text-white hover:bg-[#005580]"
                      : "border border-[#0070ad] text-[#0070ad] hover:bg-[#0070ad] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>

              {/* Features */}
              <div className="border-t border-[#e8e8e4] pt-8">
                <p className="text-xs font-semibold text-[#444440] uppercase mb-6">
                  Includes
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#0070ad] font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm text-[#6b6b6b]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ-style note */}
        <div className="bg-[#f9f9f7] rounded border border-[#e8e8e4] p-12">
          <p className="body-copy text-[#6b6b6b]">
            <strong>All projects include:</strong> discovery call, detailed proposal, fixed price quote, weekly check-ins, code documentation, and handoff. We don't do hourly billing — you know the cost upfront.
          </p>
        </div>
      </Container>
    </section>
  );
}
