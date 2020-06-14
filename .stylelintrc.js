module.exports = {
  root: true,
  extends: ["stylelint-config-recommended", "stylelint-config-rational-order"],
  // add your custom config here (see: https://stylelint.io/user-guide/configuration)
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"]
      }
    ]
  }
}
