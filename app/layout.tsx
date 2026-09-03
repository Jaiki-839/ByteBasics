import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EasterEggs } from "@/components/layout/EasterEggs";
import ByteBasicsLoader from "@/components/ByteBasicsLoader";

const siteUrl = "https://bytebasics.jaikikushwaha.me";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ByteBasics — Computer Fundamentals",
    template: "%s | ByteBasics",
  },

  description:
    "ByteBasics is an interactive guide to Computer Fundamentals — from basic concepts to computer architecture, hardware, software, networking, and cybersecurity.",

  keywords: [
    "ByteBasics",
    "byte basics",
    "jaiki kushwaha project",
    "byte-basics",
    "Bytebasics",
    "computer architecture",
    "computer software",
    "computer networking",
    "cybersecurity basics",
  ],

  authors: [
    {
      name: "Jaiki Kushwaha",
      url: "https://jaikikushwaha.me",
    },
  ],

  creator: "Jaiki Kushwaha",
  publisher: "Jaiki Kushwaha",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "ByteBasics — Computer Fundamentals",
    description:
      "Learn Computer Fundamentals through structured modules, interactive content, quizzes, quick notes, and an interactive 3D Lab.",
    siteName: "ByteBasics",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ByteBasics — Computer Fundamentals",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ByteBasics — Computer Fundamentals",
    description:
      "An interactive guide to Computer Fundamentals, hardware, software, networking, and cybersecurity.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  category: "education",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ByteBasics",
  url: siteUrl,
  description:
    "An interactive guide to Computer Fundamentals, hardware, software, networking, and cybersecurity.",
  creator: {
    "@type": "Person",
    name: "Jaiki Kushwaha",
    url: "https://jaikikushwaha.me",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body`}
      >
        <ThemeProvider>
          <ByteBasicsLoader />

          <Navbar />

          <main>{children}</main>

          <Footer />

          <EasterEggs />
        </ThemeProvider>

        <Script
          id="bytebasics-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}