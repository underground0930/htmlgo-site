/**
 * lint-staged設定ファイル
 * Gitコミット前に自動的にlintとフォーマットを実行する
 *
 * @description
 * - TypeScriptファイルの型チェック
 * - ESLintによるコード品質チェックと自動修正
 * - Prettierによるコードフォーマット
 */

import path from 'path'

/**
 * ESLintコマンドを構築する
 * @param {string[]} filenames - 対象ファイル名の配列
 * @returns {string} ESLintコマンド文字列
 */
const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`

export default {
  '*.{ts,tsx}': [
    // TypeScriptの型チェック
    () => 'tsc --incremental false --noEmit --pretty false',
    // ESLintによるコード品質チェックと自動修正
    buildEslintCommand,
    // Prettierによるコードフォーマット
    'prettier --write',
  ],
}
