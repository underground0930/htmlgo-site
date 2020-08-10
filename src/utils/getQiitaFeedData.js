import { getApiData } from './getApiData'

export async function getQiitaFeedData() {
  return await getApiData(
    'http://qiita.com/api/v2/items?page=1&per_page=100&query=user%3Aresistance_gowy&sort=rel'
  )
    .then((res) => {
      return res.data.map((post) => {
        return {
          category: 'qiita',
          title: post.title,
          published: post.created_at.split('T')[0],
          link: post.url,
          img: '',
          like: post.likes_count,
          tags: post.tags.map((tag) => tag.name),
        }
      })
    })
    .catch((err) => {
      console.log('qiita err is: ' + err)
      return []
    })
}
