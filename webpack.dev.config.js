const path = require('path')

const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  // entry: {
  //   main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.jsx']
  // },
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    './src/public/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },
  target: 'web',
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   // Enables hot reloading with webpack-dev-server
  //   // hot: true,
  // },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        // Loads the javascript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: 'html-loader',
        // use: [
        //   {
        //     loader: "html-loader",
        //     //options: { minimize: true }
        //   }
        // ]
      },
      { 
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
      }
    ]
  },
  plugins: [
    new ESLintPlugin({emitError: true, emitWarning: true}),

    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

    new HtmlWebPackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
