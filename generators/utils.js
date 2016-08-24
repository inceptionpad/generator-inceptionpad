var extend = require('deep-extend')

module.exports = {
  copyFile, writeDependencies, extendPackageJSON
};

function writeDependencies (generator, deps, devDeps) {
  extendPackageJSON(generator, {
    dependencies: deps,
    devDependencies: devDeps
  })
}

function extendPackageJSON (generator, others) {
  var pkg = readPackageJSON(generator)
  extend(pkg, others)
  writePackageJSON(generator, pkg)
}

function readPackageJSON (generator) {
  var pkgFile = generator.destinationPath('package.json')
  return generator.fs.readJSON(pkgFile) || { }
}

function writePackageJSON (generator, pkg) {
  var pkgFile = generator.destinationPath('package.json')
  generator.fs.writeJSON(pkgFile, pkg)
}

function copyFile (generator, src, dist) {
  if (src === undefined || !generator || !generator.fs) return;
  if (dist === undefined) {
    generator.fs.copy(
      generator.templatePath(src),
      generator.destinationPath(src)
    );
  } else {
    generator.fs.copy(
      generator.templatePath(src),
      generator.destinationPath(dist)
    );
  }
}
