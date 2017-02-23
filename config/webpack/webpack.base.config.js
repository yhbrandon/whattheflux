import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import config from '../../config'

const baseConfig = {
  target: 'web',
  context: config.paths.src,
  output: {
    path: config.paths.dist,
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: [
      'node_modules',
      `${config.paths.src}`
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      include: [`${config.paths.src}`],
      exclude: /node_modules/,
    }, {
      test: /(\.scss|\.css)$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          {
            loader: 'css-loader',
            options: {
              context: '/',
              importLoaders: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: { plugins: () => [autoprefixer] }
          },
          {
            loader: 'sass-loader',
            options: {
              context: '/',
              data: `@import "${config.paths.src}/core/theme/_config.scss";`,
              includePaths: [path.resolve(__dirname, 'src', 'scss')],
              sourceMap: true
            }
          }
        ]
      })
    }, {
      test: /\.(png|jpg|gif|jpeg)$/,
      use: ['file-loader?name=img/img-[hash:6].[ext]']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${config.paths.src}/index.html`,
      hash: false,
      filename: 'index.html',
      inject: true
    }),
    new ExtractTextPlugin({ filename: "[name].[contenthash].css", allChunks: true }),
    new webpack.DefinePlugin(config.globals),
  ]
}

export default baseConfig
