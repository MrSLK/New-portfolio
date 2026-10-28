import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#315ee7", soft: "#dce8ff" },
        ink: "#172033",
        muted: "#667085",
      },
      boxShadow: { soft: "0 18px 55px rgba(24,43,87,.08)" },
      borderRadius: { card: "22px" },
    },
  },
  plugins: [],
};
export default config;
