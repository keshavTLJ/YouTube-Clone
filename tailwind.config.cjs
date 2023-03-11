/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'AwanZaman' : ['AwanZaman']
      }
    },
  },
  variants: {
    extend: {
      lineClamp: ["hover"],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),],
}
