/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Serif JP"', 'serif'], // Google Fontsで指定したフォントファミリーを追加
      },
    },
  },
  plugins: [],
}

