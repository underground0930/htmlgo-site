// libs
import { client } from 'libs/client'

// const
import { ARTICLE_PER_PAGE } from 'const/index'

////////////////////////////////////////////////////////////////////////////////////////////////////
// articles
////////////////////////////////////////////////////////////////////////////////////////////////////

export const articlesGetStaticPaths = async () => {
  let articles = await import('public/feed.json')
    .then((response) => {
      return response.default
    })
    .catch((err) => {
      console.log(err)
      return []
    })
  const pages = Math.ceil(articles.length / ARTICLE_PER_PAGE)
  const paths = [...new Array(pages)].map((_, i) => {
    return {
      params: {
        page: String(i + 1),
      },
    }
  })

  return { paths, fallback: false }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// works detail
////////////////////////////////////////////////////////////////////////////////////////////////////

export const worksDetailGetStaticPaths = async () => {
  const data: any = await client.get({ endpoint: 'works' })
  const paths = data.contents.map((content: { slug: string }) => {
    return { params: { slug: content.slug } }
  })
  return { paths, fallback: true }
}
