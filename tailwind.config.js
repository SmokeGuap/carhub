/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#2B59FF',
        'light-white': '#E1E1E3',
        grey: '#747A88',
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
