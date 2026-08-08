/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071923',
          dark: '#040F16',
          light: '#0F2C3D',
        },
        ocean: {
          DEFAULT: '#087EA4',
          light: '#0AA5D8',
          dark: '#055A77',
        },
        turquoise: {
          DEFAULT: '#18C5C8',
          light: '#4FE0E2',
          dark: '#11989A',
        },
        aqua: {
          DEFAULT: '#DFF9F8',
          light: '#F2FFFF',
        },
        sand: {
          DEFAULT: '#E8D5B5',
          light: '#F4EADA',
          dark: '#D0BA94',
        },
        offwhite: '#F8FAFA',
        darktext: '#102127',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(7, 25, 35, 0.12)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'card': '0 4px 20px -2px rgba(7, 25, 35, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(8, 126, 164, 0.18)',
      },
    },
  },
  plugins: [],
}
