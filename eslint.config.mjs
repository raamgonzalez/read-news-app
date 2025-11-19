import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactNative from "eslint-plugin-react-native";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["node_modules/", "dist/", "build/", ".expo/"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-native": pluginReactNative,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginReactNative.configs.all.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
      "react-native/no-inline-styles": "off",
      "react-native/no-color-literals": "off",
      "react/prop-types": "off",
      "react-native/no-raw-text": "off",
      "react-hooks/refs": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
