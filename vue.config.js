module.exports = 
{
  devServer: {
    proxy: {
        '^/api': {
            target: 'https://flashme-backend.herokuapp.com',
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