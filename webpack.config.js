const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const serverConfig = require("./webpack.devserver.config");
const styleConfig = require("./webpack.styling.config");

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/root.html"
      }),
    ],
  },
  styleConfig.loadCSS()
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  serverConfig.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};

// hot replacement with NodeJS server https://www.npmjs.com/package/webpack-hot-middleware