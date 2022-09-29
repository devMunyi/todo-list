const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // Tweak this to match your GitHub project name
    publicPath: '/todo-list/',
  },

  devServer: {
    static: './dist',
    hot: false, // optional, but you must not set both hot and liveReload to true
    liveReload: true, // allow  browser automatic refresh on file changes
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // allow muliple entry into a single html page,
  // but in this case i only hav one entry though at line 6
  // so its here for future reference
  optimization: {
    runtimeChunk: 'single',
  },
};
