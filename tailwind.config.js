/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "close-menu": "url('./images/icon-close.svg')",
          "open-menu": "url('./images/icon-hamburger.svg')"
      },
    },
  },
  colors: {
    "bright-red": "hsl(12, 88%, 59%)",
    "dark-blue": "hsl(228, 39%, 23%)",
    "dark-grayish-blue": "hsl(227, 12%, 61%)",
    "very-dark-blue": "hsl(233, 12%, 13%)",
    "very-pale-red": "hsl(13, 100%, 96%)",
    "vary-light-gray": "hsl(0, 0%, 98%)",
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
