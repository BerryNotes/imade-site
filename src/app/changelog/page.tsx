import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Changelog — iMade",
  description: "See what's new in iMade. Full version history and release notes.",
};

const CHANGELOG = [
  {
    version: "2.4.0",
    date: "February 9, 2026",
    highlight: true,
    changes: [
      {
        category: "New",
        items: [
          "Audio Visualizer tab with 8 interactive modes: Bars, Radial, Wave, Particles, Orbit, Sphere, Grid, and Laser",
          "Custom frameless title bar replacing native Electron chrome",
          "Keyboard shortcuts on Visualizer: Space to pause, Left/Right arrows to skip songs",
          "Player idle state shows prompt when no song is playing",
        ],
      },
      {
        category: "Improved",
        items: [
          "Smooth animations throughout the app: tab transitions, battle card win/lose effects, list stagger entrances, stat panel animations",
          "Button press and hover transitions on all interactive elements",
          "Web Audio API integration for real-time frequency and waveform analysis",
          "Visualizer auto-hides controls and cursor after 2s of mouse inactivity",
        ],
      },
    ],
  },
  {
    version: "2.3.3",
    date: "February 8, 2026",
    changes: [
      {
        category: "Fixed",
        items: [
          "Server Elo calculation now matches frontend algorithm (base 500, source-based K-values, dampened)",
          "baseElo of 0 no longer overrides computed rankings",
        ],
      },
    ],
  },
  {
    version: "2.3.2",
    date: "February 8, 2026",
    changes: [
      {
        category: "Fixed",
        items: [
          "Comparison source field now saved correctly (tier/quick/classic/bracket K-values)",
          "Tier mode deadlock with single unranked song now routes to quick mode",
        ],
      },
    ],
  },
  {
    version: "2.3.1",
    date: "February 7, 2026",
    changes: [
      {
        category: "Fixed",
        items: [
          "Data integrity: atomic writes (.tmp + rename) prevent file corruption on crash",
          "Automatic .bak backup recovery if main data file is corrupted",
        ],
      },
    ],
  },
  {
    version: "2.3.0",
    date: "February 6, 2026",
    changes: [
      {
        category: "New",
        items: [
          "App icon with branded \"iM\" design",
          "Cross-platform builds: Windows, macOS, and Linux via GitHub Actions CI",
          "Update checker with dismissible toast notification",
        ],
      },
    ],
  },
  {
    version: "2.2.0",
    date: "February 5, 2026",
    changes: [
      {
        category: "Changed",
        items: [
          "Switched build output from portable .exe to .zip to reduce false-positive security warnings",
          "Removed unused light theme setting",
        ],
      },
    ],
  },
  {
    version: "2.1.0",
    date: "February 4, 2026",
    changes: [
      {
        category: "New",
        items: [
          "Migrated from monolithic HTML to Vite + React component architecture",
          "Portable build (no installer required)",
          "Express server bound to localhost only — no more Windows Firewall prompts",
          "Asar bundling for smaller package size",
        ],
      },
    ],
  },
];

const categoryColors: Record<string, string> = {
  New: "text-green-400 bg-green-400/10 border-green-400/20",
  Improved: "text-accent bg-accent/10 border-accent/20",
  Fixed: "text-gold bg-gold/10 border-gold/20",
  Changed: "text-blue-400 bg-blue-400/10 border-blue-400/20",
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-3">
              Changelog
            </h1>
            <p className="text-text-muted text-lg mb-16">
              Everything new, improved, and fixed in iMade.
            </p>
          </Reveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border hidden sm:block" />

            <div className="flex flex-col gap-12">
              {CHANGELOG.map((release, i) => (
                <Reveal key={release.version} delay={i * 0.05}>
                  <div className="relative sm:pl-10">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 hidden sm:block ${
                        release.highlight
                          ? "bg-accent border-accent"
                          : "bg-bg-raised border-border-light"
                      }`}
                    />

                    {/* Version header */}
                    <div className="flex items-baseline gap-3 mb-4">
                      <h2 className="font-display text-2xl font-bold text-text">
                        v{release.version}
                      </h2>
                      <span className="text-sm text-text-dim">
                        {release.date}
                      </span>
                      {release.highlight && (
                        <span className="text-xs font-medium text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                          Latest
                        </span>
                      )}
                    </div>

                    {/* Change categories */}
                    <div className="flex flex-col gap-4">
                      {release.changes.map((group) => (
                        <div key={group.category}>
                          <span
                            className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md border mb-2.5 ${
                              categoryColors[group.category] || "text-text-muted bg-bg-card border-border"
                            }`}
                          >
                            {group.category}
                          </span>
                          <ul className="space-y-2">
                            {group.items.map((item, j) => (
                              <li
                                key={j}
                                className="text-sm text-text-muted leading-relaxed flex gap-2"
                              >
                                <span className="text-border-light mt-1 shrink-0">
                                  &bull;
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
