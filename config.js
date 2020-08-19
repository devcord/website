let customConfig = {}

try {
  Object.assign(customConfig, require('./custom.config.js'))
} catch {}

module.exports = {
  port: Number(process.env.PORT) || 8080,

  api: 'https://api.devcord.com',

  meta: {
    title: 'devcord',
    description: 'Devcord is a community that brings together web developers of all experience levels. Get help with your code, connect with other web developers, discuss your current project and chat about your favourite languages, libraries, and frameworks.',
    thumbnail: '/img/animated-logo-optimized-resized.gif',
    themeColor: '#f0134d',
    url: 'https://devcord.com'
  },

  ...customConfig,
}
