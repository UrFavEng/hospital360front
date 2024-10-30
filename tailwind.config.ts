import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite GB S"', "cursive"], // إضافة Playwrite
        agdasima: ['"Agdasima"', "sans-serif"], // إضافة Agdasima
      },
      colors: {
        primaryColor: "#03045e",
        "custom-blue": "#0077b6",
        "custom-light-blue": "#00b4d8",
        "custom-sky-blue": "#0F67B1",
        backgroundPri: "#E9EFEC",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
