/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
