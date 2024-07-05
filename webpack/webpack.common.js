const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpack = require("webpack");

const BUILD_FOLDER_PATH = "../dist/";

module.exports = {
  entry: { bundle: path.resolve(__dirname, "../src/index.tsx") },
  output: {
    path: path.resolve(__dirname, BUILD_FOLDER_PATH),
    filename: "js/main[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
    publicPath: "/",
  },
  devtool: "source-map", // helps to debug in chrome in sources tab
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    port: 3005,
    open: true,
    hot: true, //hot reloading
    compress: true, // enable Z-zip compression
    historyApiFallback: true /*ensures that the server serves the entry
                                point of the SPA for all URLs, allowing the client-side
                                routing to manage the navigation within the application.
                              */,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // ts tsx js jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // i -> case insensitive
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "index.css"
    }),
    new HtmlWebpackPlugin({
      title: "Typescript",
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public/manifest.json"),
          to: path.resolve(__dirname, BUILD_FOLDER_PATH),
        },
        {
          from: path.resolve(__dirname, "../public/_redirects"),
          to: path.resolve(__dirname, BUILD_FOLDER_PATH),
        },
      ],
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_API_URL": JSON.stringify(
        ""
      ),
      "process.env.ANALYTICS_ID": JSON.stringify(
        ""
      ),
    }),
  ],
  resolve: { extensions: [".ts", ".js", ".tsx"] }, // we don't need to write App.tsx while importing
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: "vendor-react",
          chunks: "all",
        },
      },
    },
  },
};
