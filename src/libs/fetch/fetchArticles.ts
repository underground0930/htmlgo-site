////////////////////////////////////////////////////////////////////////////////////////////////////
// articles
////////////////////////////////////////////////////////////////////////////////////////////////////

import { ARTICLE_PER_PAGE } from '@/const'
import { FeedObj } from '@/types'

export async function fetchArticles({ params }: { params: { page?: string } }) {
  const page = params?.page ? Number(params.page) : 1

  const articles: FeedObj[] = (
    await fetch('public/feed.json')
      .then((response) => response.json())
      .then((data: FeedObj[]) => data)
      .catch(() => [])
  ).slice(ARTICLE_PER_PAGE * (page - 1), ARTICLE_PER_PAGE * page)

  return {
    articles,
    page,
    pages: Math.ceil(articles.length / ARTICLE_PER_PAGE),
  }
}
