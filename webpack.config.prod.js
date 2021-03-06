import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,

  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },

  target: 'web',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),

    // Eliminate duplicate packages when generating bundles
    new webpack.optimize.DedupePlugin(),

    // MinifyJS
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
