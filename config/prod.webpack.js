const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    WebpackProdConfig: {
        mode: 'production',
        entry: path.join(__dirname, '../src/index.ts'),
        output: {
            path: path.join(__dirname, '../dist'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader'
                },
                {
                    test: /\.less$/,
                    use: ['style-loader', 'css-loader', 'less-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Excel',
                template: path.join(__dirname, '../public/index.html'),
                filename: 'index.html'
            })
        ]
    }
}