module.exports = {
  extends: [
    './base',
    'eslint-config-sslcom-base/rules/strict',
    './rules/react'
  ].map(require.resolve),
  rules: {}
}
