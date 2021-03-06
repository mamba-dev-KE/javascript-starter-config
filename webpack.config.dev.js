/* eslint-disable import/namespace */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/default */
import path from "path";
// eslint-disable-next-line import/namespace
// eslint-disable-next-line import/no-named-as-default-member
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    // create HTML file that includes references to bundled JS
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
