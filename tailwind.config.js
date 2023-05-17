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
    themes: require("./src/utils/themes"),
  },
  plugins: [require("daisyui"), require("prettier-plugin-tailwindcss")],
};
