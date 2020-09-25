// const plugin = require('tailwindcss/plugin')

module.exports = {
  dark: 'class',
  experimental: {
      darkModeVariant: true,
  },
  theme: {
    extend: {
      colors: {
        black: '#0f1c23',
        'black-light': '#1b2b34',
        blue: '#5a9bcf',
        teal: '#5fb3b3',
        'teal-dark': '#1A8384',
        grey: '#d8dee9',
        'grey-light': '#f4f6f9',
        'grey-dark': '#c2c7d0',
        'grey-darker': '#65737e',
        'grey-darkest': '#343d46',
        'red-light': '#ed6f7d',
        red: '#b3545e',
        purple: '#c5a5c5',
        'purple-dark': '#a979a9',
        yellow: '#fac863',
        'yellow-dark': '#d68232',
        white: '#fff',
      },
      inset: {
        '100': '100%',
      },
      screens: {
        xs: '450px'
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          h1: {
            color: theme('colors.black'),
            fontWeight: 600,
          },
          h2: {
            color: theme('colors.teal'),
          },
          h3: {
            color: theme('colors.teal'),
          },
          h4: {
            color: theme('colors.gray.300'),
          },
          h5: {
            color: theme('colors.gray.300'),
          },
          h6: {
            color: theme('colors.gray.300'),
          },
        },
      },
      dark: {
        css: {
          color: theme('colors.grey-dark'),
          h1: {
            color: theme('colors.gray.300'),
            fontWeight: 600,
          },

          strong: {
            color: theme('colors.gray.300'),
          },

          code: {
            color: theme('colors.gray.300'),
          },

          figcaption: {
            color: theme('colors.gray.500'),
          },
        },
      },
    }),
  },
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {
    typography: ['responsive', 'dark']
  },
  plugins: [require('@tailwindcss/typography')],
}
