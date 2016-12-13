'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-incpad') + ' for creating scaffolds!'
    ));

    var prompts = [{
      type: 'list',
      name: 'initType',
      message: 'Choose your project type',
      choices: [
        { name: 'Fe: Multiple Pages Application', value: 'meapp' },
        { name: 'Fe: React Spa for webapp', value: 'rtspa' },
        { name: 'Fe: React component for web', value: 'rtc' }
      ]
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  default: function () {
    var map = {
      meapp: '../meapp',
      rtspa: '../rtspa',
      rtc: '../rtc'
    }
    var ns = 'incpad:' + this.props.initType
    var local = map[this.props.initType]

    if (ns) {
      this.composeWith(ns, {
        options: this.options
      }, {
        local: require.resolve(local)
      })
    }
  },

  install: function () {
    this.installDependencies();
  }
});
