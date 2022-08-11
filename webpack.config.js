const path = require('path');
// const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  optimization: {
    usedExports: true,
  },
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  // plugins: [new CompressionPlugin()],
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.svg$/,
        type: "['@svgr/webpack']",
      },
      {
        test: /.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
};

