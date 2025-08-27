/**
 * オブジェクトが空かどうかを判定する
 * @param obj オブジェクト
 * @returns {boolean} 空かどうか
 */

export function isEmptyObject(obj: unknown) {
  if (obj === undefined || obj === null) return false
  return Object.keys(obj).length === 0 && obj.constructor === Object
}
