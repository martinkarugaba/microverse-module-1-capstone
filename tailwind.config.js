/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './about.html', './js/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary-black': '#272A31',
        'primary-orange': '#EC5242',
        'primary-grey': '#D3D3D3',
        'off-white': '#FAFAFA',
      },
      backgroundImage: {
        'hero-header':
          "url('./img/backgrounds/pexels-nick-collins-1293120.jpg')",
        'hero-background':
          "url('./img/backgrounds/hero-background.jpg')",
        'conference-1':
          'url(./img/about_page/pexels-icsa-1708988.jpg)',
      },
      spacing: {
        small: '3px',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
