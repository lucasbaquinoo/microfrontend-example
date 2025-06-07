
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: { port: 3000 },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  output: {
    path: __dirname + "/build",
    filename: "[name].js",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_shell",
      remotes: {
        header: "header@https://mfe-header-lime.vercel.app//remoteEntry.js",
        dashboard: "dashboard@https://mfe-dashboard-bay.vercel.app//remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
