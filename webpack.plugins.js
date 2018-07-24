const webpack = require("webpack");
const path = require('path');
const glob = require("glob");
//消除冗余的css
const purifyCssWebpack = require("purifycss-webpack");
// html模板
const htmlWebpackPlugin = require("html-webpack-plugin");
// 清除目录等
const cleanWebpackPlugin = require("clean-webpack-plugin");
//4.x之前用以压缩
const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
// 分离css
const extractTextPlugin = require("extract-text-webpack-plugin");
//静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");

const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = [
    new webpack.HotModuleReplacementPlugin(),
    // 调用之前先清除
    new cleanWebpackPlugin(["dist"]),
    // 4.x之前可用uglifyjs-webpack-plugin用以压缩文件，4.x可用--mode更改模式为production来压缩文件
    new uglifyjsWebpackPlugin(),
    // new copyWebpackPlugin([{
    //     from: path.resolve(__dirname, "src/assets"),
    //     to: './public'
    // }]),
    // 分离css插件参数为提取出去的路径
    new extractTextPlugin("css/index.css"),
    // 消除冗余的css代码
    new purifyCssWebpack({
        // glob为扫描模块，使用其同步方法
        paths: glob.sync(path.join(__dirname, "src/*.html"))
    }),
    // 全局暴露统一入口
    new webpack.ProvidePlugin({
        $: "jquery"
    }),
    // 自动生成html模板
    new htmlWebpackPlugin({
        filename: "index.html",
        inject: 'body',
        title: 'webpack',
        template: "./src/index.html",
        minify: { //压缩HTML文件
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: true //删除空白符与换行符
        }
    }),
    new htmlWebpackPlugin({
        filename: "index2.html",
        title: "page2",
        template: "./src/index2.html"
    }),
    new OptimizeCSSPlugin({safe: true})
]