const axios = require('axios')
const xml2js = require('xml2js')
const dayjs = require('dayjs')

const getZennFeed = async function () {
  const parser = new xml2js.Parser({ trim: true })
  return await axios
    .get('https://zenn.dev/resistance_gowy/feed')
    .then((result) => {
      return parser.parseStringPromise(result.data)
    })
    .then((json) => {
      const posts = json.rss.channel[0].item
      return posts.map((post) => {
        const published = dayjs(post.pubDate[0]).format()

        return {
          title: post.title[0],
          category: 'zenn',
          published,
          link: post.link[0],
          img: post.enclosure[0].$.url,
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
