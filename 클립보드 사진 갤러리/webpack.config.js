const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    port: 3000,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
