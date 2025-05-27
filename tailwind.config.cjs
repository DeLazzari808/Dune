/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBg: '#121212',
        cardBg: '#1E1E1E',
        textMain: '#E0E0E0',
        textSecondary: '#A0A0A0',
        borderLight: '#424242',
        buttonBg: '#1E1E1E',
        buttonBorder: '#E0E0E0',
        buttonText: '#E0E0E0',
        accent: '#FFFFFF',
      },
    },
  },
  plugins: [],
} 