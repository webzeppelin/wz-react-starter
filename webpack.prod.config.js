const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = require('./webpack.config.js');    // inherit from the main config file

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  path.resolve(__dirname, 'src/index.js'),
];

// production env
module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    }
  })
);

// compress the js file
module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compressor: {
      warnings: false
    }
  })
);

// export css to a separate file
module.exports.module.rules[1] = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('css-loader!sass-loader')
};

module.exports.plugins.push(
  new ExtractTextPlugin('../css/main.css')
);
