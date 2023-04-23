////////////////////////////////////////////////////////////////////////////////////////////////////
// top
////////////////////////////////////////////////////////////////////////////////////////////////////

import { microcmsClient } from '@/libs'
import { MicroCMSResponse, WorkIndex, FeedObj } from '@/types'

export async function fetchTopList() {
  const articles = (
    await fetch('public/feed.json')
      .then((response) => response.json())
      .then((data: FeedObj[]) => data)
      .catch(() => [])
  ).slice(0, 4)

  const works: WorkIndex[] = await microcmsClient
    .get<MicroCMSResponse<WorkIndex[]>>({
      endpoint: 'works',
      queries: {
        limit: 3,
        fields: 'id,title,slug,date,publishedAt2,category,technology,slider,url',
      },
    })
    .then((result) => result.contents)
    .catch(() => [])

  return {
    works,
    articles,
  }
}
