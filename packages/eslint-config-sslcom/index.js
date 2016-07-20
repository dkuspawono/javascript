module.exports = {
  extends: [
    'eslint-config-sslcom-base',
    'eslint-config-sslcom-base/rules/strict',
    './rules/react'
  ].map(require.resolve),
  rules: {}
};
