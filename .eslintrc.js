module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    ".eslintrc-auto-import.json",
    "prettier",
    ".prettierrc.json"
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "prettier"],
  rules: {
    "no-undef": 0,
    "vue/max-attributes-per-line": 0,
  }
}
