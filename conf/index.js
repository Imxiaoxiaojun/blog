// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report,
    proxyTable: {
      '/api': {
        target: "http://localhost:8080",
        pathRewrite: {"^/api" : "/"} //后面可以使重写的新路径，一般不做更改
      }
    }
  },
  dev: {
    env: require('./dev.env'),
    port: 8070,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: false,
    proxyTable: {
      '/api': {
        target: "http://localhost:8080",
        pathRewrite: {"^/api" : "/"} //后面可以使重写的新路径，一般不做更改
      }
    }
  }
}
