import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0f172a'
      }
    },
  },
  plugins: [],
} satisfies Config
