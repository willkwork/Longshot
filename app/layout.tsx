import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="py-4 px-6 bg-gray-800 text-gray-200">
          <nav className="flex gap-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/conference" className="hover:underline">
              Conference
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
