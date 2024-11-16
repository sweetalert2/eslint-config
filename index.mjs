import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
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
      // TODO remove after https://github.com/eslint/eslint/issues/19134 is fixed
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      // TODO END
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  eslintConfigPrettier
)
