module.exports = {
  prefix: 'tw-',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderStyle: ['hover'],
    }
  },
  plugins: [],
}
