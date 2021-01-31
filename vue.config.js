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
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/scss/buefy.scss';`,
      },
    },
  },
}