var generators = require('yeoman-generator')
var mkdirp = require('mkdirp');
var utils = require('../utils');
var path = require('path');

module.exports = generators.Base.extend({
  prompting: function () {
    var prompts = [{
      type: 'confirm',
      name: 'createFeDir',
      message: 'Create files in `fe` dir?'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  default: function () {
    this.composeWith('incpad:babel', {
      options: {}
    }, {
      local: require.resolve('../babel')
    })
  },

  writing: function () {
    var self = this;
    var isFeDir = this.props.createFeDir;
    var createPath = utils.createPath.bind(null, isFeDir);
    [
      'src',
      'src/page',
      'src/page/jquery',
      'src/page/react',
      'src/component',
      'src/component/article',
      'src/component/login',
      'src/component/user',
      'src/component/counter',
      'src/component/log',
      'src/page/detail',
      'demo'
    ].forEach(function(item) {
      mkdirp(createPath(item));
    });

    [
      'src/page/jquery/index.js',
      'src/page/jquery/index.less',
      'src/page/react/index.js',
      'src/page/react/index.less',
      'src/component/article/index.js',
      'src/component/article/index.less',
      'src/component/login/index.js',
      'src/component/user/index.html',
      'src/component/user/index.js',
      'src/component/user/index.less',
      'src/component/log/index.js',
      'src/component/counter/index.js',
      'src/component/counter/index.less',
      'demo/jquery.html',
      'demo/react.html',
      '.gitignore'
    ].forEach(function(item) {
      utils.copyFile(self, item, createPath(item));
    });

    utils.copyFile(this, isFeDir ? 'fe.webpack.config.js' : 'webpack.config.js', 'webpack.config.js');

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
        "dev": "webpack-dev-server --port 8823 --inline --content-base " + path.join((isFeDir ? './fe' : './'), 'demo'),
        "watch": "webpack --progress --colors --watch",
        "build": "webpack -p"
      }
    });
  },

  install: function () {
    this.npmInstall()
  }
})
