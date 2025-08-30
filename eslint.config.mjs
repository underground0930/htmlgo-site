/**
 * ESLint設定ファイル - Next.js 15 & ESLint 9対応 (Recommended Configuration)
 *
 * @description 推奨設定をベースにしたNext.js 15とESLint 9の安全で確実な設定
 * @features
 *   - TypeScript推奨設定
 *   - Next.js推奨設定
 *   - Storybook推奨設定
 *   - Prettier統合
 *
 * @see https://nextjs.org/docs/app/building-your-application/configuring/eslint
 * @see https://typescript-eslint.io/getting-started
 */

import globals from 'globals'
import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import storybookPlugin from 'eslint-plugin-storybook'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // グローバル除外設定
  {
    ignores: [
      '**/.next/',
      '**/dist/',
      '**/build/',
      '**/out/',
      '**/node_modules/',
      '**/tsconfig.json',
      '**/next-env.d.ts',
      '**/scripts/',
      '**/*.min.js',
      '**/coverage/',
      '*.config.{mjs,mts}',
      '.lintstagedrc.mjs',
      '**/.storybook/main.ts',
      '**/.storybook/preview.ts',
      '**/.storybook/vitest.setup.ts',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      ...eslint.configs.recommended.plugins,
      ...reactPlugin.configs.flat.recommended.plugins,
      ...reactHooksPlugin.configs['recommended-latest'].plugins,
      ...nextPlugin.flatConfig.recommended.plugins,
      ...nextPlugin.flatConfig.coreWebVitals.plugins,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules, // これがないとReactのimportが必要
      ...reactHooksPlugin.configs['recommended-latest'].rules,
      ...nextPlugin.flatConfig.recommended.rules,
      ...nextPlugin.flatConfig.coreWebVitals.rules,
    },
    settings: {
      react: {
        version: 'detect', // jsx-runtimeで必要
      },
    },
  },
  ...tseslint.configs['flat/recommended-type-checked'],
  ...storybookPlugin.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  eslintConfigPrettier,
]
