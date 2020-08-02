module.exports = {
  plugins: {
    'postcss-url': { url: 'inline'},
    'cssnano': {
      'autoprefixer': true,
    },
    'postcss-nested': {},
  }
};