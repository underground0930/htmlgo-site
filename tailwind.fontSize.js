const MIN_SIZE = 10
const MAX_SIZE = 100
const INCREMENTS_NUM = 1

const fontSize = () => {
  const f = {}
  for (let i = MIN_SIZE; i <= MAX_SIZE; i += INCREMENTS_NUM) {
    f[`${i}px`] = `${i}px`
  }
  return f
}

module.exports = fontSize()
