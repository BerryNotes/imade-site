import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "iMade — Rank Your Music",
  description:
    "The ranking tool for music producers. Compare, rank, and organize your songs with Elo ratings, brackets, and smart sessions.",
  openGraph: {
    title: "iMade — Rank Your Music",
    description:
      "The ranking tool for music producers. Compare, rank, and organize your songs with Elo ratings, brackets, and smart sessions.",
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
