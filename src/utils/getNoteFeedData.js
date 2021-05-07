import { getApiData } from './getApiData'

export async function getNoteFeedData() {
  return await getApiData(
    'https://note.com/api/v2/creators/resistance_gowy/contents?kind=note'
  )
    .then((res) => {
      return res.data.data.contents
    })
    .then((result) => {
      return result.map((post) => {
        const { name, publishAt, key, eyecatch, hashtags } = post
        const hashtag =
          hashtags.length > 0
            ? hashtags.map((h) => h.hashtag.name.replace('#', ''))
            : []
        return {
          title: name,
          category: 'note',
          published: publishAt.split('T')[0],
          link: `https://note.com/resistance_gowy/n/${key}`,
          img: eyecatch,
          tags: hashtag,
        }
      })
    })
    .catch((err) => {
      console.log('note err is:' + err)
      return []
    })
}
