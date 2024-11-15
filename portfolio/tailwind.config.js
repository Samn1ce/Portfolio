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
        'gradient': 'linear-gradient(to bottom right, #191919, #101010, #050505, #020202)',
        'gradientModal': 'linear-gradient(to top left, #191919, #101010, #050505, #020202)',
        "dark-about": "linear-gradient(300deg, rgb(0, 0, 0) 40%, rgb(0, 26, 67) 20%, rgb(0, 26, 67) 10%, rgb(0, 0, 0) 45%, rgb(0, 0, 0) 100%)",
      },
      height: {
        '37': '37%',
        '25': '24%',
      },
      maxHeight: {
        'xl': '600px'
      },
      textColor: {
        'detail': '#4A4A4A',
        'js': '#EFD81D',
        'react': '#61DAFB',
        'vue': '#41B883'
      },
      fontSize: {
        'xxs': '10px'
      },
      width: {
        '45': '45%'
      },
      fontFamily: {
        edu: ['"Edu AU VIC WA NT Pre"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}