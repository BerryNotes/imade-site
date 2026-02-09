import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { BackgroundEffects } from "@/components/background-effects";

export const metadata: Metadata = {
  title: "iMade — Know Your Strongest Work",
  description:
    "The creative development tool for music producers. Track your growth, find your strengths, and make intentional decisions about your music.",
  openGraph: {
    title: "iMade — Know Your Strongest Work",
    description:
      "The creative development tool for music producers. Track your growth, find your strengths, and make intentional decisions about your music.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundEffects />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
