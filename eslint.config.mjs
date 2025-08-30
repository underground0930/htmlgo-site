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

import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import storybook from 'eslint-plugin-storybook'
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
      '.lintstagedrc.mjs',
      '**/.storybook/main.ts',
      '**/.storybook/preview.ts',
      '**/.storybook/vitest.setup.ts',
    ],
  },

  // JavaScript推奨設定
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        location: 'readonly',
      },
    },
  },

  // TypeScript推奨設定
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
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
      globals: {
        React: 'readonly',
        process: 'readonly',
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        location: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      // TypeScript推奨設定をベースに使用
      ...typescriptEslint.configs.recommended.rules,

      // 軽微なカスタマイズのみ
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Next.js推奨設定（flatConfig形式使用）

  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      ...nextPlugin.flatConfig.recommended.plugins,
      ...nextPlugin.flatConfig.coreWebVitals.plugins,
      ...reactPlugin.configs.flat.recommended.plugins,
      ...reactHooksPlugin.configs['recommended-latest'].plugins,
    },
    rules: {
      ...nextPlugin.flatConfig.recommended.rules,
      ...nextPlugin.flatConfig.coreWebVitals.rules,
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactHooksPlugin.configs['recommended-latest'].rules,
    },
  },

  // Storybook推奨設定
  {
    files: ['**/*.stories.{js,jsx,ts,tsx}', '**/.storybook/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      storybook,
    },
    rules: {
      // Storybook推奨設定をそのまま使用
      ...storybook.configs.recommended.rules,
    },
  },

  // 全体の最小限カスタマイズ
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // 基本的なルールのみ
      'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
      'no-debugger': 'error',
      'prefer-const': 'error',
      'react/prop-types': 'off',
    },
  },

  // テストファイル用の緩和設定
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Prettier統合（最後に配置）
  eslintConfigPrettier,
]
