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
        "gradient-01":
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        "gradient-02":
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        desktop: "url('/images/bg-pattern-desktop.svg')",
      },
      colors: {
        red: {
          desaturated: "hsl(0, 36%, 70%)",
          soft: "hsl(0, 93%, 68%)",
          dark: "hsl(0, 6%, 24%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
