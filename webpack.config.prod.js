/* eslint-disable import/namespace */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/default */
import path from "path";
// eslint-disable-next-line import/namespace
// eslint-disable-next-line import/no-named-as-default-member
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "src/index"),
    vendor: path.resolve(__dirname, "src/vendor"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
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
