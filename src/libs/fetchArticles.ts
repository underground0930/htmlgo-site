////////////////////////////////////////////////////////////////////////////////////////////////////
// articles
////////////////////////////////////////////////////////////////////////////////////////////////////

// const
import { ARTICLE_PER_PAGE } from '@/const/index'

// types
import { FeedObj } from '@/types/feed'

export async function fetchArticles({ params }: { params: { page?: string } }) {
  const page = params?.page ? Number(params.page) : 1

  let articles: FeedObj[] = []

  try {
    articles = await import('public/feed.json').then((response) => response.default)
  } catch (e) {
    console.log(e)
  }

  articles = articles.slice(ARTICLE_PER_PAGE * (page - 1), ARTICLE_PER_PAGE * page)

  return {
    articles,
    page,
    pages: Math.ceil(articles.length / ARTICLE_PER_PAGE),
  }
}
