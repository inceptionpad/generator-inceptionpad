const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.web.js', '.json', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader', 'postcss-loader')
        // loader: 'style-loader!css-loader!postcss-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
        // loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'url-loader'
    }]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
