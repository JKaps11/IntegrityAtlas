import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      // Required for React Compiler compatibility
      'react/jsx-no-useless-fragment': 'error',
      'react/self-closing-comp': 'error',
      // COMMAS & SEMIS
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["error", "always"],

      // QUOTE STYLE
      "quotes": ["error", "single", { avoidEscape: true }],

      // SPACING
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "arrow-spacing": ["error", { before: true, after: true }],

      // INDENTATION
      "indent": ["error", 2, { SwitchCase: 1 }],

      // WRAPPING & LINES
      "max-len": ["warn", { code: 80, ignoreStrings: true, ignoreComments: true }],

      // IMPORT ORDER (optional)
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always"
      }],
      // Optional but encouraged
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // NO UNNEEDED PARENS
      "no-extra-parens": ["error", "all", { ignoreJSX: "multi-line" }]
    }
  }
];

export default eslintConfig;
