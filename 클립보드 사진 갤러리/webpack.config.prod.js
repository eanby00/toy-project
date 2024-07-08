const path = require("path");

module.exports = {
  mode: "production",
  devtool: "cheap-source-map",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/",
  },
};
