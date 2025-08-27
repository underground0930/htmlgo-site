// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import typescriptEslint from '@typescript-eslint/eslint-plugin'

export default defineConfig([
  // 基本的なJavaScript/TypeScriptファイル用の設定
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        // ブラウザ環境のグローバル変数
        console: 'readonly',
        process: 'readonly',
        fetch: 'readonly',
        location: 'readonly',
        document: 'readonly',
        window: 'readonly',
        // React環境のグローバル変数
        React: 'readonly',
        JSX: 'readonly',
      },
    },
    rules: {
      'no-empty-pattern': 1,
    },
  },
  // TypeScriptファイル専用の設定
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      '@typescript-eslint/no-misused-promises': [
        2,
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },
  globalIgnores([
    '**/prettier.config.js',
    '**/next.config.js',
    '**/tailwind.config.js',
    '**/tailwind.config.mjs',
    '**/tailwind.custom.js',
    '**/tailwind.custom.mjs',
    '**/tsconfig.json',
    '**/postcss.config.js',
    '**/postcss.config.mjs',
    '**/build/',
    '**/bin/',
    '**/obj/',
    '**/out/',
    '**/.next/',
    '**/scripts/',
    'eslint.config.mjs',
  ]),
])
