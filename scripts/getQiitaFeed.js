require('dotenv').config()
const axios = require('axios')

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
          published: post.created_at.split('T')[0],
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
