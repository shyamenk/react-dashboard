import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      primary: "#605BFF",
      beerus: "#F2F2F2",
      "beerus-hover": "#EBEBEB",
      bulma: "#231F20",
      gohan: "#FFFFFF",
      goku: "#F5F5F5",
      trunks: "#999CA0",
      text: "#030229",
      link: "#5B93FF",
      "menu-link": "#9A9AA9",
      error: "#D33030",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
