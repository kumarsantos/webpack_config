const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js", //entry point
  output: {
    filename: "bunder.js", //anyname
    path: path.resolve(__dirname, "dist"), //absolute path
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true, //this is for removed any other file created inside dist manually
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", //index.html base from public
    }),
    new MiniCssExtractPlugin(), //this is used for separate css file from html file in build folder,if we use this then have use its loader instead of style-loader
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //load .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", //this is loader to load .js files
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"], //this will help to load react code in any browser
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader", // or below to enable css module import
          //   { loader: "style-loader" },
          //   {
          //     loader: "css-loader",
          //     options: { modules: true },//this for enable or disable css module bydefault true
          //   },
        ], //css-loader will load the css file and style-loader will inject into js html file and it works right to left
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // "style-loader" // if we use below plugin then have to use its own loader
          MiniCssExtractPlugin.loader,
          ,
          "css-loader",
          "sass-loader",
        ], //sass-loader will load the sass file and style-loader will inject into js html file and it works right to left
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, //this is used for images
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, //this is used for fonts
        type: "asset/resource",
      },
    ],
  },
};
