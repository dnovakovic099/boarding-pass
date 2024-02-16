/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": "url('./src/assets/hero.png')",
      },
      colors: {
        primary: "#4e7772",
      },
      fontFamily: {
        customFont: ['"Airbnb Cereal App", sans-serif'],
      },
    },
  },
  plugins: [],
};
