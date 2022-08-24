/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1B1B1B",
          // "primary": "#102155",
          secondary: "#FFC000",
          accent: "#F5F5F5",

          neutral: "#F3F4F6",
          sidebar: "#081A51",
          "light-white": "rgba(255,255,255,0.17)",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
