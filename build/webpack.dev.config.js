/**
 * Created by huweijian on 2017/4/1.
 * @title
 */

let webpack = require('webpack');
let webpackConfig = require('./webpack.base.config.js');

let config = Object.assign({}, webpackConfig, {
    devtool: 'source-map',
    output: Object.assign({}, webpackConfig.output, {
        filename: '[name].js',
        chunkFilename: '[name].js'
    }),
    plugins: webpackConfig.plugins.concat([
        new webpack.DefinePlugin({
            ENV: JSON.stringify('local')
        })
    ]),
    devServer: {
        port: 8864,
        historyApiFallback: true,
        stats: 'errors-only',
        proxy: {
            // '^/ffapi/**': {
            //     target: 'http://ff.rongyi.com/',
            //     changeOrigin: 'true'
            // }
        }
    }
});

module.exports = config;
