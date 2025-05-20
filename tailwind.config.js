/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-plex)", "sans-serif"],
        mono: ["Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
