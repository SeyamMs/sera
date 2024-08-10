import defaultTheme from "tailwindcss/defaultTheme"
import forms from "@tailwindcss/forms"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GE Dinar Two", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: {
          DEFAULT: "#652980",
          50: "#faf5fe",
          100: "#f4ebfc",
          200: "#e9d6f8",
          300: "#dab6f1",
          400: "#c58ae8",
          500: "#ab5dd8",
          600: "#903dbc",
          700: "#79309b",
          800: "#652980",
          900: "#552669",
          950: "#340e44",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
