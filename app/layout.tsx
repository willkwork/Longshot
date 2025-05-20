import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const secondary = IBM_Plex_Sans({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PROJECT LONGSHOT",
  description: "Advancing safe and aligned artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primary.variable} ${secondary.variable} ${mono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
