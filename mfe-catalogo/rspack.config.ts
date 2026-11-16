const rspack = require("@rspack/core");
const mfConfig = require("./module-federation.config");

module.exports = {
  entry: "./src/index.ts",
  target: "web",
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: { syntax: "typescript", tsx: true },
                transform: { react: { runtime: "automatic" } },
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        type: "css", // Rspack maneja el CSS de forma nativa
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
    new rspack.container.ModuleFederationPlugin(mfConfig),
  ],
};