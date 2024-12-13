import js from "@eslint/js";
import globals from "globals";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import vue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  // 通用配置
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  // JavaScript 基本規則
  js.configs.recommended,
  // TypeScript 配置
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      ...ts.configs.recommended.rules,
    },
  },
  
  // Vue 配置
  {
    files: ["**/*.vue"],
    plugins: {
      vue,
      prettier
    },
    languageOptions: {
      parser: "vue-eslint-parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: tsParser,
      },
    },
    rules: {
      ...vue.configs["flat/essential"].rules,
      "prettier/prettier": "error",
    },
  },
];

export default config;
