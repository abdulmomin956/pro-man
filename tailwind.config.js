/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5048E5",
          "secondary": "#121828",
          "accent": "#F5F5F5",

          "neutral": "#adadad",
          "sidebar": "#081A51",
          "light-white": "rgba(255,255,255,0.17)",
          "bgColor": "#F9FAFC",

          "base-100": "#ffffff",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
          "txtColor": "#000000"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
