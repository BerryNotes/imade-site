"use client";

import { useEffect, useState } from "react";

type OS = "windows" | "mac" | "linux" | null;

const RELEASE_BASE =
  "https://github.com/BerryNotes/imade-releases/releases/latest/download";

const assets: Record<Exclude<OS, null>, { label: string; file: string }> = {
  windows: { label: "Download for Windows", file: "iMade-win.zip" },
  mac: { label: "Download for Mac", file: "iMade-mac.zip" },
  linux: { label: "Download for Linux", file: "iMade-linux.zip" },
};

function detectOS(): OS {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) return "mac";
  if (ua.includes("linux")) return "linux";
  return null;
}

export function DownloadButton({ compact = false }: { compact?: boolean }) {
  const [os, setOS] = useState<OS>(null);

  useEffect(() => {
    setOS(detectOS());
  }, []);

  const fallbackUrl =
    "https://github.com/BerryNotes/imade-releases/releases/latest";

  if (!os) {
    return (
      <a
        href={fallbackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          compact
            ? "inline-flex items-center gap-1.5 text-sm font-medium text-bg bg-accent hover:bg-accent-deep px-4 py-2 rounded-lg transition-colors duration-200"
            : "inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-medium text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        }
        style={
          compact
            ? undefined
            : {
                background: "linear-gradient(135deg, #4338ca, #6366f1)",
                boxShadow: "0 0 32px rgba(99, 102, 241, 0.2)",
              }
        }
      >
        <DownloadIcon />
        Download
      </a>
    );
  }

  const { label, file } = assets[os];
  const href = `${RELEASE_BASE}/${file}`;

  return (
    <a
      href={href}
      className={
        compact
          ? "inline-flex items-center gap-1.5 text-sm font-medium text-bg bg-accent hover:bg-accent-deep px-4 py-2 rounded-lg transition-colors duration-200"
          : "inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-medium text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      }
      style={
        compact
          ? undefined
          : {
              background: "linear-gradient(135deg, #4338ca, #6366f1)",
              boxShadow: "0 0 32px rgba(99, 102, 241, 0.2)",
            }
      }
    >
      <DownloadIcon />
      {label}
    </a>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="opacity-70"
      aria-hidden="true"
    >
      <path
        d="M8 2v8m0 0L5 7m3 3 3-3M3 12.5h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
