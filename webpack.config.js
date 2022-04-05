/**
 * @typedef {import('webpack').Configuration} Configuration
 *
 * @callback NestWebpackConfig
 * @param {Configuration} options
 * @param {typeof import('webpack')} webpack
 * @returns {Configuration}
 * */

 /** @type{NestWebpackConfig} */
module.exports = (options, _webpack) => {
  return {
    ...options,
    mode: 'production',
    optimization: {
      nodeEnv: undefined,
    },
  };
};
