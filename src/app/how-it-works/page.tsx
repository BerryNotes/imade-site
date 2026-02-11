import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How It Works — iMade",
  description:
    "See how iMade turns scattered beats into a structured feedback loop. Upload, compare, rank, and track your growth as a producer.",
};

const sections = [
  {
    id: "upload",
    num: "01",
    title: "Build your catalog",
    lead: "Drop your beats in. iMade does the rest.",
    body: "Drag and drop audio files or select a folder. iMade reads metadata, organizes by genre, and builds a browsable library from your scattered files. Bulk tagging lets you categorize hundreds of songs in seconds. No accounts, no cloud — everything stays on your machine.",
    screenshot: "screenshot-library.png",
  },
  {
    id: "compare",
    num: "02",
    title: "Make honest decisions",
    lead: "Two songs. One choice. No overthinking.",
    body: "iMade gives you structured comparison sessions with four modes, each designed for a different goal:",
    details: [
      {
        name: "Classic",
        desc: "Randomized head-to-head matchups. The core of the system — quick, honest gut decisions that feed the Elo algorithm.",
      },
      {
        name: "Quick",
        desc: "Faster rounds with smaller rating swings. Great for casual sessions when you just want to run through some comparisons.",
      },
      {
        name: "Tier",
        desc: "Sort unranked songs into rough tiers first, then refine within tiers. Efficient for large catalogs where you need to establish a baseline fast.",
      },
      {
        name: "Bracket",
        desc: "Elimination tournaments of 4, 8, or 16 songs. Perfect for picking your best track from a specific pool — like choosing a single to release.",
      },
    ],
    screenshot: "screenshot-battle.png",
  },
  {
    id: "rankings",
    num: "03",
    title: "See where every song stands",
    lead: "Objective rankings powered by the Elo algorithm.",
    body: "The same rating system used in chess. Every comparison updates both songs' ratings — upsets cause bigger swings, expected outcomes cause smaller ones. Over time, your best work naturally rises to the top. Filter by genre, see win/loss records, and track Elo variance to know how settled each ranking is.",
    screenshot: "screenshot-rankings.png",
  },
  {
    id: "stats",
    num: "04",
    title: "Understand your trajectory",
    lead: "Are you actually getting better? Now you can see.",
    body: "The stats dashboard plots every song by creation date and Elo rating, giving you a visual timeline of your growth. See which genres you dominate, identify your strongest periods, and spot patterns in your creative output. Session history tracks every comparison so you can see how your rankings evolved over time.",
    screenshot: "screenshot-stats.png",
  },
  {
    id: "playlists",
    num: "05",
    title: "Turn rankings into playlists",
    lead: "Your top songs, ready to share.",
    body: "Build playlists directly from your rankings — top 10, top by genre, or custom selections. Export as M3U files for any music player. Use playlists to curate what you send to collaborators, what you pitch to labels, or what you listen to for inspiration.",
    screenshot: "screenshot-playlists.png",
  },
  {
    id: "visualizer",
    num: "06",
    title: "Experience your music",
    lead: "8 real-time audio visualizer modes.",
    body: "Bars, radial, waveform, particles, orbit, sphere, grid, and laser — all driven by real-time frequency analysis through the Web Audio API. Fullscreen mode, keyboard controls, and mouse-interactive particle systems. Connect a MIDI controller and play notes that drive the visualizer directly.",
    screenshot: "screenshot-visualizer.png",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-text mb-4">
                How iMade works
              </h1>
              <p className="text-text-muted text-lg max-w-lg mx-auto leading-relaxed">
                A structured feedback loop that turns hundreds of scattered
                beats into clear self-awareness about your creative growth.
              </p>
            </div>
          </Reveal>

          <div className="space-y-32">
            {sections.map((s, i) => (
              <Reveal key={s.id} delay={0.05}>
                <section id={s.id}>
                  {/* Section number + title */}
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-display text-sm font-bold text-accent tracking-widest">
                      {s.num}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-text">
                      {s.title}
                    </h2>
                  </div>

                  {/* Layout: alternating screenshot + text */}
                  <div
                    className={`flex flex-col ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-start gap-10 md:gap-14 mt-8`}
                  >
                    {/* Screenshot */}
                    <div className="w-full md:w-3/5 rounded-2xl border border-border overflow-hidden bg-bg-card group">
                      <Image
                        src={`/screenshots/${s.screenshot}`}
                        alt={`${s.title} screenshot`}
                        width={1280}
                        height={800}
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-2/5">
                      <p className="font-display text-lg font-medium text-text mb-4">
                        {s.lead}
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed mb-5">
                        {s.body}
                      </p>

                      {/* Comparison mode details */}
                      {s.details && (
                        <div className="space-y-4">
                          {s.details.map((d) => (
                            <div key={d.name}>
                              <span className="text-sm font-semibold text-accent">
                                {d.name}
                              </span>
                              <p className="text-sm text-text-muted leading-relaxed mt-1">
                                {d.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal delay={0.1}>
            <div className="mt-32 text-center">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-text mb-4">
                Ready to stop guessing?
              </h3>
              <p className="text-text-muted mb-8 max-w-md mx-auto">
                Try iMade free with up to 25 songs. No account required.
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-medium text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #4338ca, #6366f1)",
                    boxShadow: "0 0 32px rgba(99, 102, 241, 0.2)",
                  }}
                >
                  Try Free
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
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
