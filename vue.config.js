module.exports = 
{
  devServer: {
    proxy: {
        '^/api': {
            target: 'http://localhost:5000',
            changeOrigin: true,
            secure: false,
        },
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/flash-me/'
  : '/',
  // Make variables available in SASS for every components
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/scss/buefy.scss';`,
      },
    },
  },
}