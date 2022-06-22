const MIN_SIZE = 10
const MAX_SIZE = 100
const INCREMENTS_NUM = 1

const fontSize = () => {
  const fontSizes = {}
  for (let i = MIN_SIZE; i <= MAX_SIZE; i += INCREMENTS_NUM) {
    fontSizes[`${i}px`] = `${i}px`
  }
  return fontSizes
}

module.exports = fontSize()
