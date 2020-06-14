module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "max-len": ["error", { code: 120 }],
    "no-console": "off",
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "space-before-function-paren": ["error", "never"]
  }
}
