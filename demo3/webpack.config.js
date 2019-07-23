const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let env = process.env.NODE_ENV == "development" ? "development" : "production";

module.exports = {
    mode: env,
    // 指定入口文件
    entry: {
        index: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, './src/main.js')]
    },
    // 出口设置，output值为一个对象
    output: {
        filename: './[hash]bundle.js', //输出文件的文件名
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(png|jpg|gif|jpeg|svg)$/,
            use: [
                'file-loader'
            ]
        }]
    }
}