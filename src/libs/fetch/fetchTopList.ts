////////////////////////////////////////////////////////////////////////////////////////////////////
// top
////////////////////////////////////////////////////////////////////////////////////////////////////

import { microcmsClient } from '@/libs'
import { MicroCMSResponse, WorkIndex, FeedObj } from '@/types'

export async function fetchTopList() {
  const articles = (
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/feed.json`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(response.statusText)
      })
      .then((data: FeedObj[]) => {
        return data
      })
      .catch((error: unknown) => {
        console.error(error)
        return []
      })
  ).slice(0, 8)

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
