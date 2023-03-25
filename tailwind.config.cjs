/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/layout/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        lato: ['Lato'],
        garamond: ['Garamond']
      },
      height: {
        110: '28rem',
        128: '32rem',
        140: '40rem',
        960: '60rem'
      },
      minHeight:
      {
        880: '55rem',
        1040: '66rem'
      }
    }
  },
  plugins: []
}
