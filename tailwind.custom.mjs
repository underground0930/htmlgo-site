// Tailwind CSS 4用のカスタム設定
// zIndex、fontSize、spacingのユーティリティ関数

const zIndex = () => {
  const MIN = 0
  const MAX = 100
  const INCREMENTS_NUM = 1
  const s = {}
  for (let i = MIN; i <= MAX; i += INCREMENTS_NUM) {
    s[`${i}`] = `${i}`
  }
  return s
}

const spacing = () => {
  const MIN = 0
  const MAX = 100
  const INCREMENTS_NUM = 1
  const s = {}
  for (let i = MIN; i <= MAX; i += INCREMENTS_NUM) {
    s[`${i}px`] = `${i}px`
  }
  return s
}

const fontSize = () => {
  const MIN = 10
  const MAX = 100
  const INCREMENTS_NUM = 1
  const s = {}
  for (let i = MIN; i <= MAX; i += INCREMENTS_NUM) {
    s[`${i}px`] = `${i}px`
  }
  return s
}

export {
  zIndex,
  fontSize,
  spacing,
}
