const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        index: './fe/src/index'
    },
    output: {
        path: path.join(__dirname, 'fe', 'build'),
        publicPath: '/build',
        filename: '[name].js'
    },
    resolve: {
        modulesDirectories: ['node_modules', './src', './fe/src/'],
        extensions: ['', '.web.js', '.json', '.js']
    },
    postcss: [require('autoprefixer')],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        },  {
            test: /\.less$/,
            loader: 'style-loader!css-loader!postcss-loader!less-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|eot|woff2|woff|ttf)$/,
            loader: 'url-loader'
        }]
    },
    plugins: []
};
