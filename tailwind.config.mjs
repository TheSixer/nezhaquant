import { heroui } from '@heroui/react'

const config = {
  content: ['./src/**/*.{ts,tsx}', './node_modules/@heroui/theme/dist/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [heroui()],
}

export default config
