const path = require('path');

const nodeModulesPaths = [path.resolve(path.join(__dirname, './node_modules'))];

const watchFolders = [
  path.resolve(`${__dirname}/../../shared/`),
  path.resolve(`${__dirname}/../../../node_modules`),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    nodeModulesPaths,
  },
  watchFolders,
};
