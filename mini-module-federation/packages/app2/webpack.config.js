const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: false,
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        app1: 'app1@http://localhost:8081/dist/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    port: 8082,
    hot: true,
    open: true
  },
}