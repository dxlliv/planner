module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'eslint:recommended',
    '.eslintrc-auto-import.json',
    '.prettierrc.json',
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: [
    'vue'
  ],
  rules: {
    "no-undef": 0,
    "vue/max-attributes-per-line": 0,
    "vue/script-indent": ["error", 2, {
      "baseIndent": 0,
      "switchCase": 0,
      "ignores": []
    }]
  },
}
