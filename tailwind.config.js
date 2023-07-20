/** @type {(tailwindConfig: object) => object} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#7a7c80"
      },
      screens: {
        'tablet': '768px',
        'desktop': '1024px',
        'mid-desktop': '1140px',
        'big-desktop': '1440px',
        '2big-desktop': '2550px',
      }
    },
  },
  plugins: [],
})