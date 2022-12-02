/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ff7a00',
        secondary: '#cbd5e1',
        dark: '#1e293b',
        card: '#e2e8f0'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
