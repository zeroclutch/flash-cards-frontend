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
  // Make variables available in SASS for every components
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/scss/buefy.scss';`,
      },
    },
  },
}