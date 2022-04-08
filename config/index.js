const { WebpackDevConfig } = require('./dev.webpack');
const { WebpackProdConfig } = require('./prod.webpack');

const config = process.env.NODE_ENV ? WebpackDevConfig : WebpackProdConfig;

module.exports = config;