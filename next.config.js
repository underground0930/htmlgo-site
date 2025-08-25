module.exports = {
  // i18n: {
  //   locales: ['en-US', 'ja'],
  //   defaultLocale: 'ja',
  // },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
  },
}
