/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary-black': '#272A31',
        'primary-orange': '#EC5242',
        'primary-grey': '#D3D3D3',
      },
      backgroundImage: {
        'hero-header':
          "url('./img/backgrounds/pexels-nick-collins-1293120.jpg')",
        'hero-background':
          "url('./img/backgrounds/hero-background.jpg')",
      },
    },
  },
  plugins: [],
};
