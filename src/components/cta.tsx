"use client";

import { Reveal } from "./reveal";

export function CTA() {
  return (
    <section id="cta" className="py-32 px-6 relative">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.06] pointer-events-none"
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
            iMade is free and runs entirely on your machine.
            Your unreleased music never leaves your computer.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/BerryNotes/imade-releases/releases/latest/download/iMade.exe"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-medium text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #4338ca, #6366f1)",
                boxShadow: "0 0 40px rgba(99, 102, 241, 0.2)",
              }}
            >
              Download
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-70"
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
              href="https://github.com/BerryNotes/imade-releases"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-display font-medium text-sm text-text-muted border border-border hover:border-border-light hover:text-text transition-all duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
