/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grayViolet: "hsl(257, 7%, 63%)",
        darkerBlue: "(255, 11%, 22%)",
        darkerViolet: "hsl(260, 8%, 15%)"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
}
