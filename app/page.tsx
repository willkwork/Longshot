import CountdownTimer from "../components/CountdownTimer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-24 px-6 sm:py-32 gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight"
        >
          Aligning AI. Securing the Future.
        </motion.h1>
        <p className="text-lg sm:text-xl max-w-2xl">Join world-leading experts and policymakers at the forefront of AI alignment.</p>
        <Link href="#about" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3">Learn More About PROJECT LONGSHOT</Link>
      </section>

      {/* Event Promotion Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 text-center flex flex-col items-center gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold"
        >
          PROJECT LONGSHOT Conference 2025
        </motion.h2>
        <div className="text-2xl font-mono">
          <CountdownTimer targetDate="2025-06-01T00:00:00Z" />
        </div>
        <form className="mt-4 flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <input type="email" placeholder="Email address" className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Register Interest</button>
        </form>
      </section>

      {/* Institutional Credibility Section */}
      <section id="about" className="py-16 px-6 text-center flex flex-col items-center gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold"
        >
          Backed by global leaders and top-tier academic institutions.
        </motion.h2>
        <p className="max-w-3xl">PROJECT LONGSHOT is committed to advancing safe and aligned artificial intelligence. Our mission brings together policymakers, researchers, and industry to secure the future of AI.</p>
        <div className="h-20 w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded">Logos Placeholder</div>
      </section>

      {/* Academic & Expert Engagement */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 text-center flex flex-col items-center gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold"
        >
          Join Leading Minds
        </motion.h2>
        <p className="max-w-2xl">We welcome mathematicians, cognitive scientists, and machine learning researchers to collaborate with us on the toughest alignment challenges.</p>
        <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">Apply to Collaborate</Link>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-6 bg-gray-800 text-gray-200 flex flex-col items-center gap-4 text-sm">
        <nav className="flex gap-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Conference</a>
        </nav>
        <form className="flex gap-2 w-full max-w-xs">
          <input type="email" placeholder="Subscribe for updates" className="flex-1 px-3 py-2 rounded text-gray-900" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded">Submit</button>
        </form>
        <div className="flex gap-3">Social Links Placeholder</div>
      </footer>
    </div>
  );
}
