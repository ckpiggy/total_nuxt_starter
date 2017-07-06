module.exports = {
  build: {
    postcss: [
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ]
  },
  srcDir: 'nuxt/',
  head: {
    link: [
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css'}
    ]
  }
}