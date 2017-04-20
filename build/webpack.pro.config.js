/**
 * Created by huweijian on 2017/4/1.
 * @title
 */
let projectRoot = process.cwd();
let path = require('path');
let webpack = require('webpack');
let cleanWebpackPlugin = require('clean-webpack-plugin');
let webpackConfig = require('./webpack.base.config.js');
let config = Object.assign({}, webpackConfig, {
    plugins: webpackConfig.plugins.concat([
        new cleanWebpackPlugin(['dist'],{
            root: path.resolve(projectRoot),
            verbose: true,
            dry: false,
        }),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('PRO')
        }),
        //这个插件查找相似块和文件,同时将他们合并,为用户更好的缓存
        //new webpack.optimize.DedupePlugin(),

        //这个插件根据你应用中一些模块的使用情况来对这些模块进行优化
        // new webpack.optimize.OccurenceOrderPlugin(),

        //这个插件压缩所有最终束的JavaScript代码
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,    //?丑化压缩
            compress: {
                //http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
                warnings: false    //抑制丑化警告
            }
        })
    ])
});

module.exports = config;
