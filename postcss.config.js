module.exports = {
  plugins: {
    'postcss-url': { url: 'inline'},
    'cssnano': {
      'autoprefixer': true,
    },
    'postcss-nested': {},
    'postcss-variables': {
      globals: {
        containerWidth: '540px',
        inputHeight: '96px',
        colors: {
          primaryText: '#050038',
          accentText: '#fff',
          primaryBg: '#fff',
          accentBg: '#4262ff',
          accentHoverBg: '#6382ff',
          secondaryBg: '#f8f8f7',
          border: '#c3c2cf',
          errorBorder: '#d92929',
          shadow: 'rgba(0, 0, 0, 0.2)',
          emailValidBg: 'rgba(102, 153, 255, 0.2)',
        }
      }
    },
  }
};