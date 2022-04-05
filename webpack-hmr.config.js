const nodeExternals = require ('webpack-node-externals');
const { RunScriptWebpackPlugin } = require ('run-script-webpack-plugin');

/**
 * @typedef {import('webpack').Configuration} Configuration
 *
 * @callback NestWebpackConfig
 * @param {Configuration} options
 * @param {typeof import('webpack')} webpack
 * @returns {Configuration}
 * */

 /** @type{NestWebpackConfig} */
module.exports = (options, webpack) => {
  return {
    ...options,
    // mode: 'development',
    // optimization: {
    //   nodeEnv: undefined,
    // },
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output?.filename }),
    ],
  };
};

