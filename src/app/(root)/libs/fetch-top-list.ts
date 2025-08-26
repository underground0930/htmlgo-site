////////////////////////////////////////////////////////////////////////////////////////////////////
// top
////////////////////////////////////////////////////////////////////////////////////////////////////
import { MicroCMSListResponse } from 'microcms-js-sdk'

import { microcmsClient } from '@/libs/microcms-client'
import { WorkIndex } from '@/types/microcms'
import { FeedObj } from '@/types/feed'

export async function fetchTopList() {
  const articles = (
    (await import('../../../../public/feed.json')) as { default: FeedObj[] }
  ).default.slice(0, 8)

  const works = await microcmsClient
    .get<MicroCMSListResponse<WorkIndex>>({
      endpoint: 'works',
      queries: {
        limit: 3,
        fields:
          'id,title,slug,date,participationAt,publishedAt2,category,technology,slider,url',
      },
    })
    .then((result) => result.contents)
    .catch(() => [] as WorkIndex[])

  return {
    works,
    articles,
  }
}
