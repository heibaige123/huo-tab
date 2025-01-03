const path = require('path');
const tsConfig = require('../../tsconfig.json');

function getResolveAlias() {
  const paths = tsConfig.compilerOptions.paths;
  const aliases = {};

  for (const key in paths) {
    const pathKey = key;
    const pathValue = paths[key][0].replace(/^\.\//, '');

    aliases[pathKey] = path.resolve(__dirname, `../../${pathValue}`);
  }

  return aliases;
}

module.exports = {
  getResolveAlias,
};
