"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./reveal";

const faqs = [
  {
    q: "What is Elo ranking?",
    a: "Elo is a rating system originally designed for chess. When you compare two songs, the winner gains points and the loser drops — with the amount depending on the expected outcome. Over many comparisons, your best work naturally rises to the top. It's the same math used by chess.com, competitive gaming, and ranking algorithms worldwide.",
  },
  {
    q: "Does my music get uploaded anywhere?",
    a: "No. iMade runs entirely on your computer. Your audio files, rankings, and data are stored locally and never sent to any server. There are no accounts, no cloud sync, and no analytics. Your unreleased music stays completely private.",
  },
  {
    q: "How much does it cost?",
    a: "iMade has a free trial so you can try it out with up to 25 songs. After that, it's $2.99/month or $19.99/year for full unlimited access. All plans run 100% offline — your music never leaves your computer.",
  },
  {
    q: "What platforms does it support?",
    a: "iMade is available for Windows, macOS, and Linux. Download the zip for your platform, extract it, and run. No installer needed.",
  },
  {
    q: "Do I need internet to use it?",
    a: "No. iMade works fully offline. The only time it contacts the internet is a single check on startup to see if a newer version is available — and even that is optional and non-blocking.",
  },
  {
    q: "How many songs can it handle?",
    a: "There's no hard limit. Producers have used it with hundreds of songs. The comparison system is designed to be efficient — you don't need to compare every possible pair to get meaningful rankings.",
  },
];

function FAQItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-sm font-medium text-text">{q}</span>
        <span className={`flex-shrink-0 text-text-muted transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="8" y1="3" x2="8" y2="13" />
            <line x1="3" y1="8" x2="13" y2="8" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-muted leading-relaxed pb-5 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Common questions
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
