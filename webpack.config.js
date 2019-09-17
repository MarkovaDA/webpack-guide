const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    open: true,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
    }),
  ],
};