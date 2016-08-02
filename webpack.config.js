var config = require('config');
var path = require('path');
var webpack = require('webpack'); //eslint-disable-line no-unused-vars
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
  cache: true,
  context: process.cwd(),
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 3001
  },
  entry: [
    './src/commons/app/index.styl',
    './src/commons/app/index.js'
  ],
  output: {
    path: './src/client/public/assets/',
    publicPath: config.get('server.assetsBasePath'),
    filename: 'bundle.js'
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
        loaders: ['react-hot', 'babel?cacheDirectory'],
        // Parse only app files! Without this it will go through
        // the entire project. In addition to being slow,
        // that will most likely result in an error.
        include: path.join(process.cwd(), './src')
      },
      {
        test: /\.styl$/,
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
        loader: 'style!css?sourceMap!stylus?sourceMap&sourceComments'
      }
    ]
  },
  stylus: {
    import: [path.join(process.cwd(), './config/style/index.styl')],
    use: [function() {
      return function(style) {
        style.define('$config', config, true);
      }
    }()]
  }
};

if (process.env.NODE_ENV !== 'production') {
  webpackConfig.devtool = 'eval'; // This is not as dirty as it looks. It just generates source maps without being crazy slow.
}

module.exports = webpackConfig;
