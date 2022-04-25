// const
import { ARTICLE_PER_PAGE } from 'const/index'

// libs
import { client } from 'libs/client'

////////////////////////////////////////////////////////////////////////////////////////////////////
// articles
////////////////////////////////////////////////////////////////////////////////////////////////////

export async function articlesGetStaticProps(params: { page: string }) {
  const page = params?.page ? Number(params.page) : 1

  let articles = await import('public/feed.json')
    .then((response) => {
      return response.default
    })
    .catch((err) => {
      console.log(err)
      return []
    })

  let total = articles.length
  articles = articles.slice(ARTICLE_PER_PAGE * (page - 1), ARTICLE_PER_PAGE * page)

  return {
    props: {
      articles,
      page,
      pages: Math.ceil(total / ARTICLE_PER_PAGE),
    },
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// works detail
////////////////////////////////////////////////////////////////////////////////////////////////////

export const worksDetailGetStaticProps = async ({
  params,
}: {
  params: {
    slug: string
  }
}) => {
  const slug = params.slug
  let pager: any[] = []

  const post = await client
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
    .catch((err) => {
      return null
    })

  if (post !== null) {
    pager = await Promise.allSettled([
      client
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
        .catch((err) => {
          return null
        }),
      client
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
        .catch((err) => {
          return null
        }),
    ]).then((results) =>
      results.map((r) => {
        if (r.status === 'fulfilled') {
          return r.value
        }
      })
    )
  }
  return {
    props: {
      post,
      prev: pager[0] ?? null,
      next: pager[1] ?? null,
    },
  }
}
