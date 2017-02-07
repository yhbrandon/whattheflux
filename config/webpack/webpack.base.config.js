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
        fallback: 'style-loader',
        loader: [
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      })
    }, {
      test: /\.(png|jpg|gif|jpeg)$/,
      use: ['file-loader?name=img/img-[hash:6].[ext]']
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer],
        sassLoader: {
          context: '/',
          data: `@import "${config.paths.src}/core/theme/_config.scss";`,
          includePaths: [path.resolve(__dirname, 'src', 'scss')]
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: `${config.paths.src}/index.html`,
      hash: false,
      filename: 'index.html',
      inject: true
    }),
    new ExtractTextPlugin({ filename: 'main.css', allChunks: true }),
    new webpack.DefinePlugin(config.globals),
  ]
}

export default baseConfig
