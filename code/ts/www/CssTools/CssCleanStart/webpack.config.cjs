// this webpack config is to build this package with webpack.
// that is why the webpack.aliases.cjs is referenced locally.

// when using aliases from other jaisocx tool,
// I use like in code/ts/www/examples/ExampleCssCleanStartWebpack:
// const WebpackAliases = require("@jaisocx/css-clean-start/WebpackAliases"); // ✅ Import alias file using CommonJS


const path = require("path");
const WebpackAliases = require("build/CommonJS/webpack.aliases.cjs"); // ✅ Import alias file using CommonJS

module.exports = {
  resolve: {
    alias: {
      ...WebpackAliases.resolve.alias, // ✅ Use the alias dynamically
    },
    extensions: [".ts", ".tsx", ".js", ".json", ".css"],
    fallback: {
      "path": require.resolve("path-browserify"),
    },
  },
  entry: './build/CommonJS/index.js', // Entry point for your TypeScript code
  output: {
    filename: 'example-tree-bundle.js', // Output bundle name
    path: path.resolve(__dirname, 'build/webpack'), 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-url')({
                    url: 'rebase', // Rewrite URLs relative to the final CSS file
                  }),
                ],
              },
            },
          },
        ], // Use these loaders for CSS files
      },
      {
        test: /\.(webp|png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource', // Handles images and fonts
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: 'asset/resource', // Use Webpack 5's native asset modules for images
        generator: {
          filename: 'assets/fonts/[name][ext]', // Define output path for assets
        },
      },
      {
        test: /\.(webp|png|jpg|gif|svg)$/,
        type: 'asset/resource', // Use Webpack 5's native asset modules for images
        generator: {
          filename: 'assets/images/[name][ext]', // Define output path for assets
        },
      },
    ],
  },
  mode: 'production', // Set mode (development | production)
};
