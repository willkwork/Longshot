import Link from "next/link";

export default function ConferencePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 dark:text-gray-100 bg-background">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-24 px-6 sm:py-32 gap-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">PROJECT LONGSHOT 2025 Conference</h1>
        <p className="text-lg sm:text-xl max-w-2xl">Shaping global policy and science for safe AI</p>
        <p className="text-md font-mono">Mid-2025 (exact dates soon)</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <input type="email" placeholder="Email address" className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Express Interest</button>
        </form>
      </section>

      {/* Conference Overview */}
      <section className="py-16 px-6 text-center flex flex-col items-center gap-4">
        <h2 className="text-3xl font-semibold">Conference Overview</h2>
        <p className="max-w-3xl">A brief description of the event will go here. Themes include:</p>
        <ul className="list-disc list-inside text-left max-w-xl">
          <li>AI Safety & Alignment</li>
          <li>Global policy and governance</li>
          <li>Cutting-edge research insights</li>
        </ul>
      </section>

      {/* Speakers Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 text-center flex flex-col items-center gap-4">
        <h2 className="text-3xl font-semibold">Speakers</h2>
        <p>Announcing Speakers Soon...</p>
      </section>
    </div>
  );
}
