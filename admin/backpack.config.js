module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './../lib/index.js'

    return config
  }
}
