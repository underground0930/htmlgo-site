////////////////////////////////////////////////////////////////////////////////////////////////////
// top
////////////////////////////////////////////////////////////////////////////////////////////////////

// libs
import { microcmsClient } from '@/libs/microcmsClient'

// type
import { MicroCMSResponse, WorkIndex } from '@/types/microcms'

export async function fetchTopList() {
  const articles = (
    await import('public/feed.json')
      .then((response) => response.default)
      .catch((err) => [])
  ).slice(0, 4)

  const works: WorkIndex[] = await microcmsClient
    .get<MicroCMSResponse<WorkIndex[]>>({
      endpoint: 'works',
      queries: {
        limit: 3,
        fields: 'id,title,slug,date,publishedAt2,category,technology,slider',
      },
    })
    .then((result) => result.contents)
    .catch((err) => [])

  return {
    works,
    articles,
  }
}
