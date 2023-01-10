////////////////////////////////////////////////////////////////////////////////////////////////////
// works detail
////////////////////////////////////////////////////////////////////////////////////////////////////
// libs
import { microcmsClient } from '@/libs/microcmsClient'

export const fetchWorksDetail = async ({ slug }: { slug: string }) => {
  let pager: any[] = []

  const post = await microcmsClient
    .get({
      endpoint: 'works',
      queries: {
        filters: `slug[equals]${slug}`,
        fields: 'title,slug,url,url2,date,body,production_period,credit,category,technology,slider',
      },
    })
    .then((v) => {
      return v.contents.length ? v.contents[0] : null
    })
    .catch((err) => null)

  if (post !== null) {
    pager = await Promise.allSettled([
      microcmsClient
        .get({
          endpoint: 'works',
          queries: {
            limit: 1,
            orders: '-date',
            filters: `date[less_than]${post.date}`,
            fields: 'slug',
          },
        })
        .then((v) => {
          return v?.contents?.length ? v.contents[0] : null
        })
        .catch((err) => null),
      microcmsClient
        .get({
          endpoint: 'works',
          queries: {
            limit: 1,
            orders: 'date',
            filters: `date[greater_than]${post.date}`,
            fields: 'slug',
          },
        })
        .then((v) => {
          return v?.contents?.length ? v.contents[0] : null
        })
        .catch((err) => null),
    ]).then((results) =>
      results.map((r) => {
        if (r.status === 'fulfilled') {
          return r.value
        }
      }),
    )
  }
  return {
    post,
    prev: pager[0] ?? null,
    next: pager[1] ?? null,
  }
}
