/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boldText: "#101828",
        backgroundGray: "#FCFDFD",
        bordersGray: "#D0D5DD",
        darkGray: "#344054",
        lightGray: "#667085",
        accentBlue: "#1570EF",
        backgroundGreen: "#ECFDF3",
        darkGreen: "#027A48",
        lightGreen: "#12B76A",
      },
      screens: {
        '2xl' : '1435px'
      },
    },
  },
  plugins: [],
};
