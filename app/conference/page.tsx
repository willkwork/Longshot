"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ConferencePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 dark:text-gray-100 bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center text-center py-24 px-6 sm:py-32 gap-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
      >
        <img src="/logo.svg" alt="PROJECT LONGSHOT official logo" className="h-16 w-auto" />
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">PROJECT LONGSHOT 2025 Conference</h1>
        <p className="text-lg sm:text-xl max-w-2xl">Shaping global policy and science for safe AI</p>
        <p className="text-md font-mono">Mid-2025 (exact dates soon)</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <input type="email" placeholder="Email address" className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Express Interest</button>
        </form>
      </motion.section>

      {/* Conference Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-16 px-6 text-center flex flex-col items-center gap-4"
      >
        <h2 className="text-3xl font-semibold">Conference Overview</h2>
        <p className="max-w-3xl">A brief description of the event will go here. Themes include:</p>
        <ul className="list-disc list-inside text-left max-w-xl">
          <li>AI Safety & Alignment</li>
          <li>Global policy and governance</li>
          <li>Cutting-edge research insights</li>
        </ul>
      </motion.section>

      {/* Speakers Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gray-100 dark:bg-gray-900 py-16 px-6 text-center flex flex-col items-center gap-4"
      >
        <h2 className="text-3xl font-semibold">Speakers</h2>
        <p>Announcing Speakers Soon...</p>
      </motion.section>
    </div>
  );
}
