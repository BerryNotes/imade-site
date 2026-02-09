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
            iMade is free and runs entirely on your machine.
            Your unreleased music never leaves your computer.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col items-center gap-6">
            {/* Platform downloads */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href="https://github.com/BerryNotes/imade-releases/releases/latest/download/iMade-win.zip"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-medium text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #4338ca, #6366f1)",
                  boxShadow: "0 0 40px rgba(99, 102, 241, 0.2)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M0 2.3l6.5-.9v6.3H0V2.3zm7.3-1L16 0v7.7H7.3V1.3zM16 8.4V16l-8.7-1.2V8.4H16zM6.5 14.5L0 13.7V8.4h6.5v6.1z" />
                </svg>
                Windows
              </a>
              <a
                href="https://github.com/BerryNotes/imade-releases/releases/latest/download/iMade-mac.zip"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-medium text-sm text-text-muted border border-border hover:border-border-light hover:text-text transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M11.2 1.4c-.7.8-1.8 1.4-2.8 1.3-.1-1.1.4-2.3 1.1-3 .7-.8 1.9-1.4 2.9-1.4.1 1.2-.4 2.3-1.2 3.1zM12.1 3.5c-1.6-.1-3 .9-3.7.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.8 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.3-1.2 3.2-2.5.6-.9 1.1-1.8 1.3-2.7-3.2-1.2-3.2-5.7 0-7.3-.9-1.2-2.2-1.8-3.5-1.8-.6 0-1.1.1-1.6.3.5-.1.9-.1 1.3-.1h.3z" />
                </svg>
                macOS
              </a>
              <a
                href="https://github.com/BerryNotes/imade-releases/releases/latest/download/iMade-linux.AppImage"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-medium text-sm text-text-muted border border-border hover:border-border-light hover:text-text transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C5.2 0 4.7 2.3 4.7 2.3S3.4 1.5 2.3 2.7c-1 1.1-.3 2.8-.3 2.8S.3 6.5.3 8c0 1.5 1.7 2.5 1.7 2.5s-.7 1.7.3 2.8c1 1.1 2.4.4 2.4.4s.5 2.3 3.3 2.3 3.3-2.3 3.3-2.3 1.4.7 2.4-.4c1-1.1.3-2.8.3-2.8s1.7-1 1.7-2.5c0-1.5-1.7-2.5-1.7-2.5s.7-1.7-.3-2.8C12.6 1.5 11.3 2.3 11.3 2.3S10.8 0 8 0zm0 2.5c.8 0 1.5.4 2 .8L8 5.5 6 3.3c.5-.4 1.2-.8 2-.8zM5.3 4l2 2.2-2.5 2.2L3.5 5.6c.3-.7 1-1.3 1.8-1.6zm5.4 0c.8.3 1.5.9 1.8 1.6L11.2 8.4 8.7 6.2l2-2.2zM8 7l2.5 2.2-1 3H6.5l-1-3L8 7zm-3.8 3l1 3c-.8-.1-1.7-.6-2.2-1.3L3.7 10h.5zm7.6 0h.5l.7 1.7c-.5.7-1.4 1.2-2.2 1.3l1-3zM6 13.5h4c-.4.9-1.2 1.5-2 1.5s-1.6-.6-2-1.5z" />
                </svg>
                Linux
              </a>
            </div>

            <a
              href="https://github.com/BerryNotes/imade-releases"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-text transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              All releases on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
