module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  safelist: [
    {
      pattern: /^(?!(?:scroll|bottom)$)m\w?-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /w-+/g
    },
    {
      pattern: /h-+/g
    },
  ],
  theme: {
    extend: {
      colors: {
        'dapurkode-logo-orange': '#F28322',
        'dapurkode-logo-red': '#F23D3D',
        'dapurkode-orange': {
          900: '#9E4900',
          700: '#C76109',
          500: '#F28222',
          300: '#FFA04E',
          100: '#FFB776'
        },
        'dapurkode-red': {
          900: '#9E0400',
          700: '#C70E09',
          500: '#F22722',
          300: '#FF534E',
          100: '#FF7976'
        },
        'dapurkode-yellow': {
          900: '#9E6A00',
          700: '#C76109',
          500: '#F2AE22',
          300: '#FFC54E',
          100: '#FFD276'
        }
      },
      height:{
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }
    },
    fontFamily: {
      Montserrat: ['Montserrat, sans-serif'],
      Didact: ['Didact Gothic, sans-serif'],
      Karla: ['Karla, sans-serif']
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
