/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        health: '#0052ff'
      }
    }
  },
  plugins: [require('daisyui')]
};
