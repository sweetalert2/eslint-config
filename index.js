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
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'complexity': ['error', { max: 10 }],
    'no-console': [
      'error',
      { allow: ['warn', 'error', 'info'] },
    ],
    'no-use-before-define': 0,
    'no-var': ['error'],
    'prefer-template': 'error',
  },
}
