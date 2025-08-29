// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import typescriptEslint from '@typescript-eslint/eslint-plugin'

export default defineConfig([
  globalIgnores([
    '**/tsconfig.json',
    '**/build/',
    '**/bin/',
    '**/obj/',
    '**/out/',
    '**/.next/',
    '**/scripts/',
  ]),
  // ES Modules設定ファイル用の設定
  {
    files: ['*.config.mjs', 'prettier.config.mjs', '.lintstagedrc.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Node.js環境のグローバル変数
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',
      },
    },
  },
  // ブラウザ環境のJavaScript/TypeScriptファイル用の設定
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
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
  // TypeScriptファイル専用の設定（srcディレクトリ内のみ）
  {
    files: ['src/**/*.{ts,tsx}'],
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
      '@typescript-eslint/no-unused-vars': 1,
    },
  },
  // TypeScript宣言ファイル用の設定
  {
    files: ['next-env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  // Storybookファイル用の設定
  {
    files: ['.storybook/**/*.{js,ts}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  // Storybook専用の設定 - Storiesファイルのみに適用
  {
    files: ['src/**/*.stories.{js,ts,tsx}'],
    ...storybook.configs['flat/recommended'][0],
  },
])
