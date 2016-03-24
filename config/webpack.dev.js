var webpack           = require('webpack');
var helpers           = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  baseUrl: '/',
  host: 'localhost',
  port: 8080,
  ENV: ENV,
  HMR: HMR
};

module.exports = {
  metadata: METADATA,
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'polyfills': './src/polyfills.ts',
    'main': './src/main.browser.ts',
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helpers.root('src'),
  },

  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'source-map-loader', exclude: [
        helpers.root('node_modules/rxjs'),
        helpers.root('node_modules/@angular2-material')
      ]}
    ],

    loaders: [
      {test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/]},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/, loader: 'raw-loader'},
      {test: /\.html$/, loader: 'raw-loader', exclude: [helpers.root('src/index.html')]},

    ]
  },

  plugins: [
    new ForkCheckerPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({name: ['main', 'polyfills'], minChunks: Infinity}),
    new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}]),
    new HtmlWebpackPlugin({template: 'src/index.html', chunksSortMode: 'none'}),
    new webpack.DefinePlugin({'ENV': JSON.stringify(METADATA.ENV), 'HMR': HMR})
  ],
  
  devServer: {
    port: METADATA.port,
    host: METADATA.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },

  node: {
    global: 'window',
    process: true,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
