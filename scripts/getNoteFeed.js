const axios = require('axios')
const dayjs = require('dayjs')

const getNoteFeed = async function () {
  return axios
    .get('https://note.com/api/v2/creators/resistance_gowy/contents?kind=note')
    .then((result) => {
      return result.data.data.contents
    })
    .then((result) => {
      return result.map((post) => {
        const { name, publishAt, key, eyecatch, hashtags } = post
        const hashtag = hashtags.length > 0 ? hashtags.map((h) => h.hashtag.name.replace('#', '')) : []
        return {
          title: name,
          category: 'note',
          published: dayjs(publishAt).format(),
          link: `https://note.com/resistance_gowy/n/${key}`,
          img: eyecatch ?? '/img/note.png',
          tags: hashtag,
        }
      })
    })
    .catch((err) => {
      console.log('note err is:' + err)
      return []
    })
}

module.exports = getNoteFeed
