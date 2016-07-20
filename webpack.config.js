var path = require('path');
var webpack = require('webpack'); //eslint-disable-line no-unused-vars
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  cache: true,
  context: process.cwd(),
  entry: [
    // 'webpack-dev-server/client?http://localhost:3001',
    // 'webpack/hot/dev-server',
    './src/commons/app/index.js'
  ],
  output: {
    path: './src/client/public/assets/',
    filename: 'bundle.js'
    // publicPath: 'http://localhost:3001/assets/'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.css', '.styl']
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
    // new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need
        // something more custom, pass a path to it.
        // I.e., babel?cacheDirectory=<path>
        loaders: ['babel?cacheDirectory'],
        // Parse only app files! Without this it will go through
        // the entire project. In addition to being slow,
        // that will most likely result in an error.
        include: path.join(process.cwd(), './src')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      }
    ]
  },
  stylus: {
    import: [path.join(process.cwd(), './src/client/style/index.styl')]
  }
};

if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'eval'; // This is not as dirty as it looks. It just generates source maps without being crazy slow.
}

module.exports = config;
