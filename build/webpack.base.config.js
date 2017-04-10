/**
 * Created by huweijian on 2017/4/1.
 * @title
 */
let path = require('path');
let projectRoot = process.cwd();

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let vueConfig = require('./vue-loader.config');

vueConfig.loaders = {
    stylus: ExtractTextPlugin.extract({
        loader: 'css-loader!stylus-loader',
        fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
    })
};

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: [
            'es6-promise',
            'isomorphic-fetch',
            'vue',
            'vue-router',
            'vuex',
            'vuex-router-sync'
        ]
    },

    output: {
        path: path.resolve(projectRoot, './output/'),
        publicPath: '/',
        filename: '[name]_[hash:8].js',
        chunkFilename: '[name]_[hash:8].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
            filename: 'index.html'
        }),
        // new webpack.DefinePlugin({
        //     ENV: JSON.stringify('online')
        // }),
        new ExtractTextPlugin('style.css'),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            options: {
                __vueOptions__: vueConfig
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],

    externals: [

    ],

    module: {
        rules: [
            {
                test: /\.vue$/i,
                loader: 'vue-loader',
                options: vueConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.styl$/i,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test: /\.(jpg|png|gif|svg|mp4|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(projectRoot)
        ],
        extensions: ['.webpack.js', '.web.js', '.js', '.vue'],
        alias: {
            'assets': path.resolve(__dirname, '../business/assets')
        }
    }

};