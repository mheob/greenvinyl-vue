const globalConfig = require("../.stylelintrc")

module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-config-rational-order"],
  rules: {
    ...globalConfig.rules,
    "at-rule-no-unknown": [true, { ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"] }]
  }
}
