const path = require("path");

module.exports = {
  entry: "./src/mogcha.js",
  output: {
    filename: "mogcha.bundle.js",
    path: path.resolve(__dirname + "/dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './.babelrc'
          }
        }
      }
    ]
  },
  mode: "none"
};