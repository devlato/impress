// Modules available in application sandbox

module.exports = {

  api: [
    'os', 'cluster', 'domain', 'crypto', 'util',
    'net', 'http', 'https', 'dgram', 'dns', 'tls',
    'url', 'path', 'punycode', 'querystring', 'string_decoder',
    'fs', 'stream', 'zlib', 'events', 'readline',
    'definition',
    'async',
    'iconv',
    'colors',
    'zipstream',
    'stringify',
    'csv'
  ],

  plugins: [
    'impress.events',
    'impress.sse',
    'api.uglify'
  ]

}
