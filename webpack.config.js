const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
    overlay: true,
    hotOnly: true,
    // contentBase
    // proxy
    // headers
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo 2",
    }),
    // new webpack.HotModuleReplacementPlugin()
  ]
};
// hot replacement with NodeJS server https://www.npmjs.com/package/webpack-hot-middleware