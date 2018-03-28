module.exports = {
  rootDir: '.',
  srcDir: '.',
  router: {
    base: '/'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'starter',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Global CSS
   */
  css: [
    '~assets/css/main.css',
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },
  plugins: [{
    src: '~/plugins/element-ui',
    ssr: false
  }],
  build: {
    vendor: ['~/plugins/element-ui'],
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}