var webpack = require('webpack');
var path = require('path');
var utils = require('./utils')
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');

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
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        },
    },
    //模块
    module: {
        //针对后缀名添加各种loader
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },

}