var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJsPlugin = require('uglifyes-webpack-plugin')
var env = process.env.NODE_ENV

module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: (function () {
    if (env === 'production') {
      return {
        path: path.resolve(__dirname, './build/dist/'),
        publicPath: './dist/',
        filename: '[name]@[chunkhash].js',
        chunkFilename: '[name]@[chunkhash].min.js'
      }
    } else {
      return {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
      }
    }
  })(),
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {}
        // other vue-loader options go here
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      // test: /\.(png|jpg|gif|svg)$/,
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
      // loader: 'file-loader',
      loader: 'url-loader?limit=8192',
      options: {
        name: '[name].[ext]?[hash]'
      }
    },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      //   loader: 'file-loader'
      // },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  resolve: {
    alias: {
      'vue$': env === 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    inline: true,
    hot: true,
    disableHostCheck: true
  },
  performance: {
    hints: false
  },
  devtool: env === 'production' ? 'none' : '#eval-source-map'
}

if (env === 'production') {
  // module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: 'production'
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['vendor', 'manifest'],
    // }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './build/index.html'),
      template: 'output.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // new webpack.optimize.UglifyJsPlugin({
    new UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, './node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ])
}
