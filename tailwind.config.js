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
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
      screens: {
        xs: '450px'
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.black-light'),
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
          blockquote: {
            color: theme('colors.grey-darker'),
          },
          em: {
            color: theme('colors.grey-darker'),
          }
        },
      },
      dark: {
        css: {
          color: theme('colors.grey-dark'),
          h1: {
            color: theme('colors.white'),
            fontWeight: 600,
          },
          h2: {
            color: theme('colors.grey'),
          },
          h3: {
            color: theme('colors.grey'),
          },
          blockquote: {
            color: theme('colors.grey-darker'),
          },
          em: {
            color: theme('colors.grey-darker'),
          }
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
