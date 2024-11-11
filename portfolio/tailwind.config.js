/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bgColor': '#101010'
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #191919, #141414)',
      },
      height: {
        '37': '37%',
        '25': '24%',
      },
      maxHeight: {
        'xl': '576px'
      },
      textColor: {
        'detail': '#4A4A4A'
      }
    },
  },
  plugins: [],
}