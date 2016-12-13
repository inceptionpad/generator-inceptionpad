const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    react: './src/page/react/index',
    jquery: './src/page/jquery/index',
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build',
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.web.js', '.json', '.js', '.jsx']
  },
  postcss: [require('autoprefixer')],
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
      loader: 'style-loader!css-loader!postcss-loader'
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|eot|woff2|woff|ttf)$/,
      loader: 'url-loader'
    }, {
      test: /\.html$/,
      loader: 'mustache-loader'
    }]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'common.js',
      name: 'common.js'
    })
  ]
};
