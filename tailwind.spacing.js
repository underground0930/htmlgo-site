const MIN_SIZE = 0
const MAX_SIZE = 100
const INCREMENTS_NUM = 1

const spacing = () => {
  const s = {}
  for (let i = MIN_SIZE; i <= MAX_SIZE; i += INCREMENTS_NUM) {
    s[`${i}px`] = `${i}px`
  }
  return s
}

module.exports = spacing()
