import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body>
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
