/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Serif JP"', 'serif'], // Google Fontsで指定したフォントファミリーを追加
      },
      spacing: {
        'switch-width': '60px', // スイッチの幅
        'switch-ball-width': '26px', // スイッチボールの幅
        'switch-ball-offset': '2px', // スイッチボールの位置
        'switch-ball-move': '30px', // スイッチボールの移動量
      },
      colors: {
        'switch-bg': '#F1F1F1', // スイッチの背景色
        'switch-bg-active': '#2F2F2F', // アクティブ時のスイッチ背景色
        'switch-ball-bg': '#fff', // スイッチボールの背景色
      },
      borderWidth: {
        'switch-border': '1px', // スイッチのボーダー幅
      },
      borderColor: {
        'switch-border': '#fff', // スイッチのボーダー色
      }
    },
  },
  plugins: [],
}
