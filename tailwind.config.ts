import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bfe0ff',
          300: '#94caff',
          400: '#62adff',
          500: '#3a8cff',
          600: '#2069f2',
          700: '#1a53c2',
          800: '#1848a2',
          900: '#173e85',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
