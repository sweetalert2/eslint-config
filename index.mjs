import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      'no-console': [
        'error',
        { allow: ['warn', 'error', 'info'] },
      ],
      'prefer-template': 'error',
      'sort-imports': [
        'error',
        { ignoreDeclarationSort: true },
      ],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  }
)
