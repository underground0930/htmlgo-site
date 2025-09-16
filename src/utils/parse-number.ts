/**
 * ページ番号用の安全なパース関数
 * 不正な値の場合は1を返す
 */

/**
 * ページ番号を安全にパースする
 * @param value - パースする値
 * @returns 1以上の数値（デフォルト: 1）
 */
export function parsePageNumber(value: string | number | undefined | null): number {
  const parsed = Number(value)
  return parsed >= 1 ? parsed : 1
}
