const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
      react: './fe/src/page/react/index',
      jquery: './fe/src/page/jquery/index',
    },
    output: {
        path: path.join(__dirname, 'fe', 'build'),
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
            test: /\.(png|jpg|jpeg|gif|svg|eot|woff2|woff|ttf)$/,
            loader: 'url-loader'
        }, {
            test: /\.html$/,
            loader: 'mustache-loader'
        }]
    },
    plugins: [
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
