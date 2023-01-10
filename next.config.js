module.exports = {
  // i18n: {
  //   locales: ['en-US', 'ja'],
  //   defaultLocale: 'ja',
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  reactStrictMode: true,
  trailingSlash: true,
  experimental: { appDir: true },
  images: {
    domains: ['images.microcms-assets.io', 'assets.st-note.com', 'res.cloudinary.com'],
  },
}
