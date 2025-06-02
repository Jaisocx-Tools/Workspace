import { resolve } from "node:path";
import * as fs from "node:fs";
import { fileURLToPath } from "url";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import jaisocxPlugin from "./build_tools/EslintPlugins/EslintPluginJaisocxJS/src/index.js";


// Resolve paths for tsconfig in an ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");
const tsconfigPath = resolve(__dirname, "tsconfig.ESNext.json");

export default [
  {
    "ignores": ["node_modules/**"],
    "languageOptions": {
      "ecmaVersion": 2023,
      "sourceType": "module"
    },
    "rules": {
      "indent": ["error", 2, { "SwitchCase": 2 }],
      "no-mixed-spaces-and-tabs": "error",
      "quotes": ["warn", "double"],
      "no-trailing-spaces": ["error", { "skipBlankLines": false, "ignoreComments": false }]
    }
  },
  {
    "files": ["*.json"],
    "rules": {
      "quote-props": ["error", "always"],
      "quotes": ["error", "double"],
      "comma-dangle": [
        "error",
        {
          "arrays": "never",
          "objects": "never",
          "imports": "never",
          "exports": "never",
          "functions": "never"
        }
      ]
    }
  },
  {
    "files": ["src/**/*.ts", "www/**/src/**/*.ts"],
    "plugins": {
      "@typescript-eslint": typescriptEslintPlugin,
      "jaisocx": jaisocxPlugin
    },
    "languageOptions": {
      "parser": typescriptEslintParser,
      "parserOptions": {
        "ecmaVersion": 2023,
        "sourceType": "module",
        "project": tsconfigPath
      }
    },
    "rules": {
      "indent": ["error", 2, { "SwitchCase": 2 }],
      "no-mixed-spaces-and-tabs": "error",
      "jaisocx/multiline-args": ["error", { "args-chars-max-number": 10 }],
      "jaisocx/line-delimiters": [
        "error",
        {
          "class": { "lines": 5 },
          "methods": { "lines": 5 },
          "blocks": { "lines": 5 },
          "return": { "lines": 5 },
          "above_comments": { "lines": 2 },
          "minmax_newlines": { "lines": 1 }
        }
      ],
      "comma-dangle": [
        "error",
        {
          "arrays": "never",
          "objects": "never",
          "imports": "never",
          "exports": "never",
          "functions": "never"
        }
      ],
      "no-extra-semi": "error",
      "semi": ["error", "always"]
    }
  },
  {
    "files": ["www/**/transpiled/Simple/**/*.cjs"],
    "plugins": {
      "jaisocx": jaisocxPlugin
    },
    "rules": {
      "jaisocx/line-delimiters": [
        "error",
        {
          "methods": { "lines": 3 },
          "blocks": { "lines": 2 },
          "above_comments": { "lines": 2 },
          "minmax_newlines": { "lines": 1 }
        }
      ],
      "comma-dangle": [
        "error",
        {
          "arrays": "never",
          "objects": "never",
          "imports": "never",
          "exports": "never",
          "functions": "never"
        }
      ],
      "jaisocx/multiline-args": ["error", { "args-chars-max-number": 10 }],
      "jaisocx/class-statement-cleanup": "error",
      "semi": ["error", "always"],
      "no-extra-semi": "error"
    }
  }
];




