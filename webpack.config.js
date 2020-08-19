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
        use: 'css-loader',
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
      'config': path.join(__dirname, 'config.js'),
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

  mode: process.env.NODE_ENV || 'production',

  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'none',

  devServer: {
    host: '0.0.0.0',

    port: config.port,
    // proxy: {
    //   '/api': 'http://localhost:44444'
    // },
    
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    
    historyApiFallback: true,
  },
})
