/** @type {import('tailwindcss').Config} */
// TODO: This + a few other components were largely copied from utdnebula/platform - might be worth publishing some of those packages for use in this + other projects
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      backgroundImage: {
        'brand-gradient': "url('/gradient.png')"
      },
      colors: {
        'haiti': '#090b2c', // brand black
        'persimmon': {
          50: '#ffe5de',
          100: '#ffcabd',
          200: '#ffb09d',
          300: '#ff947e',
          400: '#ff7760',
          500: '#ff5743', // brand accent, danger
          600: '#d14a39',
          700: '#a43d2e',
          800: '#793025',
          900: '#51231b',
        },
        'royal': '#573dff', // brand secondary (dark)
        'cornflower': { 
          50: '#eae4ff',
          100: '#d3caff', // ~periwinkle
          200: '#bcb0fe',
          300: '#a297fd',
          400: '#857efc',
          500: '#6266fa', // brand primary
          600: '#5455cc',
          700: '#45449f', // ~royal
          800: '#363475',
          900: '#28254d'
        }, 
        'periwinkle': '#c2c8ff', // brand secondary (light)
        'shade': '#101828' // drop shadow color from shipfaster ui
      },
      fontFamily: {
        'kallisto': ['var(--font-kallisto)', 'Roboto', 'sans-serif'],
        'inter': ['var(--font-inter)', 'Roboto', 'sans-serif']
      },
      width: {
        'wide': '32rem'
      },
      animation: {
        "slow-pulse": 'subtle-pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        "subtle-pulse": {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle closest-side, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: []
};
