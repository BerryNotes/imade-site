"use client";

import { Reveal } from "./reveal";
import Image from "next/image";

const screenshots = [
  {
    label: "Rankings",
    subtitle: "Know where every song stands",
    desc: "Your entire catalog, objectively ranked by Elo rating. See scores, win/loss records, and genre breakdowns at a glance.",
    file: "screenshot-rankings.png",
  },
  {
    label: "Compare",
    subtitle: "Replace gut feeling with real decisions",
    desc: "Pick between two songs at a time. Guided sessions mix classic head-to-head comparisons with bracket tournaments so every matchup counts.",
    file: "screenshot-battle.png",
  },
  {
    label: "Stats",
    subtitle: "See your trajectory over time",
    desc: "Every dot is a song, plotted by creation date and Elo rating. Spot trends across genres and track whether your music is actually improving.",
    file: "screenshot-stats.png",
  },
  {
    label: "Library",
    subtitle: "Your catalog, organized",
    desc: "Browse, filter by genre, and manage your entire library. Bulk tagging, sorting, and instant search across hundreds of songs.",
    file: "screenshot-library.png",
  },
  {
    label: "Visualizer",
    subtitle: "8 modes of audio visualization",
    desc: "Bars, radial, waveform, particles, orbit, sphere, grid, and laser — all reacting to your music in real time.",
    file: "screenshot-visualizer.png",
  },
  {
    label: "Playlists",
    subtitle: "Build from your rankings",
    desc: "Generate playlists from your top-ranked songs or create custom ones. Export as M3U for any player.",
    file: "screenshot-playlists.png",
  },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-24">
            <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
              See it in action
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Your creative feedback loop
            </h2>
          </div>
        </Reveal>

        <div className="space-y-32">
          {screenshots.map((s, i) => (
            <Reveal key={s.label} delay={0.1}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 md:gap-16`}
              >
                {/* Screenshot */}
                <div className="w-full md:w-3/5 group relative rounded-2xl border border-border overflow-hidden bg-bg-card transition-colors duration-300 hover:border-border-light">
                  <Image
                    src={`/screenshots/${s.file}`}
                    alt={`${s.label} screenshot`}
                    width={1280}
                    height={800}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Description */}
                <div className="w-full md:w-2/5">
                  <span className="text-xs font-medium text-accent tracking-widest uppercase">
                    {s.label}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mt-2 mb-4">
                    {s.subtitle}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
