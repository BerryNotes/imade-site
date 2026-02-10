import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Pricing — iMade",
  description:
    "Choose the right plan for your production workflow. Flexible pricing for every producer.",
};

const PLANS = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "For producers just getting started with ranking their catalog.",
    features: [
      "Up to 100 songs",
      "Classic & Quick comparison modes",
      "Elo rankings",
      "Local audio playback",
      "Export rankings as CSV",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For serious producers who want the full toolkit.",
    features: [
      "Unlimited songs",
      "All comparison modes (Classic, Quick, Tier, Bracket)",
      "Audio Visualizer with 8 modes",
      "Advanced stats & session history",
      "Playlist generation from rankings",
      "Priority updates",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Lifetime",
    price: "$149",
    period: "one-time",
    description: "Pay once, own it forever. Every future update included.",
    features: [
      "Everything in Pro",
      "Lifetime access to all updates",
      "No recurring payments",
      "Early access to new features",
      "Support development directly",
    ],
    cta: "Buy Lifetime",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-3">
                Simple, fair pricing
              </h1>
              <p className="text-text-muted text-lg max-w-md mx-auto">
                Pick the plan that fits your workflow. All plans run locally
                &mdash; your music never leaves your machine.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col rounded-2xl border p-8 h-full ${
                    plan.highlighted
                      ? "border-accent bg-accent/[0.04]"
                      : "border-border bg-bg-card"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-6">
                    <h2 className="font-display text-lg font-bold text-text mb-1">
                      {plan.name}
                    </h2>
                    <p className="text-sm text-text-dim mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-bold text-text">
                        {plan.price}
                      </span>
                      <span className="text-sm text-text-dim">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-text-muted"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M3.5 8.5l3 3 6-7"
                            stroke={plan.highlighted ? "var(--color-accent)" : "var(--color-text-dim)"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl font-display font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                      plan.highlighted
                        ? "text-white"
                        : "text-text-muted border border-border hover:border-border-light hover:text-text"
                    }`}
                    style={
                      plan.highlighted
                        ? {
                            background:
                              "linear-gradient(135deg, #4338ca, #6366f1)",
                            boxShadow:
                              "0 0 32px rgba(99, 102, 241, 0.2)",
                          }
                        : undefined
                    }
                  >
                    {plan.cta}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-sm text-text-dim max-w-lg mx-auto">
                All plans include automatic updates and run 100% offline after
                activation. Your audio files and rankings are stored locally and
                never uploaded.
              </p>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
