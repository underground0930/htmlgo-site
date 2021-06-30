const axios = require('axios')
const config = require('./config')
require('dotenv').config()
const { MICROCMS_API_KEY } = process.env
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
  ...config,
  mode: 'universal',
  target: 'static',
  srcDir: 'src/',
  [isDev ? 'publicRuntimeConfig' : 'privateRuntimeConfig']: {
    apikey: MICROCMS_API_KEY,
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/reset.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/setMeta.js',
    '@/plugins/sanitize.js',
    '@/plugins/components.js',
    '@/plugins/computed.js',
    '@/plugins/filters.js',
    { src: '@/plugins/ga.js', ssr: false },
    { src: '@/plugins/checkEnableSubmit.js', ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@/modules/getFeeds',
  ],
  styleResources: {
    scss: ['@/assets/scss/include/*.scss'],
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  server: {
    host: '0.0.0.0',
  },

  router: {
    trailingSlash: true,
  },

  sitemap: {
    trailingSlash: true,
    hostname: 'https://htmlgo.site',
    routes: async () => {
      try {
        const { data } = await axios.get(
          'https://htmlgo.microcms.io/api/v1/works',
          {
            headers: { 'X-API-KEY': MICROCMS_API_KEY },
          }
        )
        return data.contents.map((v) => `/works/${v.slug}/`)
      } catch (err) {
        return []
      }
    },
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
