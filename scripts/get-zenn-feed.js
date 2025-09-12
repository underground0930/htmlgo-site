const axios = require('axios')
const xml2js = require('xml2js')
const dayjs = require('dayjs')

const getZennFeed = async function () {
  const parser = new xml2js.Parser({ trim: true })

  return await axios
    .get('https://zenn.dev/resistance_gowy/feed')
    //    .get('https://zenn.dev/resistance_gowy/feed?include_scraps=1&all=1') // スクラップも含める場合
    .then((result) => parser.parseStringPromise(result.data))
    .then((json) => {
      const posts = json.rss.channel[0].item
      return posts.map((post) => {
        const published = dayjs(post.pubDate[0]).format()
        const enclosure = post?.enclosure
        return {
          title: post.title[0],
          category: 'zenn',
          published,
          link: post.link[0],
          img: enclosure ? post.enclosure[0].$.url : '/img/zenn.png',
          tags: [],
        }
      })
    })
    .catch((err) => {
      console.log('zenn err is: ' + err)
      return []
    })
}

module.exports = getZennFeed
