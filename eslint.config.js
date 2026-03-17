import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
  // Configuración recomendada de ESLint
  js.configs.recommended,
  // Desactiva reglas que choquen con Prettier
  prettierConfig,
  {
    files: ["src/**/*.js"],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es6,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },
    rules: {
      "prettier/prettier": "error",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      camelcase: "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    },
  },
];
