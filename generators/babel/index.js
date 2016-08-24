var generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  prompting: function () {
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
  },

  install: function () {
    this.npmInstall()
  }
})
