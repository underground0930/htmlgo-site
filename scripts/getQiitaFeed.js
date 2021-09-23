require('dotenv').config()
const axios = require('axios')
const dayjs = require('dayjs')

const getQiitaFeed = async function () {
  return axios
    .get('https://qiita.com/api/v2/authenticated_user/items?per_page=100', {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_API_KEY}`,
      },
    })
    .then((result) => {
      return result.data.map((post) => {
        return {
          category: 'qiita',
          title: post.title,
          published: dayjs(post.created_at).format(),
          link: post.url,
          img: '/img/qiita.png',
          tags: post.tags.map((tag) => tag.name),
        }
      })
    })
    .catch((err) => {
      console.log('qiita err is: ' + err)
      return []
    })
}

module.exports = getQiitaFeed
