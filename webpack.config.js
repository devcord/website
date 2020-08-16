const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = require('./config')

module.exports = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
    }),

    new VueLoaderPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: '', 
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
          },
          {
            use: ['pug-loader']
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|webp|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(md)$/,
        use: 'raw-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.svg$/,
        use: 'vue-svg-loader'
      },
    ],
  },

  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      'resources': path.join(__dirname, 'resources'),
      '~assets': path.join(__dirname, 'src', 'assets'),
      '~mixins': path.join(__dirname, 'src', 'scss', 'mixins'),
    },
    extensions: ['.js', '.vue'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
  },

  mode: process.env.NODE_ENV,

  devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',

  devServer: {
    port: config.port,
    historyApiFallback: true,
  },
})
