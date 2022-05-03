const path = require('path');
const { WebpackDevConfig } = require('./dev.webpack');
const { WebpackProdConfig } = require('./prod.webpack');

const config = process.env.NODE_ENV ? WebpackDevConfig : WebpackProdConfig;

config.resolve = {
    // alias: {
    //     '~/src': path.join(__dirname, '../src')
    // },
    extensions: ['.js', '.ts']
}

module.exports = config;