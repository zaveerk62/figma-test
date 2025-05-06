/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'd-green': '#005A2F',
      'l-green': '#86AF35',
      'cream': '#E1D6C2',
    },
    fontFamily: {
      lilita: ['Lilita One', 'sans-serif'],
      lily: ['Lily Script One', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    },
  },
  plugins: [],
};
