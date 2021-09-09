// const
import { ARTICLE_PER_PAGE } from 'const/index'

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
