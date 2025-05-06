import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);


// Directly reference the file
const jaisocxTooltipAliasConfig = require(path.resolve(
  __dirname,
  'node_modules/@jaisocx/tooltip/webpack.aliases.js'
)).default;

console.log(jaisocxTooltipAliasConfig);


export default {
  entry: './transpiled/ESNext/index.js', // Entry point for your TypeScript code
  output: {
    filename: 'example-tooltip-bundle.js', // Output bundle name
    path: path.resolve(__dirname, 'transpiled/webpack'), // Output directory
  },
  resolve: {
    alias: {
      ...jaisocxTooltipAliasConfig.resolve.alias,
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
