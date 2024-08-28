/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ダークモードをクラスベースで使用する
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Serif JP"', 'serif'],
      },
      spacing: {
        'switch-width': '60px',
        'switch-ball-width': '26px',
        'switch-ball-offset': '2px',
        'switch-ball-move': '30px',
      },
      colors: {
        'switch-bg': '#F1F1F1',
        'switch-bg-active': '#2F2F2F',
        'switch-ball-bg': '#fff',
        // ダークモード用の色を追加
        'dark-bg': '#000000',
        'dark-text': '#dddddd',
        'light-text': '#ffffff',
      },
      borderWidth: {
        'switch-border': '1px',
      },
      borderColor: {
        'switch-border': '#fff',
        // ダークモードのborder-bottomの色を白に設定
        'dark-border-bottom': '#ffffff', 
      },
    },
  },
  plugins: [],
}