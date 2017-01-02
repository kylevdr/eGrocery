// npm i --save-dev webpack babel-core babel-loader babel-preset-react babel-preset-es2015
// for SCSS: npm i --save-dev node-sass sass-loader css-loader extract-text-webpack-plugin

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [

      ////////// JSX, ES6 //////////
      
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },

      ////////// UNCOMMENT TO INCLUDE STYLES IN BUNDLE.JS ////////// RUN npm i --save-dev style-loader //////////

      // {
      //   test: /\.scss$/,
      //   loaders: ['style', 'css', 'sass']
      // },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/main.css', {
      allChunks: true
    }),

    ////////// UNCOMMENT FOR PRODUCTION (also $ webpack -p) //////////

    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })

  ]  
};

module.exports = config;