

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-terracotta': '#af4d30',
        'accent-rose': '#FBCFE8',
        'dark-text': '#1f2937',
        'light-bg': '#FFFFFF',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
};