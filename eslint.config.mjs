import { defineConfig, globalIgnores } from 'eslint/config'
import tsParser from '@typescript-eslint/parser'
import _import from 'eslint-plugin-import'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import { fixupPluginRules } from '@eslint/compat'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  // TypeScriptファイル用の設定
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },

    extends: compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'next/core-web-vitals',
      'prettier',
    ),

    plugins: {
      import: fixupPluginRules(_import),
      '@typescript-eslint': typescriptEslint,
    },

    rules: {
      'no-empty-pattern': 1,
      'react/jsx-curly-brace-presence': 'error',

      '@typescript-eslint/no-misused-promises': [
        2,
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],

      // Next.jsのルールでパスがundefinedになる問題を解決
      '@next/next/no-html-link-for-pages': ['error', 'src/app/'],

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'type',
            'index',
          ],

          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],

          pathGroups: [
            {
              pattern: '@/utils/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/libs/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/hooks/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/const/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/types/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/styles/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/svgs/**',
              group: 'internal',
              position: 'before',
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    '**/prettier.config.js',
    '**/next.config.js',
    '**/tailwind.config.js',
    '**/tailwind.custom.js',
    '**/tsconfig.json',
    '**/postcss.config.js',
    '**/build/',
    '**/bin/',
    '**/obj/',
    '**/out/',
    '**/.next/',
    '**/scripts/',
    'eslint.config.mjs',
  ]),
])
