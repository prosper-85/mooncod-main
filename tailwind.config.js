/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Archivo", "sans-serif"],
      },
      colors: {
        left: "linear-gradient(rgba(255, 255, 255, 0),rgba(0, 0, 0, 1))",
      },
      backgroundImage: {
        "manage-bg": "url('/src/assets/manageBackground.webp')",
        "hero-bg": "url('/src/assets/heroBackground.webp')",
        "why-bg": "url('/src/assets/whyBackground.webp')",
        "buy-bg": "url('/src/assets/buyBackground.webp')",
        "data-bg": "url('/src/assets/dataBackground.webp')",
        "steps-bg": "url('/src/assets/stepsBackground.webp')",
      },
    },
  },
  plugins: [],
};
