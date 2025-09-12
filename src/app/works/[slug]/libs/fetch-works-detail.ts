////////////////////////////////////////////////////////////////////////////////////////////////////
// works detail
////////////////////////////////////////////////////////////////////////////////////////////////////
import { MicroCMSListResponse } from 'microcms-js-sdk'

import type { WorkDetail } from '@/features/works'
import { microcmsClient } from '@/libs/microcms-client'

export const fetchWorksDetail = async ({ slug }: { slug: string }) => {
  let pager: ({ slug: string } | null)[] = []

  const post = await microcmsClient
    .get<MicroCMSListResponse<WorkDetail>>({
      endpoint: 'works',
      queries: {
        filters: `slug[equals]${slug}`,
        fields:
          'title,slug,url,url2,date,publishedAt2,participationAt,body,production_period,credit,category,technology,slider',
      },
    })
    .then((v) => (v.contents.length ? v.contents[0] : null))
    .catch(() => null)

  if (post !== null) {
    pager = await Promise.allSettled([
      microcmsClient
        .get<MicroCMSListResponse<{ slug: string }>>({
          endpoint: 'works',
          queries: {
            limit: 1,
            orders: '-date',
            filters: `date[less_than]${post.date}`,
            fields: 'slug',
          },
        })
        .then((v) => (v.contents.length ? v.contents[0] : null)),
      microcmsClient
        .get<MicroCMSListResponse<{ slug: string }>>({
          endpoint: 'works',
          queries: {
            limit: 1,
            orders: 'date',
            filters: `date[greater_than]${post.date}`,
            fields: 'slug',
          },
        })
        .then((v) => (v.contents.length ? v.contents[0] : null)),
    ]).then((results) =>
      results.map((r) => {
        return r.status === 'fulfilled' ? r.value : null
      }),
    )
  }
  return {
    post,
    prev: pager[0] ?? null,
    next: pager[1] ?? null,
  }
}
