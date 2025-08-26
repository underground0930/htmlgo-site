////////////////////////////////////////////////////////////////////////////////////////////////////
// articles
////////////////////////////////////////////////////////////////////////////////////////////////////

import { ARTICLE_PER_PAGE } from '../constants/articles'
import { FeedObj } from '@/types/feed'

export async function fetchArticles({ params }: { params: { page?: string } }) {
  const page = params?.page ? Number(params.page) : 1

  const articles = (
    (await import('../../../../public/feed.json')) as { default: FeedObj[] }
  ).default.slice(ARTICLE_PER_PAGE * (page - 1), ARTICLE_PER_PAGE * page)

  return {
    articles,
    page,
    pages: Math.ceil(articles.length / ARTICLE_PER_PAGE),
  }
}
