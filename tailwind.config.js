/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      body: ["IBM Plex Mono", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")({ className: "prose" })],
};
