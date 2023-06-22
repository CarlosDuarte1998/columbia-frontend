/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    
    extend: {
      fontFamily: {
        gerttr: ['GerTT-regular'],
        gerttb: ['GerTT-bold'],
        gerttsm: ['GerTT-medium']
      },
    },
  },
  plugins: [],
}

