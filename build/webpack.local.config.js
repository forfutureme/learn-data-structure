/**
 * Created by huweijian on 2017/5/2.
 * @title
 */
let projectRoot = process.cwd();
let path = require('path');
let webpack = require('webpack');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let webpackConfig = require('./webpack.base.config.js');
let config = Object.assign({}, webpackConfig, {
    output: {
        path: path.resolve(projectRoot, './local/'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        library: 'webpackNumbers',
        libraryTarget: 'amd'
    },
    plugins: webpackConfig.plugins.concat([
        new cleanWebpackPlugin(['local'],{
            root: path.resolve(projectRoot),
            verbose: true,
            dry: false,
        }),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('LOCAL')
        }),
        //这个插件查找相似块和文件,同时将他们合并,为用户更好的缓存
        //new webpack.optimize.DedupePlugin(),

        //这个插件根据你应用中一些模块的使用情况来对这些模块进行优化
        // new webpack.optimize.OccurenceOrderPlugin(),

        //这个插件压缩所有最终束的JavaScript代码

    ])
});

module.exports = config;