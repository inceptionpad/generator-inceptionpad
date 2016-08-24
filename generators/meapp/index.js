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
    mkdirp('src/page');
    mkdirp('src/page/jquery');
    mkdirp('src/page/react');
    mkdirp('src/module');
    mkdirp('src/module/article');
    mkdirp('src/module/login');
    mkdirp('src/module/user');
    mkdirp('src/component');
    mkdirp('src/component/counter');
    mkdirp('src/component/log');
    mkdirp('demo');

    utils.copyFile(this, 'src/page/jquery/index.js');
    utils.copyFile(this, 'src/page/jquery/index.less');
    utils.copyFile(this, 'src/page/react/index.js');
    utils.copyFile(this, 'src/page/react/index.less');
    utils.copyFile(this, 'src/module/article/index.js');
    utils.copyFile(this, 'src/module/article/index.less');
    utils.copyFile(this, 'src/module/login/index.js');
    utils.copyFile(this, 'src/module/user/index.html');
    utils.copyFile(this, 'src/module/user/index.js');
    utils.copyFile(this, 'src/module/user/index.less');
    utils.copyFile(this, 'src/component/log/index.js');
    utils.copyFile(this, 'src/component/counter/index.js');
    utils.copyFile(this, 'src/component/counter/index.less');
    utils.copyFile(this, 'webpack.config.js');
    utils.copyFile(this, 'demo/jquery.html');
    utils.copyFile(this, 'demo/react.html');

    var deps = {
      "babel-polyfill": "^6.9.1",
      "react": "^15.3.0",
      "react-dom": "^15.3.0",
      "bootstrap": "^3.3.7",
      "jquery": "^3.1.0",
      "pubsub-js": "~1.5.3",
      "refetch": "^0.2.0"
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
      "mustache-loader": "^0.3.1",
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
        "watch" "webpack --progress --colors --watch",
        "build": "webpack -p",
      }
    });
  },

  install: function () {
    this.npmInstall()
  }
})