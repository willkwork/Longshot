/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-primary)", 'Inter', 'sans-serif'],
      mono: ["var(--font-mono)", 'Roboto Mono', 'monospace'],
    },
  },
  plugins: [],
};
