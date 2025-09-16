/**
 * Articles一覧ページ（1ページ目）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { PageContent } from './components/page-content'
import { nextMetaData } from '@/libs/next-metadata'
import { fetchArticlesList } from '@/features/articles/api/fetch-articles'

const description = '色々なブログの記事のフィードをまとめたものです'

export default async function Page() {
  const result = await fetchArticlesList({})
  return <PageContent {...result} />
}

export const metadata: Metadata = {
  ...nextMetaData({
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
