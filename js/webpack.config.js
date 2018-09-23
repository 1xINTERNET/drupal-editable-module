const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const eslintFormatter = require("react-dev-utils/eslintFormatter");
const pckg = require("./package.json");

const SCRIPT_NAME = process.env.npm_lifecycle_event;
const ENV = process.env.NODE_ENV;

const SRC_PATH = path.resolve(__dirname, "src");
const DIST_PATH = path.resolve(__dirname, "dist");

const common = {
  entry: [
    path.resolve(SRC_PATH, "polyfills.js"),
    path.resolve(SRC_PATH, "index.js")
  ],
  mode: "production",
  output: {
    path: DIST_PATH,
    filename: `${pckg.config.bundleName}.js`,
    library: pckg.config.namespace,
    libraryTarget: "umd"
  },

  resolve: {
    extensions: [".web.js", ".mjs", ".js", ".json", ".web.jsx", ".jsx"]
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: "pre",
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve("eslint")
            },
            loader: require.resolve("eslint-loader")
          }
        ],
        include: SRC_PATH
      },
      {
        test: /\.(js|jsx|mjs)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-syntax-export-default-from"
            ]
          }
        },
        include: SRC_PATH
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(ENV)
      }
    })
  ]
};

module.exports =
  SCRIPT_NAME === "start"
    ? merge(common, {
        mode: "development",
        devServer: {
          publicPath: process.env.JS_DIR,
          compress: true
        }
      })
    : merge(common, {
        output: {
          filename: `${pckg.config.bundleName}${
            ENV === "development" ? ".dev" : ""
          }.js`
        },
        devtool: "source-map",
        mode: "production",
        performance: {
          maxEntrypointSize: 512000,
          maxAssetSize: 512000
        },
        optimization: {
          minimize: true
        }
      });
