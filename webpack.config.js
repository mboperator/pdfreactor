const path = require('path');

module.exports = {
  entry: './src/handler.js',
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest', 'react'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  node: {
    __dirname: true,
  },
  externals: {
    'aws-sdk': 'aws-sdk',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'handler',
    libraryTarget: 'commonjs2',
    filename: 'handler.js',
  },
};
