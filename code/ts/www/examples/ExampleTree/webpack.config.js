import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
//import jaisocxTreeAliasConfig from '@jaisocx/tree/webpack.aliases.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Directly reference the file
const jaisocxTreeAliasConfig = require(path.resolve(
  __dirname,
  'node_modules/@jaisocx/tree/webpack.aliases.js'
)).default;

console.log(jaisocxTreeAliasConfig);



export default {
  entry: './build/ESNext/index.js', // Entry point for your TypeScript code
  output: {
    filename: 'example-tree-bundle.js', // Output bundle name
    path: path.resolve(__dirname, 'build/webpack'), // Output directory
  },
  resolve: {
    alias: {
      ...jaisocxTreeAliasConfig.resolve.alias,
    },
    extensions: ['.js'], // File extensions to resolve
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
