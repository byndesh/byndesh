import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/shared/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("@beyndesh/config/tailwind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
