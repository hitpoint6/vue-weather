/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#2D2D2D",
        "weather-secondary": "#848080",
      },
      fontFamily: {
        Roboto: ["Roboto, san-serif"],
      },
      container: {
        padding: "2rem",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
      }
    },
  },
  plugins: [],
}

