/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        image:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/assets/bg-image.webp')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        gamergradient: "linear-gradient(135deg, #3f0d75, #191919, #ff0084)",
      },
      colors: {
        primary: "#00FFA8",
        secondary: "#00FFE7",
      },
    },
  },
  plugins: [],
};
