const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development', // disabled in development
    dest: 'public',
    runtimeCaching,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
})
