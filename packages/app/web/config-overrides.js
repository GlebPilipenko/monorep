module.exports = function override(config) {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'ts-loader',
  });

  return config;
};
