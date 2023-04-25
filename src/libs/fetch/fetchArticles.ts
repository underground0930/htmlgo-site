////////////////////////////////////////////////////////////////////////////////////////////////////
// articles
////////////////////////////////////////////////////////////////////////////////////////////////////

import { ARTICLE_PER_PAGE } from '@/const'
import { FeedObj } from '@/types'

export async function fetchArticles({ params }: { params: { page?: string } }) {
  const page = params?.page ? Number(params.page) : 1

  const articles: FeedObj[] = (
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
  ).slice(ARTICLE_PER_PAGE * (page - 1), ARTICLE_PER_PAGE * page)

  return {
    articles,
    page,
    pages: Math.ceil(articles.length / ARTICLE_PER_PAGE),
  }
}
