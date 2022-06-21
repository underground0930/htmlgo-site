// const
import { ARTICLE_PER_PAGE, WORKS_PER_PAGE } from 'const/index'

// libs
import { client } from 'libs/client'

////////////////////////////////////////////////////////////////////////////////////////////////////
// top
////////////////////////////////////////////////////////////////////////////////////////////////////

export async function topGetStaticProps() {
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
    props: {
      works: works.contents,
      articles,
    },
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// articles
////////////////////////////////////////////////////////////////////////////////////////////////////

export async function articlesGetStaticProps({ params }: { params: { page: string } }) {
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
// works
////////////////////////////////////////////////////////////////////////////////////////////////////

export async function worksGetStaticProps() {
  const promises: any[] = [
    {
      endpoint: 'works',
      limit: WORKS_PER_PAGE,
      fields: 'id,title,slug,date,category,technology,slider',
    },
    { endpoint: 'works_category', limit: 20 },
    { endpoint: 'works_technology', limit: 20 },
  ].map((child) => {
    return client
      .get<ResponseType>({ endpoint: child.endpoint, queries: { limit: child.limit } })
      .catch((err) => {
        console.log('works err :' + err)
        return { contents: [] }
      })
  })

  const result = await Promise.allSettled(promises).then((results: any[]) => {
    return {
      works: results[0].value.contents,
      categories: results[1].value.contents,
      technologies: results[2].value.contents,
    }
  })

  return {
    props: result,
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// works detail
////////////////////////////////////////////////////////////////////////////////////////////////////

export const worksDetailGetStaticProps = async ({
  params,
  previewData,
}: {
  params: {
    slug: string
  }
  previewData?: {
    draftKey: string
  }
}) => {
  const { slug } = params
  const draftKey = previewData?.draftKey
  let pager: any[] = []

  const post = await client
    .get({
      endpoint: 'works',
      queries: {
        ...(draftKey ? { draftKey } : {}),
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
        .catch((err) => null),
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
        .catch((err) => null),
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
