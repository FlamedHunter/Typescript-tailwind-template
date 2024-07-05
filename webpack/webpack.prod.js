const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require('path');
module.exports = {
  mode: "production",
  devtool: "source-map", // recommended by CRA for prod,
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
      filename: "styles/[name][contenthash].css",
      // chunkFilename: "styles/[id].css",
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
