import js from "@eslint/js";
import global from "globals";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...global.browser,
      },
    },
  },
  {
    ignores: ["webpack.config.js", "webpack.config.prod.js"],
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
