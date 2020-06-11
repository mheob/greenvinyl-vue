module.exports = {
  root: true,
  extends: ["prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "max-len": ["error", { code: 120 }],
    "no-console": "off",
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "space-before-function-paren": ["error", "never"]
  }
}
