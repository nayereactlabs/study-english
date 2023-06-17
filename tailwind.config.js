/** @type {import('tailwindcss').Config} */

module.exports = {
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'valentine',
      {
        soft: {
          primary: '#0d6efd',
          secondary: '#d60aa6',
          accent: '#9df3f9',
          neutral: '#322A37',
          'base-100': '#403441',
          info: '#2E8DE0',
          success: '#139A66',
          warning: '#BF660D',
          error: '#EA7B95'
        }
      }
    ]
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
