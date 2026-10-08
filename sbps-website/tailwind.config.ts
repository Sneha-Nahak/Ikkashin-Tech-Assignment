import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#F8F6F0',
        'bg-alt': '#E6F0E9',
        'text': '#1A1D1B',
        'text-muted': '#5C665F',
        'border': '#DAD8CF',
        'primary': '#1F5E3B',
        'secondary': '#5E9B73',
        'accent': '#C8372D',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '500ms',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, rgba(200, 55, 45, 0.08) 0%, rgba(200, 55, 45, 0) 100%)',
        'accent-gradient-hover': 'linear-gradient(135deg, rgba(200, 55, 45, 0.12) 0%, rgba(200, 55, 45, 0.02) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
