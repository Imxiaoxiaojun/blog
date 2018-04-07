var path = require('path');
module.exports = {
    dev: {
        outputPath: path.resolve(__dirname, '../dist'),
        outputPublicPath: '/',
        port: 8000
    },
    prod: {
        outputPath: path.resolve(__dirname, '../dist'),
        outputPublicPath: '/'
    }
}