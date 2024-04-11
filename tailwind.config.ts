import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
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
export default config;
