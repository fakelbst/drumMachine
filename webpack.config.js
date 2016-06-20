var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context : path.join(__dirname, './src'),
  entry: {
    jsx: './index.js',
    html: './index.html',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(html|jpg)$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.wav$/,
        loader: 'url-loader?mimetype=audio/wav'
      },
      {
        test:   /\.css$/,
        include: /src/,
        loaders: ['style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        exclude: /src/,
        loader: 'style!css'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: function () {
    return [ autoprefixer, precss];
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
     new CopyWebpackPlugin([
        { from: 'public/media', to: 'public/media' }
     ])
  ],
  devServer: {
    contentBase: './src',
    hot: true
  }
}
