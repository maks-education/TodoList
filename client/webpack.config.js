const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

config = {
  entry: { main: './src/index.js' },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './src/bundle.js',
  },

  devServer: { 
    proxy: {
    '/': 'http://localhost:3000/',
  },
},

  module: {
    rules: [
      
      {
        test: /.vue$/,
        use: {
        loader: 'vue-loader',
          },    
      },

      {
        test: /.js$/,
        use: {
        loader: 'babel-loader',
          },    
      },

    
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          esModule: false,
        },
      }, 
      {
    test: /\.(font-awesome.min.css)$/i,
    loader: 'file-loader',
    options: {
      outputPath: 'fonts',
      esModule: false,
    },
  },
    ],
  },
 

resolve: {
alias: {
  'vue$': 'vue/dist/vue.esm.js',
  App: path.resolve(__dirname, 'src/')
  }
},

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
    }),

    new webpack.DefinePlugin({
      isProduction: process.env.NODE_ENV !== 'development',
      }),
  ],

  devtool: 'source-map',
};

module.exports = config;
