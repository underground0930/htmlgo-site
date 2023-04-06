export function isEmptyObject(obj: any) {
  if (obj === undefined || obj === null) return false
  return Object.keys(obj).length === 0 && obj.constructor === Object
}
