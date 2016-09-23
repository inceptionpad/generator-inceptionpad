var generators = require('yeoman-generator')
var mkdirp = require('mkdirp');
var utils = require('../utils');

module.exports = generators.Base.extend({
  prompting: function () {
  },

  default: function () {
    this.composeWith('incpad:babel', {
      options: {}
    }, {
      local: require.resolve('../babel')
    })
  },

  writing: function () {
    mkdirp('src');
    mkdirp('demo');

    utils.copyFile(this, 'src/index.js');
    utils.copyFile(this, 'src/index.less');
    utils.copyFile(this, 'src/demo.js');
    utils.copyFile(this, 'webpack.config.js');
    utils.copyFile(this, 'demo/index.html');

    var deps = {
      "babel-polyfill": "^6.9.1",
      "react": "^15.3.0",
      "react-dom": "^15.3.0"
    };
    var devDeps = {
      "assets-webpack-plugin": "^3.4.0",
      "autoprefixer": "^6.4.0",
      "babel-core": "^6.11.4",
      "babel-loader": "^6.2.4",
      "babel-preset-es2015": "^6.9.0",
      "babel-preset-react": "^6.11.1",
      "babel-preset-stage-0": "^6.5.0",
      "css-loader": "^0.23.1",
      "extract-text-webpack-plugin": "^1.0.1",
      "file-loader": "^0.9.0",
      "less": "^2.7.1",
      "less-loader": "^2.2.3",
      "postcss-loader": "^0.9.1",
      "style-loader": "^0.13.1",
      "url-loader": "^0.5.7",
      "webpack": "^1.13.1",
      "webpack-dev-server": "^1.14.1"
    };
    utils.writeDependencies(this, deps, devDeps)
    utils.extendPackageJSON(this, {
      "main": "src/index.js",
      "scripts": {
        "dev": "webpack-dev-server --inline --content-base ./demo",
        "watch": "webpack --progress --colors --watch",
        "build": "webpack -p"
      }
    });
  },

  install: function () {
    this.npmInstall()
  }
})
