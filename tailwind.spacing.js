const MIN_SIZE = 1
const MAX_SIZE = 100
const INCREMENTS_NUM = 1

const spacing = () => {
  const fontSizes = {}
  for (let i = MIN_SIZE; i <= MAX_SIZE; i += INCREMENTS_NUM) {
    fontSizes[`${i}px`] = `${i}px`
  }
  return fontSizes
}

module.exports = spacing()
