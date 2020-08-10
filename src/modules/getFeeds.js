import { getQiitaFeedData } from '../utils/getQiitaFeedData'
import { getHatenaFeedData } from '../utils/getHatenaFeedData'
import { getNoteFeedData } from '../utils/getNoteFeedData'

module.exports = async function () {
  // 各フィードを１つにまとめる
  const results = await Promise.allSettled([
    getNoteFeedData(),
    getHatenaFeedData(),
    getQiitaFeedData(),
  ]).then((results) => {
    return results
      .reduce((prev, next) => {
        return prev.concat(next.value)
      }, [])
      .sort((a, b) => {
        return a.published < b.published ? 1 : -1
      })
  })

  // jsonを生成する
  this.options.build.plugins.push({
    apply(compiler) {
      compiler.hooks.emit.tap('jsonBuild', (compilation) => {
        compilation.assets[`json/article.json`] = {
          source: () => JSON.stringify(results),
          size: () => {},
        }
        return true
      })
    },
  })
}
