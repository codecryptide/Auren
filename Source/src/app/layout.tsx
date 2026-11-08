import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08070D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AUREN — Personal Growth & Lifestyle Companion",
  description:
    "Build a life you love. A personal growth companion bringing your fitness, productivity, learning, and spirituality into one intentional space.",
  keywords: [
    "personal growth companion",
    "lifestyle companion",
    "habits",
    "wellness",
    "productivity",
    "spirituality",
    "intentional living",
  ],
  authors: [{ name: "AUREN Studio" }],
  openGraph: {
    title: "AUREN — Personal Growth & Lifestyle Companion",
    description: "Build a life you love. Four lifestyle pillars for intentional everyday progress.",
    url: "https://auren.app",
    siteName: "AUREN",
    locale: "en_US",
    type: "website",
  },
  other: {
    "page-type": "software",
    "site-kind": "software",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-type="software"
      data-radius="soft"
      data-buttons="tonal"
      className={geistSans.variable}
    >
      <head>
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/backgrounds/backgrounds.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
      </head>
      <body className="min-h-screen bg-[#08070D] text-[#F8F7FC] selection:bg-[#762BFF] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
