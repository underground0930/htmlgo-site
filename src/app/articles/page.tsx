import { ArticlesBody } from './components/articles-body'

import { setMetaData } from '@/utils'
import { fetchArticles } from '@/libs'

const description = '色々なブログの記事のフィードをまとめたものです'

export const metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'ARTICLES',
    description,
    url: '/articles',
    images: '/img/ogp_new.png',
  }),
}

export default async function Articles() {
  const result = await fetchArticles({ params: { page: '1' } })
  return (
    <ArticlesBody articles={result.articles} />
  )
}
