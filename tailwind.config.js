module.exports = {
  prefix: 'tw-',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    animation: {
      float: "float 3s infinite",
      refloat: "refloat 3s infinite",
    },
    keyframes: {
      float: {
        '0%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
        '50%': {
          transform: 'translateY(-20px)',
          animationTimingFunction: 'ease-in-out',
        },
        '100%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
      },
      refloat: {
        '0%': {
          transform: 'translateY(-20px)',
          animationTimingFunction: 'ease-in-out',
        },
        '50%': {
          transform: 'translateY(0px)',
          animationTimingFunction: 'ease-in-out',
        },
        '100%': {
          transform: 'translateY(-20px)',
          animationTimingFunction: 'ease-in-out',
        },
      },
    }
  },
  variants: {
    extend: {
      borderStyle: ['hover'],
    }
  },
  plugins: [],
}
