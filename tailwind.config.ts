import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/(route)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        stone: "#5a5550",
        orange: "#ff7a00",
        yellow: "#FFC83B",
        green: "#98cc28",
      },
    },
  },
  plugins: [],
};
export default config;
