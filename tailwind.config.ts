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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        neumorphic: "1px 1px 2px #fff, -1px -1px 2px #2c2c2c",
        "neumorphic-inset":
          "inset 10px 10px 20px #1a1a1a, inset -10px -10px 20px #2c2c2c",
      },

      // fontFamily:{
      //   "Poppins":["Poppins","sans-serif"],
      //   "Noto-Sans-Bengali":["Noto Sans Bengali","sans-serif"],
      //   'signature': ['"Dancing Script"', 'cursive'],

      // },
      fontFamily: {
        Montserrat: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
