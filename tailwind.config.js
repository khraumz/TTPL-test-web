/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ttpl: {
          blue: '#00509E',
          navy: '#003973',
          deep: '#081B33',
          yellow: '#FFC72C',
          gold: '#D2A000',
          ice: '#E6F0FA',
        },
      },
    },
  },
  plugins: [],
};
