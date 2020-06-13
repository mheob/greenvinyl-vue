const globalConfig = require("../.eslintrc")

module.exports = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: { parser: "babel-eslint" },
  extends: [...globalConfig.extends, "@nuxtjs", "prettier/vue", "plugin:nuxt/recommended"],
  plugins: [...globalConfig.plugins],
  rules: { ...globalConfig.rules }
}
