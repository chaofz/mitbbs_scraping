var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './src/entry.jsx',
  output: {
    path: path.join(__dirname, '/asset/js'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: { presets: ['react', 'es2015'] },
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
}
