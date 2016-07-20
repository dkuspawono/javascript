module.exports = {
  extends: [
    'eslint-config-sslcom-base',
    'eslint-config-sslcom-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
