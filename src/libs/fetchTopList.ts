////////////////////////////////////////////////////////////////////////////////////////////////////
// top
////////////////////////////////////////////////////////////////////////////////////////////////////

// libs
import { client } from '@/libs/client'

export async function fetchTopList() {
  const articles = (
    await import('public/feed.json')
      .then((response) => {
        return response.default
      })
      .catch((err) => {
        console.log(err)
        return []
      })
  ).slice(0, 4)

  const works: any = await client
    .get({
      endpoint: 'works',
      queries: { limit: 3, fields: 'id,title,slug,date,category,technology,slider' },
    })
    .catch((err) => {
      console.log('top err :' + err)
      return { contents: [] }
    })

  return {
    works: works.contents,
    articles,
  }
}
