"use client";

import { Reveal } from "./reveal";

export function CTA() {
  return (
    <section id="cta" className="py-32 px-6 relative">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.06] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Stop flying blind.
            <br />
            <span className="text-accent">Start growing deliberately.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-text-muted mb-10 max-w-md mx-auto leading-relaxed">
            iMade runs entirely on your machine.
            Your unreleased music never leaves your computer.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-medium text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #4338ca, #6366f1)",
                boxShadow: "0 0 40px rgba(99, 102, 241, 0.2)",
              }}
            >
              View Pricing
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-70"
                aria-hidden="true"
              >
                <path
                  d="M3.5 8h9M8.5 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="px-7 py-3.5 rounded-xl font-display font-medium text-sm text-text-muted border border-border hover:border-border-light hover:text-text transition-all duration-200"
            >
              How it works
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
