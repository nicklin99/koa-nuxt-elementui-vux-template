module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './../lib/h5.js'

    return config
  }
}
