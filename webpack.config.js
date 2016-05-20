var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var path = require('path')

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
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test:   /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
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
    return [ autoprefixer];
  },
  devServer: {
    contentBase: './src',
    hot: true
  }
}
