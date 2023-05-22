const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        poppins: ['Poppins'],
        raleway: ['Raleway'],
        newake: ['Newake'],
        sonder: ['Sonder'],
        montserrat: ['Montserrat'],
        lexend: ['Lexend Mega'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
        spinner: 'spinner 10s linear infinite',
        expand: 'expand 0.5s linear forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        spinner: {
          '0%': { transform: 'rotate(0deg) scale(4)' },
          '100%': { transform: 'rotate(360deg) scale(4)' },
        },
        expand: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(5)' },
          '100%': { transform: 'scale(1)', opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

// @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
