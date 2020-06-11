const globalConfig = require("../.eslintrc")

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: false
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: false
    },
    sourceType: "module"
  },
  extends: [...globalConfig.extends, "eslint:recommended"],
  plugins: [...globalConfig.plugins],
  globals: {
    strapi: true
  },
  rules: {
    ...globalConfig.rules,
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    "no-console": 0
  }
}
