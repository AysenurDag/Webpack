const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    main: [
      "./src/scripts/script1.js",
      "./src/scripts/script2.js",
      "./src/styles/style1.css",
      "./src/styles/style2.css",
    ],
  },
  output: {
    filename: "script.min.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.min.css", // CSS çıktısı
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // JavaScript minifikasyonu
      new CssMinimizerPlugin(), // CSS minifikasyonu
    ],
  },
  mode: "production", // Üretim modu
};
