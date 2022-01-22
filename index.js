module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'complexity': ['error', { max: 10 }],
    'no-console': [
      'error',
      { allow: ['warn', 'error', 'info'] },
    ],
    'prefer-template': 'error',
  },
}
