import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mintGreen: "rgba(224, 255, 239, 1)", // Soft mint-green
        background: "var(--background)", // You can still keep these variables if needed
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
