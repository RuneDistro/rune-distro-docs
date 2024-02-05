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

        "dark-green": "#022007",
        green: "#18B500",

        "dark-red": "#230406",
        red: "#F02D3A"
      }
    },
  },
  plugins: [],
}

