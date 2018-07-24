const path = require('path');
const pluginsConfig = require("./webpack.plugins.js");
const rulesConfig = require("./webpack.rules.js");
module.exports = {
    entry:
        ['./src/js/main.js', './src/js/page.js'], // 多入口文件
    output: {
        path: path.resolve(__dirname, 'dist/'),
        // 打包多出口文件
        filename: 'js/[name].bundle.js'
    },//"webpack-dev-server --content-base ./ --mode development --open --inline --hot --compress --history-api-fallback --config webpack.config.js"
    plugins: pluginsConfig,
    // devServer: {
    //     contentBase: path.resolve(__dirname, "dist/"),
    //     host: "localhost",
    //     port: "8090",
    //     open: true, // 开启浏览器
    //     hot: true   // 开启热更新
    // },
    // devtool: "source-map",  // 开启调试模式
    module: {
        rules: rulesConfig
    }


}