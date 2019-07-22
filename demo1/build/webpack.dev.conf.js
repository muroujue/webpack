const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let env = process.env.NODE_ENV == "development" ? "development" : "production";

module.exports = {
    // 指定入口文件
    entry: './src/main.js',
    // 出口设置，output值为一个对象
    output: {
        filename: './bundle.js' //输出文件的文件名
    },
    mode: env,
    plugins: [new HtmlWebpackPlugin],
    devServer: {
        //hot: true, //模块热加载
        open: true, //服务启动后，自动在浏览器中打开
        port: 9000
    }
}