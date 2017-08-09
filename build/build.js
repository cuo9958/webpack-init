process.env.NODE_ENV = 'production'

var webpack = require('webpack');
var config = require('./webpack.prod.conf');


webpack(config, function (err, stats) {
    console.log(err);
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')
});