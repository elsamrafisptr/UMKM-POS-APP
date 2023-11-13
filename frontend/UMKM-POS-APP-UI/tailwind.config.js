/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ['8px', '120%'],
      sm: ['11px', '120%'],
      base: ['14px', '120%'],
      lg: ['18px', '120%'],
      xl: ['24px', '120%'],
      '2xl': ['41px', '120%'],
      '3xl': ['54px', '120%'],
    },
    extend: {
      keyframes: {
        slide: {
          '0%': { left: '0' },
          '100%': { left: '-100%' },
        }
      }
    },
  },
  plugins: [],
};
