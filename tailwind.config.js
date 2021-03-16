const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#d6cde3',
          200: '#ac9cc6',
          300: '#836aaa',
          400: '#59398d',
          500: '#300771',
          600: '#26065a',
          700: '#1d0444',
          800: '#13032d',
          900: '#0a0117'
        }
      },
      fontFamily: {
        sans: [
          'Apple SD Gothic Neo',
          '-apple-system',
          ...defaultTheme.fontFamily.sans
        ]
      },
      backgroundImage: theme => ({
        hero: "url('~assets/imgs/img_mockup_hero.png')",
        'brand-story': "url('~assets/imgs/dsc_8869.png')"
      })
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
