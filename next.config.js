const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const { i18n } = require('./next-i18next.config.js');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development', // disabled in development
    dest: 'public',
    runtimeCaching,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  i18n,
});
