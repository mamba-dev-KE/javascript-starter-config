import express from "express";
import path from "path";
import open from "open";
import chalk from "chalk";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${PORT}`);
  }
  console.log(chalk.green(`Server running on port ${PORT}`));
});
