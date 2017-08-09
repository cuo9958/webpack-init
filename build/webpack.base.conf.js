var webpack = require('webpack');
var path = require('path');
var config = require('../config');

//简写目录地址
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    //入口函数，可以有多个
    entry: {
        app: './src/main.js'
    },
    //配置导出地址
    output: {
        //导出的文件夹
        path: config.build.assetsRoot,
        //导出文件的命名
        filename: "[name]-[hash:8].js",
        //添加地址前缀
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    //配置引用
    resolve: {
        //引用的插件
        modules: [
            "node_modules"
        ],
        //注册后缀
        extensions: ['.js', '.vue', '.json'],
        //注册别名
        alias: {
            '@': resolve('src')
        },
    },
    //模块
    module: {
        //针对后缀名添加各种loader
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
            }
        ]
    },

}