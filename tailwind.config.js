/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: "#0d904d",
        lightBlack: "#333333",
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '850px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
