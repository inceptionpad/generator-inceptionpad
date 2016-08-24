const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
      index: ['./src/index'],
      demo: './src/demo'
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build',
        filename: '[name].js'
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
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'url-loader'
        }]
    },
    plugins: [
    ]
};
