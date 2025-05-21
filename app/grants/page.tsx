"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "../../components/ScrollReveal";

export default function GrantsPage() {
  const MotionLink = motion(Link);
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 dark:text-gray-100 bg-background">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center text-center py-24 px-6 sm:py-32 gap-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700"
      >
        <img src="/logo.svg" alt="PROJECT LONGSHOT official logo" className="h-16 w-auto" />
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">Research Grants</h1>
        <p className="text-lg sm:text-xl max-w-2xl">We support cutting-edge research that furthers safe and aligned AI.</p>
      </motion.section>

      <ScrollReveal
        as="section"
        delay={0.2}
        className="py-16 px-6 text-center flex flex-col items-center gap-4"
      >
        <h2 className="text-3xl font-semibold">Areas of Interest</h2>
        <ul className="list-disc list-inside text-left max-w-xl">
          <li>AI Safety &amp; Alignment theory</li>
          <li>Cognitive science &amp; human-AI interaction</li>
          <li>Responsible machine learning practices</li>
          <li>Global AI policy and governance</li>
        </ul>
        <p className="max-w-2xl">We welcome proposals from academics and research groups around the world. Funding cycles run throughout the year.</p>
        <MotionLink
          href="#"
          className="bg-slate-600 text-white px-6 py-3 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileFocus={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply for Funding
        </MotionLink>
      </ScrollReveal>
    </div>
  );
}
