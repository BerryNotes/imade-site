"use client";

import { Reveal } from "./reveal";
import Image from "next/image";

const screenshots = [
  {
    label: "Rankings",
    desc: "Elo-rated leaderboard of all your songs, drag to reorder.",
    file: "screenshot-rankings.png",
  },
  {
    label: "Battle",
    desc: "Head-to-head comparisons with guided sessions and brackets.",
    file: "screenshot-battle.png",
  },
  {
    label: "Stats",
    desc: "Track improvement, listening time, and genre breakdowns.",
    file: "screenshot-stats.png",
  },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
              See it in action
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Built for producers
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-border overflow-hidden bg-bg-card transition-colors duration-300 hover:border-border-light">
                {/* Screenshot placeholder — replace src with your images */}
                <div className="relative aspect-[9/16] bg-bg-raised overflow-hidden">
                  <Image
                    src={`/screenshots/${s.file}`}
                    alt={`${s.label} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Fallback overlay when image is missing */}
                  <div className="absolute inset-0 flex items-center justify-center bg-bg-raised">
                    <span className="text-text-dim text-sm">
                      {s.file}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-medium text-sm text-text mb-1">
                    {s.label}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
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
