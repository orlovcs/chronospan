import pluginJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import pluginJest from "eslint-plugin-jest";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        module: true,
      },
      sourceType: "module",
      parser: tsParser,
    },
  },
  {
    ignores: ["dist/"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
