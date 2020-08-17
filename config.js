let customConfig = {}

try {
  Object.assign(customConfig, require('./custom.config.js'))
} catch {}

module.exports = {
  port: Number(process.env.PORT) || 8080,

  api: 'https://api.devcord.com',

  meta: {
    title: 'devcord',
    description: 'a cool website.',
    thumbnail: '',
    themeColor: '',//'#EB7A96',
    url: 'https://devcord.com'
  },

  ...customConfig,
}
