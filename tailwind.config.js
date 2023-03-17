/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#2f3e46',
        'viridian': '#679289',
        'onyx': '#354f52',
        'violet': '#635775',
        'brown-black': '#2D2725',
        'peach': '#F4C095',
      },
      fontFamily: {
        'Arial': 'Arial',
        'OpenSans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
