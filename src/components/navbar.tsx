"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-text"
        >
          iMade
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#screenshots"
            className="text-sm text-text-muted hover:text-text transition-colors duration-200"
          >
            Screenshots
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-text-muted hover:text-text transition-colors duration-200"
          >
            How It Works
          </a>
          <a
            href="#cta"
            className="text-sm font-medium text-bg bg-accent hover:bg-accent-deep px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
