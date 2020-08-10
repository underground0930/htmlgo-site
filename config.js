const pkg = require('./package')

const title = 'HTMLGO'
const site = 'https://htmlgo.site/'
const img = 'https://htmlgo.site/img/ogp_new.png'
const description = 'WEB技術を書き連ねるサイト'

const meta = [
  { charset: 'utf-8' },
  {
    name: 'viewport',
    content: 'width=device-width,user-scalable=no,initial-scale=1.0',
  },
  { name: 'format-detection', content: 'telephone=no' },
  { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
  { hid: 'description', name: 'description', content: description },
]

const twitterMeta = [
  { hid: 'twitter:title', name: 'twitter:title', content: title },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: description,
  },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: img,
  },
]

const ogMeta = [
  { property: 'og:site_name', content: title },
  { hid: 'og:title', property: 'og:title', content: title },
  {
    hid: 'og:description',
    property: 'og:description',
    content: description,
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: img,
  },
  { hid: 'og:url', property: 'og:url', content: site },
  { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
  { hid: 'og:image:height', property: 'og:image:height', content: '630' },
]

const head = {
  htmlAttrs: {
    lang: 'ja',
    'xmlns:og': 'http://ogp.me/ns#',
    'xmlns:fb': 'http://www.facebook.com/2008/fbml',
  },
  title,
  meta: meta.concat(twitterMeta, ogMeta),
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/icon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/icon-16x16.png',
      sizes: '16x16',
    },
    { rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png' },
    { rel: 'manifest', href: '/manifest.json' },
    { hid: 'canonical', rel: 'canonical', href: site },
  ],
}

// https://nuxtjs.org/api/configuration-build#html-minify

const htmlMinify = {
  collapseBooleanAttributes: true,
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  processConditionalComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  trimCustomFragments: true,
  useShortDoctype: true,
}

module.exports = {
  env: {},
  head,
  ...htmlMinify,
}
