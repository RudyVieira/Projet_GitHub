import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Désactive la règle constructor-super si elle pose problème
      'constructor-super': 'off',
    },
  },
  pluginJs.configs.recommended,
];