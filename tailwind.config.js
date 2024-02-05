/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,md}",
    "./docs/**/*.{ts,tsx,md}",
  ],
  corePlugins: {
    preflight: false,
  },
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#011A23",
        blue: "#0bb2ea",
        "light-blue": "#E9F9FF",

        "dark-green": "#022007",
        green: "#18B500",
        "light-green": "#ECFFE9",

        "dark-red": "#230406",
        red: "#F02D3A",
        "light-red": "#FFE3E3"
      },
    },
  },
  plugins: [],
}

