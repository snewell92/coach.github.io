/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx}'],
  theme: {
    colors: {
      brand: "#87E4F7",
      dark: "#13485C",
      mid: "#AAB4C6",
      light: "#E5FEFF"
    },
    extend: {
      keyframes: {
        "bounce-left": {
          '0%, 100%': {
            transform: 'translateX(0%)',
            aimationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'translateX(-25%)',
            aimationTimingFunction: 'cubic-bezier(0,0,0.2,0)'
          },
        },
        "bounce-right": {
          '0%, 100%': {
            transform: 'translateX(0%)',
            aimationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'translateX(25%)',
            aimationTimingFunction: 'cubic-bezier(0,0,0.2,0)'
          },
        },
      },
      animation: {
        'bounce-left': 'bounce-left 1s linear infinite',
        'bounce-right': 'bounce-right 1s linear infinite'
      }
    },
  },
  plugins: [],
}
