import * as path from "node:path";
import { fileURLToPath } from "node:url";
// import * as pathBrowserify from "path-browserify";
import postcssUrl from "postcss-url";

import { WebpackAliases as CleanStartWebpackAliases } from '@jaisocx/css-clean-start/WebpackAliases';
import { WebpackAliases as TooltipWebpackAliases } from '@jaisocx/tooltip/WebpackAliases';


let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

console.info(path.resolve(__dirname));
console.log( TooltipWebpackAliases );


export default {
  entry: './transpiled/ESNext/index.js', // Entry point for your TypeScript code
  output: {
    filename: 'example-built-with-webpack-bundle.js', // Output bundle name
    path: path.resolve(__dirname, 'transpiled/webpack'), 
  },
  resolve: {
    alias: {
      ...CleanStartWebpackAliases.resolve.alias,
      ...TooltipWebpackAliases.resolve.alias,
    },
    extensions: [".js", ".json", ".css"],
    fallback: {
      "path": "path-browserify", 
    },
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
                  postcssUrl({
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
          filename: 'MediaAndStyles/fonts/[name][ext]', // Define output path for MediaAndStyles
        },
      },
      {
        test: /\.(webp|png|jpg|gif|svg)$/,
        type: 'asset/resource', // Use Webpack 5's native asset modules for images
        generator: {
          filename: 'MediaAndStyles/images/[name][ext]', // Define output path for MediaAndStyles
        },
      },
    ],
  },
  mode: 'production', // Set mode (development | production)
};
