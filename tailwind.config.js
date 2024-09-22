/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        fontFamily: {
        sans: ['Regular', 'sans-serif'],
        primaryMedium: ['Medium', 'sans-serif'],
        primarybold: ['Bold', 'sans-serif'],

      }
    },
  },
  plugins: [],
}

