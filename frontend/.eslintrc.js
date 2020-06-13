const globalConfig = require("../.eslintrc")

module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [...globalConfig.extends, "@nuxtjs/eslint-config-typescript", "prettier/vue", "plugin:nuxt/recommended"],
  plugins: [...globalConfig.plugins],
  rules: {
    ...globalConfig.rules
  }
}
