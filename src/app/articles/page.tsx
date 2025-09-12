/**
 * Articles一覧ページ（1ページ目）
 * 共通コンポーネントを使用してレンダリング
 */

import { Metadata } from 'next'
import { PageChild } from './components/page-child'
import { nextMetaData } from '@/libs/next-metadata'
import { fetchArticles } from './libs/fetch-articles'

const description = '色々なブログの記事のフィードをまとめたものです'

export default async function Page() {
  const result = await fetchArticles({ params: { page: '1' } })
  return <PageChild {...result} />
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
