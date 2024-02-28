/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'preto-nav': '#000000',
        'branco': '#ffff',
        'amarelo': "#F7CB46"
      },
      backgroundImage: {
        'hero': "url('/hero.png')",
      }
    },
  },
  plugins: [],
}

