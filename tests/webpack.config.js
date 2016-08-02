var config = require('config');
var path = require('path');
var webpack = require('webpack'); //eslint-disable-line no-unused-vars
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entries = require('./.tmp/testFiles.js');

new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

var config = {
  cache: true,
  context: process.cwd(),
  entry: entries,
  output: {
    path: './tests/client/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.css', '.styl']
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
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
    import: [path.join(process.cwd(), './config/style/index.styl')],
    use: [function() {
      return function(style) {
        style.define('$config', config, true);
      }
    }()]
  },
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true,
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};

if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'eval'; // This is not as dirty as it looks. It just generates source maps without being crazy slow.
}
else {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }))
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  }))
}


module.exports = config;
