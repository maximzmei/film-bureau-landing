import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunitoSans = localFont({
  src: [
    { path: "../public/fonts/NunitoSans.ttf", style: "normal" },
    { path: "../public/fonts/NunitoSans-Italic.ttf", style: "italic" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

const greatVibes = localFont({
  src: "../public/fonts/GreatVibes.ttf",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Film Bureau — Full-Cycle Video Production",
  description:
    "Full-cycle video production. We develop concepts and scripts, shoot, edit, animate, and adapt content for any platform.",
  openGraph: {
    title: "Film Bureau",
    description: "Full-cycle video production studio.",
    url: "https://filmbureau.online",
    siteName: "Film Bureau",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${nunitoSans.variable} ${greatVibes.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
