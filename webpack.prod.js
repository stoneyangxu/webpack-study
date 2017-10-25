const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HashedModuleIdsPlugin(),    
  ]
})