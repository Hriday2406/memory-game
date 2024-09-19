/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ['"Dancing Script"', "cursive"],
      body: ['"Roboto"', "sans-serif"],
    },

    extend: {
      colors: {
        easy: "#0af",
        med: "#0f0",
        hard: "#f00",
      },
    },
  },
  plugins: [],
};

