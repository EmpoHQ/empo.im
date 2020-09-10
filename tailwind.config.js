// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  important: true,
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1100px'
      },
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
        hero: "url('~assets/imgs/img_mockup_hero.png')"
      })
    }
  },
  plugins: [require('@tailwindcss/ui')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
