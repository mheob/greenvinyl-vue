module.exports = {
  root: true,
  extends: ["prettier", "plugin:prettier/recommended"],
  rules: {
    "max-len": ["error", { code: 120 }],
    "no-console": "off",
    quotes: ["error", "double"],
    semi: ["error", "never"]
  },
  plugins: ["prettier"]
}
