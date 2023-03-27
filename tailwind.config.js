const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js",
    "./static/src/**/*.css"
  ],
  theme: {
      colors: {
        // Configure your color palette here
        'primary': {
          900: '#181818'
        },
        'branco': {
          50: '#FFFFFF',
          100: '#c4c4c4',
          200: '#F3F4F6'
        },
        'preto': {
          50: '#000000'
        },
        'yellow': {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308'
        },
        'neu': {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        'esmeralda': {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        'red': {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D'
        },
        'indigo': {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366f1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81'
        },
        'pink': {

          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843'
        }
    }
  },

  plugins: [
    require("daisyui"), // https://daisyui.com/components/card/
    require('tailwind-scrollbar-hide'), // https://www.npmjs.com/package/tailwind-scrollbar-hide
    require("daisyui")
  ],
}

/** 
 * npx tailwindcss -i ./static/src/style.css -o ./static/src/main.css --watch   **/

