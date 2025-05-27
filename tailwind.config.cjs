/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Não precisamos adicionar cores aqui por enquanto,
      // pois estamos a usar o objeto 'colors' no nosso código JavaScript.
    },
  },
  plugins: [],
} 