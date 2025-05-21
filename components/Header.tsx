"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function Header() {
  const linkAnim = {
    whileHover: { scale: 1.05 },
    whileFocus: { scale: 1.05 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <header className="py-4 px-6 bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <img src="/logo.svg" alt="PROJECT LONGSHOT official logo" className="h-8 w-auto" />
        </Link>
        <nav className="flex gap-4">
          <MotionLink href="/" className="hover:underline" {...linkAnim}>
            Home
          </MotionLink>
          <MotionLink href="/conference" className="hover:underline" {...linkAnim}>
            Conference
          </MotionLink>
          <MotionLink href="/grants" className="hover:underline" {...linkAnim}>
            Grants
          </MotionLink>
        </nav>
      </div>
    </header>
  );
}
