import xml2js from 'xml2js'
import { getApiData } from './getApiData'

export async function getHatenaFeedData() {
  return await getApiData('http://resistance-underground.hateblo.jp/feed')
    .then((res) => {
      return xml2js.parseStringPromise(res.data, { trim: true })
    })
    .then((result) => {
      return result.feed.entry.map((post) => {
        let img = post.link[1].$.href
        img = img.includes('resistance_underground') ? img : false
        const tags = post.category
          ? post.category.map((cat) => cat.$.label)
          : []
        return {
          title: post.title[0],
          category: 'hatena',
          published: post.published[0].split('T')[0],
          link: post.link[0].$.href,
          img,
          tags,
        }
      })
    })
    .catch((err) => {
      console.log('hatena err is: ' + err)
      return []
    })
}
