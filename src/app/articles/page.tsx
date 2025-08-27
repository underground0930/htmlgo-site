import { Metadata } from 'next'

import { ArticlesBody } from './components/articles-body'

import { setMetaData } from '@/utils/set-metadata'
import { fetchArticles } from './libs/fetch-articles'

const description = '色々なブログの記事のフィードをまとめたものです'

export default async function Articles() {
  const result = await fetchArticles({ params: { page: '1' } })
  return (
    <ArticlesBody articles={result.articles} page={result.page} pages={result.pages} />
  )
}

export const metadata: Metadata = {
  ...setMetaData({
    meta: {
      openGraph: {
        type: 'article',
      },
    },
    title: 'ARTICLES',
    description,
    url: '/articles',
    images: '/img/ogp-new.png',
  }),
}
