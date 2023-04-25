////////////////////////////////////////////////////////////////////////////////////////////////////
// top
////////////////////////////////////////////////////////////////////////////////////////////////////
import { MicroCMSListResponse } from 'microcms-js-sdk'

import { microcmsClient } from '@/libs'
import { WorkIndex, FeedObj } from '@/types'

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

  const works = await microcmsClient

    .get<MicroCMSListResponse<WorkIndex>>({
      endpoint: 'works',
      queries: {
        limit: 3,
        fields: 'id,title,slug,date,publishedAt2,category,technology,slider,url',
      },
    })
    .then((result) => result.contents)
    .catch(() => [] as WorkIndex[])

  return {
    works,
    articles,
  }
}
