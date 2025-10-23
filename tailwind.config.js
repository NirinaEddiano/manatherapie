// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { // Le mot "extend" est crucial !
      colors: {
        'primary-terracotta': '#C87A5E',
        'accent-rose': '#FBCFE8',
        'dark-text': '#1f2937',
        'light-bg': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};