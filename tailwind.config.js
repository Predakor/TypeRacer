/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "pulse-more": {
          "50%": { opacity: "10%" },
        },
        appear: {
          "0%": {
            opacity: "0%",
          },
        },
      },
      animation: {
        "pulse-more": "pulse-more 1s ease-in infinite alternate",
        appear: "appear 500ms ease-in",
      },
    },
  },
  daisyui: {
    themes: [
      ...require("./src/utils/themes"),
      {
        mytheme: {
          primary: "#ffc9d5",
          secondary: "#112c7c",
          accent: "#d3bc3b",
          neutral: "#302C3A",
          "base-100": "#2F2244",
          info: "#84BAE7",
          success: "#66DBBC",
          warning: "#F1C86A",
          error: "#EF6180",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("prettier-plugin-tailwindcss")],
};
