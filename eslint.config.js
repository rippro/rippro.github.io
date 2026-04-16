const nextCoreWebVitals = require('eslint-config-next/core-web-vitals');

module.exports = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**']
  },
  ...nextCoreWebVitals,
  {
    rules: {
      '@next/next/no-img-element': 'off'
    }
  }
];
