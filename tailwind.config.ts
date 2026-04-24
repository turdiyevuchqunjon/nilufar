import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#27B7C3',
          light: '#7ED9D0',
          dark: '#11929F',
          mint: '#3CC0A8',
          deep: '#0C4655'
        }
      },
      boxShadow: {
        glow: '0 20px 60px rgba(39, 183, 195, 0.24)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(12,70,85,0.08) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;
