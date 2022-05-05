const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    WebpackDevConfig: {
        mode: 'development',
        entry: path.join(__dirname, '../src/index.ts'),
        output: {
            path: path.join(__dirname, '../'),
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
        devServer: {
            open: true,
            hot: true,
            port: 3000
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