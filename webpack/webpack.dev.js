const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map", // recommended by CRA,
  module: {
    rules: [
      
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
          ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "index.css"
    }),
  new webpack.DefinePlugin({
    "process.env.REACT_APP_BASENAME": JSON.stringify("/"),
    "process.env.REACT_APP_API_URL": JSON.stringify(
      ""
    ),
    "process.env.ANALYTICS_ID": JSON.stringify(
        ""
      ),
  }),
  ],
  output: {
    publicPath: "/",
  },
};
