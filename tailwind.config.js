/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'violet-blue': 'rgba(86, 99, 177, 1)',
        'purple-dark': 'rgba(62, 14, 77, 1)',
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'MyFont': ['"My Font"', 'serif']
      },
      backgroundImage: {
        'fondo': "url('src/img/fondo.png')",
        'dog': "url('src/img/perrito.png')",
      },
      width: {
        '594': '594px',
        '550': '550px',
        '222': '222px',
        '219': '219px',
      },
      height: {
        '314': '314px',
        '288': '288px',
        '250': '250px'
      },
      fontSize: {
        '3-2xl' : '32px'
      }
    },
  },
  plugins: [],
}

