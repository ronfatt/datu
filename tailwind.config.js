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
          DEFAULT: '#090B0E',
          dark: '#050608',
          light: '#12151B',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          medium: '#C5A059',
          dark: '#9A7B38',
          bronze: '#7A6028',
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
        sand: {
          DEFAULT: '#E8D5B5',
          light: '#F4EADA',
          dark: '#D0BA94',
        },
        offwhite: '#F8FAFA',
        silver: '#E2E8F0',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 12px 30px -4px rgba(212, 175, 55, 0.2)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #9A7B38 100%)',
        'gold-subtle': 'linear-gradient(180deg, rgba(212, 175, 55, 0.15) 0%, rgba(9, 11, 14, 0.95) 100%)',
      },
    },
  },
  plugins: [],
}
