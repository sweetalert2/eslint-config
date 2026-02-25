import { ESLint } from 'eslint'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default [
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
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
]

export const eslintFormat = async (files, config) => {
  const eslint = new ESLint({
    fix: true,
    overrideConfigFile: true,
    overrideConfig: config,
  })

  const results = await eslint.lintFiles(files)
  await ESLint.outputFixes(results)
}
